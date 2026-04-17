import innerHero from "@/assets/inner-hero.jpg";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
}

export const PageHero = ({ eyebrow, title, subtitle, image = innerHero }: PageHeroProps) => {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-ivory">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="" className="h-full w-full object-cover opacity-40" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy/80 to-navy" />
      </div>
      <div className="container-wide flex min-h-[60vh] flex-col justify-end pb-20 pt-40">
        <div className="max-w-3xl fade-up">
          <span className="eyebrow text-gold">{eyebrow}</span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg text-ivory/75 md:text-xl">{subtitle}</p>
          )}
          <div className="mt-10 h-px w-24 bg-gold" />
        </div>
      </div>
    </section>
  );
};
