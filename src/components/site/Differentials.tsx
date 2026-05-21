import { HeartHandshake, Landmark, ShieldCheck, Award } from "lucide-react";

const items = [
  { icon: HeartHandshake, title: "Atendimento personalizado", desc: "Consultores dedicados que entendem o seu momento e encontram o imóvel ideal para você." },
  { icon: Landmark, title: "Financiamento facilitado", desc: "Parceria com os principais bancos e assessoria completa em todo o processo de crédito." },
  { icon: ShieldCheck, title: "Segurança jurídica", desc: "Equipe jurídica própria garantindo análise documental e transações 100% seguras." },
  { icon: Award, title: "Especialistas no mercado", desc: "Mais de 15 anos conectando pessoas aos melhores imóveis com excelência e transparência." },
];

export function Differentials() {
  return (
    <section className="py-28 px-6 lg:px-10 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-wine font-medium">— Diferenciais</span>
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-display text-foreground">
            Por que escolher a AL Imobiliária
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {items.map((it) => (
            <div key={it.title} className="group bg-card p-8 lg:p-10 hover:bg-secondary transition-colors duration-500">
              <div className="w-12 h-12 rounded-xl bg-wine/10 text-wine flex items-center justify-center mb-6 group-hover:bg-wine group-hover:text-wine-foreground transition-all duration-500">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display text-foreground mb-3">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
