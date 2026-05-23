import { Bed, Bath, Car, Maximize, MapPin } from "lucide-react";
import type { Property } from "@/data/properties";

export type { Property };

export function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group bg-card border border-border rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          width={1024}
          height={768}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {p.badge && (
          <span className="absolute top-4 left-4 bg-wine text-wine-foreground text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full font-medium">
            {p.badge}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
          <MapPin className="w-3.5 h-3.5" /> {p.neighborhood}, {p.city}
        </div>
        <h3 className="text-xl font-display text-foreground leading-tight mb-3">{p.title}</h3>
        <div className="text-2xl font-display text-wine mb-5">{p.price}</div>

        <div className="flex items-center gap-5 text-xs text-muted-foreground border-t border-border pt-4">
          <span className="flex items-center gap-1.5"><Maximize className="w-3.5 h-3.5" /> {p.area}m²</span>
          <span className="flex items-center gap-1.5"><Bed className="w-3.5 h-3.5" /> {p.beds}</span>
          <span className="flex items-center gap-1.5"><Bath className="w-3.5 h-3.5" /> {p.baths}</span>
          <span className="flex items-center gap-1.5"><Car className="w-3.5 h-3.5" /> {p.parking}</span>
        </div>

        <button className="mt-5 w-full text-sm font-medium border border-border rounded-xl py-3 hover:bg-foreground hover:text-background transition-all">
          Ver detalhes
        </button>
      </div>
    </article>
  );
}
