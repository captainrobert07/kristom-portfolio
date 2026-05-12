import { ArrowUpRight, BookOpen } from 'lucide-react';
import Reveal from './Reveal';
import { BigNumeral, EdgeTag, FlowGlyph, Timecode } from './SectionDecor';

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
      className="relative text-white py-24 sm:py-32 px-6 sm:px-12 overflow-hidden"
    >
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight mb-16 max-w-3xl">
            Notes from the work —
            <span className="text-white/40"> what I've learned, written down.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="md:col-span-12">
              <a
                href={p.href}
                className="group block relative rounded-2xl border border-white/10 bg-black/55 backdrop-blur-sm hover:bg-black/35 transition-colors overflow-hidden"
              >
                <div className="grid md:grid-cols-12 gap-0">
                  {/* meta column */}
                  <div className="md:col-span-3 p-8 sm:p-10 border-b md:border-b-0 md:border-r border-white/10">
                    <div className="liquid-glass inline-flex items-center gap-2 text-white/80 text-[11px] tracking-[0.22em] uppercase px-3 py-1.5 rounded-full mb-6">
                      <BookOpen size={12} />
                      {p.tag}
                    </div>
                    <div className="text-white/40 text-xs tracking-wider">
                      {p.read}
                    </div>
                    <div className="text-white/30 text-xs tracking-wider mt-1">
                      {p.when}
                    </div>
                  </div>

                  {/* content */}
                  <div className="md:col-span-9 p-8 sm:p-10 flex flex-col justify-between gap-8">
                    <h3 className="text-2xl sm:text-3xl font-medium leading-tight tracking-tight max-w-2xl group-hover:text-white">
                      {p.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-white/55 text-sm leading-relaxed max-w-xl pr-8">
                        {p.excerpt}
                      </p>
                      <ArrowUpRight
                        size={28}
                        strokeWidth={1.2}
                        className="shrink-0 text-white/40 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={posts.length * 80 + 100}>
          <div className="mt-12 text-white/40 text-sm">
            More notes in progress — subscribe via{' '}
            <a
              href="https://www.linkedin.com/in/kristom-robert"
              target="_blank"
              rel="noreferrer"
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
