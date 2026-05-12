import { useEffect, useState } from 'react';

const sections = [
  { id: 'home', num: '00', label: 'Home' },
  { id: 'about', num: '01', label: 'About' },
  { id: 'capabilities', num: '02', label: 'Capabilities' },
  { id: 'impact', num: '03', label: 'Impact' },
  { id: 'work', num: '04', label: 'Experience' },
  { id: 'stack', num: '05', label: 'Stack' },
  { id: 'recognition', num: '06', label: 'Recognition' },
  { id: 'contact', num: '07', label: 'Contact' },
];

export default function ProgressRail() {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0);

      // find section currently centered in viewport
      const mid = window.innerHeight / 2;
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) {
          current = s.id;
          break;
        }
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const active = sections.find((s) => s.id === activeId) ?? sections[0];

  return (
    <>
      {/* vertical rail (desktop only) */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3">
        <div className="text-white/40 text-[10px] tracking-[0.3em] font-mono">
          {String(Math.floor(progress * 100)).padStart(2, '0')}
        </div>
        <div className="relative w-px h-[40vh] bg-white/10 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-px bg-white/80 transition-[height] duration-200"
            style={{ height: `${progress * 100}%` }}
          />
        </div>
        <div className="flex flex-col items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-white/40 font-mono">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`transition-colors ${
                s.id === activeId ? 'text-white' : 'hover:text-white/70'
              }`}
              aria-label={s.label}
            >
              {s.num}
            </a>
          ))}
        </div>
      </div>

      {/* sticky chapter badge (top-right, all viewports) */}
      <div className="fixed top-1/2 right-6 -translate-y-1/2 z-30 hidden md:flex flex-col items-end gap-1 pointer-events-none">
        <div className="text-white/30 text-[10px] tracking-[0.3em] font-mono">
          CHAPTER · {active.num}
        </div>
        <div className="text-white/80 text-xs tracking-[0.22em] uppercase font-medium">
          {active.label}
        </div>
        <div className="w-8 h-px bg-white/30 mt-1" />
      </div>
    </>
  );
}
