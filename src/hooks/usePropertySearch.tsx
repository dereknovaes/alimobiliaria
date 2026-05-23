import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Property, PropertyPurpose, PropertyType } from "@/data/properties";

export interface SearchFilters {
  purpose: PropertyPurpose | "";
  type: PropertyType | "";
  city: string;
  neighborhood: string;
  priceRange: string; // "0-500000" | "500000-1000000" | "1000000-3000000" | "3000000+" | ""
  beds: string;      // "1" | "2" | "3" | "4" | ""
  query: string;     // busca textual (código, título, bairro)
}

const defaultFilters: SearchFilters = {
  purpose: "",
  type: "",
  city: "",
  neighborhood: "",
  priceRange: "",
  beds: "",
  query: "",
};

interface Ctx {
  filters: SearchFilters;
  setFilter: <K extends keyof SearchFilters>(k: K, v: SearchFilters[K]) => void;
  reset: () => void;
  active: boolean;
  applied: number; // incrementa a cada "Buscar"
  apply: () => void;
  filter: (list: Property[]) => Property[];
}

const PropertySearchContext = createContext<Ctx | null>(null);

function priceInRange(value: number, range: string) {
  if (!range) return true;
  if (range === "3000000+") return value >= 3_000_000;
  const [min, max] = range.split("-").map(Number);
  return value >= min && value <= max;
}

export function PropertySearchProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<SearchFilters>(defaultFilters);
  const [applied, setApplied] = useState(0);

  const value = useMemo<Ctx>(() => {
    const active = Object.entries(filters).some(([, v]) => v !== "");
    return {
      filters,
      applied,
      active,
      apply: () => setApplied((n) => n + 1),
      setFilter: (k, v) => setFilters((f) => ({ ...f, [k]: v })),
      reset: () => {
        setFilters(defaultFilters);
        setApplied((n) => n + 1);
      },
      filter: (list) => {
        if (!active) return list;
        const q = filters.query.trim().toLowerCase();
        return list.filter((p) => {
          if (filters.purpose && p.purpose !== filters.purpose) return false;
          if (filters.type && p.type !== filters.type) return false;
          if (filters.city && p.city.toLowerCase() !== filters.city.toLowerCase()) return false;
          if (filters.neighborhood && !p.neighborhood.toLowerCase().includes(filters.neighborhood.toLowerCase())) return false;
          if (filters.beds && p.beds < Number(filters.beds)) return false;
          if (!priceInRange(p.priceValue, filters.priceRange)) return false;
          if (q) {
            const hay = `${p.id} ${p.title} ${p.neighborhood} ${p.city}`.toLowerCase();
            if (!hay.includes(q)) return false;
          }
          return true;
        });
      },
    };
  }, [filters, applied]);

  return (
    <PropertySearchContext.Provider value={value}>{children}</PropertySearchContext.Provider>
  );
}

export function usePropertySearch() {
  const ctx = useContext(PropertySearchContext);
  if (!ctx) throw new Error("usePropertySearch must be used within PropertySearchProvider");
  return ctx;
}
