import { PropertyCard, type Property } from "./PropertyCard";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";

const recent: Property[] = [
  { id: "r1", image: p2, title: "Apartamento Garden Premium", price: "R$ 1.480.000", location: "Moema, SP", area: 142, beds: 3, baths: 3, parking: 2 },
  { id: "r2", image: p3, title: "Cobertura com Vista Aberta", price: "R$ 3.890.000", location: "Brooklin, SP", area: 280, beds: 3, baths: 4, parking: 3 },
  { id: "r3", image: p1, title: "Casa de Condomínio Fechado", price: "R$ 2.650.000", location: "Cotia, SP", area: 380, beds: 4, baths: 4, parking: 4 },
  { id: "r4", image: p2, title: "Studio Design Mobiliado", price: "R$ 680.000", location: "Vila Madalena, SP", area: 48, beds: 1, baths: 1, parking: 1 },
];

export function Recent() {
  return (
    <section id="recentes" className="py-28 px-6 lg:px-10 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-wine font-medium">— Novidades</span>
            <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-display text-foreground">Imóveis recentes</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recent.map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
