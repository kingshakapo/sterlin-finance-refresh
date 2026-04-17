import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { TrendingUp, Globe, Layers, Activity } from "lucide-react";

const CAPABILITIES = [
  { icon: TrendingUp, title: "Equities", body: "Cash equities and program trading across South African and international exchanges." },
  { icon: Layers, title: "Fixed Income", body: "Government, corporate and structured credit — primary and secondary markets." },
  { icon: Globe, title: "FX & Global Macro", body: "Spot, forwards and options across G10 and emerging market pairs." },
  { icon: Activity, title: "Derivatives", body: "Listed and OTC instruments for hedging, yield enhancement and structured exposure." },
];

const MARKETS = ["JSE", "NYSE", "NASDAQ", "LSE", "HKEX", "Euronext", "SGX", "DFM"];

const Brokerage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Brokerage"
      title="Global market access, executed with precision."
      subtitle="Equities, fixed income, FX and derivatives — across South African and international venues."
    />

    <section className="bg-ivory py-24 md:py-32">
      <div className="container-wide">
        <SectionEyebrow>Capabilities</SectionEyebrow>
        <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-navy md:text-5xl">
          A trading desk built around client outcomes.
        </h2>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="bg-card p-10">
              <c.icon className="h-7 w-7 text-gold" />
              <h3 className="mt-5 font-serif text-2xl text-navy">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-navy py-24 text-ivory md:py-32">
      <div className="container-wide grid gap-16 lg:grid-cols-2">
        <div>
          <SectionEyebrow className="text-gold">Markets</SectionEyebrow>
          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
            Connected to the venues that matter.
          </h2>
          <p className="mt-6 text-ivory/70">
            Sterling provides direct market access across major global exchanges, supported by a network of clearing
            partners and prime relationships.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-navy-soft sm:grid-cols-4">
          {MARKETS.map((m) => (
            <div key={m} className="bg-navy p-8 text-center">
              <span className="font-serif text-2xl text-gold">{m}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection eyebrow="Brokerage" title="Open a brokerage relationship." ctaLabel="Speak with the desk" />
  </PageLayout>
);

export default Brokerage;
