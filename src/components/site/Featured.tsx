import { PropertyCard, type Property } from "./PropertyCard";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";

const properties: Property[] = [
  { id: "1", image: p1, badge: "Destaque", title: "Villa Contemporânea com Piscina", price: "R$ 4.850.000", location: "Alphaville, SP", area: 520, beds: 4, baths: 5, parking: 4 },
  { id: "2", image: p2, badge: "Exclusivo", title: "Apartamento Vista Panorâmica", price: "R$ 2.190.000", location: "Vila Olímpia, SP", area: 178, beds: 3, baths: 4, parking: 2 },
  { id: "3", image: p3, badge: "Lançamento", title: "Cobertura Duplex com Terraço", price: "R$ 6.300.000", location: "Itaim Bibi, SP", area: 340, beds: 4, baths: 5, parking: 3 },
  { id: "4", image: p1, badge: "Destaque", title: "Residência Moderna Premium", price: "R$ 3.450.000", location: "Granja Viana, SP", area: 410, beds: 4, baths: 4, parking: 4 },
];

export function Featured() {
  return (
    <section id="destaques" className="py-28 px-6 lg:px-10 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-wine font-medium">— Seleção curada</span>
            <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-display text-foreground">
              Imóveis em destaque
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Selecionamos oportunidades exclusivas para você viver com sofisticação e conforto.
            </p>
          </div>
          <a href="#destaques" className="text-sm font-medium text-foreground border-b border-wine pb-1 hover:text-wine transition-colors self-start">
            Ver todos os imóveis →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
