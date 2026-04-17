import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-cityscape.jpg";

const SLIDES = [
  {
    eyebrow: "The Sterling Capital Advantage",
    title: "Capital, conviction, and the access to deploy both.",
    body: "We partner with institutions, corporates and private clients to navigate complex markets with clarity and discipline.",
  },
  {
    eyebrow: "Asset Management",
    title: "Disciplined strategies, built for the long horizon.",
    body: "Multi-asset portfolios designed around your objectives — from capital preservation to high-conviction growth.",
  },
  {
    eyebrow: "Investment Banking",
    title: "Advisory at the intersection of capital and ambition.",
    body: "M&A, capital raising and strategic counsel for businesses building the next chapter.",
  },
  {
    eyebrow: "Brokerage",
    title: "Global market access, executed with precision.",
    body: "Equities, fixed income, FX and derivatives — across South African and international venues.",
  },
];

export const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-navy text-ivory">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Cape Town skyline at dusk with Table Mountain"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy-deep/70 to-navy" />
      </div>

      <div className="container-wide flex min-h-[100svh] flex-col justify-end pb-24 pt-40 md:pb-32">
        <div className="max-w-3xl">
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                i === index ? "opacity-100 translate-y-0" : "pointer-events-none absolute opacity-0 translate-y-4"
              }`}
              aria-hidden={i !== index}
            >
              <span className="eyebrow text-gold">{slide.eyebrow}</span>
              <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                {slide.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-ivory/80 md:text-xl">{slide.body}</p>
            </div>
          ))}

          <div className="relative mt-10 flex flex-wrap items-center gap-6">
            <Button asChild size="lg" className="group rounded-none bg-gold px-8 text-navy hover:bg-gold-bright">
              <Link to="/contact">
                Speak with our team
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Link to="/about" className="link-underline text-ivory hover:text-gold">
              About Sterling
            </Link>
          </div>

          {/* Slide indicators */}
          <div className="mt-16 flex items-center gap-3">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-px transition-all duration-500 ${
                  i === index ? "w-12 bg-gold" : "w-6 bg-ivory/30 hover:bg-ivory/60"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
            <span className="ml-4 font-mono text-xs tracking-widest text-ivory/50">
              {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
