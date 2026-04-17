import { Link } from "react-router-dom";
import { ArrowRight, LineChart, Briefcase, Building2, Globe2, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { StatStrip } from "@/components/site/StatCounter";
import { CTASection } from "@/components/site/CTASection";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-team.jpg";

const SERVICES = [
  {
    icon: LineChart,
    title: "Asset Management",
    body: "Disciplined, research-led portfolio management across asset classes, tailored to institutional and private mandates.",
    to: "/asset-management",
  },
  {
    icon: Briefcase,
    title: "Brokerage",
    body: "Best-in-class execution across equities, fixed income, FX and derivatives — on local and international venues.",
    to: "/brokerage",
  },
  {
    icon: Building2,
    title: "Investment Banking",
    body: "Strategic M&A, capital raising and advisory services for corporates and sponsors building enduring businesses.",
    to: "/investment-banking",
  },
];

const PILLARS = [
  { icon: Sparkles, title: "Market Insight", body: "Proprietary research and a relentless focus on the data points that move outcomes." },
  { icon: Handshake, title: "Decision-maker Access", body: "Senior bankers in every dialogue — connected to capital, regulators and counterparties." },
  { icon: ShieldCheck, title: "Execution Track Record", body: "A discipline of delivering, refined across cycles, sectors and geographies." },
  { icon: Globe2, title: "Full-Service", body: "From advisory to execution to ongoing portfolio stewardship — under one roof." },
];

const SECTORS = [
  "Financial Services", "Energy & Resources", "Technology", "Real Estate",
  "Consumer & Retail", "Healthcare", "Industrials", "Infrastructure",
  "Telecommunications", "Agriculture", "Hospitality", "Public Sector",
];

const INSIGHTS = [
  { tag: "Markets", date: "March 2025", title: "South African equities: positioning for the rates pivot." },
  { tag: "Strategy", date: "February 2025", title: "Why decision-maker access still defines deal outcomes." },
  { tag: "ESG", date: "January 2025", title: "Capital allocation in the era of disclosure." },
];

const Index = () => {
  return (
    <PageLayout transparentHeader>
      <HeroCarousel />

      <StatStrip
        stats={[
          { value: "$2.4", suffix: "B+", label: "Assets advised" },
          { value: "180", suffix: "+", label: "Transactions" },
          { value: "12", label: "Sectors covered" },
          { value: "15", suffix: " yrs", label: "Combined experience" },
        ]}
      />

      {/* What we do */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container-wide">
          <div className="max-w-2xl">
            <SectionEyebrow>What we do</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-navy md:text-5xl">
              Three disciplines. One unwavering standard.
            </h2>
            <p className="mt-6 text-lg text-slate">
              Sterling brings together asset management, brokerage and investment banking — coordinated by senior
              practitioners who understand how markets, capital and counterparties truly intersect.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group relative flex flex-col gap-6 bg-card p-10 transition-colors hover:bg-navy hover:text-ivory"
              >
                <s.icon className="h-8 w-8 text-gold transition-transform group-hover:scale-110" />
                <h3 className="font-serif text-2xl text-navy transition-colors group-hover:text-ivory">{s.title}</h3>
                <p className="text-sm leading-relaxed text-slate transition-colors group-hover:text-ivory/80">{s.body}</p>
                <span className="link-underline mt-auto text-navy transition-colors group-hover:text-gold">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sterling Advantage pillars */}
      <section className="bg-navy py-24 text-ivory md:py-32">
        <div className="container-wide grid gap-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <SectionEyebrow className="text-gold">The Sterling Advantage</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              Built around what truly drives outcomes.
            </h2>
            <p className="mt-6 text-ivory/70">
              Four principles guide every engagement — and they are why clients return to Sterling across cycles.
            </p>
          </div>
          <div className="grid gap-px bg-navy-soft sm:grid-cols-2">
            {PILLARS.map((p) => (
              <div key={p.title} className="bg-navy p-8">
                <p.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-5 font-serif text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors marquee */}
      <section className="border-y border-border bg-ivory py-12 overflow-hidden">
        <div className="container-wide mb-8">
          <SectionEyebrow>Sectors covered</SectionEyebrow>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-12 pr-12">
            {[...SECTORS, ...SECTORS].map((s, i) => (
              <span key={i} className="font-serif text-3xl text-navy/70 md:text-4xl whitespace-nowrap">
                {s} <span className="text-gold">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="bg-card py-24 md:py-32">
        <div className="container-wide grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Sterling Finance team in boardroom"
              className="aspect-[4/5] w-full object-cover shadow-elegant"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-gold md:block" />
          </div>
          <div>
            <SectionEyebrow>About Sterling</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-navy md:text-5xl">
              A South African firm with a global lens.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Founded in Cape Town, Sterling Finance &amp; Investment was built around a simple conviction: that
              advice and execution are inseparable, and both improve when senior practitioners stay close to their
              clients across every stage of an engagement.
            </p>
            <p className="mt-4 text-slate">
              We serve institutions, corporates and high-net-worth individuals across South Africa and the broader
              continent — coupled with active dialogue across global capital markets.
            </p>
            <Button asChild className="mt-10 rounded-none bg-navy px-8 text-ivory hover:bg-navy-deep">
              <Link to="/about">
                Read more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Insights teaser */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <SectionEyebrow>Insights</SectionEyebrow>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-navy md:text-5xl">
                Perspectives from our desks.
              </h2>
            </div>
            <Link to="#" className="link-underline text-navy hover:text-gold">View all</Link>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {INSIGHTS.map((post, i) => (
              <article key={i} className="group flex flex-col border-t border-navy pt-8">
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-slate">
                  <span className="text-gold">{post.tag}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-6 font-serif text-2xl leading-snug text-navy transition-colors group-hover:text-gold">
                  {post.title}
                </h3>
                <Link to="#" className="link-underline mt-8 text-navy hover:text-gold">
                  Read <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
};

export default Index;
