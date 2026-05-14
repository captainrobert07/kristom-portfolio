import { Award, GraduationCap } from 'lucide-react';
import Reveal from './Reveal';
import { BigNumeral, EdgeTag, QuoteGlyph, Timecode } from './SectionDecor';
import { SerifAccent, TiltCard, LightLeakOnEnter, HairlineSweepOnEnter } from './Polish';

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
      className="relative text-white py-24 sm:py-32 px-6 sm:px-12 overflow-hidden section-tint-gold"
    >
      <HairlineSweepOnEnter />
      <LightLeakOnEnter variant="warm" />
      <BigNumeral num="06" position="left" />
      <EdgeTag side="right">RECOGNITION · 06</EdgeTag>
      <Timecode value="CH 06 · 13:02" className="absolute top-8 right-8 z-10" />
      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <div className="flex items-center gap-3 mb-6 text-white/50 text-xs tracking-[0.3em] uppercase">
            <span className="w-8 h-px bg-white/30" />
            Recognition
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium leading-[1.05] tracking-tight mb-20 max-w-4xl">
            <SerifAccent gradient="warm">Awards</SerifAccent>, credentials, and the bet I'm making on the{' '}
            <SerifAccent gradient="cool">future</SerifAccent>.
          </h2>
        </Reveal>

        {/* Asymmetric 60/40 break: lots of negative space on the right column up top */}
        <div className="grid md:grid-cols-10 gap-x-12 gap-y-10">
          <div className="md:col-span-6">
            <Reveal>
              <div className="flex items-center gap-2 text-white/50 text-xs tracking-[0.22em] uppercase mb-6">
                <Award size={14} />
                Awards · 06 entries
              </div>
            </Reveal>
            <div className="border-t border-white/10">
              {awards.map((a, i) => (
                <Reveal key={a.num} delay={i * 60} variant="left">
                  <div className="grid grid-cols-[32px_1fr] sm:grid-cols-[44px_1fr_auto] gap-x-3 sm:gap-x-4 gap-y-1 items-baseline sm:items-center py-5 sm:py-6 border-b border-white/10 group hover:pl-3 hover:bg-white/[0.02] transition-all duration-300">
                    <span className="text-white/30 text-[11px] font-mono tracking-[0.2em]">/{a.num}</span>
                    <h3 className="text-base sm:text-lg font-medium leading-snug group-hover:text-white text-white/85">
                      {a.title}
                    </h3>
                    <span className="col-start-2 sm:col-start-auto text-white/40 text-[11px] tracking-[0.16em] font-mono uppercase whitespace-nowrap">
                      {a.year}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Side: starts pushed down, generous whitespace = luxury */}
          <div className="md:col-span-4 md:pt-24 space-y-10 relative">
            <QuoteGlyph className="absolute -top-2 right-0 w-24 h-24 opacity-50" />
            <Reveal delay={120} variant="right">
              <div>
                <div className="flex items-center gap-2 text-white/50 text-xs tracking-[0.22em] uppercase mb-6">
                  <GraduationCap size={14} />
                  Education
                </div>

                <TiltCard className="mb-4" max={3}>
                  <div className="glass-card p-6 relative">
                    <div className="text-white/40 text-[10px] tracking-[0.32em] uppercase mb-2 font-mono">
                      In progress
                    </div>
                    <div className="font-serif-display text-xl italic leading-snug mb-1">
                      <SerifAccent gradient="warm">Executive PG</SerifAccent>, Data Science &amp; Generative AI
                    </div>
                    <div className="text-white/60 text-sm">IIT Roorkee</div>
                  </div>
                </TiltCard>

                <div className="rounded-2xl p-6 border border-white/10 backdrop-blur-sm bg-black/30">
                  <div className="text-white/40 text-[10px] tracking-[0.32em] uppercase mb-2 font-mono">
                    Completed
                  </div>
                  <div className="font-serif-display text-xl italic leading-snug mb-1 text-white/85">
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
                      className="liquid-glass text-white/75 text-[11px] tracking-wide px-2.5 py-1.5 rounded-full"
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
