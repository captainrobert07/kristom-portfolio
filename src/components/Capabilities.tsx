import { LineChart, Workflow, ShieldCheck, MessagesSquare } from 'lucide-react';
import Reveal from './Reveal';
import { BigNumeral, EdgeTag, OrbitGlyph, HairlineGrid, Timecode } from './SectionDecor';
import { SerifAccent, TiltCard, LightLeakOnEnter, HairlineSweepOnEnter } from './Polish';

const pillars = [
  {
    icon: LineChart,
    label: '01',
    title: 'Decision Intelligence',
    body: 'Building dashboards, reports, and analyses that answer the actual question — not the question that was easy to query. Power BI, Tableau, SQL, SAS, Excel.',
    tags: ['Power BI', 'Tableau', 'SQL', 'KPI Design', 'Trend Analysis'],
  },
  {
    icon: Workflow,
    label: '02',
    title: 'Automation & Pipelines',
    body: 'Reporting that runs itself. Power Automate flows, refresh cycles, validation gates. Cut manual reporting effort 40–90% across past roles. Less work, fewer mistakes.',
    tags: ['Power Automate', 'ETL', 'Power Apps', 'Power Query', 'Azure ADLS'],
  },
  {
    icon: ShieldCheck,
    label: '03',
    title: 'Governance & Trust',
    body: 'Metric definitions, ownership, version control, refresh standards, audit traceability. The unsexy work that makes data trustworthy enough to build on.',
    tags: ['Data Governance', 'Documentation', 'QA', 'Validation', 'Reconciliation'],
  },
  {
    icon: MessagesSquare,
    label: '04',
    title: 'Stakeholder Translation',
    body: 'Turning ambiguous business questions into structured analysis, and turning analysis back into language a leader can act on. Decks, narratives, executive summaries.',
    tags: ['Storytelling', 'Decks', 'Figma', 'Adobe Suite', 'Decision Support'],
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative text-white py-24 sm:py-32 px-6 sm:px-12 overflow-hidden section-tint-cool"
    >
      <HairlineSweepOnEnter />
      <LightLeakOnEnter variant="cool" />
      <HairlineGrid opacity={0.04} />
      <BigNumeral num="02" position="left" />
      <OrbitGlyph className="absolute top-1/2 right-[-8vw] -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] opacity-80 pointer-events-none" />
      <EdgeTag side="right">CAPABILITIES · 02</EdgeTag>
      <Timecode value="CH 02 · 04:30" className="absolute top-8 right-8 z-10" />
      <div className="max-w-6xl mx-auto relative">
        <Reveal>
          <div className="flex items-center gap-3 mb-6 text-white/50 text-xs tracking-[0.3em] uppercase">
            <span className="w-8 h-px bg-white/30" />
            Capabilities
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.05] tracking-tight mb-16 max-w-3xl">
            Four things I do well — <SerifAccent gradient="warm">regardless</SerifAccent> of the{' '}
            <SerifAccent gradient="cool">industry</SerifAccent> on the door.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 90} variant="scale">
                <TiltCard className="h-full">
                  <div className="glass-card relative h-full p-8 sm:p-10 transition-colors">
                    <div className="flex items-start justify-between mb-8">
                      <div className="liquid-glass rounded-xl p-3">
                        <Icon size={20} strokeWidth={1.5} className="text-white" />
                      </div>
                      <div className="text-white/30 text-xs tracking-[0.32em] font-mono numeral-shift">
                        / {p.label}
                      </div>
                    </div>
                    <h3 className="font-serif-display text-2xl sm:text-3xl leading-[1.05] tracking-tight mb-4 italic font-light">
                      {p.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
                      {p.body}
                    </p>
                    <div className="flex flex-wrap gap-1.5 relative z-10">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="liquid-glass text-white/70 text-[11px] tracking-wide px-2.5 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
