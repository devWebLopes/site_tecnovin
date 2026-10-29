/**
 * artigos.ts — Base de dados tipada de artigos e publicações da Tecnovin
 * Source of truth para listagem (/blog) e páginas individuais (/blog/:slug)
 */

export interface ArtigoSection {
  type: "paragraph" | "heading" | "quote" | "callout" | "list";
  content: string | string[];
  label?: string; // Para callout (ex.: "Registro histórico", "Nota editorial", "Fonte")
}

export interface Artigo {
  slug: string;
  category: string;
  date: string;
  read: string;
  color: "wine" | "olive" | "coral" | "amber" | "forest" | "gold";
  featured?: boolean;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  source?: string; // URL externa de origem para artigos de memória
  body: ArtigoSection[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const ARTIGOS: Artigo[] = [
  {
    slug: "premio-exportacao-rs-2018",
    category: "Memória & notícias",
    date: "Registro público · 2018",
    read: "3 min",
    color: "wine",
    featured: true,
    image: "/images/blog/blog-premio-exportacao-rs-2018.jpg",
    imageAlt:
      "Tambores metálicos industriais de suco concentrado paletizados em armazém logístico de exportação",
    source:
      "https://www.jornaldocomercio.com/_conteudo/2018/05/economia/627896-premio-exportacao-rs-anuncia-empresas-destaque-no-mercado-gaucho-em-2018.html",
    title:
      "Prêmio Exportação RS: um reconhecimento à presença da Tecnovin no setor",
    excerpt:
      "A Tecnovin do Brasil foi listada em Destaque Setorial — Bebidas na 46ª edição do Prêmio Exportação RS. Conteúdo com referência pública de origem.",
    seo: {
      title: "Prêmio Exportação RS 2018 — Tecnovin do Brasil",
      description:
        "A Tecnovin do Brasil foi listada em Destaque Setorial — Bebidas na 46ª edição do Prêmio Exportação RS, em 2018.",
      keywords: [
        "Tecnovin",
        "Prêmio Exportação RS",
        "Bebidas",
        "Exportação",
        "Bento Gonçalves",
        "ADVB RS",
      ],
    },
    body: [
      {
        type: "callout",
        label: "Registro histórico · 2018",
        content:
          "Este conteúdo reproduz registro jornalístico público de maio de 2018. Trata-se de um marco histórico documental da presença da empresa no setor de bebidas do Rio Grande do Sul.",
      },
      {
        type: "paragraph",
        content:
          "Em maio de 2018, o Conselho do Prêmio Exportação RS — promovido pela Associação dos Dirigentes de Vendas e Marketing do Brasil (ADVB/RS) — divulgou as empresas homenageadas na 46ª edição de uma das mais tradicionais premiações do comércio exterior gaúcho.",
      },
      {
        type: "paragraph",
        content:
          "Entre os nomes selecionados pelo conselho julgador, a Tecnovin do Brasil Ltda. figurou na categoria Destaque Setorial — Bebidas, ao lado de importantes expoentes da vitivinicultura e agroindústria da Serra Gaúcha e do estado.",
      },
      {
        type: "heading",
        content: "A relevância do Destaque Setorial",
      },
      {
        type: "paragraph",
        content:
          "O Prêmio Exportação RS é reconhecido como o principal evento de valorização da competitividade externa gaúcha, reunindo entidades de classe, instituições financeiras e órgãos de desenvolvimento econômico. A distinção reflete a dedicação contínua ao atendimento de padrões rigorosos de qualidade exigidos por mercados internacionais.",
      },
      {
        type: "quote",
        content:
          "A inserção em mercados de alta exigência técnica valida a solidez dos processos de concentração, controle analítico e rastreabilidade que estruturam a produção de derivados de frutas.",
      },
      {
        type: "paragraph",
        content:
          "A menção na 46ª edição do prêmio integra o acervo histórico da Tecnovin, atestando a consistência técnica e o compromisso da empresa com a expansão e valorização das matérias-primas produzidas no Brasil.",
      },
    ],
  },
  {
    slug: "tecnovitis-2023",
    category: "Memória & notícias",
    date: "Registro público · 2023",
    read: "3 min",
    color: "olive",
    image: "/images/blog/blog-tecnovitis-2023.jpg",
    imageAlt:
      "Engenheira agrônoma e viticultor avaliando cachos de uva escura em parreiral na Serra Gaúcha",
    source:
      "https://www.bentogoncalves.rs.gov.br/5a-tecnovitis-agroindustrias-do-municipio-participam-da-feira/",
    title: "Tecnovitis: uma presença no encontro da viticultura e fruticultura",
    excerpt:
      "Tecnovin e Suvalan foram citadas como patrocinadoras Prata da 5ª Tecnovitis em Bento Gonçalves, conforme fonte oficial do município.",
    seo: {
      title: "Tecnovitis 2023 — Tecnovin e Suvalan na feira de viticultura",
      description:
        "Tecnovin e Suvalan participaram como patrocinadoras Prata da 5ª Tecnovitis, em Bento Gonçalves, em dezembro de 2023.",
      keywords: [
        "Tecnovitis 2023",
        "Tecnovin",
        "Suvalan",
        "Viticultura",
        "Fruticultura",
        "Bento Gonçalves",
        "Serra Gaúcha",
      ],
    },
    body: [
      {
        type: "callout",
        label: "Registro público · 2023",
        content:
          "Informação institucional baseada em publicações oficiais de órgãos municipais e imprensa regional referente à 5ª edição da Tecnovitis, realizada em dezembro de 2023.",
      },
      {
        type: "paragraph",
        content:
          "Realizada na comunidade de São Pedro, nos Caminhos de Pedra em Bento Gonçalves, a 5ª Tecnovitis consolidou-se como um espaço fundamental de aproximação entre produtores rurais, fabricantes de máquinas, insumos e indústrias de transformação da uva e de frutas de clima temperado.",
      },
      {
        type: "paragraph",
        content:
          "Durante a edição de 2023, a Tecnovin e a Suvalan integraram o quadro de apoiadores do encontro na cota de patrocínio Prata, reafirmando o compromisso com o ecossistema agrícola da Serra Gaúcha e o desenvolvimento técnico dos viticultores e fruticultores da região.",
      },
      {
        type: "heading",
        content: "Conexão com o produtor e a cadeia da fruta",
      },
      {
        type: "paragraph",
        content:
          "Eventos como a Tecnovitis cumprem um papel estratégico de transferência de conhecimento tecnológico, exibição de cultivares, demonstração de práticas de manejo sustentável e debate sobre as perspectivas de safra.",
      },
      {
        type: "list",
        content: [
          "Aproximação com as famílias produtoras de uva e maçã da Serra Gaúcha.",
          "Incentivo à modernização do manejo agrícola e à melhoria qualitativa da matéria-prima.",
          "Fomento a práticas seguras e rastreáveis na colheita e pós-colheita.",
        ],
      },
      {
        type: "paragraph",
        content:
          "A participação da Tecnovin no encontro reforça a compreensão de que a excelência dos concentrados industriais tem sua raiz no campo, na relação transparente e duradoura com quem cultiva a terra.",
      },
    ],
  },
  {
    slug: "o-ingrediente-certo-carrega-uma-historia",
    category: "Perspectivas Tecnovin",
    date: "Carta do time",
    read: "3 min",
    color: "coral",
    image: "/images/blog/blog-ingrediente-certo-carrega-historia.jpg",
    imageAlt:
      "Amanhecer dourado com neblina suave sobre os parreirais e colinas do Vale dos Vinhedos",
    title: "O ingrediente certo também carrega uma história",
    excerpt:
      "Porque procedência, território e parceria importam tanto quanto o resultado no produto final.",
    seo: {
      title: "O ingrediente certo também carrega uma história — Tecnovin",
      description:
        "Por que procedência, território e parceria importam tanto quanto o resultado no produto final.",
      keywords: [
        "Ingredientes naturais",
        "Procedência",
        "Origem",
        "Tecnovin",
        "Serra Gaúcha",
        "Indústria de alimentos",
      ],
    },
    body: [
      {
        type: "paragraph",
        content:
          "No desenvolvimento de bebidas e alimentos contemporâneos, as especificações de laudo — graus Brix, acidez titulável, turbidez e contagem microbiológica — são pontos de partida inegociáveis. No entanto, quando um produto conquista a preferência do consumidor, há um elemento intangível que sustenta essa escolha: a coerência de sua origem.",
      },
      {
        type: "quote",
        content:
          "Um concentrado de fruta não é apenas uma fração de açúcares naturais e ácidos orgânicos; é o reflexo do solo, do clima e da dedicação de toda uma cadeia de produtores.",
      },
      {
        type: "heading",
        content: "A força do território e do saber fazer",
      },
      {
        type: "paragraph",
        content:
          "Localizada no coração da principal região produtora de uvas do Brasil, a Tecnovin compreende que a consistência industrial decorre da valorização das safras e do respeito ao ciclo biológico de cada fruta. Cada lote processado carrega a tradição agrícola dos vales do Sul aliada ao rigor da engenharia de processos moderna.",
      },
      {
        type: "paragraph",
        content:
          "Trabalhar em estreita sintonia com quem planta e colhe permite antecipar variações sazonais, ajustar parâmetros de extração a frio e evaporação a vácuo, e entregar ao cliente industrial uma base que mantém a identidade sensorial original da fruta intacta.",
      },
      {
        type: "heading",
        content: "Parceria que constrói marcas fortes",
      },
      {
        type: "paragraph",
        content:
          "As marcas que lideram a transformação do setor de alimentos hoje buscam fornecedores que ofereçam transparência de ponta a ponta. Saber exatamente de onde vem cada ingrediente é a base da confiança que se traduz no rótulo final.",
      },
    ],
  },
  {
    slug: "mapa-de-possibilidades-uva-maca-laranja",
    category: "Portfólio",
    date: "Guia rápido",
    read: "6 min",
    color: "amber",
    image: "/images/blog/blog-mapa-possibilidades-portfolio.jpg",
    imageAlt:
      "Composição laboratorial com concentrados naturais de uva rubi, maçã clarificada e abacaxi tropical em vidrarias de análise",
    title: "Uva, maçã, laranja e mais: um mapa de possibilidades",
    excerpt:
      "Um olhar direto para as famílias de concentrados que ajudam a tirar novas ideias do papel.",
    seo: {
      title: "Uva, maçã, laranja e mais: um mapa de possibilidades — Tecnovin",
      description:
        "Guia rápido pelas famílias de concentrados de fruta que ajudam a transformar ideias em produto.",
      keywords: [
        "Concentrado de fruta",
        "Suco de uva concentrado",
        "Suco de maçã concentrado",
        "FCOJ",
        "Portfólio Tecnovin",
        "B2B",
      ],
    },
    body: [
      {
        type: "paragraph",
        content:
          "A formulação de produtos exige versatilidade técnica, padronização e confiabilidade no fornecimento. A linha de sucos e concentrados da Tecnovin foi estruturada para atender desde grandes indústrias de bebidas até linhas artesanais de panificação e laticínios.",
      },
      {
        type: "heading",
        content: "Família da Uva: Estrutura, Cor e Autenticidade",
      },
      {
        type: "paragraph",
        content:
          "Processada no ápice da colheita, a linha de uva concentra a intensidade aromática e os polifenóis das variedades cultivadas no Sul do país. Disponível nas versões Tinto (68° Brix, com perfil encorpado e coloração rubi viva) e Branco (68° Brix, límpido e com acidez balanceada), é a base ideal para sucos 100%, nectares, chás e fermentados.",
      },
      {
        type: "heading",
        content: "Família da Maçã: O Equilíbrio da Doçura Natural (AJC)",
      },
      {
        type: "paragraph",
        content:
          "Com 70° Brix e alta clarificação, o suco concentrado de maçã é reconhecido internacionalmente como uma das melhores soluções para adoçamento natural (clean label) e padronização de blends, sem alterar notas aromáticas sensíveis de outros componentes.",
      },
      {
        type: "heading",
        content: "Família dos Cítricos: Frescor e Ratio sob Medida",
      },
      {
        type: "paragraph",
        content:
          "O Suco Concentrado de Laranja Congelado (FCOJ 65° Brix) preserva os óleos essenciais e o frescor cítrico característico, com controle estrito do ratio Brix/acidez. Complementando a linha cítrica, o Suco Concentrado de Limão oferece intensidade ácida pura para refrescos, molhos e marinadas.",
      },
      {
        type: "heading",
        content: "Frutas Tropicais: Diferenciação e Funcionalidade",
      },
      {
        type: "list",
        content: [
          "Suco Concentrado de Acerola: alto teor nativo de Vitamina C e perfil antioxidante marcante.",
          "Suco Concentrado de Abacaxi: acidez tropical vibrante e presença aromática indispensável para blends de verão e marinadas.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Todos os produtos são fornecidos em tambores assépticos metálicos com liner ou containers industriais (IBC), com armazenamento refrigerado ou congelado para máxima estabilidade físico-química.",
      },
    ],
  },
  {
    slug: "o-valor-de-saber-de-onde-vem-cada-escolha",
    category: "Cadeia & origem",
    date: "Em pauta",
    read: "4 min",
    color: "forest",
    image: "/images/blog/blog-valor-saber-de-onde-vem-escolha.jpg",
    imageAlt:
      "Uvas frescas recém-colhidas em caixa de madeira no parreiral representando a rastreabilidade da matéria-prima",
    title: "O valor de saber de onde vem cada escolha",
    excerpt:
      "Rastrear decisões é também construir relações mais transparentes ao longo da cadeia.",
    seo: {
      title: "O valor de saber de onde vem cada escolha — Tecnovin",
      description:
        "Rastrear decisões é também construir relações mais transparentes ao longo da cadeia de ingredientes.",
      keywords: [
        "Rastreabilidade",
        "Cadeia produtiva",
        "Embrapa",
        "localgap",
        "Boas práticas agrícolas",
        "Tecnovin",
      ],
    },
    body: [
      {
        type: "paragraph",
        content:
          "A segurança de um produto alimentício começa muito antes da etapa de envase na fábrica. Em um mercado cada vez mais consciente e fiscalizado, a rastreabilidade da matéria-prima deixou de ser um diferencial de nicho para se tornar requisito de sustentabilidade empresarial.",
      },
      {
        type: "heading",
        content: "Cooperação técnica e rigor científico",
      },
      {
        type: "paragraph",
        content:
          "Ao longo de sua trajetória, a Tecnovin tem mantido estreita colaboração técnica com instituições de pesquisa agropecuária de referência, como a Embrapa Uva e Vinho, participando de projetos voltados à avaliação de cultivares, melhoria no aproveitamento de safras e desenvolvimento de métodos de conservação.",
      },
      {
        type: "callout",
        label: "Boas Práticas Agrícolas",
        content:
          "A participação da Tecnovin em iniciativas como o programa localg.a.p. evidencia o incentivo constante a práticas agrícolas que respeitam padrões de higiene, uso racional da água, segurança dos trabalhadores rurais e controle integrado de pragas.",
      },
      {
        type: "heading",
        content: "Transparência de ponta a ponta",
      },
      {
        type: "paragraph",
        content:
          "Cada lote de fruta recebido em nossa unidade passa por triagem visual, amostragem analítica em laboratório e registro documental detalhado. Esse processo assegura que qualquer alteração de padrão seja identificada preventivamente, garantindo ao formulador a tranquilidade de uma base homogênea e confiável.",
      },
      {
        type: "paragraph",
        content:
          "Construir essa transparência exige tempo, investimento contínuo em processos e, acima de tudo, respeito mútuo entre produtores e indústria.",
      },
    ],
  },
  {
    slug: "formulacao-equilibrio-sabor-e-escala",
    category: "Mercado & aplicações",
    date: "Observatório",
    read: "5 min",
    color: "gold",
    image: "/images/blog/blog-formulacao-equilibrio-sabor-escala.jpg",
    imageAlt:
      "Bancada de pesquisa e desenvolvimento de bebidas e alimentos com formulações de fruta e tanques de inox ao fundo",
    title: "Quando a formulação pede equilíbrio entre sabor e escala",
    excerpt:
      "Pontos para considerar ao escolher uma base de fruta para bebidas e alimentos.",
    seo: {
      title: "Formulação: equilíbrio entre sabor e escala — Tecnovin",
      description:
        "Pontos para considerar ao escolher uma base de fruta para bebidas e alimentos industriais.",
      keywords: [
        "Formulação de bebidas",
        "Graus Brix",
        "Acidez titulável",
        "Ratio",
        "Bases de fruta",
        "Engenharia de alimentos",
      ],
    },
    body: [
      {
        type: "paragraph",
        content:
          "Projetar uma nova bebida ou alimento em escala industrial envolve conciliar expectativas sensoriais do consumidor, estabilidade biológica e eficiência de custo por litro ou quilo produzido. Escolher a base de fruta adequada é a decisão mais crítica dessa equação.",
      },
      {
        type: "heading",
        content: "1. O Papel do Ratio (Brix / Acidez)",
      },
      {
        type: "paragraph",
        content:
          "O índice ratio define a percepção sensorial de frescor ou doçura de um suco. Em concentrados como o FCOJ 65° Brix ou o suco de uva tinto 68° Brix, conhecer a faixa exata de acidez cítrica ou tartárica permite calibrar xaropes e soluções sem necessidade de correções artificiais exageradas.",
      },
      {
        type: "heading",
        content: "2. Clarificação vs. Turbidez Natural",
      },
      {
        type: "paragraph",
        content:
          "A depender da aplicação pretendida, a presença de sólidos solúveis e pectina pode ser um atributo desejável (como na textura de néctares e polpas) ou um fator de risco operacional (em linhas que exigem envase a frio com filtragem estéril). Concentrados clarificados, como o suco de maçã 70° Brix (AJC), oferecem total limpidez e fácil reconstituição.",
      },
      {
        type: "heading",
        content: "3. Fator de Reconstituição e Logística",
      },
      {
        type: "list",
        content: [
          "Eficiência de transporte: concentrar até 68° ou 70° Brix reduz em até 5 a 6 vezes o volume de frete em relação ao suco integral.",
          "Estabilidade microbiológica: a alta pressão osmótica de concentrados a baixa temperatura minimiza riscos de fermentação.",
          "Flexibilidade fabril: facilidade de dosagem em tanques de diluição contínua ou batelada.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Ao planejar novos lançamentos, o suporte técnico na escolha dos insumos reduz o tempo de desenvolvimento em bancada e garante repetibilidade impecável no chão de fábrica.",
      },
    ],
  },
];

export const ARTIGOS_MAP: Record<string, Artigo> = Object.fromEntries(
  ARTIGOS.map(artigo => [artigo.slug, artigo])
);

export function getArtigoNavigation(currentSlug: string): {
  anterior: Artigo | null;
  proximo: Artigo | null;
} {
  const index = ARTIGOS.findIndex(a => a.slug === currentSlug);
  if (index === -1) return { anterior: null, proximo: null };

  const anterior = index > 0 ? ARTIGOS[index - 1] : null;
  const proximo = index < ARTIGOS.length - 1 ? ARTIGOS[index + 1] : null;

  return { anterior, proximo };
}
