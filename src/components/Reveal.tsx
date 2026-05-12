import { useEffect, useRef, useState, ReactNode } from 'react';

type Variant = 'up' | 'left' | 'right' | 'scale' | 'mask';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  variant?: Variant;
};

const variantClasses: Record<Variant, { hidden: string; shown: string }> = {
  up:    { hidden: 'opacity-0 translate-y-6',  shown: 'opacity-100 translate-y-0' },
  left:  { hidden: 'opacity-0 -translate-x-8', shown: 'opacity-100 translate-x-0' },
  right: { hidden: 'opacity-0 translate-x-8',  shown: 'opacity-100 translate-x-0' },
  scale: { hidden: 'opacity-0 scale-95',       shown: 'opacity-100 scale-100' },
  mask:  { hidden: 'opacity-0 [clip-path:inset(0_0_100%_0)]', shown: 'opacity-100 [clip-path:inset(0_0_0%_0)]' },
};

export default function Reveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
  variant = 'up',
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -80px 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const v = variantClasses[variant];
  const Comp = as as any;
  return (
    <Comp
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out will-change-transform ${
        shown ? v.shown : v.hidden
      } ${className}`}
    >
      {children}
    </Comp>
  );
}
