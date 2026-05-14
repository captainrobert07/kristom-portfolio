import { ArrowUpRight, BookOpen } from 'lucide-react';
import Reveal from './Reveal';
import { BigNumeral, EdgeTag, FlowGlyph, Timecode } from './SectionDecor';
import { SerifAccent, TiltCard, LightLeakOnEnter, HairlineSweepOnEnter } from './Polish';

const posts = [
  {
    title: 'Why most dashboards die in a drawer — and what to build instead',
    excerpt:
      'After four years owning enterprise reporting, I keep seeing the same five reasons people stop opening the dashboard you spent three weeks on. None of them are technical. Here is the playbook I use now.',
    tag: 'Essay',
    read: '6 min read',
    when: 'Coming soon',
    href: '#',
  },
];

export default function Writing() {
  return (
    <section
      id="writing"
      className="relative text-white py-24 sm:py-32 px-6 sm:px-12 overflow-hidden section-tint-warm"
    >
      <HairlineSweepOnEnter />
      <LightLeakOnEnter variant="warm" />
      <BigNumeral num="07" position="right" />
      <FlowGlyph className="absolute bottom-12 left-6 w-[28vw] h-[16vw] max-w-[360px] max-h-[200px] opacity-70 pointer-events-none" />
      <EdgeTag side="left">WRITING · 07</EdgeTag>
      <Timecode value="CH 07 · 15:24" className="absolute top-8 right-8 z-10" />
      <div className="max-w-6xl mx-auto relative">
        <Reveal>
          <div className="flex items-center gap-3 mb-6 text-white/50 text-xs tracking-[0.3em] uppercase">
            <span className="w-8 h-px bg-white/30" />
            Writing
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.05] tracking-tight mb-16 max-w-3xl">
            Notes from the work — what I've{' '}
            <SerifAccent gradient="warm">learned</SerifAccent>, written down.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="md:col-span-12">
              <TiltCard max={2.5}>
                <a
                  href={p.href}
                  className="group block relative glass-card transition-colors overflow-hidden"
                >
                  <div className="grid md:grid-cols-12 gap-0 relative z-10">
                    <div className="md:col-span-3 p-8 sm:p-10 border-b md:border-b-0 md:border-r border-white/10">
                      <div className="liquid-glass inline-flex items-center gap-2 text-white/80 text-[11px] tracking-[0.22em] uppercase px-3 py-1.5 rounded-full mb-6">
                        <BookOpen size={12} />
                        {p.tag}
                      </div>
                      <div className="text-white/55 text-xs tracking-[0.18em] font-mono uppercase">
                        {p.read}
                      </div>
                      <div className="text-white/35 text-xs tracking-[0.18em] font-mono uppercase mt-1.5">
                        {p.when}
                      </div>
                    </div>

                    <div className="md:col-span-9 p-8 sm:p-10 flex flex-col justify-between gap-8">
                      <h3 className="font-serif-display text-3xl sm:text-4xl italic font-light leading-[1.08] tracking-tight max-w-2xl group-hover:text-white">
                        {p.title}
                      </h3>
                      <div className="flex items-center justify-between gap-6">
                        <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                          {p.excerpt}
                        </p>
                        <ArrowUpRight
                          size={32}
                          strokeWidth={1.2}
                          className="shrink-0 text-white/40 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={posts.length * 80 + 100}>
          <div className="mt-12 text-white/40 text-sm">
            More notes in progress — subscribe via{' '}
            <a
              href="https://www.linkedin.com/in/kristom-robert"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              LinkedIn
            </a>{' '}
            for now.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
