import { Search, SlidersHorizontal, X } from "lucide-react";
import { usePropertySearch } from "@/hooks/usePropertySearch";

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="flex flex-col gap-1.5 min-w-0">
    <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">{label}</span>
    {children}
  </label>
);

const ctrl =
  "bg-transparent border-0 outline-none text-sm text-foreground font-medium appearance-none cursor-pointer w-full";

export function SearchBar() {
  const { filters, setFilter, apply, reset, active } = usePropertySearch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    apply();
    document.getElementById("destaques")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative z-20 -mt-16 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <form
          onSubmit={onSubmit}
          className="bg-card border border-border rounded-2xl shadow-[var(--shadow-elegant)] p-6 lg:p-7"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-5 lg:gap-4 items-end">
            <Field label="Negociação">
              <select
                className={ctrl}
                value={filters.purpose}
                onChange={(e) => setFilter("purpose", e.target.value as "comprar" | "alugar" | "minha-casa-minha-vida" | "")}
              >
                <option value="">Todas</option>
                <option value="comprar">Comprar</option>
                <option value="alugar">Alugar</option>
                <option value="minha-casa-minha-vida">Minha Casa Minha Vida</option>
              </select>
            </Field>
            <Field label="Tipo">
              <select className={ctrl} value={filters.type} onChange={(e) => setFilter("type", e.target.value as never)}>
                <option value="">Todos</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Casa">Casa</option>
                <option value="Cobertura">Cobertura</option>
                <option value="Terreno">Terreno</option>
                <option value="Comercial">Comercial</option>
              </select>
            </Field>
            <Field label="Cidade">
              <input
                className={ctrl + " placeholder:text-muted-foreground"}
                placeholder="Ex: São Paulo"
                value={filters.city}
                onChange={(e) => setFilter("city", e.target.value)}
              />
            </Field>
            <Field label="Bairro">
              <input
                className={ctrl + " placeholder:text-muted-foreground"}
                placeholder="Ex: Jardins"
                value={filters.neighborhood}
                onChange={(e) => setFilter("neighborhood", e.target.value)}
              />
            </Field>
            <Field label="Faixa de preço">
              <select className={ctrl} value={filters.priceRange} onChange={(e) => setFilter("priceRange", e.target.value)}>
                <option value="">Todas</option>
                <option value="0-500000">Até R$ 500 mil</option>
                <option value="500000-1000000">R$ 500 mil – 1 mi</option>
                <option value="1000000-3000000">R$ 1 – 3 mi</option>
                <option value="3000000+">Acima de R$ 3 mi</option>
              </select>
            </Field>
            <Field label="Quartos">
              <select className={ctrl} value={filters.beds} onChange={(e) => setFilter("beds", e.target.value)}>
                <option value="">Qualquer</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </Field>
            <button
              type="submit"
              className="h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-wine text-wine-foreground font-medium hover:opacity-95 transition-all shadow-[var(--shadow-wine)]"
            >
              <Search className="w-4 h-4" /> Buscar
            </button>
          </div>

          <div className="mt-5 pt-5 border-t border-border flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <div className="flex items-center gap-2 flex-1">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              <input
                className="bg-transparent text-sm outline-none flex-1 placeholder:text-muted-foreground"
                placeholder="Busque por código, título ou bairro"
                value={filters.query}
                onChange={(e) => setFilter("query", e.target.value)}
              />
            </div>
            {active && (
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-wine transition self-start md:self-auto"
              >
                <X className="w-3.5 h-3.5" /> Limpar filtros
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
