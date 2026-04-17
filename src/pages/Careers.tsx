import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";

const ROLES = [
  { title: "Investment Banking Analyst", location: "Cape Town", type: "Full-time" },
  { title: "Portfolio Manager — Multi-Asset", location: "Cape Town", type: "Full-time" },
  { title: "Equity Trader", location: "Cape Town", type: "Full-time" },
  { title: "Compliance Officer", location: "Cape Town", type: "Full-time" },
  { title: "Summer Associate Programme 2026", location: "Cape Town", type: "Internship" },
];

const PILLARS = [
  { title: "Apprenticeship", body: "We learn the craft from senior practitioners — not from a desk apart." },
  { title: "Ownership", body: "Junior bankers and analysts own real work, on real mandates, from day one." },
  { title: "Excellence", body: "We hold each other to a standard equal to the trust our clients place in us." },
];

const Careers = () => (
  <PageLayout>
    <PageHero
      eyebrow="Careers"
      title="Build your career where craft and consequence meet."
      subtitle="Sterling is a small enough firm for your work to matter — and ambitious enough for it to be seen."
    />

    <section className="bg-ivory py-24 md:py-32">
      <div className="container-wide">
        <SectionEyebrow>Our culture</SectionEyebrow>
        <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-navy md:text-5xl">
          A place to do the best work of your career.
        </h2>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div key={p.title} className="bg-card p-10">
              <div className="font-mono text-xs tracking-widest text-gold">0{i + 1}</div>
              <h3 className="mt-4 font-serif text-2xl text-navy">{p.title}</h3>
              <p className="mt-3 text-slate">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-navy py-24 text-ivory md:py-32">
      <div className="container-wide">
        <SectionEyebrow className="text-gold">Open roles</SectionEyebrow>
        <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">Where you might fit in.</h2>
        <ul className="mt-16 divide-y divide-navy-soft border-y border-navy-soft">
          {ROLES.map((r) => (
            <li key={r.title}>
              <a href="#" className="group grid grid-cols-1 items-center gap-4 py-6 transition-colors hover:text-gold md:grid-cols-[2fr_1fr_1fr_auto]">
                <span className="font-serif text-2xl">{r.title}</span>
                <span className="text-sm uppercase tracking-[0.18em] text-ivory/60">{r.location}</span>
                <span className="text-sm uppercase tracking-[0.18em] text-ivory/60">{r.type}</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <CTASection
      eyebrow="Careers"
      title="Don't see a fit? Introduce yourself."
      body="We are always interested in meeting exceptional people. Send us a note and a CV."
      ctaLabel="Send a CV"
    />
  </PageLayout>
);

export default Careers;
