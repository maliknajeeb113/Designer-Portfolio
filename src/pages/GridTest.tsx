import { useState } from "react";
import HandDrawnGrid from "../components/HandDrawnGrid";

// TEMP: tuning page for the hero's hand-drawn grid. Not linked from the
// navbar — delete this page + its route once the grid is dialed in.
const GridTest = () => {
  const [color, setColor] = useState("#EBEBEB");
  const [wobble, setWobble] = useState(3);
  const [cellSize, setCellSize] = useState(120);

  return (
    <div className="mt-[150px] flex w-screen flex-col items-center bg-white px-6 pb-16 font-sans">
      <div className="mb-10 flex max-w-xl flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-medium">Hand-drawn Grid — Tuning</h1>
        <p className="text-gray-500">
          Temporary page for design review. Static grid: cells stay a fixed size and crop at the
          edges (resize the window — they won&rsquo;t stretch).
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm text-gray-500">
          <label className="flex items-center gap-2">
            Color
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="h-8 w-8 cursor-pointer rounded"
            />
          </label>
          <label className="flex items-center gap-2">
            Wobble: {wobble}
            <input type="range" min={0} max={10} value={wobble} onChange={(e) => setWobble(Number(e.target.value))} />
          </label>
          <label className="flex items-center gap-2">
            Cell size: {cellSize}px
            <input
              type="range"
              min={40}
              max={220}
              value={cellSize}
              onChange={(e) => setCellSize(Number(e.target.value))}
            />
          </label>
        </div>
      </div>

      <div className="relative aspect-[5/3] w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-100">
        <HandDrawnGrid
          color={color}
          wobble={wobble}
          cellSize={cellSize}
          className="absolute inset-0 h-full w-full"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
          <span className="text-center text-4xl font-medium text-gray-900 md:text-6xl">
            Hey, I&rsquo;m Avni ✨
          </span>
        </div>
      </div>
    </div>
  );
};

export default GridTest;
