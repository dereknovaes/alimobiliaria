import { PropertyCard } from "./PropertyCard";
import { featuredProperties, allProperties } from "@/data/properties";
import { usePropertySearch } from "@/hooks/usePropertySearch";
import { Building2 } from "lucide-react";

export function Featured() {
  const { filter, active } = usePropertySearch();
  // Quando há busca ativa, mostra resultados de todo o acervo nesta seção;
  // caso contrário, mostra apenas os destaques curados.
  const list = active ? filter(allProperties) : featuredProperties;

  return (
    <section id="destaques" className="py-28 px-6 lg:px-10 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-wine font-medium">
              {active ? "— Resultado da busca" : "— Seleção curada"}
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-display text-foreground">
              {active ? `${list.length} ${list.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}` : "Imóveis em destaque"}
            </h2>
            {!active && (
              <p className="mt-4 text-muted-foreground max-w-lg">
                Selecionamos oportunidades exclusivas para você viver com sofisticação e conforto.
              </p>
            )}
          </div>
        </div>

        {list.length === 0 ? (
          <EmptyState active={active} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {list.map((p) => <PropertyCard key={p.id} p={p} />)}
          </div>
        )}
      </div>
    </section>
  );
}

function EmptyState({ active }: { active: boolean }) {
  return (
    <div className="border border-dashed border-border rounded-2xl py-20 px-6 text-center bg-card/50">
      <div className="mx-auto w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-5">
        <Building2 className="w-6 h-6 text-wine" />
      </div>
      <h3 className="text-xl font-display text-foreground mb-2">
        {active ? "Nenhum imóvel encontrado" : "Em breve novos imóveis"}
      </h3>
      <p className="text-sm text-muted-foreground max-w-md mx-auto">
        {active
          ? "Tente ajustar os filtros ou fale com nosso time pelo WhatsApp — temos opções fora do site."
          : "Nosso catálogo está sendo atualizado. Entre em contato para conhecer oportunidades exclusivas."}
      </p>
    </div>
  );
}
