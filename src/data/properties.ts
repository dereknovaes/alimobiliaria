// =============================================================
// CADASTRO DE IMÓVEIS — AL Imobiliária
// =============================================================
// Para adicionar um imóvel novo, basta copiar o modelo abaixo
// dentro da lista correspondente (featured ou recent) e preencher
// os campos. As imagens podem ser:
//   - importadas de src/assets (import img from "@/assets/...")
//   - URLs públicas ("https://...")
//
// Campos opcionais:
//   - gallery: array com fotos extras do imóvel (abertas em "Ver detalhes")
//   - description: texto descritivo
//   - features: lista de destaques (ex: "Piscina", "Churrasqueira")
// =============================================================

import aldebaranFachada from "@/assets/properties/aldebaran-01-fachada.jpg";
import aldebaranPiscina from "@/assets/properties/aldebaran-02-piscina.jpg";
import aldebaranSala from "@/assets/properties/aldebaran-03-sala.jpg";
import aldebaranCozinha from "@/assets/properties/aldebaran-04-cozinha.jpg";
import aldebaranQuarto from "@/assets/properties/aldebaran-05-quarto.jpg";
import aldebaranCloset from "@/assets/properties/aldebaran-06-closet.jpg";
import aldebaranSuiteBanheiro from "@/assets/properties/aldebaran-07-suite-banheiro.jpg";
import aldebaranBanheiro from "@/assets/properties/aldebaran-08-banheiro.jpg";
import aldebaranBanheiro2 from "@/assets/properties/aldebaran-09-banheiro2.jpg";
import aldebaranLavabo from "@/assets/properties/aldebaran-10-lavabo.jpg";
import aldebaranSalaTv from "@/assets/properties/aldebaran-11-sala-tv.jpg";
import aldebaranSuite from "@/assets/properties/aldebaran-12-suite.jpg";
import aldebaranLateral from "@/assets/properties/aldebaran-13-lateral.jpg";
import aldebaranSalaJantar from "@/assets/properties/aldebaran-14-sala-jantar.jpg";
import aldebaranQuarto2 from "@/assets/properties/aldebaran-15-quarto2.jpg";
import aldebaranSalaAmpla from "@/assets/properties/aldebaran-16-sala-ampla.jpg";
import aldebaranPiscinaVista from "@/assets/properties/aldebaran-17-piscina-vista.jpg";
import aldebaranQuarto3 from "@/assets/properties/aldebaran-18-quarto3.jpg";

export type PropertyPurpose = "comprar" | "alugar" | "minha-casa-minha-vida";
export type PropertyType =
  | "Apartamento"
  | "Casa"
  | "Cobertura"
  | "Terreno"
  | "Comercial";

export interface Property {
  id: string;
  image: string;
  gallery?: string[];
  description?: string;
  features?: string[];
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

const aldebaranCasa: Property = {
  id: "aldebaran-casa-4q",
  image: aldebaranFachada,
  gallery: [
    aldebaranFachada,
    aldebaranPiscina,
    aldebaranSala,
    aldebaranCozinha,
    aldebaranQuarto,
    aldebaranCloset,
    aldebaranSuiteBanheiro,
    aldebaranBanheiro,
    aldebaranBanheiro2,
    aldebaranLavabo,
  ],
  badge: "Exclusivo",
  title: "Excelente casa no Condomínio Aldebaran",
  price: "R$ 1.400.000",
  priceValue: 1_400_000,
  purpose: "comprar",
  type: "Casa",
  city: "Maceió",
  neighborhood: "Aldebaran",
  area: 100,
  beds: 4,
  baths: 4,
  parking: 2,
  description:
    "Excelente casa no condomínio Aldebaran, com terreno de grota 100m² maior que o padrão. Ambientes amplos, piscina, churrasqueira e dependência completa — perfeita para receber a família e amigos.",
  features: [
    "4 quartos (sendo 2 suítes)",
    "Sala em dois ambientes",
    "Piscina",
    "Churrasqueira",
    "Cozinha ampla",
    "Despensa",
    "Dependência + banheiro",
    "Terreno de grota com 100m² a mais que o padrão",
  ],
};

// === Imóveis em destaque ===
export const featuredProperties: Property[] = [aldebaranCasa];

// === Imóveis recentes / Novidades ===
export const recentProperties: Property[] = [];

// === Lançamentos (empreendimentos) ===
export const launches: Launch[] = [];

// Lista combinada usada pelo motor de busca
export const allProperties: Property[] = [
  ...featuredProperties,
  ...recentProperties,
];
