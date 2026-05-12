import { useEffect, useRef, useState } from 'react';

const sectionLabels: Record<string, string> = {
  home: '00',
  about: '01',
  capabilities: '02',
  impact: '03',
  work: '04',
  stack: '05',
  recognition: '06',
  writing: '07',
  contact: '08',
};

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [chapter, setChapter] = useState('00');

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.body.classList.add('cursor-cinematic');

    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let dx = rx;
    let dy = ry;

    const onMove = (e: PointerEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      // ring lags slightly for a cinematic trail
      // dot tracks instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
      }

      // detect interactive hover for ring scale
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest(
        'a, button, [role="button"], input, label, [data-cursor="hover"]',
      );
      setActive(interactive);
    };

    let raf = 0;
    const loop = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // chapter readout — observe sections in viewport center
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      const sections = Object.keys(sectionLabels);
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) {
          current = id;
          break;
        }
      }
      setChapter(sectionLabels[current] ?? '00');
    };
    onScroll();
    window.addEventListener('pointermove', onMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', onScroll);
      document.body.classList.remove('cursor-cinematic');
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 z-[200] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color,background] duration-300 ${
          active ? 'w-12 h-12 border-white/90 bg-white/10' : 'w-9 h-9 border-white/50 bg-transparent'
        } border rounded-full flex items-center justify-center`}
        aria-hidden="true"
      >
        <span className="text-[9px] font-mono tracking-[0.2em] text-white/70 select-none">
          {chapter}
        </span>
      </div>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[201] pointer-events-none -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white"
        aria-hidden="true"
      />
    </>
  );
}
