import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import Reveal from './Reveal';

type Role = {
  when: string;
  mode: string;
  city: string;
  title: string;
  org: string;
  summary: string;
  detail: string;
  tags?: string[];
};

const roles: Role[] = [
  {
    when: 'Mar 2025 — Present',
    mode: 'Hybrid',
    city: 'UK Operations',
    title: 'Business Intelligence Consultant',
    org: 'Allianz — UK Operations',
    summary:
      'Owns 10+ Power BI & Tableau dashboards and 60+ governed reports for UK commercial, revenue, and sales teams.',
    detail:
      'Salesforce data, downstream reporting, audit-ready governance. Cut manual reporting effort 40–50% via Power Automate. Translates commercial requirements into structured analytical solutions, and translates analysis back into language leadership can act on.',
    tags: ['Power BI', 'Tableau', 'SQL', 'SAS', 'Salesforce', 'Power Automate'],
  },
  {
    when: 'Jan 2024 — Mar 2025',
    mode: 'Onsite',
    city: 'Australia Operations',
    title: 'Data Analyst — BI & Reporting',
    org: 'Allianz — Australia Operations',
    summary:
      'Built service, operational, revenue, and billing analytics. Owned reporting for 250+ employees.',
    detail:
      'Automated ~90% of recurring reports. Contributed to €20M in business outcomes through data-driven process improvements. Designed the manager-level performance dashboard used across leadership reviews.',
    tags: ['SLA Reporting', 'KPI Design', 'Executive Decks', 'Validation'],
  },
  {
    when: 'Feb 2022 — Dec 2023',
    mode: 'Onsite',
    city: 'Insurance Ops',
    title: 'Senior Customer Service Associate',
    org: 'Allianz Services',
    summary:
      'End-to-end customer support for Australian insurance customers. Daily/weekly performance reporting for team leads.',
    detail:
      'Quality checks, mentoring, SLA compliance — the operational foundation behind every dashboard I build today. This role taught me what frontline data actually looks like before it gets cleaned.',
    tags: ['Quality', 'Mentoring', 'Reporting'],
  },
  {
    when: 'Apr 2021 — Feb 2022',
    mode: 'Remote',
    city: 'EdTech',
    title: 'Community Manager',
    org: 'Daily Skills',
    summary:
      'Led community and customer support for an online learning platform.',
    detail:
      'Designed training, monitored engagement, streamlined support workflows. Learned how to read user feedback as data instead of noise.',
  },
  {
    when: 'Oct 2020 — Feb 2022',
    mode: 'Onsite',
    city: 'Education',
    title: 'IELTS Educator',
    org: 'Brighten Educational Academy',
    summary:
      'Taught speaking, writing, reading, and listening modules. Built course materials and assessments.',
    detail:
      'Where I learned that "good explanation" is a skill — and that most people who know things can\'t teach them. Every dashboard I build now has a teacher\'s structure underneath it.',
  },
  {
    when: 'Jul 2016 — Oct 2020',
    mode: 'Hybrid',
    city: 'Creative Studio',
    title: 'Head of Creative Services',
    org: 'JC Media',
    summary:
      'Led creative strategy and execution across digital and print. Managed teams, owned project planning.',
    detail:
      'Delivered brand-consistent visual communication across hundreds of client deliverables. The design instinct still shows up in every dashboard, deck, and report I touch.',
    tags: ['Adobe Suite', 'Figma', 'Premiere Pro', 'Direction'],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [fillPct, setFillPct] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.5;
      const end = vh * 0.5;
      const total = r.height - (start + (vh - end));
      const passed = start - r.top;
      const raw = total > 0 ? passed / total : 0;
      setFillPct(Math.min(1, Math.max(0, raw)) * 100);

      const mid = vh / 2;
      let closest = 0;
      let closestDist = Infinity;
      itemRefs.current.forEach((it, i) => {
        if (!it) return;
        const ir = it.getBoundingClientRect();
        const center = ir.top + ir.height / 2;
        const d = Math.abs(center - mid);
        if (d < closestDist) {
          closestDist = d;
          closest = i;
        }
      });
      setActiveIdx(closest);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isOpen = (i: number) => openIdx === i;

  return (
    <section
      id="work"
      className="relative text-white py-24 sm:py-32 px-6 sm:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-6 text-white/50 text-xs tracking-[0.3em] uppercase">
            <span className="w-8 h-px bg-white/30" />
            Experience
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight mb-16 max-w-3xl">
            Six years, four industries,
            <span className="text-white/40"> one through-line.</span>
          </h2>
        </Reveal>

        <div className="relative" ref={containerRef}>
          <div className="absolute left-0 sm:left-[180px] top-2 bottom-2 w-px bg-white/10" />
          <div
            className="absolute left-0 sm:left-[180px] top-2 w-px bg-gradient-to-b from-white/80 via-white/60 to-white/0 transition-[height] duration-200"
            style={{ height: `calc(${fillPct}% )` }}
          />

          <div className="flex flex-col gap-6">
            {roles.map((r, i) => (
              <article
                key={r.title + r.when}
                ref={(el) => (itemRefs.current[i] = el)}
                className={`relative pl-8 sm:pl-[220px] transition-opacity duration-500 ${
                  activeIdx === i ? 'opacity-100' : 'opacity-65'
                }`}
              >
                <div
                  className={`absolute left-[-4px] sm:left-[177px] top-2 w-2.5 h-2.5 rounded-full ring-4 ring-[#070912] transition-all duration-300 ${
                    activeIdx === i ? 'bg-white scale-150' : 'bg-white/40'
                  }`}
                />
                {activeIdx === i && (
                  <div className="absolute left-[-12px] sm:left-[169px] top-[-6px] w-7 h-7 rounded-full bg-white/10 blur-md animate-pulse" />
                )}

                <div className="absolute left-0 top-0 w-0 sm:w-[160px] hidden sm:block">
                  <div className="text-white/80 text-xs tracking-[0.18em] uppercase font-medium">
                    {r.when}
                  </div>
                  <div className="text-white/40 text-xs mt-1">{r.mode}</div>
                  <div className="text-white/40 text-xs mt-0.5 flex items-center gap-1">
                    <ArrowUpRight size={11} />
                    {r.city}
                  </div>
                </div>

                <div className="sm:hidden text-white/80 text-xs tracking-[0.18em] uppercase mb-1">
                  {r.when} · {r.mode}
                </div>

                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen(i) ? null : i)}
                  aria-expanded={isOpen(i)}
                  className="w-full text-left group flex items-start justify-between gap-4 pr-2"
                >
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-medium leading-snug mb-1 group-hover:text-white">
                      {r.title}
                    </h3>
                    <div className="text-white/55 text-sm mb-3">{r.org}</div>
                    <p className="text-white/55 text-sm leading-relaxed max-w-xl">
                      {r.summary}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 mt-1 liquid-glass rounded-full p-2 text-white/70 group-hover:text-white transition-transform duration-300 ${
                      isOpen(i) ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen(i) ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                {/* expandable detail */}
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen(i) ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-white/65 text-sm leading-relaxed max-w-xl mb-4">
                      {r.detail}
                    </p>
                    {r.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {r.tags.map((t) => (
                          <span
                            key={t}
                            className="liquid-glass text-white/70 text-[11px] tracking-wide px-2.5 py-1 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
