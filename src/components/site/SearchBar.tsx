import { Search } from "lucide-react";

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="flex flex-col gap-1.5 min-w-0">
    <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">{label}</span>
    {children}
  </label>
);

const selectCls =
  "bg-transparent border-0 outline-none text-sm text-foreground font-medium appearance-none cursor-pointer w-full";

export function SearchBar() {
  return (
    <section className="relative z-20 -mt-16 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="bg-card border border-border rounded-2xl shadow-[var(--shadow-elegant)] p-6 lg:p-7">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-5 lg:gap-4 items-end">
            <Field label="Negociação">
              <select className={selectCls} defaultValue="comprar">
                <option value="comprar">Comprar</option>
                <option value="alugar">Alugar</option>
              </select>
            </Field>
            <Field label="Tipo">
              <select className={selectCls}>
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Cobertura</option>
                <option>Terreno</option>
                <option>Comercial</option>
              </select>
            </Field>
            <Field label="Cidade">
              <select className={selectCls}>
                <option>São Paulo</option>
                <option>Rio de Janeiro</option>
                <option>Belo Horizonte</option>
                <option>Curitiba</option>
              </select>
            </Field>
            <Field label="Bairro">
              <input placeholder="Ex: Jardins" className={selectCls + " placeholder:text-muted-foreground"} />
            </Field>
            <Field label="Faixa de preço">
              <select className={selectCls}>
                <option>Até R$ 500 mil</option>
                <option>R$ 500 mil – 1 mi</option>
                <option>R$ 1 – 3 mi</option>
                <option>Acima de R$ 3 mi</option>
              </select>
            </Field>
            <Field label="Quartos">
              <select className={selectCls}>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </Field>
            <button className="h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-wine text-wine-foreground font-medium hover:opacity-95 transition-all shadow-[var(--shadow-wine)]">
              <Search className="w-4 h-4" /> Buscar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
