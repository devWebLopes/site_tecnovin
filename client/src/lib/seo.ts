/**
 * seo.ts — Configurações centrais de SEO, GEO e Dados Estruturados (JSON-LD)
 *
 * Fundamentado em:
 *   - docs/conteudo/01-dados-da-empresa.md
 *   - GUIA_EDITORIAL_E_FONTES_TECNOVIN.md
 *   - skills/seo-onpage.md, skills/seo-schema.md e skills/seo-ai-search.md
 */

export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://site-tecnovin.vercel.app"
).replace(/\/+$/, "");

export const SITE_NAME = "Tecnovin do Brasil";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/tecnovin-vista-aerea-planta-industrial-bento-goncalves.jpg`;
export const DEFAULT_OG_IMAGE_ALT =
  "Vista aérea da planta industrial da Tecnovin do Brasil no Vale dos Vinhedos, em Bento Gonçalves, Rio Grande do Sul";

export const HOME_SEO = {
  // 53 caracteres (ideal: 50 a 60)
  title: "Tecnovin do Brasil — Concentrados de Frutas B2B no RS",
  // 153 caracteres (ideal: 120 a 160)
  description:
    "Tecnovin do Brasil: sucos concentrados de uva, maçã, laranja, limão, acerola e abacaxi para a indústria de alimentos e bebidas no Vale dos Vinhedos, RS.",
  keywords: [
    "concentrado de suco de uva",
    "suco concentrado de frutas B2B",
    "ingredientes para indústria de bebidas",
    "concentrado de maçã AJC",
    "concentrado de laranja FCOJ",
    "Tecnovin do Brasil",
    "Vale dos Vinhedos Bento Gonçalves RS",
  ],
};

export const BLOG_SEO = {
  // 56 caracteres (ideal: 50 a 60)
  title: "Blog e Conteúdos — Tecnovin do Brasil | Ingredientes B2B",
  // 152 caracteres (ideal: 120 a 160)
  description:
    "Artigos técnicos, memória institucional e análises sobre sucos concentrados de frutas, formulação industrial e rastreabilidade no Vale dos Vinhedos, RS.",
};

export const PRODUTOS_SEO = {
  // 56 caracteres (ideal: 50 a 60)
  title: "Portfólio de Sucos Concentrados B2B — Tecnovin do Brasil",
  // 150 caracteres (ideal: 120 a 160)
  description:
    "Concentrados de suco de uva, maçã, laranja, limão, acerola e abacaxi para a indústria de alimentos e bebidas. Fornecedor B2B no Vale dos Vinhedos, RS.",
};

export interface HomeFaqItem {
  pergunta: string;
  resposta: string;
}

export const HOME_FAQ: HomeFaqItem[] = [
  {
    pergunta: "Quais sucos concentrados de frutas a Tecnovin do Brasil produz?",
    resposta:
      "O portfólio institucional declarado da Tecnovin do Brasil compreende seis famílias de concentrados de frutas para uso industrial (B2B): Concentrado de Uva (GJC — variedades Isabel, Concord e viníferas, 68° Brix), Concentrado de Maçã (AJC — clarificado 70° Brix e polposo), Concentrado de Laranja Congelado (FCOJ — 65° Brix), Concentrado de Limão (Siciliano e Tahiti — 44° Brix), Concentrado de Acerola e Concentrado de Abacaxi, além do registro histórico de Cremor de Tártaro.",
  },
  {
    pergunta: "Onde fica localizada a planta industrial da Tecnovin do Brasil?",
    resposta:
      "A sede e planta industrial matriz da Tecnovin do Brasil Ltda. (CNPJ 92.320.233/0001-90) está localizada na Linha Leopoldina, s/n, Km 6, no Distrito do Vale dos Vinhedos, município de Bento Gonçalves, Rio Grande do Sul (CEP 95711-970), região referência na vitivinicultura e fruticultura brasileira.",
  },
  {
    pergunta: "Quais setores industriais utilizam os ingredientes da Tecnovin?",
    resposta:
      "Os sucos concentrados da Tecnovin são fornecidos no modelo B2B para indústrias de bebidas (sucos, néctares, refrigerantes, chás e fermentados), indústrias de alimentos (geleias, laticínios, panificação, confeitos e alimentos infantis), suplementos alimentares, cosméticos e indústria química.",
  },
  {
    pergunta:
      "Quais são os formatos de embalagem e armazenamento no fornecimento B2B?",
    resposta:
      "Os concentrados de uva (265 kg), maçã (265 kg), laranja FCOJ (260 kg) e limão (230 kg) são acondicionados em tambores metálicos de aço com revestimento interno de epóxi e dupla barreira de sacos de polietileno de grau alimentício, mantidos sob cadeia de frio controlada (de até 5 °C para clarificados até -18 °C / -20 °C para congelados e polposos).",
  },
  {
    pergunta:
      "Como solicitar fichas técnicas, laudos analíticos ou amostras comerciais?",
    resposta:
      "Compradores industriais e equipes de P&D podem solicitar especificações detalhadas de Brix, acidez, ratio, disponibilidade de safra e amostras diretamente pelo e-mail comercial tecnovin@tecnovin.com.br, pelo telefone +55 (54) 2102-1999 ou através do formulário nas páginas individuais de cada produto.",
  },
];

export const ORGANIZATION_SCHEMA = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Tecnovin do Brasil",
  legalName: "Tecnovin do Brasil Ltda.",
  alternateName: ["TECNOVIN-SUMABRAS", "Tecnovin"],
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: `${SITE_URL}/favicon.svg`,
    contentUrl: `${SITE_URL}/apple-touch-icon.png`,
    width: 180,
    height: 180,
    caption: "Tecnovin do Brasil — Ingredientes naturais",
  },
  image: {
    "@type": "ImageObject",
    url: DEFAULT_OG_IMAGE,
    width: 1376,
    height: 768,
    caption: DEFAULT_OG_IMAGE_ALT,
  },
  description: HOME_SEO.description,
  foundingDate: "1988-09-12",
  taxID: "92.320.233/0001-90",
  naics: "311421",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Linha Leopoldina, s/n, Km 6 — Distrito Vale dos Vinhedos",
    addressLocality: "Bento Gonçalves",
    addressRegion: "RS",
    postalCode: "95711-970",
    addressCountry: "BR",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+55-54-2102-1999",
      email: "tecnovin@tecnovin.com.br",
      contactType: "sales",
      areaServed: "BR",
      availableLanguage: ["Portuguese", "English"],
    },
    {
      "@type": "ContactPoint",
      email: "ouvidoria@tecnovin.com.br",
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
    },
  ],
  sameAs: [
    "https://www.tecnovin.com.br/",
    "https://sucosuvalan.com.br/",
    "https://www.wikidata.org/wiki/Q339954",
    "https://pt.wikipedia.org/wiki/Vale_dos_Vinhedos",
  ],
};

export const LOCAL_BUSINESS_SCHEMA = {
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Tecnovin do Brasil Ltda.",
  image: DEFAULT_OG_IMAGE,
  url: `${SITE_URL}/`,
  telephone: "+55-54-2102-1999",
  email: "tecnovin@tecnovin.com.br",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Linha Leopoldina, s/n, Km 6 — Distrito Vale dos Vinhedos",
    addressLocality: "Bento Gonçalves",
    addressRegion: "RS",
    postalCode: "95711-970",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -29.1764,
    longitude: -51.5653,
  },
  parentOrganization: {
    "@id": `${SITE_URL}/#organization`,
  },
};

export const WEBSITE_SCHEMA = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "Tecnovin do Brasil",
  description: HOME_SEO.description,
  inLanguage: "pt-BR",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export function getHomeSchemaGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      ORGANIZATION_SCHEMA,
      LOCAL_BUSINESS_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: HOME_SEO.title,
        description: HOME_SEO.description,
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: DEFAULT_OG_IMAGE,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: HOME_FAQ.map(item => ({
          "@type": "Question",
          name: item.pergunta,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.resposta,
          },
        })),
      },
    ],
  };
}
