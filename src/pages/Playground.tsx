import { useLayoutEffect, useRef, useState } from "react";
import PageShell from "../components/PageShell";
import Container from "../components/Container";
import { playgroundImages } from "../constants";
import bow from "../assets/playground/bow.png";

const rand = (min: number, max: number) => Math.random() * (max - min) + min;
const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

interface Piece {
  id: number;
  src: string;
  alt: string;
  x: number;
  y: number;
  width: number;
  rotate: number;
  z: number;
}

// The four corner handles. All four run the same free-transform gesture; each is a
// curved-L bracket (two borders + a rounded corner) that traces the piece's own
// rounded border, so it reads as an accent on the corner rather than a bump.
const corners = [
  { pos: "-left-[8px] -top-[8px] rounded-tl-full border-l-[3px] border-t-[3px]", cursor: "cursor-nwse-resize" },
  { pos: "-right-[8px] -top-[8px] rounded-tr-full border-r-[3px] border-t-[3px]", cursor: "cursor-nesw-resize" },
  { pos: "-bottom-[8px] -left-[8px] rounded-bl-full border-b-[3px] border-l-[3px]", cursor: "cursor-nesw-resize" },
  { pos: "-bottom-[8px] -right-[8px] rounded-br-full border-b-[3px] border-r-[3px]", cursor: "cursor-nwse-resize" },
];

// A single GIF that can be dragged (by its body) and freely transformed from any
// corner: dragging a corner scales the piece (pointer distance from the center)
// and rotates it (pointer angle around the center) at the same time. Corner bumps
// only show while the piece is hovered.
const DraggablePiece = ({ piece, bringToFront }: { piece: Piece; bringToFront: () => number }) => {
  const elRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: piece.x, y: piece.y });
  const [width, setWidth] = useState(piece.width);
  const [rotate, setRotate] = useState(piece.rotate);
  const [z, setZ] = useState(piece.z);

  const listen = (move: (ev: PointerEvent) => void) => {
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const startDrag = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    setZ(bringToFront());
    const startX = e.clientX;
    const startY = e.clientY;
    const origX = pos.x;
    const origY = pos.y;
    listen((ev) => setPos({ x: origX + ev.clientX - startX, y: origY + ev.clientY - startY }));
  };

  const startTransform = (e: React.PointerEvent) => {
    e.stopPropagation(); // transform, don't drag
    e.preventDefault();
    setZ(bringToFront());
    const el = elRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const angle = (px: number, py: number) => (Math.atan2(py - cy, px - cx) * 180) / Math.PI;
    const dist = (px: number, py: number) => Math.hypot(px - cx, py - cy);
    const startAngle = angle(e.clientX, e.clientY);
    const startDist = Math.max(dist(e.clientX, e.clientY), 1);
    const startRot = rotate;
    const startW = width;
    listen((ev) => {
      setRotate(startRot + angle(ev.clientX, ev.clientY) - startAngle);
      setWidth(Math.max(80, startW * (dist(ev.clientX, ev.clientY) / startDist)));
    });
  };

  return (
    <div
      ref={elRef}
      onPointerDown={startDrag}
      style={{ left: pos.x, top: pos.y, width, zIndex: z, transform: `rotate(${rotate}deg)` }}
      className="group absolute cursor-grab touch-none select-none active:cursor-grabbing"
    >
      <img
        src={piece.src}
        alt={piece.alt}
        draggable={false}
        className="pointer-events-none w-full rounded-3xl border border-ink-faint"
      />
      {corners.map((c) => (
        <span
          key={c.pos}
          onPointerDown={startTransform}
          className={`absolute h-6 w-6 border-ink-faint opacity-0 transition-opacity group-hover:opacity-100 ${c.pos} ${c.cursor}`}
        />
      ))}
    </div>
  );
};

// Playground / Vibe Coding — a pink board where the project GIFs are spread out
// evenly and can be dragged, resized, and rotated.
const Playground = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const topZ = useRef(playgroundImages.length);
  const [pieces, setPieces] = useState<Piece[]>([]);

  // Lay the pieces out on an even grid (with a little jitter + tilt) once the
  // board can be measured, so they start spread out instead of piled up.
  useLayoutEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const W = el.clientWidth;
    const H = el.clientHeight;
    const n = playgroundImages.length;
    const cols = Math.min(3, n);
    const rows = Math.ceil(n / cols);
    const cellW = W / cols;
    const cellH = H / rows;

    setPieces(
      playgroundImages.map((img, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const width = cellW * rand(0.66, 0.86);
        const x = col * cellW + (cellW - width) / 2 + rand(-1, 1) * (cellW - width) * 0.35;
        const y = row * cellH + (cellH - width) / 2 + rand(-1, 1) * Math.max(0, cellH - width) * 0.35;
        return {
          id: img.id,
          src: img.actualImgPath,
          alt: img.altText,
          x: clamp(x, 0, Math.max(0, W - width)),
          y: clamp(y, 0, Math.max(0, H - width)),
          width,
          rotate: rand(-6, 6),
          z: i + 1,
        };
      }),
    );
  }, []);

  const bringToFront = () => {
    topZ.current += 1;
    return topZ.current;
  };

  return (
    <PageShell className="bg-brand-pink-light/40 pb-24 pt-32 sm:pb-32 sm:pt-40">
      <Container>
        <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
          Playground/
          <span className="font-script text-[1.15em] text-brand-green">Vibe Coding.</span>
          <img src={bow} alt="" className="ml-3 inline-block h-[2em] w-auto align-middle" />
        </h1>
        <p className="mt-4 text-sm text-ink-faint">
          Drag the pieces around, grab a corner to resize &amp; rotate. ✦
        </p>
      </Container>

      {/* scatter board — full page width */}
      <div
        ref={canvasRef}
        className="relative mt-10 h-[600px] w-full overflow-hidden sm:h-[680px] lg:h-[760px]"
      >
        {pieces.map((piece) => (
          <DraggablePiece key={piece.id} piece={piece} bringToFront={bringToFront} />
        ))}
      </div>
    </PageShell>
  );
};

export default Playground;
