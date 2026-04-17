import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";

interface Section {
  heading: string;
  body: string | string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  updated: string;
  intro?: string;
  sections: Section[];
}

export const LegalPage = ({ eyebrow, title, subtitle, updated, intro, sections }: LegalPageProps) => {
  return (
    <PageLayout>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-tight max-w-4xl">
          <p className="text-xs uppercase tracking-[0.22em] text-slate">Last updated · {updated}</p>
          {intro && <p className="mt-8 text-lg leading-relaxed text-slate">{intro}</p>}

          <div className="mt-12 space-y-12">
            {sections.map((s, i) => (
              <article key={i} className="border-t border-border pt-10">
                <div className="flex items-baseline gap-6">
                  <span className="font-serif text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="font-serif text-2xl leading-snug text-navy md:text-3xl">{s.heading}</h2>
                </div>
                <div className="mt-6 space-y-4 pl-12 text-slate leading-relaxed">
                  {Array.isArray(s.body)
                    ? s.body.map((p, j) => <p key={j}>{p}</p>)
                    : <p>{s.body}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageLayout>
  );
};
