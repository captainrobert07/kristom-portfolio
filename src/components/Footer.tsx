import { Infinity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black/40 backdrop-blur-sm text-white border-t border-white/10 px-6 sm:px-12 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white/80">
          <Infinity size={18} strokeWidth={1.5} />
          <span className="text-sm font-medium">Kristom Robert</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] tracking-[0.22em] uppercase text-white/40">
          <span>© {new Date().getFullYear()}</span>
          <span className="hidden sm:inline">·</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available Q2 2026
          </span>
          <span className="hidden sm:inline">·</span>
          <span>Bengaluru · GMT+5:30</span>
        </div>
      </div>
    </footer>
  );
}
