import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaTo?: string;
}

export const CTASection = ({
  eyebrow = "Get in touch",
  title = "Begin a conversation with our team.",
  body = "Whether you're an institutional client, a corporate seeking advisory, or a private investor — we'd be glad to discuss how Sterling can work with you.",
  ctaLabel = "Contact Sterling",
  ctaTo = "/contact",
}: CTASectionProps) => {
  return (
    <section className="bg-navy text-ivory">
      <div className="container-wide grid gap-10 py-24 md:grid-cols-[2fr_1fr] md:items-end">
        <div>
          <span className="eyebrow text-gold">{eyebrow}</span>
          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">{title}</h2>
          <p className="mt-6 max-w-2xl text-ivory/70">{body}</p>
        </div>
        <div className="flex md:justify-end">
          <Button asChild size="lg" className="group rounded-none bg-gold px-8 text-navy hover:bg-gold-bright">
            <Link to={ctaTo}>
              {ctaLabel}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
