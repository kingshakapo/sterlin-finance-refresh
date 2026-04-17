import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";

const SERVICES = [
  { title: "Mergers & Acquisitions", body: "Buy-side, sell-side and merger advisory — domestic and cross-border." },
  { title: "Capital Markets", body: "Equity and debt capital raising, private placements and structured financings." },
  { title: "Strategic Advisory", body: "Board-level counsel on strategy, capital structure, and shareholder matters." },
  { title: "Restructuring", body: "Balance-sheet, operational and stakeholder advisory in complex situations." },
];

const SECTORS = [
  "Financial Services", "Energy & Resources", "Technology",
  "Real Estate", "Consumer & Retail", "Healthcare",
  "Industrials", "Infrastructure", "Telecommunications",
];

const InvestmentBanking = () => (
  <PageLayout>
    <PageHero
      eyebrow="Investment Banking"
      title="Advisory at the intersection of capital and ambition."
      subtitle="Senior counsel for corporates, sponsors and shareholders — from first conversation to closing."
    />

    <section className="bg-ivory py-24 md:py-32">
      <div className="container-wide">
        <SectionEyebrow>Services</SectionEyebrow>
        <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-navy md:text-5xl">
          Full-spectrum advisory, senior on every mandate.
        </h2>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="bg-card p-10">
              <div className="font-mono text-xs tracking-widest text-gold">0{i + 1}</div>
              <h3 className="mt-4 font-serif text-2xl text-navy">{s.title}</h3>
              <p className="mt-3 text-slate">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-navy py-24 text-ivory md:py-32">
      <div className="container-wide grid gap-16 lg:grid-cols-2">
        <div>
          <SectionEyebrow className="text-gold">Sector experience</SectionEyebrow>
          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
            Deep expertise across the sectors that shape the economy.
          </h2>
          <p className="mt-6 text-ivory/70">
            Our bankers bring industry-specific insight to every transaction — informed by years of execution and
            ongoing dialogue with sector leaders.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-px bg-navy-soft sm:grid-cols-2">
          {SECTORS.map((s) => (
            <li key={s} className="bg-navy p-6 font-serif text-xl">
              <span className="text-gold">·</span> {s}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <CTASection eyebrow="Investment Banking" title="Explore a transaction with us." ctaLabel="Initiate a dialogue" />
  </PageLayout>
);

export default InvestmentBanking;
