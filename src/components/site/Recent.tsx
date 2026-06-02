import { PropertyCard } from "./PropertyCard";
import { featuredProperties } from "@/data/properties";
import { usePropertySearch } from "@/hooks/usePropertySearch";
import { Building2 } from "lucide-react";

export function Recent() {
  const { filter, active } = usePropertySearch();
  const list = active ? filter(recentProperties) : recentProperties;

  return (
    <section id="recentes" className="py-28 px-6 lg:px-10 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-wine font-medium">— Novidades</span>
            <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-display text-foreground">Imóveis recentes</h2>
          </div>
        </div>

        {list.length === 0 ? (
          <div className="border border-dashed border-border rounded-2xl py-20 px-6 text-center bg-card/60">
            <div className="mx-auto w-14 h-14 rounded-full bg-background flex items-center justify-center mb-5">
              <Building2 className="w-6 h-6 text-wine" />
            </div>
            <h3 className="text-xl font-display text-foreground mb-2">
              {active ? "Sem novidades para esses filtros" : "Aguardando novos cadastros"}
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              {active
                ? "Ajuste sua busca ou fale com nossa equipe para receber opções personalizadas."
                : "Em breve novos imóveis serão publicados aqui."}
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
