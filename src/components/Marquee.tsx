type Props = {
  items: string[];
  speed?: number; // seconds for one full loop
  reverse?: boolean;
};

export default function Marquee({ items, speed = 40, reverse = false }: Props) {
  const seq = [...items, ...items, ...items];
  return (
    <div className="relative bg-black border-y border-white/10 overflow-hidden py-5">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {seq.map((item, i) => (
          <span
            key={i}
            className="text-white/30 text-xs sm:text-sm tracking-[0.32em] uppercase font-mono flex items-center gap-12"
          >
            {item}
            <span className="text-white/15">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
