/**
 * produtos.ts — Source of truth dos dados de produto da Tecnovin
 *
 * Base de conhecimento: docs/dossie_Tecnovin/Dossiê de atividade, produtos e mercado.md
 * Guia editorial: GUIA_EDITORIAL_E_FONTES_TECNOVIN.md
 *
 * ⚠️ REGRA EDITORIAL:
 *   - Dados marcados com `historicoNaoConfirmado: true` são registros históricos
 *     e DEVEM ser exibidos com rótulo explícito de "Registro histórico".
 *   - Dados de clientes, capacidade e exportações NÃO devem ser apresentados
 *     como atuais sem confirmação documental.
 */

export interface FichaTecnica {
  brix?: string;
  acidez?: string;
  ph?: string;
  ratio?: string;
  cor?: string;
  polpa?: string;
  transmitancia?: string;
  vitamC?: string;
  extras?: Record<string, string>;
}

export interface Embalagem {
  tipo: string;
  pesoLiquido?: string;
  tamanhoDeLote?: string;
  armazenamento: string;
  validade?: string;
  revestimentoInterno?: string;
}

export interface PerguntaFaq {
  pergunta: string;
  resposta: string;
}

export interface DetalheVisualItem {
  imagem: string;
  alt: string;
}

export interface DetalhesVisuais {
  materiaPrima: DetalheVisualItem;
  textura: DetalheVisualItem;
  aplicacao: DetalheVisualItem;
}

export interface Produto {
  slug: string;
  nomeComercial: string;
  nomeComercialEn: string;
  sigla?: string;
  descricao: string;
  tagline: string;
  variedades?: string[];
  fichaTecnica?: FichaTecnica;
  embalagem?: Embalagem;
  setoresDeUso: string[];
  destaquesInstitucionais: string[];
  faq: PerguntaFaq[];
  imagem: string;
  imagemAlt: string;
  detalhesVisuais: DetalhesVisuais;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  ordem: number;
  /**
   * Se true, a página exibe aviso "Registro histórico — status atual não confirmado"
   * Aplicável ao Cremor de Tártaro
   */
  historicoNaoConfirmado?: boolean;
  historicoAviso?: string;
}

// ---------------------------------------------------------------------------
// 1. Concentrado de Uva
// Fontes: S1, S17 — Dossiê de atividade §4.2
// ---------------------------------------------------------------------------
const concentradoDeUva: Produto = {
  slug: "concentrado-de-uva",
  nomeComercial: "Concentrado de Uva",
  nomeComercialEn: "Grape Juice Concentrate",
  sigla: "GJC",
  descricao:
    "Concentrado de suco de uva produzido a partir das variedades híbridas americanas Isabel, Concord e York Madeira, cultivadas nas regiões produtoras do Sul do Brasil. O processo inclui separação do engaço, leve esmagamento, pasteurização, tratamento enzimático, clarificação por centrifugação e filtração, seguida de concentração. Disponível nas versões clarificada e polposa, com especificações técnicas para aplicação industrial.",
  tagline: "Da videira gaúcha à formulação industrial",
  variedades: [
    "Isabel",
    "Concord",
    "York Madeira",
    "Variedades viníferas (Red Grape)",
  ],
  fichaTecnica: {
    brix: "68,0 ± 0,5° Brix (Concord clarificado)",
    acidez: "3,5 ± 1% em ácido tartárico",
    polpa: "Até 1% (clarificado) · ~1% ± 0,5 (Isabel com polpa)",
    extras: {
      "Versão polposa": "50° a 65° Brix",
      "Red Grape Juice Concentrate": "A partir de variedades viníferas",
    },
  },
  embalagem: {
    tipo: "Tambor de aço com revestimento interno de epóxi",
    revestimentoInterno: "Dois sacos de polietileno",
    pesoLiquido: "265 kg",
    armazenamento: "Até 5 °C",
    validade: "Até 24 meses",
  },
  setoresDeUso: [
    "Indústria de alimentos",
    "Indústria de bebidas",
    "Cosméticos",
    "Indústria química",
  ],
  destaquesInstitucionais: [
    "Produzido no Vale dos Vinhedos, Bento Gonçalves — RS",
    "Três variedades disponíveis: Isabel, Concord e Red Grape",
    "Controle laboratorial de Brix, acidez, cor e microbiologia",
    "Embalagem industrial em tambor de aço com barreira dupla de polietileno",
  ],
  faq: [
    {
      pergunta:
        "Quais variedades de uva são utilizadas na produção do concentrado?",
      resposta:
        "A Tecnovin processa as variedades híbridas americanas Isabel, Concord e York Madeira, além de variedades viníferas para o Red Grape Juice Concentrate. A escolha da variedade impacta o perfil de cor, acidez e aromas do produto final.",
    },
    {
      pergunta:
        "O concentrado de uva está disponível nas versões clarificada e com polpa?",
      resposta:
        "Sim. O portfólio inclui versão clarificada (polpa até 1%) e versão polposa (aproximadamente 1% ± 0,5). Cada versão possui especificações de Brix e acidez distintas para atender diferentes formulações industriais.",
    },
    {
      pergunta:
        "Quais são as condições de armazenamento e validade do produto?",
      resposta:
        "O concentrado de uva é armazenado em temperatura de até 5 °C, com validade de até 24 meses a partir da data de produção, mantidas as condições indicadas de temperatura e integridade da embalagem.",
    },
    {
      pergunta: "Como solicitar uma amostra ou ficha técnica completa?",
      resposta:
        "Utilize o formulário nesta página para entrar em contato com nossa equipe comercial. Informe o produto de interesse, volume estimado e aplicação pretendida para agilizar o atendimento.",
    },
  ],
  imagem: "/images/produtos/hero-uva.jpg",
  imagemAlt:
    "Cachos de uva Isabel e Concord maduros em videira, com folhas verdes ao fundo — ingrediente para o Concentrado de Uva da Tecnovin",
  detalhesVisuais: {
    materiaPrima: {
      imagem: "/images/produtos/detalhes/detalhe-uva-materia-prima.jpg",
      alt: "Uvas escuras Isabel e Concord recém-colhidas em caixote de madeira rústica em vinhedo da Serra Gaúcha",
    },
    textura: {
      imagem: "/images/produtos/detalhes/detalhe-uva-textura.jpg",
      alt: "Suco concentrado de uva 68° Brix de coloração rubi-violácea intensa e alta viscosidade em béquer de vidro",
    },
    aplicacao: {
      imagem: "/images/produtos/detalhes/detalhe-uva-aplicacao.jpg",
      alt: "Tambores industriais de aço com revestimento epóxi para envasamento e fornecimento B2B de concentrado de uva",
    },
  },
  seo: {
    title: "Concentrado de Uva (GJC) 68° Brix — Tecnovin do Brasil",
    description:
      "Concentrado de Uva Isabel, Concord e Red Grape (68° Brix) para a indústria de alimentos e bebidas. Fornecedor B2B no Vale dos Vinhedos, Bento Gonçalves, RS.",
    keywords: [
      "concentrado de uva",
      "grape juice concentrate",
      "GJC Brazil",
      "suco de uva concentrado industrial",
      "fornecedor concentrado uva Brasil",
      "Concord grape concentrate",
      "Isabel grape concentrate",
    ],
  },
  ordem: 1,
};

// ---------------------------------------------------------------------------
// 2. Concentrado de Maçã
// Fontes: S1, S18 — Dossiê de atividade §4.3
// ---------------------------------------------------------------------------
const concentradoDeMaca: Produto = {
  slug: "concentrado-de-maca",
  nomeComercial: "Concentrado de Maçã",
  nomeComercialEn: "Apple Juice Concentrate",
  sigla: "AJC",
  descricao:
    "Concentrado de suco de maçã obtido por prensagem de frutas selecionadas, seguida de tratamento enzimático, clarificação e concentração em processo que dura aproximadamente cinco horas. Disponível nas versões clarificada (alto Brix) e polposa (refrigerada), com aplicações em bebidas, alimentos infantis e formulações que requerem função adoçante natural.",
  tagline: "Precisão técnica em cada grau Brix",
  fichaTecnica: {
    brix: "70,0 ± 0,5° Brix (clarificado)",
    acidez: "1,70 ± 0,5% em ácido málico",
    ph: "1,6 ± 0,7",
    transmitancia: "97–99%",
    polpa: "~2% ± 0,5 (versão polposa · 40–45° Brix)",
  },
  embalagem: {
    tipo: "Tambor de aço com revestimento interno de epóxi",
    revestimentoInterno: "Dois sacos de polietileno",
    pesoLiquido: "265 kg",
    armazenamento: "Até 5 °C (clarificado) · -20 °C (polposo)",
    validade: "Até 18 meses",
  },
  setoresDeUso: [
    "Indústria de bebidas",
    "Alimentos infantis",
    "Indústria de alimentos",
    "Cosméticos",
  ],
  destaquesInstitucionais: [
    "Alta transmitância: 97–99% — ideal para bebidas cristalinas",
    "Versão polposa mantida a -20 °C para preservação máxima de características",
    "Processo contínuo com controle de Brix, acidez e microbiologia",
    "Aplicação como adoçante natural em formulações industriais",
  ],
  faq: [
    {
      pergunta: "Qual a diferença entre o AJC clarificado e o polposo?",
      resposta:
        "O AJC clarificado apresenta 70° Brix e transmitância de 97–99%, sendo indicado para bebidas cristalinas e formulações que exigem alta limpidez. O AJC polposo possui aproximadamente 2% de polpa e é concentrado entre 40° e 45° Brix, armazenado a -20 °C para preservar suas características sensoriais.",
    },
    {
      pergunta: "O concentrado de maçã pode ser usado como adoçante natural?",
      resposta:
        "Sim. O alto teor de sólidos solúveis do AJC (70° Brix) permite sua utilização como agente adoçante natural em diversas formulações industriais, substituindo ou complementando outros açúcares em bebidas e alimentos.",
    },
    {
      pergunta: "Quais são as condições de transporte recomendadas?",
      resposta:
        "O AJC clarificado deve ser transportado e armazenado em temperatura de até 5 °C. A versão polposa requer cadeia de frio a -20 °C durante todo o processo logístico para garantir a validade de até 18 meses.",
    },
  ],
  imagem: "/images/produtos/hero-maca.jpg",
  imagemAlt:
    "Maçãs vermelhas e amarelas frescas em campo — ingrediente para o Concentrado de Maçã da Tecnovin",
  detalhesVisuais: {
    materiaPrima: {
      imagem: "/images/produtos/detalhes/detalhe-maca-materia-prima.jpg",
      alt: "Seleção de maçãs vermelhas frescas recém-colhidas em bins de madeira no pomar",
    },
    textura: {
      imagem: "/images/produtos/detalhes/detalhe-maca-textura.jpg",
      alt: "Concentrado de suco de maçã clarificado 70° Brix com altíssima transmitância e brilho dourado em vidraria de laboratório",
    },
    aplicacao: {
      imagem: "/images/produtos/detalhes/detalhe-maca-aplicacao.jpg",
      alt: "Garrafas de bebida cristalina e potes de purê formulados com concentrado de maçã em bancada de laboratório de P&D",
    },
  },
  seo: {
    title: "Concentrado de Maçã (AJC) 70° Brix — Tecnovin do Brasil",
    description:
      "Apple Juice Concentrate (AJC) 70° Brix clarificado e polposo com transmitância de 97–99%. Ingrediente B2B produzido no Vale dos Vinhedos, Bento Gonçalves, RS.",
    keywords: [
      "concentrado de maçã",
      "apple juice concentrate",
      "AJC Brazil",
      "suco de maçã concentrado",
      "AJC 70 Brix",
      "fornecedor concentrado maçã",
    ],
  },
  ordem: 2,
};

// ---------------------------------------------------------------------------
// 3. Concentrado de Laranja Congelado (FCOJ)
// Fontes: S1, S6 — Dossiê de atividade §4.4
// ---------------------------------------------------------------------------
const concentradoDeLaranja: Produto = {
  slug: "concentrado-de-laranja",
  nomeComercial: "Concentrado de Laranja Congelado",
  nomeComercialEn: "Frozen Concentrate Orange Juice",
  sigla: "FCOJ",
  descricao:
    "Concentrado de suco de laranja congelado produzido a partir das variedades Valência, Natal e Hamlin. O processo inclui depolpagem, pasteurização, centrifugação e concentração em aproximadamente 30 minutos. Armazenado e transportado abaixo de -18 °C para preservação de suas características físico-químicas por até 24 meses.",
  tagline: "Laranja brasileira em padrão de exportação",
  variedades: ["Valência", "Natal", "Hamlin"],
  fichaTecnica: {
    brix: "65,0 ± 0,5° Brix",
    ph: "2,9 ± 0,3",
    acidez: "7 ± 2% em ácido cítrico",
    ratio: "8,5 ± 1,5",
    cor: "37,5 ± 0,5",
    polpa: "5 ± 4",
  },
  embalagem: {
    tipo: "Tambor de aço com revestimento interno de epóxi",
    revestimentoInterno: "Dois sacos de polietileno",
    pesoLiquido: "260 kg",
    tamanhoDeLote: "Até 18 toneladas",
    armazenamento: "Abaixo de -18 °C",
    validade: "Até 24 meses",
  },
  setoresDeUso: [
    "Indústria de bebidas",
    "Indústria de alimentos",
    "Cosméticos",
    "Indústria química",
  ],
  destaquesInstitucionais: [
    "Variedades Valência, Natal e Hamlin para equilíbrio de sabor e cor",
    "Ratio 8,5 ± 1,5 — especificação de exportação",
    "Lotes de até 18 toneladas com rastreabilidade por tambor",
    "Armazenamento a -18 °C com validade de até 24 meses",
  ],
  faq: [
    {
      pergunta: "O que significa o indicador 'ratio' no FCOJ?",
      resposta:
        "O ratio é a relação entre o teor de açúcares (°Brix) e a acidez total do suco. Um ratio de 8,5 ± 1,5 indica equilíbrio entre doçura e acidez, parâmetro relevante para a padronização de bebidas e formulações que exigem consistência sensorial entre lotes.",
    },
    {
      pergunta: "Quais variedades de laranja são utilizadas?",
      resposta:
        "A Tecnovin processa as variedades Valência, Natal e Hamlin, escolhidas pelo equilíbrio entre rendimento de suco, teor de sólidos solúveis e perfil de acidez adequado ao mercado de ingredientes industriais.",
    },
    {
      pergunta: "Qual é a condição de armazenamento e validade do FCOJ?",
      resposta:
        "O FCOJ deve ser armazenado e transportado abaixo de -18 °C. Mantidas as condições de cadeia de frio, o produto tem validade de até 24 meses a partir da data de produção.",
    },
  ],
  imagem: "/images/produtos/hero-laranja.jpg",
  imagemAlt:
    "Laranjas Valência frescas cortadas ao meio sobre superfície de madeira — ingrediente para o Concentrado de Laranja Congelado da Tecnovin",
  detalhesVisuais: {
    materiaPrima: {
      imagem: "/images/produtos/detalhes/detalhe-laranja-materia-prima.jpg",
      alt: "Laranjas Valência brasileiras maduras com folhas verdes frescas selecionadas para processamento",
    },
    textura: {
      imagem: "/images/produtos/detalhes/detalhe-laranja-textura.jpg",
      alt: "Textura aveludada e cor alaranjada intensa do concentrado de laranja congelado (FCOJ 65° Brix) ao lado da fruta fresca",
    },
    aplicacao: {
      imagem: "/images/produtos/detalhes/detalhe-laranja-aplicacao.jpg",
      alt: "Tambores metálicos industriais paletizados para armazenamento e logística de exportação de FCOJ",
    },
  },
  seo: {
    title: "Concentrado de Laranja Congelado FCOJ — Tecnovin RS",
    description:
      "Frozen Concentrate Orange Juice (FCOJ) 65° Brix a partir das variedades Valência, Natal e Hamlin. Ratio 8,5 para a indústria de bebidas. Bento Gonçalves, RS.",
    keywords: [
      "concentrado de laranja congelado",
      "frozen concentrate orange juice",
      "FCOJ Brazil",
      "FCOJ fornecedor",
      "suco laranja concentrado industrial",
      "Valência Natal Hamlin",
    ],
  },
  ordem: 3,
};

// ---------------------------------------------------------------------------
// 4. Concentrado de Limão
// Fontes: S1, S5 — Dossiê de atividade §4.5
// ---------------------------------------------------------------------------
const concentradoDeLimao: Produto = {
  slug: "concentrado-de-limao",
  nomeComercial: "Concentrado de Limão",
  nomeComercialEn: "Lemon Juice Concentrate",
  descricao:
    "Concentrado de suco de limão produzido a partir das variedades Siciliano e Tahiti, com tratamento enzimático, clarificação e concentração em processo de aproximadamente 24 horas. Disponível nas versões clarificada e polposa, com alta acidez cítrica e teor de vitamina C, destinado a bebidas, alimentos e aplicações cosméticas.",
  tagline: "Alta acidez cítrica para formulações exigentes",
  variedades: ["Siciliano", "Tahiti"],
  fichaTecnica: {
    brix: "44,0 ± 3,0° Brix",
    ph: "1,85 ± 0,15",
    acidez: "31,5 ± 2,5% em ácido cítrico",
    vitamC: "142,5 ± 37,5 mg/100 ml (a 11,5° Brix)",
    transmitancia: "91,5% ± 6,5%",
    polpa: "~2% (versão polposa · 45° Brix)",
  },
  embalagem: {
    tipo: "Tambor de aço com revestimento interno de epóxi",
    revestimentoInterno: "Dois sacos de polietileno",
    pesoLiquido: "230 kg",
    tamanhoDeLote: "Até 16 toneladas",
    armazenamento: "-20 °C",
    validade: "Até 18 meses",
  },
  setoresDeUso: [
    "Indústria de bebidas",
    "Indústria de alimentos",
    "Cosméticos",
    "Indústria farmacêutica",
  ],
  destaquesInstitucionais: [
    "Variedades Siciliano e Tahiti para perfis de acidez distintos",
    "Alta concentração de vitamina C: 142,5 ± 37,5 mg/100 ml",
    "Lotes de até 16 toneladas com especificações por lote",
    "Armazenamento a -20 °C com validade de até 18 meses",
  ],
  faq: [
    {
      pergunta:
        "Qual a diferença entre o concentrado de Limão Siciliano e Tahiti?",
      resposta:
        "As variedades Siciliano e Tahiti possuem perfis de acidez e aromas distintos. O Siciliano tende a apresentar acidez mais intensa e aroma floral característico, enquanto o Tahiti é amplamente utilizado na indústria brasileira por seu rendimento elevado. A Tecnovin processa ambas as variedades; consulte a equipe comercial para especificação por variedade.",
    },
    {
      pergunta: "O concentrado de limão possui alto teor de vitamina C?",
      resposta:
        "Sim. A ficha técnica registra 142,5 ± 37,5 mg de vitamina C por 100 ml, medidos a 11,5° Brix. Esse parâmetro é relevante para formulações de bebidas funcionais, suplementos e produtos que declaram teor de vitamina C no rótulo.",
    },
    {
      pergunta: "Quais setores utilizam o concentrado de limão?",
      resposta:
        "O concentrado de limão é utilizado principalmente pela indústria de bebidas (refrigerantes, néctares, chás), indústria de alimentos (condimentos, molhos, confeitos), cosméticos (produtos de higiene e fragrâncias) e, por sua acidez e vitamina C, por formulações farmacêuticas e suplementos alimentares.",
    },
  ],
  imagem: "/images/produtos/hero-limao.jpg",
  imagemAlt:
    "Limões Siciliano e Tahiti frescos, um cortado ao meio revelando a polpa — ingrediente para o Concentrado de Limão da Tecnovin",
  detalhesVisuais: {
    materiaPrima: {
      imagem: "/images/produtos/detalhes/detalhe-limao-materia-prima.jpg",
      alt: "Limões Siciliano amarelos e Tahiti verdes recém-colhidos com gotas de orvalho em caixote de madeira",
    },
    textura: {
      imagem: "/images/produtos/detalhes/detalhe-limao-textura.jpg",
      alt: "Concentrado de suco de limão em béquer de vidro sobre ardósia evidenciando polpa cítrica e turbidez natural",
    },
    aplicacao: {
      imagem: "/images/produtos/detalhes/detalhe-limao-aplicacao.jpg",
      alt: "Amostras de formulações de bebidas cítricas, alimentos e cosméticos em bancada de desenvolvimento",
    },
  },
  seo: {
    title: "Concentrado de Limão Siciliano e Tahiti — Tecnovin RS",
    description:
      "Lemon Juice Concentrate 44° Brix nas variedades Siciliano e Tahiti com 31,5% de acidez cítrica e alto teor de vitamina C. Fornecedor B2B em Bento Gonçalves, RS.",
    keywords: [
      "concentrado de limão",
      "lemon juice concentrate",
      "concentrado limão Brazil",
      "Siciliano Tahiti concentrate",
      "fornecedor limão concentrado",
      "limão industrial",
    ],
  },
  ordem: 4,
};

// ---------------------------------------------------------------------------
// 5. Concentrado de Acerola
// Fontes: S1, S8, S9 — Dossiê de atividade §4.6
// ⚠️ Sem ficha técnica pública disponível — conteúdo limitado ao portfólio declarado
// ---------------------------------------------------------------------------
const concentradoDeAcerola: Produto = {
  slug: "concentrado-de-acerola",
  nomeComercial: "Concentrado de Acerola",
  nomeComercialEn: "Acerola Juice Concentrate",
  descricao:
    "A acerola (Malpighia emarginata) é reconhecida como uma das frutas com maior teor natural de vitamina C. A Tecnovin inclui o Concentrado de Acerola em seu portfólio declarado de ingredientes para a indústria de alimentos e bebidas. Para especificações técnicas detalhadas, condições de fornecimento e disponibilidade, entre em contato com nossa equipe comercial.",
  tagline: "Vitamina C da natureza em escala industrial",
  setoresDeUso: [
    "Indústria de alimentos",
    "Indústria de bebidas",
    "Suplementos alimentares",
    "Cosméticos",
  ],
  destaquesInstitucionais: [
    "Portfólio declarado no site oficial da Tecnovin",
    "Fruta reconhecida pelo alto teor natural de vitamina C",
    "Ingrediente para indústrias de alimentos, bebidas e cosméticos",
    "Especificações técnicas disponíveis mediante solicitação comercial",
  ],
  faq: [
    {
      pergunta: "O concentrado de acerola é produzido pela Tecnovin?",
      resposta:
        "Sim. O Concentrado de Acerola consta no portfólio declarado de produtos manufaturados no site oficial da Tecnovin. Para detalhes de especificações técnicas, disponibilidade e condições de fornecimento, consulte nossa equipe comercial pelo formulário abaixo.",
    },
    {
      pergunta: "Quais setores utilizam o concentrado de acerola?",
      resposta:
        "O concentrado de acerola é amplamente utilizado em bebidas funcionais, suplementos vitamínicos, alimentos enriquecidos com vitamina C, produtos cosméticos e farmacêuticos. Sua alta concentração natural de ácido ascórbico é o principal diferencial para formulações que declaram vitamina C no rótulo.",
    },
  ],
  imagem: "/images/produtos/hero-acerola.jpg",
  imagemAlt:
    "Cachos de acerola vermelha e madura em galhos verdes — ingrediente para o Concentrado de Acerola da Tecnovin",
  detalhesVisuais: {
    materiaPrima: {
      imagem: "/images/produtos/detalhes/detalhe-acerola-materia-prima.jpg",
      alt: "Galhos verdes carregados de acerolas vermelhas maduras e brilhantes ricas em vitamina C",
    },
    textura: {
      imagem: "/images/produtos/detalhes/detalhe-acerola-textura.jpg",
      alt: "Polpa suculenta vermelho-alaranjada de acerolas frescas cortadas sobre bancada de madeira escura",
    },
    aplicacao: {
      imagem: "/images/produtos/detalhes/detalhe-acerola-aplicacao.jpg",
      alt: "Frascos de suplementos vitamínicos, bebidas funcionais e bases cosméticas em laboratório de P&D",
    },
  },
  seo: {
    title: "Concentrado de Acerola Industrial B2B — Tecnovin do Brasil",
    description:
      "Acerola Juice Concentrate produzido pela Tecnovin no Vale dos Vinhedos, RS. Ingrediente rico em vitamina C natural para alimentos, bebidas e suplementos B2B.",
    keywords: [
      "concentrado de acerola",
      "acerola juice concentrate",
      "acerola Brazil supplier",
      "vitamina C natural concentrado",
      "fornecedor acerola industrial",
    ],
  },
  ordem: 5,
};

// ---------------------------------------------------------------------------
// 6. Concentrado de Abacaxi
// Fontes: S1, S8 — Dossiê de atividade §4.6
// ⚠️ Sem ficha técnica pública disponível — conteúdo limitado ao portfólio declarado
// ---------------------------------------------------------------------------
const concentradoDeAbacaxi: Produto = {
  slug: "concentrado-de-abacaxi",
  nomeComercial: "Concentrado de Abacaxi",
  nomeComercialEn: "Pineapple Juice Concentrate",
  descricao:
    "O abacaxi brasileiro é reconhecido mundialmente pelo sabor tropical equilibrado entre doçura e acidez. A Tecnovin inclui o Concentrado de Abacaxi em seu portfólio declarado de ingredientes para a indústria de alimentos e bebidas. Para especificações técnicas, disponibilidade e condições de fornecimento, entre em contato com nossa equipe comercial.",
  tagline: "Sabor tropical brasileiro em formato industrial",
  setoresDeUso: [
    "Indústria de bebidas",
    "Indústria de alimentos",
    "Cosméticos",
    "Indústria de fragrâncias",
  ],
  destaquesInstitucionais: [
    "Portfólio declarado no site oficial da Tecnovin",
    "Fruta tropical com excelente perfil de sabor para formulações",
    "Ingrediente para indústrias de alimentos, bebidas e cosméticos",
    "Especificações técnicas disponíveis mediante solicitação comercial",
  ],
  faq: [
    {
      pergunta: "O concentrado de abacaxi é produzido pela Tecnovin?",
      resposta:
        "Sim. O Concentrado de Abacaxi consta no portfólio declarado de produtos manufaturados no site oficial da Tecnovin. Para especificações técnicas detalhadas, disponibilidade e condições comerciais, consulte nossa equipe pelo formulário abaixo.",
    },
    {
      pergunta: "Quais aplicações industriais o concentrado de abacaxi atende?",
      resposta:
        "O concentrado de abacaxi é utilizado em bebidas tropicais, néctares, sucos mistos, sorvetes, geleias, produtos de panificação, cosméticos e fragrâncias. Seu perfil aromático intenso e equilíbrio de Brix e acidez o tornam versátil para diferentes formulações.",
    },
  ],
  imagem: "/images/produtos/hero-abacaxi.jpg",
  imagemAlt:
    "Abacaxi brasileiro maduro inteiro e fatiado sobre fundo verde tropical — ingrediente para o Concentrado de Abacaxi da Tecnovin",
  detalhesVisuais: {
    materiaPrima: {
      imagem: "/images/produtos/detalhes/detalhe-abacaxi-materia-prima.jpg",
      alt: "Abacaxis dourados brasileiros recém-colhidos com coroas verdes em caixote de madeira no campo",
    },
    textura: {
      imagem: "/images/produtos/detalhes/detalhe-abacaxi-textura.jpg",
      alt: "Concentrado de suco de abacaxi amarelo-ouro em béquer de laboratório sobre ardósia e pedra",
    },
    aplicacao: {
      imagem: "/images/produtos/detalhes/detalhe-abacaxi-aplicacao.jpg",
      alt: "Amostras de néctares tropicais, geleias e bases lácteas formuladas com abacaxi em laboratório de alimentos",
    },
  },
  seo: {
    title: "Concentrado de Abacaxi Industrial B2B — Tecnovin do Brasil",
    description:
      "Pineapple Juice Concentrate produzido pela Tecnovin no Vale dos Vinhedos, RS. Sabor tropical brasileiro equilibrado para bebidas e formulações industriais B2B.",
    keywords: [
      "concentrado de abacaxi",
      "pineapple juice concentrate",
      "abacaxi Brazil supplier",
      "fornecedor abacaxi concentrado",
      "tropical juice concentrate Brazil",
    ],
  },
  ordem: 6,
};

// ---------------------------------------------------------------------------
// 7. Cremor de Tártaro
// Fontes: S17 — Dossiê de atividade §4.2
// ⚠️ REGISTRO HISTÓRICO — Status atual de fabricação não confirmado para 2026
// ---------------------------------------------------------------------------
const cremorDeTartaro: Produto = {
  slug: "cremor-de-tartaro",
  nomeComercial: "Cremor de Tártaro",
  nomeComercialEn: "Cream of Tartar (Potassium Bitartrate)",
  descricao:
    "O cremor de tártaro (bitartarato de potássio) é obtido a partir do tártaro bruto derivado da elaboração de vinhos e sucos de uva concentrados — um coproduto natural da cadeia vitivinícola. As páginas técnicas históricas da Tecnovin descrevem sua produção com pureza de 99,0% ± 1,0 e aplicações em fermentos, massas, panificação e uso cosmético como bactericida em talcos e sabonetes.",
  tagline: "Coproduto da cadeia vitivinícola — pureza e versatilidade",
  fichaTecnica: {
    extras: {
      Pureza: "99,0% ± 1,0",
      "Aplicações alimentícias": "Fermentos, massas, panificação",
      "Aplicações cosméticas": "Talcos e sabonetes (bactericida)",
    },
  },
  setoresDeUso: [
    "Indústria de panificação",
    "Fermentos e massas",
    "Cosméticos",
    "Indústria química",
  ],
  destaquesInstitucionais: [
    "Coproduto natural da cadeia de uva e vinhos",
    "Pureza de 99,0% ± 1,0 registrada em ficha técnica histórica",
    "Aplicações em panificação, fermentos e cosméticos",
    "Derivado do processamento de uva realizado no Vale dos Vinhedos",
  ],
  faq: [
    {
      pergunta: "O que é cremor de tártaro e como é produzido?",
      resposta:
        "Cremor de tártaro é o nome popular do bitartarato de potássio, um sal natural obtido como coproduto da elaboração de vinhos e sucos de uva concentrados. Após a fermentação ou concentração do suco de uva, o tártaro se deposita nas paredes dos tanques e é processado para obtenção do cremor com alta pureza.",
    },
    {
      pergunta: "Quais são as aplicações do cremor de tártaro?",
      resposta:
        "O cremor de tártaro tem aplicações em panificação (fermento para bolos e massas), confeitaria, como estabilizante em claras batidas e merengues, e na indústria cosmética como agente bactericida em talcos e sabonetes.",
    },
  ],
  imagem: "/images/produtos/hero-cremor-tartaro.jpg",
  imagemAlt:
    "Pó branco cristalino de cremor de tártaro (bitartarato de potássio) em tigela de cerâmica artesanal sobre pedra travertino, com colher de madeira ao fundo — coproduto da cadeia vitivinícola Tecnovin",
  detalhesVisuais: {
    materiaPrima: {
      imagem: "/images/produtos/detalhes/detalhe-cremor-materia-prima.jpg",
      alt: "Cremor de tártaro derivado da cadeia vitivinícola em tigela de cerâmica artesanal e colher de madeira",
    },
    textura: {
      imagem: "/images/produtos/detalhes/detalhe-cremor-textura.jpg",
      alt: "Detalhe macro da granulometria cristalina branca com 99% de pureza do bitartarato de potássio",
    },
    aplicacao: {
      imagem: "/images/produtos/detalhes/detalhe-cremor-aplicacao.jpg",
      alt: "Balança analítica e potes de formulação alimentícia e de panificação em bancada de laboratório",
    },
  },
  seo: {
    title: "Cremor de Tártaro (Bitartarato) — Tecnovin do Brasil",
    description:
      "Cremor de Tártaro (bitartarato de potássio) com pureza de 99% derivado da cadeia vitivinícola no Vale dos Vinhedos, RS. Registro histórico técnico da Tecnovin.",
    keywords: [
      "cremor de tártaro",
      "cream of tartar Brazil",
      "bitartarato de potássio",
      "potassium bitartrate supplier",
      "cremor tartaro industrial",
    ],
  },
  ordem: 7,
  historicoNaoConfirmado: true,
  historicoAviso:
    "Registro histórico: este produto foi documentado em páginas técnicas da Tecnovin sem data visível de publicação. O status atual de fabricação e disponibilidade comercial não foi confirmado para 2026. Consulte nossa equipe comercial para verificar disponibilidade.",
};

// ---------------------------------------------------------------------------
// Exportações
// ---------------------------------------------------------------------------

export const PRODUTOS: Produto[] = [
  concentradoDeUva,
  concentradoDeMaca,
  concentradoDeLaranja,
  concentradoDeLimao,
  concentradoDeAcerola,
  concentradoDeAbacaxi,
  cremorDeTartaro,
];

export const PRODUTOS_MAP = Object.fromEntries(
  PRODUTOS.map(p => [p.slug, p])
) as Record<string, Produto>;

/**
 * Retorna o produto anterior e próximo para navegação
 */
export function getProdutoNavigation(slug: string): {
  anterior: Produto | null;
  proximo: Produto | null;
} {
  const index = PRODUTOS.findIndex(p => p.slug === slug);
  return {
    anterior: index > 0 ? PRODUTOS[index - 1] : null,
    proximo: index < PRODUTOS.length - 1 ? PRODUTOS[index + 1] : null,
  };
}
