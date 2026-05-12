/**
 * Shared cinematic background that carries the hero video's blue/yellow palette
 * across every section.
 *
 * Layers (back to front):
 *   1. Deep base (warm-cool near-black)
 *   2. Three saturated radial blobs — yellow / blue / deep teal
 *   3. Caustics-style highlight band (slow drift)
 *   4. Light dust particles (CSS-only, looped)
 *   5. Film grain
 *   6. Edge vignette
 */
export default function BackgroundField() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* base */}
      <div className="absolute inset-0 bg-[#070912]" />

      {/* big saturated blobs — same palette as hero (warm yellow + cool blue) */}
      <div
        className="absolute -top-[20%] -left-[15%] w-[80vw] h-[80vh] rounded-full opacity-50 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(255,200,100,0.85) 0%, rgba(255,170,80,0.25) 35%, transparent 70%)' }}
      />
      <div
        className="absolute top-[10%] -right-[20%] w-[85vw] h-[85vh] rounded-full opacity-55 blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(70,140,255,0.85) 0%, rgba(50,100,220,0.30) 35%, transparent 70%)' }}
      />
      <div
        className="absolute top-[40%] left-[15%] w-[60vw] h-[60vh] rounded-full opacity-35 blur-[110px]"
        style={{ background: 'radial-gradient(circle, rgba(255,180,90,0.7) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-[20%] right-[5%] w-[70vw] h-[70vh] rounded-full opacity-45 blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(60,130,250,0.75) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[10%] -left-[10%] w-[55vw] h-[55vh] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(40,200,220,0.6) 0%, transparent 70%)' }}
      />

      {/* caustics-style sweep band — drifts vertically */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-screen"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(255,210,140,0.25) 25%, transparent 45%, rgba(120,180,255,0.20) 65%, transparent 100%)',
          animation: 'sheenDrift 22s ease-in-out infinite',
        }}
      />

      {/* drifting light dust — small slow points */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(1.5px 1.5px at 20% 30%, rgba(255,220,160,0.7), transparent), ' +
            'radial-gradient(1.5px 1.5px at 70% 65%, rgba(180,210,255,0.7), transparent), ' +
            'radial-gradient(1px 1px at 45% 80%, rgba(255,200,140,0.6), transparent), ' +
            'radial-gradient(1px 1px at 85% 20%, rgba(160,200,255,0.6), transparent), ' +
            'radial-gradient(1.2px 1.2px at 30% 55%, rgba(255,230,180,0.5), transparent)',
          backgroundSize: '600px 600px',
          animation: 'dustDrift 60s linear infinite',
        }}
      />

      {/* second dust layer — counter-drifting */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(1px 1px at 12% 15%, rgba(180,220,255,0.7), transparent), ' +
            'radial-gradient(1px 1px at 60% 35%, rgba(255,210,150,0.7), transparent), ' +
            'radial-gradient(1.4px 1.4px at 90% 70%, rgba(140,180,255,0.6), transparent), ' +
            'radial-gradient(1px 1px at 25% 90%, rgba(255,225,170,0.5), transparent)',
          backgroundSize: '500px 500px',
          animation: 'dustDrift 90s linear infinite reverse',
        }}
      />

      {/* film grain — high frequency texture */}
      <div
        className="absolute inset-0 opacity-[0.20] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='9'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.4 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
          backgroundSize: '180px 180px',
        }}
      />

      {/* edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.65) 100%)',
        }}
      />
    </div>
  );
}
