import { useEffect, useState } from 'react';

/**
 * Shared cinematic background.
 * Two palettes — dark (blue/yellow lit room) and light (warm cream + ink whisper).
 * Listens to the `data-theme` attribute on <html>.
 */
export default function BackgroundField() {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    typeof document !== 'undefined' && document.documentElement.dataset.theme === 'light'
      ? 'light'
      : 'dark',
  );

  useEffect(() => {
    const obs = new MutationObserver(() => {
      setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);

  if (theme === 'light') return <LightField />;
  return <DarkField />;
}

function DarkField() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#070912]" />
      <div className="absolute -top-[20%] -left-[15%] w-[80vw] h-[80vh] rounded-full opacity-50 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(80,140,240,0.85) 0%, rgba(40,90,180,0.25) 35%, transparent 70%)' }} />
      <div className="absolute top-[10%] -right-[20%] w-[85vw] h-[85vh] rounded-full opacity-55 blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(110,170,255,0.85) 0%, rgba(50,100,220,0.30) 35%, transparent 70%)' }} />
      <div className="absolute top-[40%] left-[15%] w-[60vw] h-[60vh] rounded-full opacity-35 blur-[110px]"
        style={{ background: 'radial-gradient(circle, rgba(40,140,200,0.7) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-[20%] right-[5%] w-[70vw] h-[70vh] rounded-full opacity-45 blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(60,130,250,0.75) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[10%] -left-[10%] w-[55vw] h-[55vh] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(40,200,220,0.6) 0%, transparent 70%)' }} />

      <svg className="absolute inset-0 w-full h-full opacity-65 mix-blend-overlay" preserveAspectRatio="none">
        <defs>
          <radialGradient id="ngWarm" cx="20%" cy="25%" r="70%">
            <stop offset="0%" stopColor="rgba(150,190,255,0.92)" />
            <stop offset="50%" stopColor="rgba(80,130,220,0.28)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          <radialGradient id="ngCool" cx="80%" cy="65%" r="70%">
            <stop offset="0%" stopColor="rgba(70,130,230,0.90)" />
            <stop offset="50%" stopColor="rgba(40,90,180,0.30)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          <filter id="ngTurb" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.020" numOctaves="2" seed="7" stitchTiles="stitch" />
            <feDisplacementMap in="SourceGraphic" scale="120" />
            <feGaussianBlur stdDeviation="0.4" />
          </filter>
          <filter id="ngTurb2" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9 0.9" numOctaves="2" seed="3" />
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.18 0" />
          </filter>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#ngWarm)" filter="url(#ngTurb)" />
        <rect x="0" y="0" width="100%" height="100%" fill="url(#ngCool)" filter="url(#ngTurb)" />
        <rect x="0" y="0" width="100%" height="100%" filter="url(#ngTurb2)" />
      </svg>

      <div className="absolute inset-0 opacity-30 mix-blend-screen"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(170,200,255,0.22) 25%, transparent 45%, rgba(90,150,240,0.20) 65%, transparent 100%)',
          animation: 'sheenDrift 22s ease-in-out infinite',
        }} />

      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(1.5px 1.5px at 20% 30%, rgba(180,210,255,0.85), transparent), ' +
            'radial-gradient(1.5px 1.5px at 70% 65%, rgba(140,190,255,0.85), transparent), ' +
            'radial-gradient(1px 1px at 45% 80%, rgba(160,200,255,0.7), transparent), ' +
            'radial-gradient(1px 1px at 85% 20%, rgba(120,170,255,0.7), transparent), ' +
            'radial-gradient(1.2px 1.2px at 30% 55%, rgba(200,220,255,0.6), transparent)',
          backgroundSize: '600px 600px',
          animation: 'dustDrift 60s linear infinite',
        }} />

      <div className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(1px 1px at 12% 15%, rgba(180,220,255,0.8), transparent), ' +
            'radial-gradient(1px 1px at 60% 35%, rgba(110,170,250,0.8), transparent), ' +
            'radial-gradient(1.4px 1.4px at 90% 70%, rgba(140,180,255,0.7), transparent), ' +
            'radial-gradient(1px 1px at 25% 90%, rgba(160,200,250,0.6), transparent)',
          backgroundSize: '500px 500px',
          animation: 'dustDrift 90s linear infinite reverse',
        }} />

      <div className="absolute inset-0 opacity-[0.22] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='9'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.4 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
          backgroundSize: '180px 180px',
        }} />

      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.65) 100%)' }} />
    </div>
  );
}

function LightField() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#eef3fb]" />
      {/* cool blue wash blobs */}
      <div className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vh] rounded-full opacity-70 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(190,215,255,0.85) 0%, transparent 70%)' }} />
      <div className="absolute top-[20%] -right-[15%] w-[75vw] h-[75vh] rounded-full opacity-55 blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(150,185,240,0.75) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-[15%] left-[10%] w-[60vw] h-[60vh] rounded-full opacity-50 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(170,200,250,0.7) 0%, transparent 70%)' }} />

      {/* paper grain (cool ink) */}
      <div className="absolute inset-0 opacity-[0.28] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='11'/><feColorMatrix values='0 0 0 0 0.06  0 0 0 0 0.10  0 0 0 0 0.16  0 0 0 0.55 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
          backgroundSize: '180px 180px',
        }} />

      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(40,60,110,0.18) 100%)' }} />
    </div>
  );
}
