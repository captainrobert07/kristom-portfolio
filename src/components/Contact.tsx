import { Mail, Phone, Linkedin, ArrowUpRight, Download } from 'lucide-react';
import Reveal from './Reveal';
import { BigNumeral, CornerBrackets, HairlineGrid, Timecode } from './SectionDecor';
import { SerifAccent, MagneticButton, TiltCard, LightLeakOnEnter, HairlineSweepOnEnter } from './Polish';

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kristomrobert@gmail.com',
    href: 'mailto:kristomrobert@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 94008 35193',
    href: 'tel:+919400835193',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/kristom-robert',
    href: 'https://www.linkedin.com/in/kristom-robert',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative text-white py-32 sm:py-44 px-6 sm:px-12 overflow-hidden section-tint-gold"
    >
      <HairlineSweepOnEnter />
      <LightLeakOnEnter variant="warm" />
      <HairlineGrid opacity={0.04} />
      <CornerBrackets inset={32} />
      <BigNumeral num="08" position="left" className="opacity-30" />
      <Timecode value="CH 08 · END FRAME" className="absolute top-8 right-8 z-10" />
      <div className="max-w-7xl mx-auto text-center relative">
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-12 text-white/50 text-xs tracking-[0.3em] uppercase">
            <span className="w-12 h-px bg-white/30" />
            Contact · End Frame
            <span className="w-12 h-px bg-white/30" />
          </div>
        </Reveal>

        {/* viewport-filling type moment */}
        <Reveal delay={80}>
          <h2 className="font-medium leading-[0.95] tracking-tight mb-12 mx-auto"
              style={{ fontSize: 'clamp(2.6rem, 9.5vw, 11rem)' }}>
            <span className="block">Have a problem</span>
            <span className="block">
              <SerifAccent gradient="warm">nobody's solved</SerifAccent>
            </span>
            <span className="block text-white/65">with the data you</span>
            <span className="block">
              <SerifAccent gradient="cool">already have?</SerifAccent>
            </span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-14">
            Currently open to consulting, contract, and full-time roles. Open
            to BI, analytics engineering, and data-product work — wherever the
            decisions need a <SerifAccent gradient="warm">translator</SerifAccent>.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="grid sm:grid-cols-3 gap-5 text-left mb-14">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <TiltCard key={c.label} max={3}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group glass-card p-7 flex items-center justify-between transition-colors h-full"
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="liquid-glass rounded-xl p-3">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-white/40 text-[10px] tracking-[0.32em] uppercase mb-1 font-mono">
                          {c.label}
                        </div>
                        <div className="text-white text-sm font-medium break-all">
                          {c.value}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-white/30 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all relative z-10"
                    />
                  </a>
                </TiltCard>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <MagneticButton
              href="mailto:kristomrobert@gmail.com?subject=Let's%20talk"
              className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton
              href="/resume.pdf"
              download="Kristom-Robert-Resume.pdf"
              className="inline-flex items-center gap-2 liquid-glass text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-white/5 transition-colors"
            >
              <Download size={16} />
              Download Resume
            </MagneticButton>
          </div>
        </Reveal>

        <div className="mt-20 text-white/30 font-mono text-[10px] tracking-[0.45em] uppercase flex items-center justify-center gap-3">
          <span className="w-12 h-px bg-white/20" />
          Fade to Black
          <span className="w-12 h-px bg-white/20" />
        </div>
      </div>
    </section>
  );
}
