import { useEffect, useRef, useState } from 'react';

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

function useCount(target: number, run: boolean, duration = 1500) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setV(Math.floor(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return v;
}

function StatCard({ stat, run }: { stat: Stat; run: boolean }) {
  const v = useCount(stat.value, run);
  return (
    <div className="relative bg-black p-8 sm:p-10 group transition-colors hover:bg-white/[0.03]">
      <div className="text-white/40 text-xs tracking-[0.22em] uppercase mb-6">
        {stat.label}
      </div>
      <div className="text-white text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight mb-5">
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
  const [run, setRun] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setRun(true)),
      { threshold: 0.25 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative bg-black text-white py-24 sm:py-32 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="flex items-center gap-3 mb-6 text-white/50 text-xs tracking-[0.3em] uppercase">
          <span className="w-8 h-px bg-white/30" />
          Impact
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight mb-16 max-w-3xl">
          Measurable outcomes,
          <span className="text-white/40"> not anecdotes.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} run={run} />
          ))}
        </div>
      </div>
    </section>
  );
}
