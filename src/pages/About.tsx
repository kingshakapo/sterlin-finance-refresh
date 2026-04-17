import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import aboutImg from "@/assets/about-team.jpg";

const VALUES = [
  { title: "Integrity", body: "Aligned interests, transparent counsel, and the courage to give the harder answer." },
  { title: "Discipline", body: "Process over impulse — a rigour applied across research, execution and risk." },
  { title: "Partnership", body: "We work alongside clients for the long term, not transaction by transaction." },
  { title: "Excellence", body: "An institutional standard in every detail, from first meeting to final settlement." },
];

const TIMELINE = [
  { year: "2009", text: "Founded in Cape Town as a boutique advisory practice." },
  { year: "2014", text: "Launched institutional asset management division." },
  { year: "2018", text: "Expanded brokerage to international venues." },
  { year: "2022", text: "Investment banking arm advises on landmark cross-border M&A." },
  { year: "Today", text: "A multi-disciplinary firm serving clients across the continent." },
];

const LEADERS = [
  { name: "A. Mokoena", role: "Chief Executive Officer" },
  { name: "J. van der Merwe", role: "Head of Investment Banking" },
  { name: "P. Naidoo", role: "Head of Asset Management" },
  { name: "L. Adebayo", role: "Head of Brokerage" },
];

const About = () => (
  <PageLayout>
    <PageHero
      eyebrow="About Sterling"
      title="A firm built on conviction, capital and care."
      subtitle="Founded in Cape Town, Sterling Finance & Investment serves institutions, corporates and private clients across South Africa and global markets."
    />

    {/* Philosophy */}
    <section className="bg-ivory py-24 md:py-32">
      <div className="container-wide grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionEyebrow>Our philosophy</SectionEyebrow>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-navy md:text-5xl">
            Senior counsel. Long horizons. Disciplined execution.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            We were founded around the belief that financial outcomes are best served when senior practitioners
            stay close to every engagement — from initial framing through to execution and stewardship.
          </p>
          <p className="mt-4 text-slate">
            That principle shapes how we hire, how we organise teams, and how we measure success. It is the
            quiet difference between a firm that serves transactions and a firm that serves clients.
          </p>
        </div>
        <img src={aboutImg} alt="Sterling team" loading="lazy" className="aspect-[4/5] w-full object-cover shadow-elegant" />
      </div>
    </section>

    {/* Values */}
    <section className="bg-navy py-24 text-ivory md:py-32">
      <div className="container-wide">
        <SectionEyebrow className="text-gold">Our values</SectionEyebrow>
        <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">The principles we hold ourselves to.</h2>
        <div className="mt-16 grid gap-px bg-navy-soft sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="bg-navy p-8">
              <div className="font-mono text-xs tracking-widest text-gold">0{VALUES.indexOf(v) + 1}</div>
              <h3 className="mt-4 font-serif text-2xl">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/70">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="bg-ivory py-24 md:py-32">
      <div className="container-wide max-w-4xl">
        <SectionEyebrow>Our journey</SectionEyebrow>
        <h2 className="mt-6 font-serif text-4xl leading-tight text-navy md:text-5xl">A trajectory shaped by clients.</h2>
        <ol className="mt-16 space-y-10 border-l border-navy/20 pl-8">
          {TIMELINE.map((t) => (
            <li key={t.year} className="relative">
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-gold ring-4 ring-ivory" />
              <div className="font-mono text-sm tracking-widest text-gold">{t.year}</div>
              <p className="mt-2 font-serif text-xl text-navy">{t.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Leadership */}
    <section className="bg-card py-24 md:py-32">
      <div className="container-wide">
        <SectionEyebrow>Leadership</SectionEyebrow>
        <h2 className="mt-6 font-serif text-4xl leading-tight text-navy md:text-5xl">The people behind Sterling.</h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {LEADERS.map((p) => (
            <div key={p.name} className="border border-border bg-ivory p-8">
              <div className="aspect-square bg-navy/10" />
              <h3 className="mt-6 font-serif text-xl text-navy">{p.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.18em] text-gold">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </PageLayout>
);

export default About;
