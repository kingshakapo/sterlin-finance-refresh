import { Check } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";

const STRATEGIES = [
  { name: "Multi-Asset Income", body: "A diversified income strategy combining yield-oriented equities, fixed income and alternatives." },
  { name: "Long-Term Growth", body: "High-conviction equity portfolios built around durable compounders." },
  { name: "Capital Preservation", body: "Conservative mandates focused on liquidity, drawdown management and real-return objectives." },
  { name: "Bespoke Mandates", body: "Tailored portfolios constructed around client-specific objectives, restrictions and time horizons." },
];

const APPROACH = [
  "Top-down macro framing meets bottom-up fundamental research.",
  "A defined investment process — repeatable, reviewable, and accountable.",
  "Risk management embedded at every level of portfolio construction.",
  "Transparent reporting and proactive client dialogue.",
];

const AssetManagement = () => (
  <PageLayout>
    <PageHero
      eyebrow="Asset Management"
      title="Disciplined portfolios, built for what matters."
      subtitle="Multi-asset strategies designed around your objectives — institutional, corporate and private client mandates."
    />

    <section className="bg-ivory py-24 md:py-32">
      <div className="container-wide grid gap-16 lg:grid-cols-2">
        <div>
          <SectionEyebrow>Our approach</SectionEyebrow>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-navy md:text-5xl">
            Process over prediction. Conviction over noise.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            We build portfolios with a clear investment thesis, sized appropriately for the risk on offer, and
            stewarded by senior portfolio managers who remain close to clients across cycles.
          </p>
        </div>
        <ul className="space-y-6">
          {APPROACH.map((a) => (
            <li key={a} className="flex gap-4 border-b border-border pb-6">
              <Check className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <span className="text-lg text-navy">{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="bg-navy py-24 text-ivory md:py-32">
      <div className="container-wide">
        <SectionEyebrow className="text-gold">Strategies</SectionEyebrow>
        <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">A platform of distinct strategies.</h2>
        <div className="mt-16 grid gap-px bg-navy-soft sm:grid-cols-2">
          {STRATEGIES.map((s, i) => (
            <div key={s.name} className="bg-navy p-10">
              <div className="font-mono text-xs tracking-widest text-gold">0{i + 1}</div>
              <h3 className="mt-4 font-serif text-2xl">{s.name}</h3>
              <p className="mt-3 text-ivory/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      eyebrow="Asset Management"
      title="Discuss a mandate with our portfolio team."
      ctaLabel="Request a meeting"
    />
  </PageLayout>
);

export default AssetManagement;
