import { useState } from "react";
import { Bed, Bath, Car, Maximize, MapPin, X, ChevronLeft, ChevronRight, Check } from "lucide-react";
import type { Property } from "@/data/properties";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export type { Property };

export function PropertyCard({ p }: { p: Property }) {
  const [open, setOpen] = useState(false);
  const photos = p.gallery && p.gallery.length > 0 ? p.gallery : [p.image];
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % photos.length);
  const prev = () => setIdx((i) => (i - 1 + photos.length) % photos.length);

  return (
    <>
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
          {photos.length > 1 && (
            <span className="absolute bottom-4 right-4 bg-black/60 text-white text-[11px] px-2.5 py-1 rounded-full font-medium backdrop-blur-sm">
              {photos.length} fotos
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

          <button
            onClick={() => { setIdx(0); setOpen(true); }}
            className="mt-5 w-full text-sm font-medium border border-border rounded-xl py-3 hover:bg-foreground hover:text-background transition-all"
          >
            Ver detalhes
          </button>
        </div>
      </article>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden border-border bg-card">
          <DialogTitle className="sr-only">{p.title}</DialogTitle>
          <div className="grid lg:grid-cols-5 max-h-[90vh] overflow-hidden">
            {/* Galeria */}
            <div className="lg:col-span-3 relative bg-black flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
              <img
                src={photos[idx]}
                alt={`${p.title} — foto ${idx + 1}`}
                className="max-w-full max-h-[60vh] lg:max-h-[90vh] object-contain"
              />
              {photos.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm transition"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Próxima"
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm transition"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                    {idx + 1} / {photos.length}
                  </span>
                </>
              )}
            </div>

            {/* Detalhes */}
            <div className="lg:col-span-2 p-6 lg:p-8 overflow-y-auto max-h-[90vh]">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                <MapPin className="w-3.5 h-3.5" /> {p.neighborhood}, {p.city}
              </div>
              <h3 className="text-2xl font-display text-foreground leading-tight mb-3">{p.title}</h3>
              <div className="text-3xl font-display text-wine mb-5">{p.price}</div>

              <div className="grid grid-cols-2 gap-3 text-sm text-foreground border-y border-border py-4 mb-5">
                <span className="flex items-center gap-2"><Maximize className="w-4 h-4 text-wine" /> {p.area}m²</span>
                <span className="flex items-center gap-2"><Bed className="w-4 h-4 text-wine" /> {p.beds} quartos</span>
                <span className="flex items-center gap-2"><Bath className="w-4 h-4 text-wine" /> {p.baths} banheiros</span>
                <span className="flex items-center gap-2"><Car className="w-4 h-4 text-wine" /> {p.parking} vagas</span>
              </div>

              {p.description && (
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.description}</p>
              )}

              {p.features && p.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-[0.18em] text-wine font-medium mb-3">Destaques</h4>
                  <ul className="space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-wine mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {photos.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {photos.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setIdx(i)}
                      className={`aspect-square rounded-md overflow-hidden border-2 transition ${
                        i === idx ? "border-wine" : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <a
                href="https://wa.me/5582900000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center rounded-full bg-wine text-wine-foreground px-6 py-3 font-medium hover:opacity-95 transition shadow-[var(--shadow-wine)]"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar"
            className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 backdrop-blur-sm transition z-10"
          >
            <X className="w-4 h-4" />
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
}
