/**
 * The article's cover graphic: a grid of dots standing in for a risk register,
 * with a diagonal band of teal dots converging on a single coral signal dot.
 *
 * Ported verbatim from the client's inline script, including its seeded
 * pseudo-random generator — which is why this runs on the server instead. The
 * output never varies, so drawing it into an empty <svg> after hydration only
 * costs a flash of blank cover and a client bundle. The draw order of the rnd()
 * calls is load-bearing: skip test, then cx, then cy, then (light dots only)
 * opacity. Change that and every dot moves.
 */

const W = 1200;
const H = 340;
const GAP = 26;
const R = 5;

/** Band centre line: y = -0.22x + 300, half-width 34. */
const BAND_SLOPE = -0.22;
const BAND_INTERCEPT = 300;
const BAND_HALF_WIDTH = 34;

const SIGNAL_X = 1108;
const SIGNAL_Y = BAND_SLOPE * SIGNAL_X + BAND_INTERCEPT;

type Dot = { cx: number; cy: number; r: number; fill: string; opacity?: string };

function buildDots(): Dot[] {
  let seed = 42;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const bandDistance = (x: number, y: number) =>
    Math.abs(y - (BAND_SLOPE * x + BAND_INTERCEPT)) /
    Math.sqrt(1 + BAND_SLOPE * BAND_SLOPE);

  const dots: Dot[] = [];
  for (let x = GAP; x < W - 8; x += GAP) {
    for (let y = GAP; y < H - 8; y += GAP) {
      if (rnd() < 0.18) continue; // gaps = an incomplete register
      const distance = bandDistance(x, y);
      const cx = x + (rnd() * 4 - 2);
      const cy = y + (rnd() * 4 - 2);
      if (distance < BAND_HALF_WIDTH) {
        dots.push({ cx, cy, r: R + 1.2, fill: "#71D2CF" });
      } else {
        dots.push({
          cx,
          cy,
          r: R,
          fill: "#FFFFFF",
          opacity: (0.12 + rnd() * 0.18).toFixed(2),
        });
      }
    }
  }
  return dots;
}

const DOTS = buildDots();

export default function DotField() {
  return (
    <svg
      className="hero-art"
      id="dotfield"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Abstract cover graphic: a grid of dots representing a risk register, with a diagonal band of teal dots converging toward a single coral signal dot."
    >
      {DOTS.map((dot, index) => (
        <circle
          key={index}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill={dot.fill}
          opacity={dot.opacity}
        />
      ))}
      <circle
        cx={SIGNAL_X}
        cy={SIGNAL_Y}
        r={26}
        fill="none"
        stroke="#FF5B5E"
        strokeWidth="2"
        opacity=".55"
      />
      <circle cx={SIGNAL_X} cy={SIGNAL_Y} r={13} fill="#FF5B5E" />
    </svg>
  );
}
