import { Mail, Phone, Linkedin, ArrowUpRight, Download } from 'lucide-react';
import Reveal from './Reveal';

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
      className="relative text-white py-24 sm:py-40 px-6 sm:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-8 text-white/50 text-xs tracking-[0.3em] uppercase">
            <span className="w-8 h-px bg-white/30" />
            Contact
            <span className="w-8 h-px bg-white/30" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight mb-8 max-w-4xl mx-auto">
            Have a problem
            <span className="text-white/40"> nobody's solved </span>
            with the data you already have?
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="text-white/55 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-12">
            I'm available Q2 2026 for consulting, contract, and full-time roles. Open
            to BI, analytics engineering, and data-product work — wherever the
            decisions need a translator.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="grid sm:grid-cols-3 gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden text-left mb-12 backdrop-blur-sm">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group bg-black/55 p-7 flex items-center justify-between hover:bg-black/35 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="liquid-glass rounded-xl p-3">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-white/40 text-[11px] tracking-[0.22em] uppercase mb-1">
                        {c.label}
                      </div>
                      <div className="text-white text-sm font-medium break-all">
                        {c.value}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-white/30 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:kristomrobert@gmail.com?subject=Let's%20talk"
              className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              download="Kristom-Robert-Resume.pdf"
              className="inline-flex items-center gap-2 liquid-glass text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-white/5 transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
