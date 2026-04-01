/**
 * HeroSection — Left-aligned hero with name, headline, tagline, and CTA buttons
 * Design: Refined Modernism — warm bg with data network background image
 */
import { ArrowRight, Download, Mail } from "lucide-react";
import { personal, hero } from "@/data/content";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/hero-bg-AG8ZRU76Z79bFihCTMvyeS.webp";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle warm overlay to ensure text legibility */}
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative container pt-24 pb-20">
        <div className="max-w-2xl">
          {/* Greeting */}
          <p
            className="section-label mb-4 fade-up visible"
            style={{ transitionDelay: "0ms" }}
          >
            {hero.greeting}
          </p>

          {/* Name */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 fade-up visible"
            style={{
              fontFamily: "var(--font-display)",
              transitionDelay: "80ms",
              lineHeight: 1.1,
            }}
          >
            {personal.name}
          </h1>

          {/* Title badges */}
          <div
            className="flex flex-wrap gap-2 mb-6 fade-up visible"
            style={{ transitionDelay: "160ms" }}
          >
            {personal.title.split(" · ").map((t) => (
              <span
                key={t}
                className="text-sm font-medium px-3 py-1 rounded-sm border border-primary/30 text-primary bg-primary/8"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <p
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl fade-up visible"
            style={{ transitionDelay: "240ms", fontFamily: "var(--font-body)" }}
          >
            {hero.tagline}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-3 fade-up visible"
            style={{ transitionDelay: "320ms" }}
          >
            <button
              onClick={() => handleScroll(hero.cta.primary.href)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-colors shadow-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {hero.cta.primary.label}
              <ArrowRight size={15} />
            </button>

            {personal.resumeUrl ? (
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-semibold rounded-sm hover:bg-muted transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Download size={15} />
                {hero.cta.secondary.label}
              </a>
            ) : (
              <button
                onClick={() => handleScroll("#resume")}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-semibold rounded-sm hover:bg-muted transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Download size={15} />
                {hero.cta.secondary.label}
              </button>
            )}

            <button
              onClick={() => handleScroll(hero.cta.tertiary.href)}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Mail size={15} />
              {hero.cta.tertiary.label}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
