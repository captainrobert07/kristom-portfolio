import { LineChart, Workflow, ShieldCheck, MessagesSquare } from 'lucide-react';
import Reveal from './Reveal';

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
      className="relative bg-black text-white py-24 sm:py-32 px-6 sm:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-6 text-white/50 text-xs tracking-[0.3em] uppercase">
            <span className="w-8 h-px bg-white/30" />
            Capabilities
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight mb-16 max-w-3xl">
            Four things I do well —
            <span className="text-white/40"> regardless of the industry on the door.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 90}>
                <div className="group relative bg-black p-8 sm:p-10 transition-colors hover:bg-white/[0.03] h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="liquid-glass rounded-xl p-3">
                      <Icon size={20} strokeWidth={1.5} className="text-white" />
                    </div>
                    <div className="text-white/30 text-xs tracking-[0.22em] font-mono">
                      {p.label}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium leading-snug mb-4">
                    {p.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-md">
                    {p.body}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
