import { createContext, useContext, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

const SlotContext = createContext<(el: HTMLDivElement | null) => void>(() => {});

export function SiteVideoProvider({ children }: { children: ReactNode }) {
  const [slot, setSlot] = useState<HTMLDivElement | null>(null);
  const [fallback, setFallback] = useState<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const playWithSound = () => {
      el.muted = false;
      return el.play();
    };

    playWithSound().catch(() => {
      el.muted = true;
      el.play().catch(() => {});
    });

    const unlock = () => {
      if (!el.muted) return;
      playWithSound().catch(() => {});
    };
    window.addEventListener('pointerdown', unlock);
    window.addEventListener('keydown', unlock);
    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, []);

  const target = slot ?? fallback;

  return (
    <SlotContext.Provider value={setSlot}>
      {children}
      <div ref={setFallback} className="bg-audio" />
      {target &&
        createPortal(
          <video
            ref={videoRef}
            className="site-video"
            src="/videos/hero-dark.mp4"
            autoPlay
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />,
          target,
        )}
    </SlotContext.Provider>
  );
}

export function HeroVideoSlot({ className }: { className: string }) {
  const setSlot = useContext(SlotContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSlot(ref.current);
    return () => setSlot(null);
  }, [setSlot]);

  return <div ref={ref} className={className} />;
}
