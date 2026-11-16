import { useCallback, useEffect, useState } from "react";
import type { Photo } from "@/lib/photos";

export function Gallery({ title, index, intro, photos }: { title: string; index: string; intro: string; photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null);
  const step = useCallback((d: number) => setActive((a) => (a === null ? a : (a + d + photos.length) % photos.length)), [photos.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, step]);

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <div className="mb-14 grid gap-6 border-b border-border pb-10 md:grid-cols-[1fr_auto] md:items-end">
        <div className="animate-rise">
          <p className="eyebrow mb-4">{index} — {photos.length} frames</p>
          <h1 className="text-6xl md:text-8xl">{title}</h1>
        </div>
        <p className="max-w-sm text-muted-foreground">{intro}</p>
      </div>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((p: Photo, i) => (
          <button key={p.full} onClick={() => setActive(i)} className="group mb-4 block w-full overflow-hidden bg-card">
            <img src={p.full} alt={`${title} photograph ${i + 1}`} loading="lazy" className="w-full transition duration-700 group-hover:scale-[1.03] group-hover:opacity-90" />
          </button>
        ))}
      </div>
      {active !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4 md:p-12" onClick={() => setActive(null)}>
          <img src={photos[active]?.full} alt="" className="max-h-full max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
          <button className="eyebrow absolute right-6 top-6 hover:text-foreground" onClick={() => setActive(null)}>Close ✕</button>
          <button className="eyebrow absolute left-4 top-1/2 p-4 hover:text-foreground" onClick={(e) => { e.stopPropagation(); step(-1); }}>← Prev</button>
          <button className="eyebrow absolute right-4 top-1/2 p-4 hover:text-foreground" onClick={(e) => { e.stopPropagation(); step(1); }}>Next →</button>
          <p className="eyebrow absolute bottom-6">{active + 1} / {photos.length}</p>
        </div>
      )}
    </main>
  );
}
