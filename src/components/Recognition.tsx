import { Award, GraduationCap } from 'lucide-react';
import Reveal from './Reveal';

const awards = [
  { num: '01', title: '9× Allianz Best Performer Award', year: '2022 — 2025' },
  { num: '02', title: '2× Allianz All Rounder Award', year: '2023 — 2024' },
  { num: '03', title: 'Stevie Gold Medal — core team member', year: 'International' },
  { num: '04', title: '€20M outcomes through data-driven process improvements', year: '2023' },
  { num: '05', title: 'Kaizen continuous improvement initiative — reporting & insight lead', year: 'Allianz' },
  { num: '06', title: 'Internal recognition for critical dashboard ownership', year: 'Recurring' },
];

const certs = [
  'Certified Scrum Master',
  'Tableau Certified Data Analyst — DataCamp',
  'Atlassian Agile Project Management',
  'Power BI Analyst — DataCamp',
  'Understanding Cloud Computing',
  'Data Literacy Certificate',
];

export default function Recognition() {
  return (
    <section
      id="recognition"
      className="relative text-white py-24 sm:py-32 px-6 sm:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-6 text-white/50 text-xs tracking-[0.3em] uppercase">
            <span className="w-8 h-px bg-white/30" />
            Recognition
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight mb-16 max-w-3xl">
            Awards,
            <span className="text-white/40"> credentials, and the bet I'm making on the future.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <Reveal>
              <div className="flex items-center gap-2 text-white/50 text-xs tracking-[0.22em] uppercase mb-6">
                <Award size={14} />
                Awards
              </div>
            </Reveal>
            <div className="border-t border-white/10">
              {awards.map((a, i) => (
                <Reveal key={a.num} delay={i * 60} variant="left">
                  <div className="grid grid-cols-[40px_1fr_auto] gap-4 items-center py-5 border-b border-white/10 group hover:pl-3 transition-all duration-300">
                    <span className="text-white/30 text-xs font-mono tracking-wide">/{a.num}</span>
                    <h4 className="text-base sm:text-lg font-medium leading-snug group-hover:text-white text-white/90">
                      {a.title}
                    </h4>
                    <span className="text-white/40 text-xs tracking-wider">{a.year}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 md:pl-8 md:border-l md:border-white/10 space-y-10">
            <Reveal delay={120} variant="right">
              <div>
                <div className="flex items-center gap-2 text-white/50 text-xs tracking-[0.22em] uppercase mb-6">
                  <GraduationCap size={14} />
                  Education
                </div>

                <div className="liquid-glass rounded-2xl p-6 mb-4">
                  <div className="text-white/40 text-[11px] tracking-[0.22em] uppercase mb-2">
                    In progress
                  </div>
                  <div className="text-lg font-medium leading-snug mb-1">
                    Executive PG, Data Science &amp; Generative AI
                  </div>
                  <div className="text-white/60 text-sm">IIT Roorkee</div>
                </div>

                <div className="rounded-2xl p-6 border border-white/10">
                  <div className="text-white/40 text-[11px] tracking-[0.22em] uppercase mb-2">
                    Completed
                  </div>
                  <div className="text-lg font-medium leading-snug mb-1">
                    B.A. (General)
                  </div>
                  <div className="text-white/60 text-sm">
                    Indira Gandhi National Open University
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div>
                <div className="text-white/50 text-xs tracking-[0.22em] uppercase mb-4">
                  Certifications
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {certs.map((c) => (
                    <span
                      key={c}
                      className="liquid-glass text-white/70 text-[11px] tracking-wide px-2.5 py-1.5 rounded-full"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
