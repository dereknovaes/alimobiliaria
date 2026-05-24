import { PropertyCard } from "./PropertyCard";
import { allProperties } from "@/data/properties";
import { Home, CheckCircle2, Wallet, KeyRound } from "lucide-react";
import mcmvLogo from "@/assets/minha-casa-minha-vida.png";

export function MinhaCasaMinhaVida() {
  const list = allProperties.filter((p) => p.purpose === "minha-casa-minha-vida");

  const benefits = [
    { icon: Wallet, label: "Subsídio do governo" },
    { icon: CheckCircle2, label: "Juros reduzidos" },
    { icon: KeyRound, label: "Entrada facilitada" },
  ];

  return (
    <section id="minha-casa-minha-vida" className="py-28 px-6 lg:px-10 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="flex items-start gap-6 max-w-2xl">
            <img
              src={mcmvLogo}
              alt="Logotipo do programa Minha Casa Minha Vida"
              loading="lazy"
              className="shrink-0 w-24 h-24 lg:w-32 lg:h-32 object-contain drop-shadow-md"
            />
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-wine font-medium">— Programa habitacional</span>
              <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-display text-foreground leading-[1.05]">
                Minha Casa Minha Vida
              </h2>
              <p className="mt-4 text-muted-foreground">
                Realize o sonho da casa própria com as melhores condições do programa habitacional do governo federal. Atendimento completo do início ao financiamento.
              </p>
            </div>
          </div>

          <ul className="flex flex-wrap gap-3">
            {benefits.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary border border-border text-sm text-foreground"
              >
                <b.icon className="w-4 h-4 text-wine" />
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        {list.length === 0 ? (
          <div className="border border-dashed border-border rounded-2xl py-20 px-6 text-center bg-card/50">
            <div className="mx-auto w-14 h-14 rounded-full bg-wine/10 flex items-center justify-center mb-5">
              <Home className="w-6 h-6 text-wine" />
            </div>
            <h3 className="text-xl font-display text-foreground mb-2">Imóveis em breve</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Em breve novas unidades do programa Minha Casa Minha Vida. Fale com nosso time pelo WhatsApp para conhecer as opções disponíveis.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {list.map((p) => <PropertyCard key={p.id} p={p} />)}
          </div>
        )}
      </div>
    </section>
  );
}
