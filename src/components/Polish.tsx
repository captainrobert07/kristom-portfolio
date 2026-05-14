import {
  ReactNode,
  useEffect,
  useRef,
  useState,
  MouseEvent as ReactMouseEvent,
  CSSProperties,
  MutableRefObject,
} from 'react';

/* ─────────────────────────────────────────────
   SerifAccent — Fraunces italic emphasis
   Wrap any inline word(s) for editorial accent
   ───────────────────────────────────────────── */
export function SerifAccent({
  children,
  gradient,
  className = '',
}: {
  children: ReactNode;
  gradient?: 'warm' | 'cool';
  className?: string;
}) {
  const grad = gradient === 'warm' ? 'gradient-warm' : gradient === 'cool' ? 'gradient-cool' : '';
  return <span className={`serif-italic ${grad} ${className}`}>{children}</span>;
}

/* ─────────────────────────────────────────────
   ViewportFrame — fixed 4-corner brackets at edges
   ───────────────────────────────────────────── */
export function ViewportFrame() {
  return (
    <div aria-hidden className="viewport-corners">
      <span />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Spotlight — soft radial light follows cursor
   on the page background (dark mode primarily)
   ───────────────────────────────────────────── */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;
    const onMove = (e: PointerEvent) => {
      if (!ref.current) return;
      ref.current.style.setProperty('--mx', `${e.clientX}px`);
      ref.current.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
  return <div ref={ref} className="spotlight" aria-hidden />;
}

/* ─────────────────────────────────────────────
   CursorTrail — fading dots behind cinematic cursor
   ───────────────────────────────────────────── */
export function CursorTrail({ count = 8 }: { count?: number }) {
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const positions = useRef<{ x: number; y: number }[]>([]);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    positions.current = Array.from({ length: count }, () => ({ x: -100, y: -100 }));

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener('pointermove', onMove);

    let raf = 0;
    const loop = () => {
      // skip work when the tab is hidden — saves CPU/battery
      if (document.hidden) {
        raf = requestAnimationFrame(loop);
        return;
      }
      let prevX = target.current.x;
      let prevY = target.current.y;
      for (let i = 0; i < positions.current.length; i++) {
        const p = positions.current[i];
        p.x += (prevX - p.x) * (0.30 - i * 0.025);
        p.y += (prevY - p.y) * (0.30 - i * 0.025);
        prevX = p.x;
        prevY = p.y;
        const dot = dotsRef.current[i];
        if (dot) {
          const op = (1 - i / positions.current.length) * 0.55;
          const sc = 1 - i * 0.08;
          dot.style.transform = `translate(${p.x}px, ${p.y}px) scale(${sc})`;
          dot.style.opacity = String(op);
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
    };
  }, [count]);

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) dotsRef.current[i] = el;
          }}
          className="cursor-trail-dot"
          aria-hidden
        />
      ))}
    </>
  );
}

/* ─────────────────────────────────────────────
   TiltCard — mouse-tilt parallax wrapper (3deg max)
   ───────────────────────────────────────────── */
type TiltProps = {
  children: ReactNode;
  className?: string;
  max?: number;
  glow?: boolean;
  style?: CSSProperties;
};
export function TiltCard({ children, className = '', max = 3, glow = false, style }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * 2 * max;
    const rx = -(py - 0.5) * 2 * max;
    el.style.setProperty('--tilt-x', `${rx}deg`);
    el.style.setProperty('--tilt-y', `${ry}deg`);
    el.style.setProperty('--tilt-mx', `${px * 100}%`);
    el.style.setProperty('--tilt-my', `${py * 100}%`);
    el.style.setProperty('--tilt-glow', '1');
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--tilt-x', '0deg');
    el.style.setProperty('--tilt-y', '0deg');
    el.style.setProperty('--tilt-glow', '0');
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt-surface relative ${className}`}
      style={style}
    >
      {children}
      {glow && <span className="tilt-glow" aria-hidden />}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MagneticButton — eases toward cursor on hover
   ───────────────────────────────────────────── */
type MagProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  download?: string;
  target?: string;
  rel?: string;
  strength?: number;
  ariaLabel?: string;
};
export function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  download,
  target,
  rel,
  strength = 0.25,
  ariaLabel,
}: MagProps) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: ReactMouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `translate(0, 0)`;
  };

  if (href) {
    return (
      <a
        ref={ref as MutableRefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        download={download}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={`magnetic ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      ref={ref as MutableRefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-label={ariaLabel}
      className={`magnetic ${className}`}
    >
      {children}
    </button>
  );
}

/* ─────────────────────────────────────────────
   LightLeakOnEnter — fires once when section enters viewport
   ───────────────────────────────────────────── */
export function LightLeakOnEnter({
  variant = 'warm',
  className = '',
}: {
  variant?: 'warm' | 'cool';
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [armed, setArmed] = useState(false);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting && !played) {
            setArmed(true);
            setPlayed(true);
          }
        }),
      { threshold: 0.18 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [played]);

  return (
    <span
      ref={ref}
      aria-hidden
      className={`light-leak ${variant === 'cool' ? 'light-leak-cool' : ''} ${
        armed ? '' : 'opacity-0 pointer-events-none'
      } ${className}`}
    />
  );
}

/* ─────────────────────────────────────────────
   HairlineSweepOnEnter — top-line sweep when entering
   ───────────────────────────────────────────── */
export function HairlineSweepOnEnter() {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting && !armed) setArmed(true);
        }),
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [armed]);

  return (
    <div ref={ref} aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {armed && <span className="hairline-sweep" />}
    </div>
  );
}

/* ─────────────────────────────────────────────
   StaggerWord — split "Word" into hero-letter spans
   for the H1 letter-by-letter reveal
   ───────────────────────────────────────────── */
export function StaggerWord({
  children,
  base = 0,
  per = 35,
  className = '',
}: {
  children: string;
  base?: number;
  per?: number;
  className?: string;
}) {
  return (
    <span className={`inline-block ${className}`}>
      {children.split('').map((ch, i) => (
        <span
          key={i}
          className="hero-letter"
          style={{ animationDelay: `${base + i * per}ms` }}
        >
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </span>
  );
}

/* ─────────────────────────────────────────────
   PortraitFrame — placeholder B&W portrait card
   (graceful when no image — uses initials wordmark)
   ───────────────────────────────────────────── */
export function PortraitFrame({
  src,
  alt = 'Portrait',
  initials = 'KR',
}: {
  src?: string;
  alt?: string;
  initials?: string;
}) {
  return (
    <figure className="relative aspect-[4/5] w-full max-w-[260px] sm:max-w-[360px] mx-auto rounded-2xl overflow-hidden glass-card group">
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.92] transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background:
              'radial-gradient(ellipse at 30% 30%, rgba(150,190,255,0.20), transparent 60%), linear-gradient(135deg, rgba(10,16,28,0.92), rgba(20,32,52,0.75))',
          }}
        >
          <span
            className="font-serif-display text-[12rem] leading-none italic font-light"
            style={{ color: 'rgba(150, 190, 255, 0.10)', letterSpacing: '-0.06em' }}
          >
            {initials}
          </span>
        </div>
      )}
      {/* film stock notch marks */}
      <div className="absolute top-3 left-3 right-3 flex justify-between text-[8px] tracking-[0.3em] font-mono text-white/40">
        <span>● 35MM</span>
        <span>EXP 2026</span>
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex justify-between text-[8px] tracking-[0.3em] font-mono text-white/40">
        <span>FRAME 14 / 36</span>
        <span>KODAK TRI-X</span>
      </div>
      {/* corner ticks */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/40" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/40" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/40" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/40" />
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}

/* ─────────────────────────────────────────────
   LogoWall — replaces a marquee with credentials grid
   ───────────────────────────────────────────── */
export function LogoWall() {
  const items = [
    { name: 'Allianz', sub: 'Insurance / Operations' },
    { name: 'Stevie Awards', sub: 'Gold Medal · Team' },
    { name: 'Tableau', sub: 'Certified Analyst' },
    { name: 'Power BI', sub: 'DataCamp Certified' },
    { name: 'IIT Roorkee', sub: 'Exec PG · GenAI' },
    { name: 'Atlassian', sub: 'Agile PM Certified' },
  ];
  return (
    <div className="relative bg-black/30 backdrop-blur-sm border-y border-white/10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-7xl mx-auto">
        {items.map((it, i) => (
          <div
            key={it.name}
            className="logo-cell group"
            style={{
              borderRight: i < items.length - 1 ? '1px solid rgba(180,210,255,0.10)' : 'none',
            }}
          >
            <div className="text-center px-3 transition-transform duration-500 group-hover:-translate-y-1">
              <div className="font-serif text-xl tracking-wide text-white/85">{it.name}</div>
              <div className="font-mono text-[9px] tracking-[0.28em] uppercase text-white/35 mt-1.5">
                {it.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DividerBand — full-bleed silent intermission band
   ───────────────────────────────────────────── */
export function DividerBand({ quote, attr }: { quote: string; attr?: string }) {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 py-28 sm:py-40">
      <span className="hairline-sweep" aria-hidden />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(120,170,255,0.12), transparent 70%)',
        }}
      />
      {/* slow rotating glyph */}
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="divider-glyph absolute right-[-4vw] top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[420px] max-h-[420px] opacity-30 pointer-events-none text-white/40"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        style={{ animation: 'sheenDrift 30s ease-in-out infinite' }}
      >
        <circle cx="100" cy="100" r="92" strokeDasharray="1 6" />
        <circle cx="100" cy="100" r="68" strokeDasharray="2 4" />
        <circle cx="100" cy="100" r="44" />
        <circle cx="100" cy="100" r="20" strokeDasharray="3 3" />
      </svg>
      <div className="max-w-4xl mx-auto px-8 text-center relative">
        <div className="font-mono text-[10px] tracking-[0.45em] uppercase text-white/35 mb-8 flex items-center justify-center gap-3">
          <span className="w-12 h-px bg-white/30" />
          Intermission
          <span className="w-12 h-px bg-white/30" />
        </div>
        <p className="font-serif-display text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight italic font-light text-white/85">
          &ldquo;{quote}&rdquo;
        </p>
        {attr && (
          <p className="mt-8 font-mono text-[11px] tracking-[0.32em] uppercase text-white/40">
            — {attr}
          </p>
        )}
      </div>
    </div>
  );
}
