// =============================================================
// CADASTRO DE IMÓVEIS — AL Imobiliária
// =============================================================
// Para adicionar um imóvel novo, basta copiar o modelo abaixo
// dentro da lista correspondente (featured, launches ou recent)
// e preencher os campos. As imagens podem ser:
//   - importadas de src/assets (import img from "@/assets/...")
//   - URLs públicas ("https://...")
//
// Modelo:
// {
//   id: "codigo-unico",
//   image: "/caminho-ou-url.jpg",
//   badge: "Destaque",           // opcional: Destaque, Exclusivo, Lançamento...
//   title: "Nome do imóvel",
//   price: "R$ 0",               // formatado para exibição
//   priceValue: 0,               // número puro (usado nos filtros)
//   purpose: "comprar",          // "comprar" | "alugar"
//   type: "Apartamento",         // Apartamento | Casa | Cobertura | Terreno | Comercial
//   city: "São Paulo",
//   neighborhood: "Jardins",
//   area: 0,
//   beds: 0,
//   baths: 0,
//   parking: 0,
// }
// =============================================================

export type PropertyPurpose = "comprar" | "alugar";
export type PropertyType =
  | "Apartamento"
  | "Casa"
  | "Cobertura"
  | "Terreno"
  | "Comercial";

export interface Property {
  id: string;
  image: string;
  badge?: string;
  title: string;
  price: string;
  priceValue: number;
  purpose: PropertyPurpose;
  type: PropertyType;
  city: string;
  neighborhood: string;
  area: number;
  beds: number;
  baths: number;
  parking: number;
}

export interface Launch {
  id: string;
  image: string;
  name: string;
  description: string;
  location: string;
}

// === Imóveis em destaque ===
export const featuredProperties: Property[] = [];

// === Imóveis recentes / Novidades ===
export const recentProperties: Property[] = [];

// === Lançamentos (empreendimentos) ===
export const launches: Launch[] = [];

// Lista combinada usada pelo motor de busca
export const allProperties: Property[] = [
  ...featuredProperties,
  ...recentProperties,
];
