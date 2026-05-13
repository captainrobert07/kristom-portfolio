import Reveal from './Reveal';
import { BigNumeral, EdgeTag, OrbitGlyph, Timecode, HairlineGrid } from './SectionDecor';
import { SerifAccent, LightLeakOnEnter, HairlineSweepOnEnter } from './Polish';

type Group = {
  label: string;
  items: string[];
  accent?: 'warm' | 'cool';
};

const groups: Group[] = [
  {
    label: 'Analytics & BI',
    items: ['Power BI', 'Tableau', 'SQL', 'SAS 9.4', 'SAS EG', 'SAS Dholap', 'Excel', 'Power Query'],
    accent: 'warm',
  },
  {
    label: 'Automation & Data',
    items: ['Power Automate', 'Power Apps', 'ETL', 'Azure ADLS', 'Salesforce', 'Zoho'],
  },
  {
    label: 'Coming Up Next',
    items: ['Python', 'Generative AI', 'ML Foundations', 'Statistical Modeling'],
    accent: 'cool',
  },
  {
    label: 'Discipline',
    items: ['Data Governance', 'KPI Design', 'Trend Analysis', 'Performance Monitoring', 'Stakeholder Mgmt', 'Agile / Scrum', 'Decision Support'],
  },
  {
    label: 'Communication & Design',
    items: ['Storytelling', 'Executive Decks', 'Figma', 'Photoshop', 'Premiere Pro', 'Cross-functional Collab'],
  },
];

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative text-white py-24 sm:py-32 px-6 sm:px-12 overflow-hidden section-tint-cool"
    >
      <HairlineSweepOnEnter />
      <LightLeakOnEnter variant="cool" />
      <HairlineGrid opacity={0.03} />
      <BigNumeral num="05" position="right" />
      <OrbitGlyph className="absolute bottom-[-8vw] left-[-6vw] w-[36vw] h-[36vw] max-w-[500px] max-h-[500px] opacity-70 pointer-events-none" />
      <EdgeTag side="left">STACK · 05</EdgeTag>
      <Timecode value="CH 05 · 10:38" className="absolute top-8 right-8 z-10" />
      <div className="max-w-6xl mx-auto relative">
        <Reveal>
          <div className="flex items-center gap-3 mb-6 text-white/50 text-xs tracking-[0.3em] uppercase">
            <span className="w-8 h-px bg-white/30" />
            Stack
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.05] tracking-tight mb-16 max-w-3xl">
            What I work with — and what I'm{' '}
            <SerifAccent gradient="warm">building toward</SerifAccent>.
          </h2>
        </Reveal>

        <div className="space-y-10">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 70}>
              <div className="grid md:grid-cols-12 gap-6 items-start border-t border-white/10 pt-8">
                <div className="md:col-span-3 pt-1.5">
                  {g.accent ? (
                    <div className="font-serif-display text-2xl italic font-light leading-tight">
                      <SerifAccent gradient={g.accent}>{g.label}</SerifAccent>
                    </div>
                  ) : (
                    <div className="font-serif-display text-2xl italic font-light leading-tight text-white/85">
                      {g.label}
                    </div>
                  )}
                  <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-white/35 mt-2">
                    / {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="md:col-span-9 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="liquid-glass text-white/85 text-sm px-4 py-2 rounded-full transition-all duration-300 hover:text-white hover:scale-[1.02]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
