import heroImg from "@/assets/hero-family.jpg";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Família feliz em sua nova casa"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 min-h-screen flex flex-col justify-center pt-24 pb-16">
        <div className="max-w-3xl">
          <span
            className="inline-block text-xs tracking-[0.3em] uppercase text-white/80 mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            — AL Imobiliária · desde 2008
          </span>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-display text-white leading-[1.02] mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Seu novo imóvel
            <br />
            <span className="italic font-light">começa aqui.</span>
          </h1>
          <p
            className="text-lg md:text-xl text-white/85 max-w-xl mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Conectamos você aos melhores imóveis com segurança, confiança e excelência em cada detalhe da sua jornada.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#destaques"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-foreground px-8 py-4 font-medium hover:bg-white/90 transition-all shadow-[var(--shadow-elegant)]"
            >
              Ver imóveis
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/5511900000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 backdrop-blur bg-white/5 text-white px-8 py-4 font-medium hover:bg-white/15 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
