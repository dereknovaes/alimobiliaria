import bg from "@/assets/financing-bg.jpg";
import { Calculator } from "lucide-react";

export function Financing() {
  return (
    <section id="financiamento" className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <img src={bg} alt="" loading="lazy" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-2xl text-white">
          <span className="text-xs tracking-[0.3em] uppercase text-white/70">— Simulação rápida</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-display leading-tight">
            Seu imóvel mais perto
            <br /><span className="italic font-light">do que você imagina.</span>
          </h2>
          <p className="mt-6 text-white/85 text-lg max-w-lg">
            Descubra em minutos as melhores condições de financiamento e a parcela que cabe no seu orçamento.
          </p>
          <a
            href="#contato"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-wine text-wine-foreground px-8 py-4 font-medium hover:opacity-95 transition-all shadow-[var(--shadow-wine)]"
          >
            <Calculator className="w-4 h-4" /> Simular financiamento
          </a>
        </div>
      </div>
    </section>
  );
}
