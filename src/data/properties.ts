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

import aldebaran2Fachada from "@/assets/properties/aldebaran2-01-fachada.jpg";
import aldebaran2Piscina from "@/assets/properties/aldebaran2-02-piscina.jpg";
import aldebaran2Sala from "@/assets/properties/aldebaran2-03-sala.jpg";
import aldebaran2SalaTv from "@/assets/properties/aldebaran2-04-sala-tv.jpg";
import aldebaran2Cozinha from "@/assets/properties/aldebaran2-05-cozinha.jpg";
import aldebaran2Suite from "@/assets/properties/aldebaran2-06-suite.jpg";
import aldebaran2Varanda from "@/assets/properties/aldebaran2-07-varanda.jpg";
import aldebaran2Banheiro from "@/assets/properties/aldebaran2-08-banheiro.jpg";
import aldebaran2Churrasqueira from "@/assets/properties/aldebaran2-09-churrasqueira.jpg";
import aldebaran2Lateral from "@/assets/properties/aldebaran2-10-lateral.jpg";
import aldebaran2Quarto from "@/assets/properties/aldebaran2-11-quarto.jpg";
import aldebaran2SalaAmpla from "@/assets/properties/aldebaran2-12-sala-ampla.jpg";
import aldebaran2Banheiro2 from "@/assets/properties/aldebaran2-13-banheiro2.jpg";
import aldebaran2Quarto2 from "@/assets/properties/aldebaran2-14-quarto2.jpg";
import aldebaran2Quarto3 from "@/assets/properties/aldebaran2-15-quarto3.jpg";
import aldebaran2Quarto4 from "@/assets/properties/aldebaran2-16-quarto4.jpg";
import aldebaran2SalaGrande from "@/assets/properties/aldebaran2-17-sala-grande.jpg";

import aldebaran3Fachada from "@/assets/properties/aldebaran3-01-fachada.jpg";
import aldebaran3Piscina from "@/assets/properties/aldebaran3-02-piscina.jpg";
import aldebaran3PiscinaAerea from "@/assets/properties/aldebaran3-03-piscina-aerea.jpg";
import aldebaran3Aerea from "@/assets/properties/aldebaran3-04-aerea.jpg";
import aldebaran3Fundos from "@/assets/properties/aldebaran3-05-fundos.jpg";
import aldebaran3PiscinaVista from "@/assets/properties/aldebaran3-06-piscina-vista.jpg";
import aldebaran3Sala from "@/assets/properties/aldebaran3-07-sala.jpg";
import aldebaran3SalaJantar from "@/assets/properties/aldebaran3-08-sala-jantar.jpg";
import aldebaran3Cozinha from "@/assets/properties/aldebaran3-09-cozinha.jpg";
import aldebaran3Copa from "@/assets/properties/aldebaran3-10-copa.jpg";

import aldebaran4Fachada from "@/assets/properties/aldebaran4-01-fachada.jpg";
import aldebaran4Piscina from "@/assets/properties/aldebaran4-02-piscina.jpg";
import aldebaran4SalaGourmet from "@/assets/properties/aldebaran4-03-sala-gourmet.jpg";
import aldebaran4SalaTv from "@/assets/properties/aldebaran4-04-sala-tv.jpg";
import aldebaran4SuiteMaster from "@/assets/properties/aldebaran4-05-suite-master.jpg";
import aldebaran4Quarto from "@/assets/properties/aldebaran4-06-quarto.jpg";
import aldebaran4Quarto2 from "@/assets/properties/aldebaran4-07-quarto2.jpg";
import aldebaran4Banheiro from "@/assets/properties/aldebaran4-08-banheiro.jpg";
import aldebaran4Banheiro2 from "@/assets/properties/aldebaran4-09-banheiro2.jpg";
import aldebaran4Mezanino from "@/assets/properties/aldebaran4-10-mezanino.jpg";

import aldebaran5Aerea from "@/assets/properties/aldebaran5-01-aerea.jpg";
import aldebaran5AereaRua from "@/assets/properties/aldebaran5-02-aerea-rua.jpg";
import aldebaran5SalaMezanino from "@/assets/properties/aldebaran5-03-sala-mezanino.jpg";
import aldebaran5SalaPiscina from "@/assets/properties/aldebaran5-04-sala-piscina.jpg";
import aldebaran5SalaTijolo from "@/assets/properties/aldebaran5-05-sala-tijolo.jpg";
import aldebaran5Cozinha from "@/assets/properties/aldebaran5-06-cozinha.jpg";
import aldebaran5Mezanino from "@/assets/properties/aldebaran5-07-mezanino.jpg";
import aldebaran5Quarto from "@/assets/properties/aldebaran5-08-quarto.jpg";
import aldebaran5Quarto2 from "@/assets/properties/aldebaran5-09-quarto2.jpg";
import aldebaran5Quarto3 from "@/assets/properties/aldebaran5-10-quarto3.jpg";
import aldebaran6Fachada from "@/assets/properties/aldebaran6-01-fachada.jpg";
import aldebaran6SalaEscada from "@/assets/properties/aldebaran6-02-sala-escada.jpg";
import aldebaran6Sala from "@/assets/properties/aldebaran6-03-sala.jpg";
import aldebaran6SalaVista from "@/assets/properties/aldebaran6-04-sala-vista.jpg";
import aldebaran6CozinhaGourmet from "@/assets/properties/aldebaran6-05-cozinha-gourmet.jpg";
import aldebaran6Cozinha from "@/assets/properties/aldebaran6-06-cozinha.jpg";
import aldebaran6SuiteMaster from "@/assets/properties/aldebaran6-07-suite-master.jpg";
import aldebaran6BanheiroSuite from "@/assets/properties/aldebaran6-08-banheiro-suite.jpg";
import aldebaran6Banheiro from "@/assets/properties/aldebaran6-09-banheiro.jpg";
import aldebaran6Dce from "@/assets/properties/aldebaran6-10-dce.jpg";
import aldebaran7Fachada from "@/assets/properties/aldebaran7-01-fachada.jpg";
import aldebaran7Piscina from "@/assets/properties/aldebaran7-02-piscina.jpg";
import aldebaran7AreaChurrasqueira from "@/assets/properties/aldebaran7-03-area-churrasqueira.jpg";
import aldebaran7SalaEstar from "@/assets/properties/aldebaran7-04-sala-estar.jpg";
import aldebaran7SalaJantar from "@/assets/properties/aldebaran7-05-sala-jantar.jpg";
import aldebaran7SalaJantar2 from "@/assets/properties/aldebaran7-06-sala-jantar2.jpg";
import aldebaran7Cozinha from "@/assets/properties/aldebaran7-07-cozinha.jpg";
import aldebaran7Mezanino from "@/assets/properties/aldebaran7-08-mezanino.jpg";
import aldebaran7Suite from "@/assets/properties/aldebaran7-09-suite.jpg";
import aldebaran7Banheiro from "@/assets/properties/aldebaran7-10-banheiro.jpg";
import aldebaran8Fachada from "@/assets/properties/aldebaran8-01-fachada.jpg";
import aldebaran8Piscina from "@/assets/properties/aldebaran8-02-piscina.jpg";
import aldebaran8Sala from "@/assets/properties/aldebaran8-03-sala.jpg";
import aldebaran8SalaJantar from "@/assets/properties/aldebaran8-04-sala-jantar.jpg";
import aldebaran8Mezanino from "@/assets/properties/aldebaran8-05-mezanino.jpg";
import aldebaran8Suite from "@/assets/properties/aldebaran8-06-suite.jpg";
import aldebaran8Quarto from "@/assets/properties/aldebaran8-07-quarto.jpg";
import aldebaran8Banheiro from "@/assets/properties/aldebaran8-08-banheiro.jpg";
import aldebaran8Banheiro2 from "@/assets/properties/aldebaran8-09-banheiro2.jpg";
import aldebaran9FachadaPiscina from "@/assets/properties/aldebaran9-01-fachada-piscina.jpg";
import aldebaran9Sala from "@/assets/properties/aldebaran9-02-sala.jpg";
import aldebaran9SalaLareira from "@/assets/properties/aldebaran9-03-sala-lareira.jpg";
import aldebaran9SalaJantar from "@/assets/properties/aldebaran9-04-sala-jantar.jpg";
import aldebaran9Cozinha from "@/assets/properties/aldebaran9-05-cozinha.jpg";
import aldebaran9Cozinha2 from "@/assets/properties/aldebaran9-06-cozinha2.jpg";
import aldebaran9SuiteMaster from "@/assets/properties/aldebaran9-07-suite-master.jpg";
import aldebaran9BanheiroMaster from "@/assets/properties/aldebaran9-08-banheiro-master.jpg";
import aldebaran9Quarto from "@/assets/properties/aldebaran9-09-quarto.jpg";
import aldebaran9Quarto2 from "@/assets/properties/aldebaran9-10-quarto2.jpg";

import comercial10Recepcao from "@/assets/properties/comercial10-01-recepcao.jpg.asset.json";
import comercial10Mezanino from "@/assets/properties/comercial10-02-mezanino.jpg.asset.json";
import comercial10Mezanino2 from "@/assets/properties/comercial10-03-mezanino2.jpg.asset.json";
import comercial10Sala from "@/assets/properties/comercial10-04-sala.jpg.asset.json";
import comercial10Copa from "@/assets/properties/comercial10-05-copa.jpg.asset.json";
import comercial10MezaninoVista from "@/assets/properties/comercial10-06-mezanino-vista.jpg.asset.json";
import comercial10CopaArea from "@/assets/properties/comercial10-07-copa-area.jpg.asset.json";
import comercial10Escada from "@/assets/properties/comercial10-08-escada.jpg.asset.json";

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
    aldebaranPiscinaVista,
    aldebaranLateral,
    aldebaranSala,
    aldebaranSalaAmpla,
    aldebaranSalaTv,
    aldebaranSalaJantar,
    aldebaranCozinha,
    aldebaranSuite,
    aldebaranQuarto,
    aldebaranQuarto2,
    aldebaranQuarto3,
    aldebaranCloset,
    aldebaranSuiteBanheiro,
    aldebaranBanheiro,
    aldebaranBanheiro2,
    aldebaranLavabo,
  ],
  badge: undefined,
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

const aldebaranCasaModerna: Property = {
  id: "aldebaran-casa-moderna",
  image: aldebaran2Fachada,
  gallery: [
    aldebaran2Fachada,
    aldebaran2Piscina,
    aldebaran2Varanda,
    aldebaran2Sala,
    aldebaran2SalaAmpla,
    aldebaran2SalaGrande,
    aldebaran2SalaTv,
    aldebaran2Cozinha,
    aldebaran2Suite,
    aldebaran2Quarto,
    aldebaran2Quarto2,
    aldebaran2Quarto3,
    aldebaran2Quarto4,
    aldebaran2Banheiro,
    aldebaran2Banheiro2,
    aldebaran2Churrasqueira,
    aldebaran2Lateral,
  ],
  badge: "Projeto Moderno",
  title: "Casa moderna no Condomínio Aldebaran",
  price: "R$ 1.980.000",
  priceValue: 1_980_000,
  purpose: "comprar",
  type: "Casa",
  city: "Maceió",
  neighborhood: "Aldebaran",
  area: 100,
  beds: 4,
  baths: 4,
  parking: 2,
  description:
    "Excelente casa no Condomínio Aldebaran, com localização privilegiada e projeto moderno. Suíte master com closet, varanda solta para as três suítes, sala em dois ambientes e cozinha ampla com planejados.",
  features: [
    "4 quartos (3 suítes + 1 reversível)",
    "Suíte master com closet",
    "Sala em dois ambientes",
    "Cozinha ampla com planejados",
    "Varanda solta para as três suítes",
    "Piscina",
    "Churrasqueira",
    "Localização privilegiada e projeto moderno",
  ],
};

const aldebaranCasaLuxo: Property = {
  id: "aldebaran-casa-luxo-solar",
  image: aldebaran3Fachada,
  gallery: [
    aldebaran3Fachada,
    aldebaran3Aerea,
    aldebaran3Fundos,
    aldebaran3PiscinaVista,
    aldebaran3Piscina,
    aldebaran3PiscinaAerea,
    aldebaran3Sala,
    aldebaran3SalaJantar,
    aldebaran3Cozinha,
    aldebaran3Copa,
  ],
  badge: "Exclusivo",
  title: "Casa de luxo no Condomínio Aldebaran",
  price: "R$ 2.200.000",
  priceValue: 2_200_000,
  purpose: "comprar",
  type: "Casa",
  city: "Maceió",
  neighborhood: "Aldebaran",
  area: 430,
  beds: 4,
  baths: 4,
  parking: 6,
  description:
    "Excelente casa no Condomínio Aldebaran com 430 m² de área construída e terreno de 930 m². Projeto sofisticado, energia solar, ampla área de lazer com piscina e 6 vagas de garagem. Aceita apartamento na negociação.",
  features: [
    "430 m² de área construída",
    "Terreno de 930 m²",
    "4 quartos (3 suítes, master com closet)",
    "Sala em L para dois ambientes",
    "Gabinete",
    "Cozinha",
    "Dispensa",
    "Dependência de empregada",
    "Área de serviço",
    "Piscina",
    "Energia solar",
    "6 vagas de garagem",
    "Aceita apartamento na negociação",
  ],
};

const aldebaranCasaLazer: Property = {
  id: "aldebaran-casa-lazer-completo",
  image: aldebaran4Fachada,
  gallery: [
    aldebaran4Fachada,
    aldebaran4Piscina,
    aldebaran4SalaGourmet,
    aldebaran4SalaTv,
    aldebaran4SuiteMaster,
    aldebaran4Quarto,
    aldebaran4Quarto2,
    aldebaran4Banheiro,
    aldebaran4Banheiro2,
    aldebaran4Mezanino,
  ],
  title: "Casa com lazer completo no Condomínio Aldebaran",
  price: "R$ 2.300.000",
  priceValue: 2_300_000,
  purpose: "comprar",
  type: "Casa",
  city: "Maceió",
  neighborhood: "Aldebaran",
  area: 360,
  beds: 4,
  baths: 5,
  parking: 4,
  description:
    "Excelente casa no Condomínio Aldebaran com 360 m² de área construída em terreno de 560 m². 4 suítes, sala em dois ambientes, varanda ampla e área de lazer completa com piscina, churrasqueira e espaço gourmet.",
  features: [
    "Área total: 560 m²",
    "Área construída: 360 m²",
    "4 quartos (4 suítes)",
    "Lavabo",
    "Sala em dois ambientes (estar e jantar)",
    "Varanda ampla",
    "Cozinha com área de serviço e despensa",
    "Quarto de secretária completo com banheiro",
    "Área de lazer completa: piscina, churrasqueira e espaço gourmet",
    "Garagem para até 4 carros",
  ],
};

const aldebaranCasaNascente: Property = {
  id: "aldebaran-casa-nascente",
  image: aldebaran5Aerea,
  gallery: [
    aldebaran5Aerea,
    aldebaran5AereaRua,
    aldebaran5SalaMezanino,
    aldebaran5SalaPiscina,
    aldebaran5SalaTijolo,
    aldebaran5Mezanino,
    aldebaran5Cozinha,
    aldebaran5Quarto,
    aldebaran5Quarto2,
    aldebaran5Quarto3,
  ],
  badge: "Nascente",
  title: "Casa nascente no Condomínio Aldebaran",
  price: "R$ 1.800.000",
  priceValue: 1_800_000,
  purpose: "comprar",
  type: "Casa",
  city: "Maceió",
  neighborhood: "Aldebaran",
  area: 500,
  beds: 5,
  baths: 5,
  parking: 4,
  description:
    "Casa nascente com 500 m² de área construída em terreno de 550 m². 5 quartos sendo 3 suítes (master com banheira), escritório, ambientes integrados e área de lazer completa com piscina e churrasqueira.",
  features: [
    "500 m² de área construída",
    "Terreno de 550 m²",
    "5 quartos (3 suítes)",
    "Suíte master com banheira",
    "Escritório",
    "Banheiro social",
    "Sala de jantar e estar integradas",
    "Cozinha principal + cozinha de apoio",
    "Piscina",
    "Churrasqueira com banheiro externo",
    "Dependência com banheiro",
    "Depósito com espaço para ferramentas",
  ],
};

const aldebaranCasaModernaPiscina: Property = {
  id: "aldebaran-casa-moderna-piscina",
  image: aldebaran6Fachada,
  gallery: [
    aldebaran6Fachada,
    aldebaran6SalaEscada,
    aldebaran6Sala,
    aldebaran6SalaVista,
    aldebaran6CozinhaGourmet,
    aldebaran6Cozinha,
    aldebaran6SuiteMaster,
    aldebaran6BanheiroSuite,
    aldebaran6Banheiro,
    aldebaran6Dce,
  ],
  title: "Casa moderna com piscina no Condomínio Aldebaran",
  price: "R$ 2.650.000",
  priceValue: 2_650_000,
  purpose: "comprar",
  type: "Casa",
  city: "Maceió",
  neighborhood: "Aldebaran",
  area: 0,
  beds: 4,
  baths: 5,
  parking: 4,
  description:
    "Casa moderna no Condomínio Aldebaran com 4 suítes (sendo 1 master), 3 salas, cozinha com ilha, área gourmet, piscina de arquitetura moderna e garagem subterrânea com acesso interno.",
  features: [
    "4 quartos (4 suítes, sendo 1 master)",
    "3 salas com 1 lavabo",
    "Cozinha com ilha",
    "Terraços",
    "Varandas",
    "Piscina com arquitetura moderna",
    "Área gourmet",
    "DCE (Dependência Completa de Empregada)",
    "Área de serviço",
    "Garagem subterrânea com acesso interno à casa",
    "Espaço extra no primeiro andar para construção de outra área",
  ],
};

// === Imóveis em destaque ===
const aldebaranCasaPiscinaCharme: Property = {
  id: "aldebaran-casa-piscina-charme",
  image: aldebaran7Fachada,
  gallery: [
    aldebaran7Fachada,
    aldebaran7Piscina,
    aldebaran7AreaChurrasqueira,
    aldebaran7SalaEstar,
    aldebaran7SalaJantar,
    aldebaran7SalaJantar2,
    aldebaran7Cozinha,
    aldebaran7Mezanino,
    aldebaran7Suite,
    aldebaran7Banheiro,
  ],
  title: "Casa com piscina e área de lazer no Condomínio Aldebaran",
  price: "R$ 1.420.000",
  priceValue: 1_420_000,
  purpose: "comprar",
  type: "Casa",
  city: "Maceió",
  neighborhood: "Aldebaran",
  area: 380,
  beds: 4,
  baths: 4,
  parking: 2,
  description:
    "Casa no Condomínio Aldebaran com cerca de 380 m² de área construída em terreno de 480 m². 4 quartos (sendo 1 suíte master) com armários planejados e ar-condicionado, 2 salas de estar, sala de jantar, cozinha com armários novos, piscina e área de apoio com churrasqueira.",
  features: [
    "Aproximadamente 380 m² de área construída",
    "Terreno de 480 m²",
    "4 quartos (todos com armários planejados)",
    "1 suíte master",
    "Ar-condicionado em todos os quartos",
    "2 salas de estar",
    "1 sala de jantar",
    "Cozinha com armários novos",
    "Dispensa",
    "Dependência completa com banheiro",
    "Garagem com depósito",
    "Varandas amplas",
    "Piscina",
    "Área de apoio com churrasqueira",
  ],
};

const aldebaranCasaVarandaL: Property = {
  id: "aldebaran-casa-varanda-l",
  image: aldebaran8Fachada,
  gallery: [
    aldebaran8Fachada,
    aldebaran8Piscina,
    aldebaran8Sala,
    aldebaran8SalaJantar,
    aldebaran8Mezanino,
    aldebaran8Suite,
    aldebaran8Quarto,
    aldebaran8Banheiro,
    aldebaran8Banheiro2,
  ],
  title: "Casa com varanda em L e piscina no Condomínio Aldebaran",
  price: "R$ 1.400.000",
  priceValue: 1_400_000,
  purpose: "comprar",
  type: "Casa",
  city: "Maceió",
  neighborhood: "Aldebaran",
  area: 325,
  beds: 4,
  baths: 3,
  parking: 4,
  description:
    "Casa no Condomínio Aldebaran com 325 m² de área construída em terreno de 544 m². 1 suíte e 1 quarto social no piso superior com mezanino, mais 2 quartos sociais no piso inferior. Sala ampla com 3 ambientes, varanda em L, área de lazer com piscina e churrasqueira e garagem para até 4 carros.",
  features: [
    "Terreno de 544 m²",
    "Área construída de 325 m²",
    "Parte superior: 1 suíte, 1 quarto social, 1 banheiro social e mezanino",
    "Parte inferior: 2 quartos sociais e 1 banheiro social",
    "Sala ampla com 3 ambientes",
    "Varanda em L",
    "Cozinha",
    "Área de serviço",
    "Garagem para até 4 carros",
    "Piscina",
    "Espaço com churrasqueira",
  ],
};

const aldebaranCasaGourmetPiscina: Property = {
  id: "aldebaran-casa-gourmet-piscina",
  image: aldebaran9FachadaPiscina,
  gallery: [
    aldebaran9FachadaPiscina,
    aldebaran9Sala,
    aldebaran9SalaLareira,
    aldebaran9SalaJantar,
    aldebaran9Cozinha,
    aldebaran9Cozinha2,
    aldebaran9SuiteMaster,
    aldebaran9BanheiroMaster,
    aldebaran9Quarto,
    aldebaran9Quarto2,
  ],
  title: "Excelente casa com cozinha gourmet e piscina no Condomínio Aldebaran",
  price: "R$ 1.460.000",
  priceValue: 1_460_000,
  purpose: "comprar",
  type: "Casa",
  city: "Maceió",
  neighborhood: "Aldebaran",
  area: 0,
  beds: 4,
  baths: 4,
  parking: 2,
  description:
    "Excelente casa no Condomínio Aldebaran (em fase final de pintura para entrega) com 4 quartos sendo 3 suítes (1 master), sala de estar e jantar integradas, cozinha gourmet completa com planejados, lavabo, DCE completa, piscina e garagem coberta para 2 carros.",
  features: [
    "4 quartos, sendo 3 suítes (1 master)",
    "Todos os quartos com guarda-roupas planejados",
    "Sala de estar e jantar integradas",
    "Cozinha gourmet completa com planejados",
    "Lavabo",
    "DCE completa",
    "Piscina",
    "Garagem coberta para 2 carros",
    "Casa em fase final de pintura para entrega",
  ],
};

const comercialSebastiaoGranjeiro: Property = {
  id: "comercial-sebastiao-granjeiro",
  image: comercial10Recepcao.url,
  gallery: [
    comercial10Recepcao.url,
    comercial10Sala.url,
    comercial10Mezanino.url,
    comercial10Mezanino2.url,
    comercial10MezaninoVista.url,
    comercial10Copa.url,
    comercial10CopaArea.url,
    comercial10Escada.url,
  ],
  title: "Ponto comercial na Rua Sebastião Granjeiro — Maceió",
  price: "R$ 3.500/mês",
  priceValue: 3_500,
  purpose: "alugar",
  type: "Comercial",
  city: "Maceió",
  neighborhood: "Centro",
  area: 0,
  beds: 0,
  baths: 2,
  parking: 0,
  description:
    "Ponto comercial para aluguel localizado na Rua Sebastião Granjeiro, em Maceió. Conta com recepção, sala de reuniões em vidro, mezanino com salão amplo e banheiro, copa e sala para área comum integradas.",
  features: [
    "Recepção",
    "Sala de reuniões em vidro",
    "Mezanino com salão amplo",
    "Banheiro no mezanino",
    "Copa integrada à área comum",
    "Localização na Rua Sebastião Granjeiro, Maceió",
  ],
};

// === Imóveis em destaque ===
export const featuredProperties: Property[] = [aldebaranCasa, aldebaranCasaModerna, aldebaranCasaLuxo, aldebaranCasaLazer, aldebaranCasaNascente, aldebaranCasaModernaPiscina, aldebaranCasaPiscinaCharme, aldebaranCasaVarandaL, aldebaranCasaGourmetPiscina, comercialSebastiaoGranjeiro];


// === Imóveis recentes / Novidades ===
export const recentProperties: Property[] = [];

// === Lançamentos (empreendimentos) ===
export const launches: Launch[] = [];

// Lista combinada usada pelo motor de busca
export const allProperties: Property[] = [
  ...featuredProperties,
  ...recentProperties,
];
