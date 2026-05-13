import { useEffect, useRef } from 'react';

type Props = {
  items: string[];
  speed?: number; // seconds for one full loop
  reverse?: boolean;
  variant?: 'default' | 'serif';
};

/**
 * Scroll-velocity-aware marquee. Tracks the user's scroll speed and
 * shortens the animation duration when scrolling fast — so the band
 * "feels alive" instead of static.
 */
export default function Marquee({ items, speed = 40, reverse = false, variant = 'default' }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const lastY = useRef<number>(0);
  const lastT = useRef<number>(performance.now());

  useEffect(() => {
    const onScroll = () => {
      const t = performance.now();
      const y = window.scrollY;
      const dt = Math.max(1, t - lastT.current);
      const v = Math.abs(y - lastY.current) / dt; // px/ms
      lastY.current = y;
      lastT.current = t;
      // map velocity to a multiplier — clamp so it never zeros out
      const mult = Math.max(1, Math.min(5, 1 + v * 1.4));
      const next = `${(speed / mult).toFixed(2)}s`;
      if (trackRef.current) {
        trackRef.current.style.animationDuration = next;
      }
    };
    let raf = 0;
    const loop = () => {
      onScroll();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const seq = [...items, ...items, ...items];
  const isSerif = variant === 'serif';

  return (
    <div className="relative bg-black/40 backdrop-blur-sm border-y border-white/10 overflow-hidden py-6">
      <div
        ref={trackRef}
        className="flex gap-12 whitespace-nowrap will-change-transform"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {seq.map((item, i) => (
          <span
            key={i}
            className={
              isSerif
                ? 'font-serif-display text-2xl sm:text-3xl italic font-light text-white/55 flex items-center gap-12'
                : 'text-white/35 text-xs sm:text-sm tracking-[0.32em] uppercase font-mono flex items-center gap-12'
            }
          >
            {item}
            <span className="text-white/15">{isSerif ? '✦' : '◆'}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
