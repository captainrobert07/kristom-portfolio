import Reveal from './Reveal';

export default function About() {
  return (
    <section
      id="about"
      className="relative text-white py-24 sm:py-32 px-6 sm:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-10 text-white/50 text-xs tracking-[0.3em] uppercase">
            <span className="w-8 h-px bg-white/30" />
            About
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <Reveal variant="mask">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight mb-8">
                I'm a translator between
                <span className="text-white/40"> systems </span>
                and
                <span className="text-white/40"> people. </span>
                Numbers go in, decisions come out.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-5 text-white/60 text-base leading-relaxed max-w-xl">
                <p>
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
                  in two years, and I'd rather be early than late.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:pl-8 md:border-l md:border-white/10">
            <div className="space-y-8">
              <Reveal delay={80}>
                <div>
                  <div className="text-white/40 text-xs tracking-[0.22em] uppercase mb-3">
                    What I do, in one line
                  </div>
                  <div className="text-xl font-medium leading-snug">
                    Make complicated things make sense — to a system, a stakeholder, or a slide.
                  </div>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div>
                  <div className="text-white/40 text-xs tracking-[0.22em] uppercase mb-3">
                    Where I've done it
                  </div>
                  <div className="space-y-2 text-white/70 text-sm">
                    <div className="flex justify-between"><span>Insurance operations (UK · AU · IN)</span><span className="text-white/40">4 yrs</span></div>
                    <div className="flex justify-between"><span>EdTech &amp; community ops</span><span className="text-white/40">2 yrs</span></div>
                    <div className="flex justify-between"><span>Creative direction &amp; print</span><span className="text-white/40">4 yrs</span></div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div>
                  <div className="text-white/40 text-xs tracking-[0.22em] uppercase mb-3">
                    Why this matters
                  </div>
                  <div className="text-white/70 text-sm leading-relaxed">
                    Pure analysts struggle to communicate. Pure communicators can't
                    read the data. I do both — which is why my dashboards get used,
                    not just built.
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
