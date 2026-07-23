interface PlaceholderImageProps {
  label?: string;
  className?: string; // sizing / aspect ratio for the box
}

// Dashed placeholder standing in for a graphic/screenshot the user will supply
// later. Swap for a real <img> (or BrowserFrame) once the asset is provided.
const PlaceholderImage = ({ label = "Graphic coming", className = "" }: PlaceholderImageProps) => (
  <div
    className={`flex items-center justify-center rounded-2xl border border-dashed border-ink/20 bg-ink/[0.03] p-6 text-center text-sm text-ink-faint ${className}`}
  >
    <span>🖼️ {label}</span>
  </div>
);

export default PlaceholderImage;
