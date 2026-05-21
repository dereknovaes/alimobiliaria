import { ArrowRight } from "lucide-react";

export function AdvertiseCTA() {
  return (
    <section id="anunciar" className="py-28 px-6 lg:px-10 bg-foreground text-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-wine">— Para proprietários</span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
              Quer vender ou alugar
              <br /><span className="italic font-light">seu imóvel?</span>
            </h2>
          </div>
          <div>
            <p className="text-background/75 text-lg leading-relaxed mb-8">
              Anuncie conosco e alcance os melhores compradores. Avaliação gratuita, divulgação premium e negociação especializada.
            </p>
            <a href="#contato" className="group inline-flex items-center gap-3 rounded-full bg-wine text-wine-foreground px-8 py-4 font-medium hover:opacity-95 transition shadow-[var(--shadow-wine)]">
              Anunciar imóvel
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
