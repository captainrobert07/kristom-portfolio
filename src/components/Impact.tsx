import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { BigNumeral, ChartGlyph, GlyphBar, HairlineGrid, Timecode, EdgeTag } from './SectionDecor';
import { SerifAccent, TiltCard, LightLeakOnEnter, HairlineSweepOnEnter } from './Polish';

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

/* digit flicker — show random digits during the easing-in phase, settle when locked */
function FlickerDigit({ target, settled }: { target: number; settled: boolean }) {
  const [show, setShow] = useState(target);
  const lastTarget = useRef(target);

  useEffect(() => {
    // when target changes during scroll-scrub, briefly flicker before showing the new target
    if (target === lastTarget.current && settled) return;
    lastTarget.current = target;

    if (settled) {
      // about to settle — fast flicker to the final value
      let n = 0;
      const id = setInterval(() => {
        if (n++ > 4) {
          clearInterval(id);
          setShow(target);
        } else {
          setShow(Math.floor(Math.random() * 10 ** Math.max(1, String(target).length)));
        }
      }, 45);
      return () => clearInterval(id);
    }
    setShow(target);
  }, [target, settled]);

  return <span className={settled ? 'is-flickering' : ''}>{show}</span>;
}

function StatCard({ stat, p }: { stat: Stat; p: number }) {
  const eased = 1 - Math.pow(1 - Math.min(1, Math.max(0, p)), 3);
  const v = Math.floor(eased * stat.value);
  // settled = approached final number
  const settled = p > 0.98;
  return (
    <TiltCard className="h-full" max={2.5}>
      <div className="glass-card relative h-full p-8 sm:p-10 transition-colors">
        <div className="text-white/40 text-[10px] tracking-[0.32em] uppercase mb-6 font-mono">
          {stat.label}
        </div>
        <div className="text-white text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight mb-5 tabular-nums leading-none">
          {stat.prefix && <span className="serif-italic gradient-warm">{stat.prefix}</span>}
          <FlickerDigit target={v} settled={settled} />
          {stat.suffix && (
            <span className="serif-italic gradient-warm text-[0.7em]">{stat.suffix}</span>
          )}
        </div>
        <div className="text-white/55 text-sm leading-relaxed max-w-xs relative z-10">
          {stat.detail}
        </div>
      </div>
    </TiltCard>
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
      className="relative text-white py-24 sm:py-32 px-6 sm:px-12 overflow-hidden section-tint-warm"
    >
      <HairlineSweepOnEnter />
      <LightLeakOnEnter variant="warm" />
      <HairlineGrid opacity={0.04} />
      <BigNumeral num="03" position="right" />
      <ChartGlyph className="absolute bottom-12 left-6 w-[36vw] h-[18vw] max-w-[480px] max-h-[240px] opacity-90 pointer-events-none" />
      <EdgeTag side="left">IMPACT · 03</EdgeTag>
      <Timecode value="CH 03 · 06:45" className="absolute top-8 right-8 z-10" />
      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <Reveal>
          <div className="flex items-center gap-3 mb-6 text-white/50 text-xs tracking-[0.3em] uppercase">
            <span className="w-8 h-px bg-white/30" />
            Impact
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.05] tracking-tight mb-16 max-w-3xl">
            Measurable <SerifAccent gradient="warm">outcomes</SerifAccent>,
            <br className="hidden sm:block" />
            not <SerifAccent gradient="cool">anecdotes</SerifAccent>.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex items-center justify-between mb-6 text-white/40 font-mono text-[10px] tracking-[0.32em] uppercase">
            <span>Live Metrics · 2023 → 2026</span>
            <GlyphBar count={20} />
          </div>
        </Reveal>
        <Reveal delay={150} variant="scale">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s) => (
              <StatCard key={s.label} stat={s} p={progress} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
