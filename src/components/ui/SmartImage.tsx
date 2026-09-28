import { useEffect, useRef, useState } from "react";

type SmartImageProps = {
  src?: string;
  alt: string;
  label: string;
  loading?: "lazy" | "eager";
};

/** Image that degrades to a branded gradient placeholder when the file is missing. */
export function SmartImage({ src, alt, label, loading = "lazy" }: SmartImageProps) {
  const [failed, setFailed] = useState(!src);
  const ref = useRef<HTMLImageElement>(null);

  // Catches images that already failed before hydration attached the handler.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  return (
    <div className="smart-image">
      {!failed && src ? (
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="smart-image-fallback" role="img" aria-label={alt}>
          <span className="smart-image-monogram">{label}</span>
        </div>
      )}
    </div>
  );
}
