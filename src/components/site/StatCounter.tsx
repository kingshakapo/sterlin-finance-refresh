interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface StatStripProps {
  stats: Stat[];
}

export const StatStrip = ({ stats }: StatStripProps) => {
  return (
    <section className="border-y border-border bg-ivory">
      <div className="container-wide grid grid-cols-2 divide-x divide-border md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="px-6 py-12 text-center md:py-16">
            <div className="font-serif text-4xl text-navy md:text-5xl">
              {s.value}
              {s.suffix && <span className="text-gold">{s.suffix}</span>}
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.22em] text-slate">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
