import Reveal from './Reveal';
import { BigNumeral, EdgeTag, QuoteGlyph, Timecode } from './SectionDecor';
import { SerifAccent, PortraitFrame, LightLeakOnEnter, HairlineSweepOnEnter, TiltCard } from './Polish';

export default function About() {
  return (
    <section
      id="about"
      className="relative text-white py-24 sm:py-32 px-6 sm:px-12 overflow-hidden section-tint-warm"
    >
      <HairlineSweepOnEnter />
      <LightLeakOnEnter variant="warm" />
      <BigNumeral num="01" position="right" />
      <EdgeTag side="left">PROFILE · 01</EdgeTag>
      <Timecode value="CH 01 · 02:14" className="absolute top-8 right-8 z-10" />
      <div className="max-w-6xl mx-auto relative">
        <Reveal>
          <div className="flex items-center gap-3 mb-10 text-white/50 text-xs tracking-[0.3em] uppercase">
            <span className="w-8 h-px bg-white/30" />
            About
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <Reveal variant="mask">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.05] tracking-tight mb-10">
                I'm a translator between{' '}
                <SerifAccent gradient="warm">systems</SerifAccent>
                {' '}and{' '}
                <SerifAccent gradient="cool">people</SerifAccent>.
                <br />
                Numbers go in,{' '}
                <SerifAccent gradient="warm">decisions</SerifAccent>{' '}
                come out.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-5 text-white/65 text-base leading-relaxed max-w-xl">
                <p className="drop-cap">
                  Started in creative direction — print, digital, brand. Spent four years
                  running design teams, translating client briefs into work that landed.
                  Then I taught language at IELTS level, then I ran a community at a
                  learning startup, then I moved into operations.
                </p>
                <p>
                  Somewhere along the way I noticed the same pattern everywhere:
                  people had data they didn't trust, reports nobody read, and decisions
                  they made on gut instead of evidence. I started building the layer that
                  fixes that — and I haven't stopped since.
                </p>
                <p>
                  Today I work as a Business Intelligence consultant. I'm completing an
                  Executive PG in Data Science &amp; Generative AI at IIT Roorkee — because
                  "translates data into decisions" is going to mean something very different
                  in two years, and I'd rather be{' '}
                  <SerifAccent gradient="warm">early than late</SerifAccent>.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:pl-10 relative">
            <QuoteGlyph className="absolute -top-6 -left-2 w-24 h-24 opacity-50" />

            {/* Portrait — silent biography */}
            <Reveal delay={60}>
              <TiltCard className="mb-8" max={4}>
                <PortraitFrame initials="KR" alt="Kristom Robert portrait" />
              </TiltCard>
            </Reveal>

            <div className="space-y-7 relative">
              <Reveal delay={80}>
                <div>
                  <div className="text-white/40 text-[10px] tracking-[0.32em] uppercase mb-3 font-mono">
                    In one line
                  </div>
                  <div className="font-serif-display text-2xl leading-snug italic font-light text-white/90">
                    Make complicated things make sense — to a system, a stakeholder, or a slide.
                  </div>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div>
                  <div className="text-white/40 text-[10px] tracking-[0.32em] uppercase mb-3 font-mono">
                    Where I've done it
                  </div>
                  <div className="space-y-2 text-white/70 text-sm">
                    <div className="flex justify-between border-b border-white/5 pb-1.5"><span>Insurance operations (UK · AU · IN)</span><span className="text-white/40 font-mono">04 yrs</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-1.5"><span>EdTech &amp; community ops</span><span className="text-white/40 font-mono">02 yrs</span></div>
                    <div className="flex justify-between"><span>Creative direction &amp; print</span><span className="text-white/40 font-mono">04 yrs</span></div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div>
                  <div className="text-white/40 text-[10px] tracking-[0.32em] uppercase mb-3 font-mono">
                    Why this matters
                  </div>
                  <div className="text-white/70 text-sm leading-relaxed">
                    Pure analysts struggle to communicate. Pure communicators can't
                    read the data. I do both — which is why my dashboards get{' '}
                    <SerifAccent gradient="warm">used</SerifAccent>, not just built.
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
