"use client";

import { useEffect, useRef } from "react";

/**
 * Homepage hero "number-logo" finale.
 *
 * A direct port of the inline <script> that ships inside the reference
 * document's hero (`ref/TRAVO_Final_August_2026 (1).html`). The maths, the
 * CONFIG knobs, the palette and the timing are kept exactly as the client
 * wrote them; only the plumbing changed:
 *   - element lookups go through refs instead of getElementById,
 *   - the rAF scheduler, observers and listeners are torn down on unmount,
 *   - canvas font strings are resolved from the CSS custom properties, because
 *     next/font exposes the families under generated names rather than the
 *     literal "IBM Plex Mono" / "Gotham" the client could name directly.
 */

/* =========================================================
   TUNABLE KNOBS — dial the number-logo. Edit these directly
   The reference also shipped a hidden "press T" slider panel for tuning
   these live; that debug affordance is left out of the site.
========================================================= */
// Values baked in from the client's own "press T" tuner panel (screenshot,
// 2026-08-24) — his settings, read straight off the read-out his panel prints
// for exactly this purpose. Fewer, larger, calmer digits than the defaults.
const CONFIG = {
  density: 2200, // how many numbers fill the mark (more = denser)
  maxScale: 2.2, // peak size of the number-logo at the midpoint (1 = no growth, 2 = double)
  glyphSize: 1.35, // base size of each number
  churn: 0.02, // in-shape drift/churn as a fraction of the mark's size (0 = perfectly still)
  spinSpeed: 0.3, // per-glyph spin ("turnable") speed multiplier
  flipRate: 0.2, // how fast the whole 0/1 field inverts
};

type Task = { fn: (t: number) => void; active: boolean };

type Pt = {
  tx: number;
  ty: number;
  r: number;
  op: number;
  seed: number;
  bit0: number;
  colIndex: number;
  spinPhase: number;
  spinSpeed: number;
};

type RetuneWindow = Window & { travoRetune?: () => void };

/** Resolve a font stack that is declared through a CSS custom property. */
function resolveFontStack(varName: string, fallback: string) {
  const probe = document.createElement("span");
  probe.style.cssText =
    "position:absolute;visibility:hidden;font-family:var(" + varName + ")";
  document.body.appendChild(probe);
  const family = getComputedStyle(probe).fontFamily;
  probe.remove();
  return family || fallback;
}

export default function HeroFinale() {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const capRef = useRef<HTMLDivElement>(null);
  const replayRef = useRef<HTMLButtonElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stageRef.current || !canvasRef.current || !logoRef.current || !capRef.current) {
      return;
    }
    // Annotated rather than inferred: the helpers below are function
    // declarations, and TypeScript does not carry a null-narrowing into those.
    const stage: HTMLDivElement = stageRef.current;
    const cv: HTMLCanvasElement = canvasRef.current;
    const logo: HTMLImageElement = logoRef.current;
    const cap: HTMLDivElement = capRef.current;
    const replay = replayRef.current;
    const wordmark = wordmarkRef.current;

    const MONO_STACK = resolveFontStack("--mono", "ui-monospace,monospace");
    const GOTHAM_STACK = resolveFontStack("--gotham", "sans-serif");

    /* =========================================================
       shared utilities (only what the finale needs)
    ========================================================= */
    const RM =
      !!window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    function clamp(v: number, a: number, b: number) {
      return v < a ? a : v > b ? b : v;
    }

    /* single rAF scheduler */
    const tasks: Task[] = [];
    let rafId = 0;
    let disposed = false;
    function register(fn: (t: number) => void): Task {
      const o: Task = { fn: fn, active: true };
      tasks.push(o);
      return o;
    }
    function frame(ts: number) {
      const t = ts / 1000;
      for (let i = 0; i < tasks.length; i++) {
        const o = tasks[i];
        if (o.active) o.fn(t);
      }
      if (!disposed) rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    function fitCanvas(c: HTMLCanvasElement) {
      const r = c.getBoundingClientRect();
      const w = Math.max(1, r.width);
      const h = Math.max(1, r.height);
      c.width = Math.round(w * DPR);
      c.height = Math.round(h * DPR);
      const context = c.getContext("2d") as CanvasRenderingContext2D;
      context.setTransform(DPR, 0, 0, DPR, 0, 0);
      return { ctx: context, w: w, h: h };
    }

    /* =========================================================
       FINALE (ONE CYCLE) — opens on the finished mark, disperses the
       binary particles out into the drift cloud (reverse), then
       accretes them back into the logo (forward), and holds. A Replay
       button runs the cycle again. Speed = smootherstep(|u-1|)^2 (eased
       at the logo ends, peaks just off the logo, slowest at the cloud).
    ========================================================= */
    let ctx: CanvasRenderingContext2D;
    let W = 0;
    let H = 0;
    let ready = false;
    // brand palette (from swatches): Coral, Blush, Glacier, Tidal — unchanged
    const PAL = [
      [255, 91, 94],
      [255, 185, 187],
      [197, 236, 254],
      [113, 210, 207],
      [44, 82, 81],
    ]; // attached palette (random per number)

    let shape: number[][] | null = null;
    function sampleLogo(): number[][] | null {
      try {
        const iw = logo.naturalWidth || logo.width;
        const ih = logo.naturalHeight || logo.height;
        if (!iw || !ih) return null;
        const sw = 104;
        const sh = Math.max(1, Math.round((sw * ih) / iw));
        const oc = document.createElement("canvas");
        oc.width = sw;
        oc.height = sh;
        const octx = oc.getContext("2d") as CanvasRenderingContext2D;
        octx.drawImage(logo, 0, 0, sw, sh);
        const d = octx.getImageData(0, 0, sw, sh).data;
        const out: number[][] = [];
        for (let y = 0; y < sh; y++) {
          for (let x = 0; x < sw; x++) {
            if (d[(y * sw + x) * 4 + 3] > 90) out.push([x / sw - 0.5, y / sh - 0.5]);
          }
        }
        return out.length ? out : null;
      } catch {
        return null;
      }
    }

    let pts: Pt[] = [];
    let lcx = 0;
    let lcy = 0;
    let LS = 0;
    let glyphSprites: HTMLCanvasElement[][] = [];
    const SPR = 96;
    function makeGlyphSprites() {
      glyphSprites = [];
      for (let c = 0; c < PAL.length; c++) {
        glyphSprites[c] = [];
        for (let b = 0; b < 2; b++) {
          const oc = document.createElement("canvas");
          oc.width = SPR;
          oc.height = SPR;
          const gx = oc.getContext("2d") as CanvasRenderingContext2D;
          gx.clearRect(0, 0, SPR, SPR);
          gx.textAlign = "center";
          gx.textBaseline = "middle";
          gx.font = "400 72px " + MONO_STACK;
          gx.fillStyle = "rgb(" + PAL[c][0] + "," + PAL[c][1] + "," + PAL[c][2] + ")";
          gx.fillText(b ? "1" : "0", SPR / 2, SPR / 2 + 2);
          glyphSprites[c][b] = oc;
        }
      }
    }
    makeGlyphSprites();

    function geom() {
      const lr = logo.getBoundingClientRect();
      const cr = cv.getBoundingClientRect();
      LS = lr.width || Math.min(W, H) * 0.5;
      lcx = lr.left - cr.left + lr.width / 2;
      if (!isFinite(lcx) || lr.width === 0) lcx = W / 2;
      lcy = lr.top - cr.top + lr.height / 2;
      if (!isFinite(lcy) || lr.height === 0) lcy = H * 0.46;
    }

    function layout() {
      geom();
      if (!shape) shape = sampleLogo();
      const N = W < 640 ? Math.round(CONFIG.density * 0.6) : CONFIG.density | 0; // knob: density
      const TWO_PI = Math.PI * 2;
      pts = [];
      for (let i = 0; i < N; i++) {
        const big = Math.random() < 0.1;
        const tg = shape
          ? shape[(Math.random() * shape.length) | 0]
          : [Math.cos(i) * 0.3, Math.sin(i) * 0.3];
        pts.push({
          tx: tg[0] * LS,
          ty: tg[1] * LS, // home = a point inside the logo shape
          r: big ? 1.5 + Math.random() * 1.3 : 0.7 + Math.random() * 1.0,
          op: 0.45 + Math.random() * 0.45,
          seed: Math.random() * 20,
          bit0: Math.random() < 0.5 ? 1 : 0,
          colIndex: (Math.random() * PAL.length) | 0,
          spinPhase: Math.random() * TWO_PI,
          spinSpeed: (0.18 + Math.random() * 0.3) * (Math.random() < 0.5 ? -1 : 1),
        });
      }
    }

    let measureCtx: CanvasRenderingContext2D | null = null;
    function fitWordmark() {
      if (!wordmark) return;
      const logoW = logo.getBoundingClientRect().width || Math.min(W, H) * 0.5;
      const target = logoW * 0.625; // TRAVO width = 0.5 * logo, +25%
      if (!measureCtx) {
        measureCtx = document.createElement("canvas").getContext("2d");
      }
      const mc = measureCtx;
      if (!mc) return;
      mc.font = "700 100px " + GOTHAM_STACK;
      const w = mc.measureText("TRAVO").width || 260;
      const perEm = w / 100 + 0.04 * 5; // include 4% tracking across TRAVO's 5 glyphs
      wordmark.style.fontSize = target / perEm + "px";
    }

    // draw one frame at a given progress (1 = formed logo, 0 = dispersed cloud)
    function drawFrame(prog: number, t: number) {
      // alive: 1 in the middle (churning numbers), 0 near the logo ends (settled)
      let alive = 1 - clamp((prog - 0.45) / 0.45, 0, 1);
      alive = alive * alive * (3 - 2 * alive);
      // numbers show in the middle, hidden under the crisp logo at the ends
      const numAlpha = clamp((0.9 - prog) / 0.14, 0, 1);
      let grow = clamp((0.9 - prog) / 0.9, 0, 1);
      grow = grow * grow * (3 - 2 * grow);
      const S = 1 + grow * (CONFIG.maxScale - 1); // knob: maxScale (peak size at midpoint)
      const flip = Math.floor(t * CONFIG.flipRate) & 1; // knob: flipRate
      const ft = t * 0.6;
      const churn = LS * CONFIG.churn * alive; // knob: churn
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, W, H);
      ctx.imageSmoothingEnabled = true;
      if (numAlpha > 0.003) {
        for (let i = 0; i < pts.length; i++) {
          const d = pts[i];
          let fx = 0;
          let fy = 0;
          if (!RM) {
            fx =
              (Math.sin(d.ty * 0.02 + ft + d.seed) +
                0.5 * Math.sin(d.tx * 0.03 - ft * 1.2 + d.seed * 1.7)) *
              churn;
            fy =
              (Math.sin(d.tx * 0.02 - ft * 1.1 + d.seed * 2.1) +
                0.5 * Math.sin(d.ty * 0.03 + ft * 0.8 + d.seed)) *
              churn;
          }
          const px = lcx + (d.tx + fx) * S;
          const py = lcy + (d.ty + fy) * S;
          const op = d.op * numAlpha;
          if (op <= 0.004) continue;
          const fpx = d.r * 4.05 * CONFIG.glyphSize * S; // knob: glyphSize (x growth)
          if (fpx < 1.2) continue;
          const bit = d.bit0 ^ flip ? 1 : 0;
          const sprite = glyphSprites[d.colIndex][bit];
          const scl = fpx / 72;
          // knob: spinSpeed (turnable)
          const raw = (d.spinPhase + t * d.spinSpeed * CONFIG.spinSpeed) * alive;
          const cg = Math.cos(raw);
          const sg = Math.sin(raw);
          ctx.globalAlpha = op;
          ctx.setTransform(
            DPR * scl * cg,
            DPR * scl * sg,
            -DPR * scl * sg,
            DPR * scl * cg,
            px * DPR,
            py * DPR
          );
          ctx.drawImage(sprite, -SPR / 2, -SPR / 2);
        }
        // restrict everything to the boundaries of the logo
        if (logo.complete && logo.naturalWidth) {
          ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
          ctx.globalCompositeOperation = "destination-in";
          ctx.globalAlpha = 1;
          ctx.drawImage(logo, lcx - (LS * S) / 2, lcy - (LS * S) / 2, LS * S, LS * S);
          ctx.globalCompositeOperation = "source-over";
        }
      }
      ctx.globalAlpha = 1;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    const DUR = 10.8; // 40% slower (was 6.5)
    let started: number | null = null;
    let done = false;

    function resize() {
      const f = fitCanvas(cv);
      ctx = f.ctx;
      W = f.w;
      H = f.h;
      ready = true;
      layout();
      fitWordmark();
    }
    resize();

    const ro = window.ResizeObserver
      ? new ResizeObserver(function () {
          requestAnimationFrame(resize);
        })
      : null;
    if (ro) {
      try {
        ro.observe(stage);
      } catch {
        /* ResizeObserver is best-effort here */
      }
    }
    window.addEventListener("resize", resize);
    // called by the tuning panel when the density knob changes
    (window as RetuneWindow).travoRetune = function () {
      layout();
    };
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        fitWordmark();
        makeGlyphSprites();
      });
    }
    function onLogoLoad() {
      shape = null;
      layout();
    }
    if (!logo.complete) logo.addEventListener("load", onLogoLoad);

    const task = register(function (t: number) {
      if (!ready) return;
      if (RM) {
        ctx.clearRect(0, 0, W, H);
        logo.classList.add("in");
        cap.classList.add("in");
        if (replay) replay.classList.add("in");
        task.active = false;
        return;
      }
      if (started === null) started = t;
      // speed: soft at the logo ends, peaks close to the logo, slowest at the cloud (midpoint)
      const u = (t - started) / DUR; // 0..2 across one cycle
      const d1 = Math.abs(u - 1); // 1 at the logo ends, 0 at the cloud
      const ws = d1 * d1 * d1 * (d1 * (d1 * 6 - 15) + 10); // smootherstep(d1)
      const prog = u >= 2 ? 1 : ws * ws;
      drawFrame(prog, t);
      if (prog > 0.82) {
        logo.classList.add("in");
        cap.classList.add("in");
      } else {
        logo.classList.remove("in");
        cap.classList.remove("in");
      }
      if (u >= 2 && !done) {
        done = true;
        if (replay) replay.classList.add("in");
        task.active = false;
      }
    });
    task.active = false;

    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting && !done) task.active = true;
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(stage);

    function restart() {
      geom();
      layout();
      started = null;
      done = false;
      logo.classList.add("in");
      cap.classList.add("in");
      if (replay) replay.classList.remove("in");
      task.active = true;
    }
    if (replay) replay.addEventListener("click", restart);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      io.disconnect();
      if (ro) ro.disconnect();
      window.removeEventListener("resize", resize);
      logo.removeEventListener("load", onLogoLoad);
      if (replay) replay.removeEventListener("click", restart);
      delete (window as RetuneWindow).travoRetune;
    };
  }, []);

  return (
    <div className="hero-video-band" aria-hidden="true">
      <div
        className="hero-logo-embed"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "520px",
          margin: "0 auto",
          paddingTop: "clamp(3rem,8vw,6rem)",
          overflow: "visible",
          position: "relative",
        }}
      >
        <section className="finale" id="finale">
          <canvas id="finaleCanvas" ref={canvasRef}></canvas>
          <div className="lockup" id="finaleStage" ref={stageRef}>
            <img
              className="finale-logo in"
              id="finaleLogo"
              ref={logoRef}
              src="/brand-icon.png"
              alt="Travo"
            />
            <div className="finale-cap in" id="finaleCap" ref={capRef}>
              <div className="wordmark" id="wordmark" ref={wordmarkRef}>
                TRAVO
              </div>
              <p className="tag">Quantified Risk. Disciplined Decisions.</p>
            </div>
          </div>
          <button
            className="replay"
            id="replayBtn"
            ref={replayRef}
            type="button"
            aria-label="Replay animation"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 12a9 9 0 1 0 3-6.7M3 4v4h4" />
            </svg>
            Replay
          </button>
        </section>
      </div>
    </div>
  );
}
