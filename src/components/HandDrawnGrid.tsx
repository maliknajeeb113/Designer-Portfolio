import { useLayoutEffect, useMemo, useRef, useState } from "react";

interface HandDrawnGridProps {
  cellSize?: number; // px — fixed size of each grid cell (STATIC: does not stretch on resize)
  wobble?: number; // px — max perpendicular jitter of the hand-drawn lines
  color?: string;
  strokeWidth?: number;
  className?: string;
}

// Deterministic PRNG (mulberry32) so each line's wobble is stable across
// re-renders (and resizes) instead of reshuffling every repaint.
function mulberry32(seed: number) {
  let a = seed | 0;
  return function random() {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// A single hand-wobbled line, jittered perpendicular to its direction and
// smoothed through the points. Drawn as one continuous stroke edge-to-edge.
function buildWobblyPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  wobble: number,
  seed: number,
  segments: number
): string {
  const rand = mulberry32(seed);
  const length = Math.hypot(x2 - x1, y2 - y1) || 1;
  const nx = -(y2 - y1) / length;
  const ny = (x2 - x1) / length;
  const dx = (x2 - x1) / segments;
  const dy = (y2 - y1) / segments;

  const points: { x: number; y: number }[] = [{ x: x1, y: y1 }];
  for (let i = 1; i < segments; i++) {
    const offset = (rand() - 0.5) * 2 * wobble;
    points.push({ x: x1 + dx * i + nx * offset, y: y1 + dy * i + ny * offset });
  }
  points.push({ x: x2, y: y2 });

  const first = points[0]!;
  let d = `M ${first.x.toFixed(2)} ${first.y.toFixed(2)}`;
  for (let i = 1; i < points.length - 1; i++) {
    const point = points[i]!;
    const next = points[i + 1]!;
    const midX = (point.x + next.x) / 2;
    const midY = (point.y + next.y) / 2;
    d += ` Q ${point.x.toFixed(2)} ${point.y.toFixed(2)} ${midX.toFixed(2)} ${midY.toFixed(2)}`;
  }
  const last = points[points.length - 1]!;
  d += ` L ${last.x.toFixed(2)} ${last.y.toFixed(2)}`;
  return d;
}

// Static hand-drawn grid. Measures its container and draws one continuous set
// of wobbly lines at a FIXED cell size — so cells never stretch/distort, they
// just crop at the edges (and more/fewer appear on resize). No SVG <pattern>,
// so there are no tile seams or repeating "patches".
const HandDrawnGrid = ({
  cellSize = 120,
  wobble = 3,
  color = "rgb(235,235,235)",
  strokeWidth = 1.5,
  className = "",
}: HandDrawnGridProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const paths = useMemo(() => {
    const { w, h } = size;
    if (w === 0 || h === 0) return [];
    const cols = Math.ceil(w / cellSize);
    const rows = Math.ceil(h / cellSize);
    const spanX = cols * cellSize;
    const spanY = rows * cellSize;
    const segs: string[] = [];
    for (let i = 0; i <= cols; i++) {
      const x = i * cellSize;
      segs.push(buildWobblyPath(x, 0, x, spanY, wobble, i * 97 + 13, Math.max(4, rows * 2)));
    }
    for (let j = 0; j <= rows; j++) {
      const y = j * cellSize;
      segs.push(buildWobblyPath(0, y, spanX, y, wobble, j * 131 + 7, Math.max(4, cols * 2)));
    }
    return segs;
  }, [size, cellSize, wobble]);

  return (
    <div ref={ref} className={className}>
      <svg width="100%" height="100%" className="block">
        {paths.map((d, i) => (
          <path key={i} d={d} stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" />
        ))}
      </svg>
    </div>
  );
};

export default HandDrawnGrid;
