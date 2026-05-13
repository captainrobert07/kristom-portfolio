import { useState } from 'react';
import { ChevronDown, Infinity, Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { MagneticButton, SerifAccent, StaggerWord } from './Polish';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4';

type NavLink = {
  label: string;
  href: string;
  active?: boolean;
  dropdown?: boolean;
};

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Work', href: '#work', dropdown: true },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <section id="home" data-force-dark className="relative w-full h-screen overflow-hidden">
      {/* background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={BG_VIDEO}
      />

      {/* navbar */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 sm:px-8 py-5">
        <a href="#home" className="flex items-center gap-2 text-white font-medium text-base">
          <Infinity size={22} strokeWidth={1.5} />
          <span>Kristom Robert</span>
        </a>

        <div className="liquid-glass hidden md:flex items-center gap-1 rounded-xl px-2 py-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`flex items-center gap-0.5 px-3 py-1.5 rounded-md text-sm transition-colors ${
                link.active
                  ? 'bg-white/15 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
              {link.dropdown && <ChevronDown size={13} className="mt-px" />}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="liquid-glass text-white p-2.5 rounded-full hover:bg-white/5 transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="/resume.pdf"
            download="Kristom-Robert-Resume.pdf"
            className="liquid-glass text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/5 transition-colors flex items-center gap-1.5"
          >
            <Download size={14} />
            Resume
          </a>
          <a
            href="#contact"
            className="bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/90 transition-colors"
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden liquid-glass text-white p-2 rounded-lg"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute top-[72px] left-4 right-4 z-30 md:hidden liquid-glass rounded-2xl p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm transition-colors ${
                link.active
                  ? 'bg-white/15 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <span>{link.label}</span>
              {link.dropdown && <ChevronDown size={14} />}
            </a>
          ))}
          <div className="flex gap-2 mt-2 pt-3 border-t border-white/10">
            <button
              onClick={toggle}
              className="liquid-glass text-white text-sm font-medium px-3 py-2.5 rounded-full hover:bg-white/5 transition-colors flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href="/resume.pdf"
              download="Kristom-Robert-Resume.pdf"
              className="flex-1 liquid-glass text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/5 transition-colors text-center flex items-center justify-center gap-1.5"
            >
              <Download size={14} /> Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex-1 bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/90 transition-colors text-center"
            >
              Hire
            </a>
          </div>
        </div>
      )}

      {/* hero content */}
      <div className="absolute bottom-0 left-0 z-20 px-6 sm:px-12 pb-10 sm:pb-16 max-w-2xl">
        <div className="liquid-glass inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-white/80 text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available Q2 2026 · Remote / Hybrid
        </div>
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-medium leading-[1.02] tracking-tight mb-4 [perspective:600px]">
          <span className="block">
            <StaggerWord per={28}>Data,</StaggerWord>
          </span>
          <span className="block">
            <SerifAccent gradient="warm" className="text-[1.06em]">
              <StaggerWord base={250} per={28}>Translated</StaggerWord>
            </SerifAccent>{' '}
            <StaggerWord base={650} per={28}>Into</StaggerWord>
          </span>
          <span className="block">
            <StaggerWord base={900} per={28}>Decisions.</StaggerWord>
          </span>
        </h1>
        <p className="text-white/60 text-sm leading-relaxed mb-7 max-w-md">
          I sit between the people who ship the work and the people who need to
          understand it. Six years turning messy systems, scattered numbers, and
          stakeholder questions into reporting, automation, and insight people
          actually use.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <MagneticButton
            href="#work"
            className="inline-flex items-center bg-white text-black text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            See My Work
          </MagneticButton>
          <MagneticButton
            href="#about"
            className="inline-flex items-center liquid-glass text-white text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/5 transition-colors"
          >
            Read Profile
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
