/**
 * Single fixed background that lives behind every section.
 * Carries the palette/mood of the hero video without repeating it.
 *
 * Layers (back to front):
 *   1. Deep base color
 *   2. Three soft radial gradients in muted ivory / warm amber / cool teal
 *   3. Slow vertical sheen that drifts on a 24s loop
 *   4. SVG grain texture for film stock feel
 *   5. Top-edge vignette so the hero video transitions cleanly
 */
export default function BackgroundField() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* base */}
      <div className="absolute inset-0 bg-[#0a0908]" />

      {/* color blobs — ivory / amber / teal whisper */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[80vw] h-[80vh] rounded-full opacity-[0.18] blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(220,200,170,1) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/3 -right-1/4 w-[70vw] h-[70vh] rounded-full opacity-[0.10] blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(255,170,90,1) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-1/4 left-1/4 w-[80vw] h-[80vh] rounded-full opacity-[0.08] blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(80,160,180,1) 0%, transparent 70%)' }}
      />

      {/* slow drifting sheen */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-soft-light"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(255,240,220,0.12) 30%, transparent 50%, rgba(160,140,120,0.10) 70%, transparent 100%)',
          animation: 'sheenDrift 28s ease-in-out infinite',
        }}
      />

      {/* grain — film stock */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='9'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.4 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
          backgroundSize: '180px 180px',
        }}
      />

      {/* edge vignette so corners stay deep */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)',
        }}
      />
    </div>
  );
}
