import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

type Stat = {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  detail: string;
};

const stats: Stat[] = [
  {
    prefix: '€',
    value: 20,
    suffix: 'M',
    label: 'Outcomes Influenced',
    detail:
      'Business value contributed in 2023 through data-driven process improvements at Allianz Australia.',
  },
  {
    value: 90,
    suffix: '%',
    label: 'Reporting Automated',
    detail:
      'Recurring reports moved from manual to automated via Power Automate and Power Query.',
  },
  {
    value: 60,
    suffix: '+',
    label: 'Reports Governed',
    detail:
      'Recurring and ad-hoc reports across commercial, operational, performance, and sales domains.',
  },
  {
    value: 11,
    label: 'Internal Awards',
    detail:
      '9× Best Performer + 2× All Rounder. Core member of the Stevie Gold Medal-winning team.',
  },
];

function StatCard({ stat, p }: { stat: Stat; p: number }) {
  const eased = 1 - Math.pow(1 - Math.min(1, Math.max(0, p)), 3);
  const v = Math.floor(eased * stat.value);
  return (
    <div className="relative bg-black/55 p-8 sm:p-10 group transition-colors hover:bg-black/35">
      <div className="text-white/40 text-xs tracking-[0.22em] uppercase mb-6">
        {stat.label}
      </div>
      <div className="text-white text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight mb-5 tabular-nums">
        {stat.prefix}
        {v}
        <span className="text-white/50">{stat.suffix}</span>
      </div>
      <div className="text-white/50 text-sm leading-relaxed max-w-xs">
        {stat.detail}
      </div>
    </div>
  );
}

export default function Impact() {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // section enters bottom of viewport (start) -> exits top (end)
      const start = vh * 0.85;
      const end = vh * 0.25;
      const span = start - end;
      const passed = start - r.top;
      const raw = passed / span;
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="impact"
      className="relative text-white py-24 sm:py-32 px-6 sm:px-12"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <Reveal>
          <div className="flex items-center gap-3 mb-6 text-white/50 text-xs tracking-[0.3em] uppercase">
            <span className="w-8 h-px bg-white/30" />
            Impact
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight mb-16 max-w-3xl">
            Measurable outcomes,
            <span className="text-white/40"> not anecdotes.</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
            {stats.map((s) => (
              <StatCard key={s.label} stat={s} p={progress} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
