import { useEffect, useRef, useState } from "react";

// The music control lives in the wedding page header so it never floats over
// photos or words while the visitor scrolls.
export function MusicPlayer() {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = ref.current;
    if (!audio) return;
    let mounted = true;
    const start = () => {
      audio.play().then(() => {
        if (mounted) setPlaying(true);
      }).catch(() => {});
      window.removeEventListener("pointerdown", start);
    };

    audio.volume = 0.5;
    audio.play().then(() => {
      if (mounted) setPlaying(true);
    }).catch(() => {
      // Browsers block autoplay until the visitor interacts; start on first click.
      window.addEventListener("pointerdown", start);
    });

    return () => {
      mounted = false;
      window.removeEventListener("pointerdown", start);
      audio.pause();
    };
  }, []);

  const toggle = () => {
    const audio = ref.current;
    if (!audio) return;
    if (audio.paused) audio.play().then(() => setPlaying(true)).catch(() => {});
    else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={ref} src="/audio/wedding-theme.mp3" loop preload="auto" />
      <button
        type="button"
        onPointerDown={(event) => event.stopPropagation()}
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        className="flex items-center gap-2 rounded-full border border-on-overlay/40 bg-overlay/70 px-3 py-1.5 text-on-overlay backdrop-blur transition hover:border-gold"
      >
        <span className="flex h-4 items-center gap-[3px]" aria-hidden="true">
          {[0, 1, 2, 3].map((index) => (
            <span
              key={index}
              className="w-[2px] bg-gold transition-all"
              style={{
                height: playing ? undefined : "4px",
                animation: playing ? `eq 0.${7 + index}s ease-in-out ${index * 0.1}s infinite alternate` : "none",
              }}
            />
          ))}
        </span>
        <span className="wedding-eyebrow hidden sm:inline">{playing ? "Music on" : "Music off"}</span>
      </button>
      <style>{`@keyframes eq { from { height: 3px } to { height: 16px } }`}</style>
    </>
  );
}
