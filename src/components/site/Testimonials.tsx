import { Star, Quote } from "lucide-react";

const items = [
  { name: "Mariana e Rafael Costa", text: "Atendimento impecável do início ao fim. Encontramos a casa dos nossos sonhos em menos de um mês. Equipe extremamente profissional.", rating: 5, initials: "MC" },
  { name: "Eduardo Almeida", text: "Compraram meu apartamento com agilidade e pelo valor justo. A assessoria jurídica fez toda a diferença na negociação.", rating: 5, initials: "EA" },
  { name: "Família Vieira", text: "Mais que uma imobiliária, foram parceiros na realização do nosso sonho. Recomendo sem hesitar.", rating: 5, initials: "FV" },
];

export function Testimonials() {
  return (
    <section className="py-28 px-6 lg:px-10 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-wine font-medium">— Quem confia</span>
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-display text-foreground">Histórias reais</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure key={t.name} className="bg-card border border-border rounded-2xl p-8 shadow-[var(--shadow-card)] relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-wine/15" />
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-wine text-wine" />
                ))}
              </div>
              <blockquote className="text-foreground/85 leading-relaxed mb-6">"{t.text}"</blockquote>
              <figcaption className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-wine text-wine-foreground flex items-center justify-center text-sm font-medium">
                  {t.initials}
                </div>
                <div className="text-sm font-medium text-foreground">{t.name}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
