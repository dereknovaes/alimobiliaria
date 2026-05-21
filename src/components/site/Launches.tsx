import { ArrowUpRight } from "lucide-react";
import l1 from "@/assets/launch-1.jpg";
import l2 from "@/assets/launch-2.jpg";

const launches = [
  { img: l1, name: "Edifício Avenir", desc: "Residencial boutique com apenas 24 unidades, design assinado e áreas comuns premiadas.", location: "Pinheiros, São Paulo" },
  { img: l2, name: "Torres Solare", desc: "Duas torres com vista permanente, rooftop com piscina infinita e arquitetura icônica.", location: "Barra da Tijuca, RJ" },
];

export function Launches() {
  return (
    <section className="py-28 px-6 lg:px-10 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs tracking-[0.3em] uppercase text-wine font-medium">— Novos empreendimentos</span>
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-display text-foreground">Lançamentos</h2>
          <p className="mt-4 text-muted-foreground">
            Empreendimentos exclusivos das maiores construtoras do país, com condições especiais de pré-lançamento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {launches.map((l) => (
            <article key={l.name} className="group relative rounded-2xl overflow-hidden bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={l.img} alt={l.name} loading="lazy" width={1280} height={960} className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-xs tracking-[0.2em] uppercase text-white/70 mb-2">{l.location}</div>
                  <h3 className="text-3xl md:text-4xl font-display mb-3">{l.name}</h3>
                  <p className="text-white/85 max-w-md text-sm leading-relaxed mb-5">{l.desc}</p>
                  <button className="inline-flex items-center gap-2 text-sm font-medium border-b border-white/60 pb-1 hover:border-white transition">
                    Saiba mais <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
