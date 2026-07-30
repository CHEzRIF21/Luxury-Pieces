import { createContext, useContext, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

const SlotContext = createContext<(el: HTMLDivElement | null) => void>(() => {});

/**
 * Instance unique de la vidéo d'ambiance, déplacée par portail dans le slot du
 * héros. Elle est TOUJOURS muette : la boutique n'a pas de sonorisation.
 * Sans slot monté (toutes les pages sauf l'accueil) la vidéo n'existe pas et
 * n'est donc pas téléchargée.
 */
export function SiteVideoProvider({ children }: { children: ReactNode }) {
  const [slot, setSlot] = useState<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.play().catch(() => {});
  }, [slot]);

  return (
    <SlotContext.Provider value={setSlot}>
      {children}
      {slot &&
        createPortal(
          <video
            ref={videoRef}
            className="site-video"
            src="/videos/hero-dark.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />,
          slot,
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
