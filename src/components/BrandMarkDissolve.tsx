"use client";

import { useEffect, useRef } from "react";

// Small-scale adaptation of the client's "logo loop" concept (a point cloud
// of measured uncertainty condensing into the Travo mark), rebuilt for the
// header icon rather than a full-viewport presentation: far fewer particles,
// a bounded canvas, and three explicit phases instead of one long loop.
// Layout matches the client's final.html: one lockup image
// (public/brand-logo.png — mark with "TRAVO" baked in) above the tagline.
// Only the mark dissolves into digits; the "TRAVO" lettering and the tagline
// simply fade out with it and return, as in the client's own reference
// (ref/logofinal.html), where the caption fades alongside the logo.
//
// Matches the original's key technique: the particle field is masked to the
// logo's own silhouette every frame (canvas `destination-in`), and that
// silhouette itself grows during the dissolve and shrinks back on reform
// (the client's "maxScale" knob) — so it reads as the mark swelling and
// churning with digits, not particles scattering away from a static icon.
const PARTICLE_COUNT = 130;
const START_DELAY_MS = 1500;
const DISSOLVE_MS = 900; // logo -> digits
const HOLD_MS = 3500; // digits churn in place
const REFORM_MS = 900; // digits -> logo
const CYCLE_MS = DISSOLVE_MS + HOLD_MS + REFORM_MS;
const SCALE_PEAK = 1.15; // mark grows to this multiple of its resting size at full disperse — kept close to the original footprint rather than blooming outward
const CHURN = 0.05; // in-shape drift, as a fraction of logo size (matches the client's own "churn" knob in ref/logofinal.html)
// Full brand palette, ported from the client's own `PAL` array in
// ref/logofinal.html — coral, blush, glacier, tidal, teal-dark — picked
// uniformly at random per glyph, as he does.
// NOTE: his demo runs on a near-black ground, where all five read clearly.
// Ours sits on the white header, so blush and glacier are close to invisible
// there; drop those two entries if the field looks sparse.
const PALETTE = [
  "255, 91, 94", // coral       #FF5B5E
  "255, 185, 187", // blush     #FFB9BB
  "197, 236, 254", // glacier   #C5ECFE
  "113, 210, 207", // tidal     #71D2CF
  "44, 82, 81", // teal-dark    #2C5251
];

type Particle = {
  tx: number; // home position at scale 1, relative to center
  ty: number;
  bit: "0" | "1";
  seed: number;
  size: number;
  alpha: number;
  color: string; // "r, g, b" from PALETTE
};

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

// Samples the mark's silhouette out of the lockup asset. The asset also has
// "TRAVO" baked in below the mark, separated by a band of transparent rows —
// only the mark (the first contiguous run of non-empty rows) is sampled, so
// the lettering never becomes digits; it just fades with the image.
// `markFrac` is that run's share of the full image height, used to keep the
// mask confined to the mark too. Coordinates stay normalized against the
// FULL image height so they still map onto the whole logo box.
function sampleShape(image: HTMLImageElement): {
  points: Array<[number, number]>;
  sw: number;
  sh: number;
  markFrac: number;
} {
  const sw = 44;
  const sh = Math.max(1, Math.round((sw * image.naturalHeight) / image.naturalWidth));
  const off = document.createElement("canvas");
  off.width = sw;
  off.height = sh;
  const octx = off.getContext("2d");
  if (!octx) return { points: [], sw, sh, markFrac: 1 };
  octx.drawImage(image, 0, 0, sw, sh);
  const data = octx.getImageData(0, 0, sw, sh).data;
  const opaque = (x: number, y: number) => data[(y * sw + x) * 4 + 3] > 90;
  const rowHasInk = (y: number) => {
    for (let x = 0; x < sw; x++) if (opaque(x, y)) return true;
    return false;
  };

  let markRows = 0;
  while (markRows < sh && rowHasInk(markRows)) markRows++;
  // No gap found (e.g. an icon-only asset) -> treat the whole image as the mark.
  if (markRows === 0 || markRows >= sh) markRows = sh;

  const points: Array<[number, number]> = [];
  for (let y = 0; y < markRows; y++) {
    for (let x = 0; x < sw; x++) {
      if (opaque(x, y)) {
        points.push([x / sw - 0.5, y / sh - 0.5]);
      }
    }
  }
  return { points, sw, sh, markFrac: markRows / sh };
}

export default function BrandMarkDissolve() {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    const tag = tagRef.current;
    if (!img || !canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let startTimeout: ReturnType<typeof setTimeout>;
    let cancelled = false;

    function run() {
      if (cancelled || !img || !canvas || !img.complete || !img.naturalWidth) return;
      const { points: shape, sw, sh, markFrac } = sampleShape(img);
      if (!shape.length) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      if (!w || !h) return;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cx = w / 2;
      const cy = h / 2;
      // "Resting" mark footprint within the (larger, bleed-room) canvas —
      // must match the canvas's own inset/size multiplier in globals.css
      // (.brand-mark-dissolve canvas) so scale=1 lines up with the actual
      // icon box. Width and height are tracked separately (not one
      // logoSize) so this stays correct for any non-square export.
      const logoW = w / 1.9;
      const logoH = h / 1.9;
      const churnPx = Math.min(logoW, logoH) * CHURN;

      // shape's tx/ty are each normalized to their own axis (sw, sh), so the
      // jitter cell size must be too, or dots would jitter unevenly on the
      // narrower axis.
      const cellPxX = logoW / sw;
      const cellPxY = logoH / sh;
      const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => {
        const [tx, ty] = shape[(Math.random() * shape.length) | 0];
        const jitterX = (Math.random() - 0.5) * cellPxX * 1.2;
        const jitterY = (Math.random() - 0.5) * cellPxY * 1.2;
        return {
          tx: tx * logoW + jitterX,
          ty: ty * logoH + jitterY,
          bit: Math.random() < 0.5 ? "0" : "1",
          seed: Math.random() * 10,
          size: 6.5 + Math.random() * 3,
          alpha: 0.8 + Math.random() * 0.2,
          color: PALETTE[(Math.random() * PALETTE.length) | 0],
        };
      });

      const start = performance.now();

      function frame(now: number) {
        if (cancelled || !canvas || !img) return;
        const ctx2d = ctx;
        if (!ctx2d) return;

        const elapsed = now - start;
        // formed: 1 = crisp static logo, 0 = fully dissolved into digits.
        let formed: number;
        if (elapsed < DISSOLVE_MS) {
          formed = 1 - smoothstep(elapsed / DISSOLVE_MS);
        } else if (elapsed < DISSOLVE_MS + HOLD_MS) {
          formed = 0;
        } else if (elapsed < CYCLE_MS) {
          formed = smoothstep((elapsed - DISSOLVE_MS - HOLD_MS) / REFORM_MS);
        } else {
          formed = 1;
        }
        // scale: 1 at rest (formed), peaks at SCALE_PEAK when fully dissolved.
        const scale = 1 + (1 - formed) * (SCALE_PEAK - 1);
        const numAlpha = 1 - formed;

        ctx2d.clearRect(0, 0, w, h);
        img.style.opacity = String(formed);
        img.style.transform = `scale(${1 + (1 - formed) * 0.06})`; // subtle breathing during the crossfade
        // The tagline fades with the logo rather than dissolving into digits
        // itself — matches ref/logofinal.html, where the caption group fades
        // out and back in alongside the logo image.
        if (tag) tag.style.opacity = String(formed);

        if (numAlpha > 0.01) {
          ctx2d.globalCompositeOperation = "source-over";
          ctx2d.textAlign = "center";
          ctx2d.textBaseline = "middle";
          const wobble = churnPx * numAlpha;
          particles.forEach((p) => {
            const fx = Math.sin(now * 0.003 + p.seed) * wobble;
            const fy = Math.cos(now * 0.0026 + p.seed * 1.3) * wobble;
            ctx2d.font = `500 ${p.size * scale}px var(--font-ibm-plex-mono), monospace`;
            ctx2d.fillStyle = `rgba(${p.color}, ${p.alpha * numAlpha})`;
            ctx2d.fillText(p.bit, cx + p.tx * scale + fx, cy + p.ty * scale + fy);
          });

          // Mask the particle field to the (scaled) mark's own silhouette,
          // exactly as the client's original does. Only the mark slice of
          // the asset is used as the mask — the "TRAVO" lettering below it
          // is excluded, so no digits can ever land inside the letterforms.
          ctx2d.globalCompositeOperation = "destination-in";
          ctx2d.globalAlpha = 1;
          ctx2d.drawImage(
            img,
            0,
            0,
            img.naturalWidth,
            Math.round(img.naturalHeight * markFrac),
            cx - (logoW * scale) / 2,
            cy - (logoH * scale) / 2,
            logoW * scale,
            logoH * scale * markFrac
          );
          ctx2d.globalCompositeOperation = "source-over";
        }

        if (elapsed < CYCLE_MS) {
          raf = requestAnimationFrame(frame);
        } else {
          img.style.opacity = "1";
          img.style.transform = "none";
          if (tag) tag.style.opacity = "1";
          ctx2d.clearRect(0, 0, w, h);
        }
      }

      raf = requestAnimationFrame(frame);
    }

    if (img.complete) {
      startTimeout = setTimeout(run, START_DELAY_MS);
    } else {
      const onLoad = () => {
        startTimeout = setTimeout(run, START_DELAY_MS);
      };
      img.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      clearTimeout(startTimeout);
    };
  }, []);

  return (
    <>
      <span className="brand-logo brand-mark-dissolve" aria-hidden="true">
        <img ref={imgRef} src="/brand-logo.png" alt="" />
        <canvas ref={canvasRef} />
      </span>
      <span ref={tagRef} className="brand-tagline">
        Quantified Risk. Disciplined Decisions.
      </span>
    </>
  );
}
