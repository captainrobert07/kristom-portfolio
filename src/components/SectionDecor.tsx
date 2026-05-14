import { ReactNode } from 'react';

/**
 * Reusable decorative primitives — used to give each section
 * its own visual texture without changing layout.
 *
 * All are absolutely positioned, pointer-events: none, and
 * stay inside their parent (parent should be `relative`).
 */

/* ──────────── 1. Giant section numeral ──────────── */
export function BigNumeral({
  num,
  position = 'right',
  className = '',
}: {
  num: string;
  position?: 'left' | 'right';
  className?: string;
}) {
  const side = position === 'right' ? 'right-[-2vw] sm:right-[-1vw]' : 'left-[-2vw] sm:left-[-1vw]';
  return (
    <div
      aria-hidden
      className={`big-numeral absolute top-8 ${side} text-[18vw] sm:text-[14vw] leading-none font-medium tracking-tighter text-white/[0.04] select-none pointer-events-none ${className}`}
    >
      {num}
    </div>
  );
}

/* ──────────── 2. Corner brackets ──────────── */
export function CornerBrackets({ inset = 24 }: { inset?: number }) {
  const s = `${inset}px`;
  const len = '36px';
  const stroke = 'rgba(255,255,255,0.18)';
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      <div className="absolute" style={{ top: s, left: s, width: len, height: '1px', background: stroke }} />
      <div className="absolute" style={{ top: s, left: s, width: '1px', height: len, background: stroke }} />
      <div className="absolute" style={{ top: s, right: s, width: len, height: '1px', background: stroke }} />
      <div className="absolute" style={{ top: s, right: s, width: '1px', height: len, background: stroke }} />
      <div className="absolute" style={{ bottom: s, left: s, width: len, height: '1px', background: stroke }} />
      <div className="absolute" style={{ bottom: s, left: s, width: '1px', height: len, background: stroke }} />
      <div className="absolute" style={{ bottom: s, right: s, width: len, height: '1px', background: stroke }} />
      <div className="absolute" style={{ bottom: s, right: s, width: '1px', height: len, background: stroke }} />
    </div>
  );
}

/* ──────────── 3. Hairline grid (subtle blueprint texture) ──────────── */
export function HairlineGrid({ opacity = 0.05 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,${opacity}) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }}
    />
  );
}

/* ──────────── 4. Edge tag (vertical text rail) ──────────── */
export function EdgeTag({
  children,
  side = 'left',
}: {
  children: ReactNode;
  side?: 'left' | 'right';
}) {
  const pos = side === 'right' ? 'right-4' : 'left-4';
  const rot = side === 'right' ? 'rotate-90' : '-rotate-90';
  return (
    <div
      aria-hidden
      className={`hidden lg:block absolute ${pos} top-1/2 -translate-y-1/2 origin-center pointer-events-none`}
    >
      <div
        className={`${rot} whitespace-nowrap font-mono text-[10px] tracking-[0.5em] uppercase text-white/30 flex items-center gap-3`}
      >
        <span className="w-6 h-px bg-white/30" />
        {children}
        <span className="w-6 h-px bg-white/30" />
      </div>
    </div>
  );
}

/* ──────────── 5. Glyph bar — a row of mono "ticks" like a film strip ──────────── */
export function GlyphBar({ count = 12, className = '' }: { count?: number; className?: string }) {
  return (
    <div aria-hidden className={`flex gap-1 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="block w-1 h-3 rounded-sm bg-white/10"
          style={{ opacity: 0.2 + (i / count) * 0.6 }}
        />
      ))}
    </div>
  );
}

/* ──────────── 6. SVG diagram — a generic chart silhouette ──────────── */
export function ChartGlyph({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 100"
      className={`text-white/15 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 80 L30 60 L55 70 L80 35 L110 50 L140 20 L175 30 L200 10" />
      <path d="M0 90 L200 90" strokeDasharray="2 4" opacity="0.5" />
      <path d="M0 50 L200 50" strokeDasharray="2 4" opacity="0.3" />
      {[
        [30, 60], [80, 35], [110, 50], [140, 20], [175, 30],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill="currentColor" opacity="0.7" />
      ))}
    </svg>
  );
}

/* ──────────── 7. Orbital glyph — concentric rings (governance / system) ──────────── */
export function OrbitGlyph({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className={`text-white/12 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <circle cx="100" cy="100" r="92" strokeDasharray="2 4" opacity="0.5" />
      <circle cx="100" cy="100" r="68" />
      <circle cx="100" cy="100" r="42" strokeDasharray="3 3" opacity="0.7" />
      <circle cx="100" cy="100" r="2" fill="currentColor" />
      <circle cx="192" cy="100" r="3" fill="currentColor" opacity="0.8" />
      <circle cx="100" cy="32" r="2.5" fill="currentColor" opacity="0.6" />
      <circle cx="58" cy="142" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

/* ──────────── 8. Connecting nodes glyph (network / flow) ──────────── */
export function FlowGlyph({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 120"
      className={`text-white/15 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M20 60 L70 30 L130 80 L180 40" strokeDasharray="2 3" />
      <path d="M20 60 L70 90 L130 30 L180 80" strokeDasharray="2 3" />
      {[[20, 60], [70, 30], [70, 90], [130, 30], [130, 80], [180, 40], [180, 80]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="currentColor" />
      ))}
    </svg>
  );
}

/* ──────────── 9. Quote glyph — large open quote ──────────── */
export function QuoteGlyph({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 80 80"
      className={`text-white/10 ${className}`}
      fill="currentColor"
    >
      <path d="M22 18C13 22 6 32 6 46c0 9 5 16 14 16 7 0 12-5 12-12 0-6-4-11-10-11-1 0-2 0-3 1 1-7 6-13 13-16l-10-6zM58 18c-9 4-16 14-16 28 0 9 5 16 14 16 7 0 12-5 12-12 0-6-4-11-10-11-1 0-2 0-3 1 1-7 6-13 13-16l-10-6z" />
    </svg>
  );
}

/* ──────────── 10. Timecode strip ──────────── */
export function Timecode({ value, className = '' }: { value: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={`font-mono text-[10px] tracking-[0.32em] uppercase text-white/35 flex items-center gap-2 ${className}`}
    >
      <span className="w-4 h-px bg-white/30" />
      {value}
    </div>
  );
}

/* ──────────── 11. Accent dot row (visual rhythm marker) ──────────── */
export function DotRow({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`flex items-center gap-2 ${className}`}>
      <span className="w-1 h-1 rounded-full bg-white/60" />
      <span className="w-1 h-1 rounded-full bg-white/40" />
      <span className="w-1 h-1 rounded-full bg-white/20" />
      <span className="w-12 h-px bg-white/20" />
    </div>
  );
}
