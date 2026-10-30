import {
  ArrowDown,
  ArrowUpRight,
  ChevronDown,
  Clock3,
  ExternalLink,
  Factory,
  FileDown,
  FlaskConical,
  Globe2,
  Handshake,
  Leaf,
  Mail,
  MapPin,
  MoveRight,
  Package2,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";
import SeoHead from "@/components/SeoHead";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  AnimatedLine,
  Reveal,
  ScaleRevealImage,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import { HOME_FAQ, HOME_SEO, getHomeSchemaGraph } from "@/lib/seo";

function HomeFaqItem({
  pergunta,
  resposta,
}: {
  pergunta: string;
  resposta: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button
        type="button"
        className="faq-question"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <span>{pergunta}</span>
        <ChevronDown
          size={18}
          strokeWidth={1.5}
          aria-hidden="true"
          className={`faq-chevron ${open ? "faq-chevron--open" : ""}`}
        />
      </button>
      <div
        className={`faq-answer ${open ? "faq-answer--open" : ""}`}
        hidden={!open}
      >
        <p>{resposta}</p>
      </div>
    </div>
  );
}

const products = [
  {
    fruit: "Uva",
    code: "GJC",
    slug: "concentrado-de-uva",
    tone: "wine",
    image: "/images/produtos/hero-uva.jpg",
    imageAlt:
      "Cachos de uvas Isabel e Concord com pruína natural ao lado de concentrado de uva rubi-violeta denso em copo borossilicato sobre ardósia escura — Tecnovin",
    description:
      "Concentrado de suco de uva para aplicações que pedem cor, corpo e identidade.",
  },
  {
    fruit: "Maçã",
    code: "AJC",
    slug: "concentrado-de-maca",
    tone: "olive",
    image: "/images/produtos/hero-maca.jpg",
    imageAlt:
      "Maçãs Gala e Fuji frescas com corte transversal ao lado de concentrado de maçã clarificado 70° Brix âmbar-dourado em béquer de vidro — Tecnovin",
    description:
      "Uma base versátil para bebidas, blends e formulações de sabor equilibrado.",
  },
  {
    fruit: "Laranja",
    code: "FCOJ",
    slug: "concentrado-de-laranja",
    tone: "amber",
    image: "/images/produtos/hero-laranja.jpg",
    imageAlt:
      "Laranjas Valência maduras com corte transversal ao lado de concentrado congelado de laranja aveludado em copo sobre ardósia escura — Tecnovin",
    description:
      "Concentrado congelado de laranja para cadeias que valorizam consistência.",
  },
  {
    fruit: "Limão",
    code: "LEMON JC",
    slug: "concentrado-de-limao",
    tone: "lime",
    image: "/images/produtos/hero-limao.jpg",
    imageAlt:
      "Limão Siciliano e Lima Tahiti com corte transversal exibindo polpa cristalina ao lado de concentrado cítrico opalescente sobre ardósia — Tecnovin",
    description:
      "Acidez e frescor em um ingrediente pensado para soluções de alto giro.",
  },
  {
    fruit: "Acerola",
    code: "ACEROLA JC",
    slug: "concentrado-de-acerola",
    tone: "coral",
    image: "/images/produtos/hero-acerola.jpg",
    imageAlt:
      "Acerolas frescas maduras com folhas botânicas ao lado de concentrado escarlate-terracota aveludado em vidro sobre ardósia escura — Tecnovin",
    description:
      "Perfil vibrante para bebidas, alimentos e combinações funcionais.",
  },
  {
    fruit: "Abacaxi",
    code: "PINEAPPLE JC",
    slug: "concentrado-de-abacaxi",
    tone: "gold",
    image: "/images/produtos/hero-abacaxi.jpg",
    imageAlt:
      "Abacaxi brasileiro maduro inteiro e em fatias douradas sobre placa mineral de ardósia escura — ingrediente para Concentrado de Abacaxi da Tecnovin",
    description:
      "A assinatura tropical que amplia possibilidades de formulação.",
  },
];

interface PortfolioSpec {
  name: string;
  slug: string;
  code: string;
  brix: string;
  acidityPrimary: string;
  aciditySub: string;
  storagePrimary: string;
  storageSub: string;
  packagePrimary: string;
  packageSub: string;
}

const portfolioSpecs: PortfolioSpec[] = [
  {
    name: "Concentrado de Uva",
    slug: "concentrado-de-uva",
    code: "GJC",
    brix: "68,0 ± 0,5° Brix",
    acidityPrimary: "3,5 ± 1% (ácido tartárico)",
    aciditySub: "Clarificado e polposo",
    storagePrimary: "Até 5 °C",
    storageSub: "Validade até 24 meses",
    packagePrimary: "Tambor de aço 265 kg",
    packageSub: "Epóxi interno + duplo PE",
  },
  {
    name: "Concentrado de Maçã",
    slug: "concentrado-de-maca",
    code: "AJC",
    brix: "70,0 ± 0,5° Brix",
    acidityPrimary: "Transmitância 97–99%",
    aciditySub: "1,70 ± 0,5% (ácido málico)",
    storagePrimary: "Até 5 °C (clarif.) / -20 °C (polp.)",
    storageSub: "Validade até 18 meses",
    packagePrimary: "Tambor de aço 265 kg",
    packageSub: "Epóxi interno + duplo PE",
  },
  {
    name: "Concentrado de Laranja Congelado",
    slug: "concentrado-de-laranja",
    code: "FCOJ",
    brix: "65,0 ± 0,5° Brix",
    acidityPrimary: "Ratio 8,5 ± 1,5",
    aciditySub: "7 ± 2% (ácido cítrico)",
    storagePrimary: "Abaixo de -18 °C",
    storageSub: "Validade até 24 meses",
    packagePrimary: "Tambor de aço 260 kg",
    packageSub: "Lotes de até 18 t",
  },
  {
    name: "Concentrado de Limão",
    slug: "concentrado-de-limao",
    code: "LEMON JC",
    brix: "44,0 ± 3,0° Brix",
    acidityPrimary: "31,5 ± 2,5% (ácido cítrico)",
    aciditySub: "Vit. C 142,5 mg/100ml",
    storagePrimary: "-20 °C",
    storageSub: "Validade até 18 meses",
    packagePrimary: "Tambor de aço 230 kg",
    packageSub: "Lotes de até 16 t",
  },
  {
    name: "Concentrado de Acerola",
    slug: "concentrado-de-acerola",
    code: "ACEROLA JC",
    brix: "Sob consulta",
    acidityPrimary: "Alto teor de ácido ascórbico",
    aciditySub: "Fonte natural de Vitamina C",
    storagePrimary: "Cadeia de frio controlada",
    storageSub: "Especificação técnica B2B",
    packagePrimary: "Fornecimento industrial B2B",
    packageSub: "Condições sob consulta",
  },
  {
    name: "Concentrado de Abacaxi",
    slug: "concentrado-de-abacaxi",
    code: "PINEAPPLE JC",
    brix: "Sob consulta",
    acidityPrimary: "Equilíbrio doce-ácido tropical",
    aciditySub: "Perfil sensorial padronizado",
    storagePrimary: "Cadeia de frio controlada",
    storageSub: "Especificação técnica B2B",
    packagePrimary: "Fornecimento industrial B2B",
    packageSub: "Condições sob consulta",
  },
];

const editorialCards = [
  {
    category: "Cadeia & origem",
    title: "O valor de saber de onde vem cada escolha",
    excerpt:
      "Rastrear decisões é também construir relações mais transparentes ao longo da cadeia de ingredientes.",
    accent: "#d4b17d",
    readTime: "4 min",
    date: "Em pauta",
    slug: "o-valor-de-saber-de-onde-vem-cada-escolha",
    image: "/images/blog/blog-valor-saber-de-onde-vem-escolha.jpg",
    imageAlt:
      "Uvas frescas recém-colhidas em caixa de madeira no parreiral representando a rastreabilidade da matéria-prima",
  },
  {
    category: "Mercado & aplicações",
    title: "Quando a formulação pede equilíbrio entre sabor e escala",
    excerpt:
      "Pontos para considerar ao escolher uma base de fruta para bebidas e alimentos industriais.",
    accent: "#92a078",
    readTime: "5 min",
    date: "Observatório",
    slug: "formulacao-equilibrio-sabor-e-escala",
    image: "/images/blog/blog-formulacao-equilibrio-sabor-escala.jpg",
    imageAlt:
      "Bancada de pesquisa e desenvolvimento de bebidas e alimentos com formulações de fruta e tanques de inox ao fundo",
  },
  {
    category: "Perspectivas Tecnovin",
    title: "O ingrediente certo também carrega uma história",
    excerpt:
      "Porque procedência, território e parceria importam tanto quanto o resultado no produto final.",
    accent: "#a35859",
    readTime: "3 min",
    date: "Carta do time",
    slug: "o-ingrediente-certo-carrega-uma-historia",
    image: "/images/blog/blog-ingrediente-certo-carrega-historia.jpg",
    imageAlt:
      "Amanhecer dourado com neblina suave sobre os parreirais e colinas do Vale dos Vinhedos",
  },
];

function scrollToContact() {
  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
}

const homeSchemas = getHomeSchemaGraph();

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#faf8f5] text-[#1c1917]">
      <SeoHead
        title={HOME_SEO.title}
        description={HOME_SEO.description}
        path="/"
        keywords={HOME_SEO.keywords}
        schema={homeSchemas}
      />
      <SiteHeader />

      <main>
        <section className="hero-section">
          <picture>
            <source
              srcSet="/images/tecnovin-vista-aerea-planta-industrial-bento-goncalves.webp"
              type="image/webp"
            />
            <img
              className="hero-image"
              src="/images/tecnovin-vista-aerea-planta-industrial-bento-goncalves.jpg"
              alt="Vista aérea da planta industrial da Tecnovin do Brasil no Vale dos Vinhedos, em Bento Gonçalves, Rio Grande do Sul"
              width={1376}
              height={768}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className="hero-overlay" />
          <div className="hero-grain" />
          <div className="container hero-content">
            <Reveal delay={0.05} yOffset={16}>
              <div className="hero-eyebrow">
                <span /> Tecnovin do Brasil · Vale dos Vinhedos
              </div>
            </Reveal>
            <Reveal delay={0.16} yOffset={24}>
              <h1>
                A origem é<br />
                <em>natural.</em>
                <br />O padrão é nosso.
              </h1>
            </Reveal>
            <Reveal delay={0.28} yOffset={20}>
              <p className="hero-description">
                Concentrados de frutas para quem transforma matéria-prima em
                produtos que chegam mais longe.
              </p>
            </Reveal>
            <Reveal delay={0.4} yOffset={18}>
              <div className="hero-actions">
                <a className="button button--light" href="#solucoes">
                  Conheça nossas soluções <ArrowUpRight size={16} />
                </a>
                <button
                  className="text-link text-link--light"
                  type="button"
                  onClick={scrollToContact}
                >
                  Converse com nosso time <MoveRight size={17} />
                </button>
              </div>
            </Reveal>
          </div>
          <a
            href="#origem"
            className="hero-scroll"
            aria-label="Rolar para conhecer a Tecnovin"
          >
            <ArrowDown size={17} />
            <span>deslize para explorar</span>
          </a>
          <div className="hero-side-note">
            Bento Gonçalves
            <br />
            Rio Grande do Sul · Brasil
          </div>
        </section>

        {/* RF-01 — Atalhos de acesso rápido */}
        <nav
          className="quick-nav-section"
          aria-label="Atalhos de acesso rápido"
        >
          <ul className="quick-nav">
            <li>
              <a className="quick-nav__item" href="#solucoes">
                <span className="quick-nav__icon" aria-hidden="true">
                  <Package2 size={18} strokeWidth={1.8} />
                </span>
                <span className="quick-nav__text">
                  <span className="quick-nav__label">Conhecer produtos</span>
                  <span className="quick-nav__hint">Portfólio B2B</span>
                </span>
              </a>
            </li>
            <li>
              <span
                className="quick-nav__item quick-nav__item--disabled"
                aria-disabled="true"
                title="O PDF de portfólio está em preparação"
              >
                <span className="quick-nav__icon" aria-hidden="true">
                  <FileDown size={18} strokeWidth={1.8} />
                </span>
                <span className="quick-nav__text">
                  <span className="quick-nav__label">Baixar portfólio</span>
                  <span className="quick-nav__badge">Em breve</span>
                </span>
              </span>
            </li>
            <li>
              <a className="quick-nav__item" href="#contato">
                <span className="quick-nav__icon" aria-hidden="true">
                  <Mail size={18} strokeWidth={1.8} />
                </span>
                <span className="quick-nav__text">
                  <span className="quick-nav__label">Falar com vendas</span>
                  <span className="quick-nav__hint">Contato direto</span>
                </span>
              </a>
            </li>
            <li>
              <a className="quick-nav__item" href="#origem">
                <span className="quick-nav__icon" aria-hidden="true">
                  <Leaf size={18} strokeWidth={1.8} />
                </span>
                <span className="quick-nav__text">
                  <span className="quick-nav__label">Conhecer a empresa</span>
                  <span className="quick-nav__hint">Origem &amp; história</span>
                </span>
              </a>
            </li>
            <li>
              <a className="quick-nav__item" href="#qualidade">
                <span className="quick-nav__icon" aria-hidden="true">
                  <ShieldCheck size={18} strokeWidth={1.8} />
                </span>
                <span className="quick-nav__text">
                  <span className="quick-nav__label">
                    Qualidade &amp; documentos
                  </span>
                  <span className="quick-nav__hint">
                    Documentos institucionais
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </nav>

        <section className="intro-section" id="origem">
          <div className="container">
            <div className="intro-grid">
              <Reveal delay={0.05}>
                <p className="kicker">Uma indústria com lugar de origem</p>
                <h2 className="display-heading">
                  O que vem da terra
                  <br />
                  <em>pode ir muito além.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.2} className="intro-copy">
                <p>
                  É no Vale dos Vinhedos, em Bento Gonçalves, que a Tecnovin
                  transforma frutas em ingredientes para a indústria de
                  alimentos e bebidas.
                </p>
                <p>
                  Nosso trabalho começa na origem e continua em cada decisão de
                  processo, especificação e parceria — para que o resultado
                  preserve o melhor do natural com a precisão que o mercado
                  exige.
                </p>
                <a className="text-link" href="#qualidade">
                  Nossa forma de fazer <MoveRight size={17} />
                </a>
              </Reveal>
            </div>
            <StaggerContainer
              className="positioning-messages"
              staggerDelay={0.14}
              delayChildren={0.1}
            >
              <StaggerItem className="positioning-message">
                <Package2 size={19} strokeWidth={1.8} aria-hidden="true" />
                <p>
                  Concentrados para bebidas, alimentos e formulações
                  industriais.
                </p>
              </StaggerItem>
              <StaggerItem className="positioning-message">
                <FlaskConical size={19} strokeWidth={1.8} aria-hidden="true" />
                <p>Consistência de sabor, cor e especificação.</p>
              </StaggerItem>
              <StaggerItem className="positioning-message">
                <Handshake size={19} strokeWidth={1.8} aria-hidden="true" />
                <p>
                  Atendimento para desenvolvimento de produto e fornecimento
                  recorrente.
                </p>
              </StaggerItem>
              <StaggerItem className="positioning-message">
                <MapPin size={19} strokeWidth={1.8} aria-hidden="true" />
                <p>
                  Ingredientes produzidos no Vale dos Vinhedos para aplicações
                  industriais.
                </p>
              </StaggerItem>
            </StaggerContainer>
            <StaggerContainer
              className="intro-stats"
              staggerDelay={0.14}
              delayChildren={0.12}
            >
              <StaggerItem>
                <span className="stat-value">06</span>
                <span className="stat-label">
                  famílias de concentrados
                  <br />
                  apresentadas no portfólio público
                </span>
              </StaggerItem>
              <StaggerItem>
                <span className="stat-value">RS</span>
                <span className="stat-label">
                  uma origem que conecta
                  <br />
                  território e indústria
                </span>
              </StaggerItem>
              <StaggerItem>
                <span className="stat-value">B2B</span>
                <span className="stat-label">
                  ingredientes desenvolvidos
                  <br />
                  para outras marcas
                </span>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        <section className="image-story-section">
          <div className="container image-story-grid">
            <div className="image-story-media group">
              <ScaleRevealImage delay={0.08}>
                <picture>
                  <source
                    srcSet="/images/tecnovin-processo-industrial-tanques-inox.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/tecnovin-processo-industrial-tanques-inox.jpg"
                    alt="Tanques evaporadores e tubulações de aço inoxidável sanitário em planta de processamento de sucos concentrados da Tecnovin"
                    loading="lazy"
                    decoding="async"
                    width={960}
                    height={1200}
                  />
                </picture>
              </ScaleRevealImage>
              <span className="image-caption">
                Precisão industrial, sem perder a origem de vista.
              </span>
            </div>
            <div className="image-story-copy">
              <Reveal delay={0.1}>
                <p className="kicker">O natural como ponto de partida</p>
                <h2 className="display-heading display-heading--small">
                  Ingrediente bom é aquele que <em>abre possibilidades.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.22}>
                <p style={{ marginTop: "2rem" }}>
                  Do suco concentrado de uva ao concentrado congelado de
                  laranja, cada linha do portfólio atende uma necessidade
                  específica de desenvolvimento, escala e consistência.
                </p>
              </Reveal>
              <StaggerContainer
                className="micro-list"
                staggerDelay={0.14}
                delayChildren={0.15}
              >
                <StaggerItem>
                  <span>01</span>
                  <b>Origem</b>
                  <p>
                    Um território reconhecido pela força da vitivinicultura e
                    pela diversidade de frutas.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <span>02</span>
                  <b>Processo</b>
                  <p>
                    Uma operação industrial pensada para transformar sabor em
                    especificação.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <span>03</span>
                  <b>Parceria</b>
                  <p>
                    Um time que entende que cada aplicação começa com uma boa
                    conversa.
                  </p>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </section>

        <section className="products-section" id="solucoes">
          <div className="container">
            <div className="section-heading-row">
              <Reveal delay={0.05}>
                <p className="kicker kicker--light">Portfólio para criar</p>
                <h2 className="display-heading display-heading--light">
                  A fruta em sua
                  <br />
                  <em>forma mais versátil.</em>
                </h2>
              </Reveal>
              <Reveal
                delay={0.2}
                className="flex flex-col items-end gap-4 max-sm:items-start"
              >
                <p className="section-heading-aside">
                  Soluções para diferentes perfis de produto, sempre com a
                  natureza como referência e a indústria como destino.
                </p>
                <Link href="/produtos" className="text-link text-link--light">
                  Ver portfólio completo <MoveRight size={17} />
                </Link>
              </Reveal>
            </div>
            <StaggerContainer
              className="product-grid"
              staggerDelay={0.14}
              delayChildren={0.1}
            >
              {products.map((product, index) => (
                <StaggerItem key={product.code}>
                  <article
                    className={`product-card product-card--${product.tone}`}
                  >
                    <div className="product-card-media">
                      <picture>
                        <source
                          srcSet={product.image.replace(
                            /\.(jpe?g|png)$/i,
                            ".webp"
                          )}
                          type="image/webp"
                        />
                        <img
                          src={product.image}
                          alt={product.imageAlt}
                          className="product-card-media__img"
                          loading="lazy"
                          decoding="async"
                          width={600}
                          height={360}
                        />
                      </picture>
                      <div className="product-card-media__overlay" />
                      <div className="product-number">0{index + 1}</div>
                      <span className="product-card-media__code">
                        {product.code}
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <span className="card-type-badge card-type-badge--product">
                        <Package2
                          size={13}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        Ingrediente · {product.code}
                      </span>
                      <h3>{product.fruit}</h3>
                      <p>{product.description}</p>
                      <Link
                        href={`/produtos/${product.slug}`}
                        aria-label={`Ver ficha técnica do concentrado de ${product.fruit}`}
                      >
                        Ver ficha técnica <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* RF-08 — Tabela comparativa técnica de concentrados (GEO / AI Search) */}
            <Reveal delay={0.15} className="portfolio-table-wrap">
              <div className="portfolio-table-header">
                <div>
                  <span className="kicker kicker--light">
                    Comparativo técnico B2B
                  </span>
                  <h3 id="tabela-comparativa-title">
                    Especificações de referência por família de concentrado
                  </h3>
                </div>
                <p>
                  Parâmetros físico-químicos e condições logísticas de
                  referência para formulação industrial.
                </p>
              </div>
              <div className="portfolio-table-scroll">
                <table
                  className="portfolio-comparison-table"
                  aria-labelledby="tabela-comparativa-title"
                >
                  <thead>
                    <tr>
                      <th scope="col" className="portfolio-table-th-product">
                        Ingrediente
                      </th>
                      <th scope="col" className="portfolio-table-th-code">
                        Sigla
                      </th>
                      <th scope="col" className="portfolio-table-th-brix">
                        Graus Brix
                      </th>
                      <th scope="col" className="portfolio-table-th-acidity">
                        Acidez / Parâmetro Chave
                      </th>
                      <th scope="col" className="portfolio-table-th-storage">
                        Armazenamento
                      </th>
                      <th scope="col" className="portfolio-table-th-package">
                        Embalagem Padrão
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolioSpecs.map(spec => (
                      <tr key={spec.code}>
                        <td
                          className="portfolio-table-col-product"
                          data-label="Ingrediente"
                        >
                          <Link
                            href={`/produtos/${spec.slug}`}
                            className="portfolio-table-product-link"
                          >
                            <span>{spec.name}</span>
                            <ArrowUpRight size={14} aria-hidden="true" />
                          </Link>
                        </td>
                        <td
                          className="portfolio-table-col-code"
                          data-label="Sigla"
                        >
                          <span className="portfolio-table-code">
                            {spec.code}
                          </span>
                        </td>
                        <td
                          className="portfolio-table-brix"
                          data-label="Graus Brix"
                        >
                          {spec.brix}
                        </td>
                        <td
                          className="portfolio-table-col-acidity"
                          data-label="Acidez / Parâmetro"
                        >
                          <div className="portfolio-table-cell-stack">
                            <span className="portfolio-table-primary">
                              {spec.acidityPrimary}
                            </span>
                            <span className="portfolio-table-sub">
                              {spec.aciditySub}
                            </span>
                          </div>
                        </td>
                        <td
                          className="portfolio-table-col-storage"
                          data-label="Armazenamento"
                        >
                          <div className="portfolio-table-cell-stack">
                            <span className="portfolio-table-primary">
                              {spec.storagePrimary}
                            </span>
                            <span className="portfolio-table-sub">
                              {spec.storageSub}
                            </span>
                          </div>
                        </td>
                        <td
                          className="portfolio-table-col-package"
                          data-label="Embalagem Padrão"
                        >
                          <div className="portfolio-table-cell-stack">
                            <span className="portfolio-table-primary">
                              {spec.packagePrimary}
                            </span>
                            <span className="portfolio-table-sub">
                              {spec.packageSub}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="quality-section" id="qualidade">
          <div className="container">
            <div className="quality-topline">
              <span className="kicker">Uma maneira de fazer</span>
              <AnimatedLine delay={0.15} className="flex-1" />
            </div>
            <div className="quality-grid">
              <Reveal delay={0.08}>
                <h2 className="display-heading">
                  Quando a origem é forte,
                  <br />
                  <em>a confiança também.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.22} className="quality-copy">
                <p>
                  Qualidade não é uma etapa isolada. É a soma de origem,
                  processo, cuidado e clareza — da primeira conversa à entrega
                  do ingrediente.
                </p>
                <a className="text-link" href="#contato">
                  Falar sobre qualidade <MoveRight size={17} />
                </a>
              </Reveal>
            </div>
            <StaggerContainer
              className="quality-pillars"
              staggerDelay={0.14}
              delayChildren={0.1}
            >
              <StaggerItem className="pillar">
                <span className="pillar-icon">
                  <Leaf size={21} />
                </span>
                <div>
                  <h3>Naturalidade</h3>
                  <p>
                    Ingredientes que respeitam a identidade da fruta e a
                    intenção de cada produto.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem className="pillar">
                <span className="pillar-icon">
                  <Factory size={21} />
                </span>
                <div>
                  <h3>Capacidade</h3>
                  <p>
                    Uma operação industrial localizada em uma das regiões mais
                    emblemáticas do sul do Brasil.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem className="pillar">
                <span className="pillar-icon">
                  <ShieldCheck size={21} />
                </span>
                <div>
                  <h3>Confiabilidade</h3>
                  <p>
                    Informação clara, escuta atenta e compromisso com relações
                    duradouras.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
            <Reveal delay={0.12}>
              <div
                className="safety-policy-card"
                aria-labelledby="politica-seguranca-title"
              >
                <div className="safety-policy-heading">
                  <div>
                    <span className="card-type-badge card-type-badge--doc">
                      <ShieldCheck
                        size={14}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      Documento institucional · Política
                    </span>
                    <h3 id="politica-seguranca-title">
                      Política de
                      <br />
                      <em>Segurança</em>
                    </h3>
                  </div>
                  <div className="safety-policy-meta">
                    <span>PT / EN</span>
                    <span>Jun / 2009</span>
                    <span>Revisão 00</span>
                  </div>
                </div>
                <div className="safety-policy-content">
                  <div className="safety-policy-language">
                    <span className="safety-policy-mark">PT</span>
                    <div>
                      <p>
                        Garantir a integridade do patrimônio e das pessoas, bem
                        como dos materiais e produtos, proporcionando a
                        segurança necessária ao desenvolvimento de todas as
                        atividades da empresa.
                      </p>
                      <small>Diretor Presidente</small>
                    </div>
                  </div>
                  <div className="safety-policy-language safety-policy-language--en">
                    <span className="safety-policy-mark">EN</span>
                    <div>
                      <p>
                        Guarantee the patrimony and people integrity, as well as
                        of the materials and products, providing the necessary
                        safety to development of all company activities.
                      </p>
                      <small>President Director</small>
                    </div>
                  </div>
                </div>
                <div className="safety-policy-footer">
                  <span>
                    <ShieldCheck size={16} /> Compromisso com pessoas,
                    patrimônio e produto
                  </span>
                  <a href="mailto:tecnovin@tecnovin.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20Documento%20-%20Pol%C3%ADtica%20de%20Seguran%C3%A7a">
                    Solicitar via oficial <Mail size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div
                className="supplier-code-card"
                id="conduta-fornecedor"
                aria-labelledby="conduta-fornecedor-title"
              >
                <div className="supplier-code-heading">
                  <div>
                    <span
                      className="card-type-badge card-type-badge--doc"
                      style={{ color: "#d8b18c" }}
                    >
                      <FileDown size={14} strokeWidth={2} aria-hidden="true" />
                      Documento institucional · Código de conduta
                    </span>
                    <h3 id="conduta-fornecedor-title">
                      Princípios de conduta
                      <br />
                      <em>para fornecedor.</em>
                    </h3>
                  </div>
                  <span className="supplier-code-index">PT · 01 / 10</span>
                </div>
                <div className="supplier-code-intro">
                  <p>
                    A Tecnovin respeita a privacidade dos seus fornecedores e
                    espera que todos respeitem e cumpram os direitos humanos e a
                    legislação. A empresa espera que seus fornecedores cumpram
                    com os padrões abaixo descritos na execução de suas
                    atividades.
                  </p>
                  <span className="supplier-code-rule" />
                </div>
                <StaggerContainer
                  className="supplier-principles"
                  staggerDelay={0.08}
                  delayChildren={0.1}
                >
                  <StaggerItem>
                    <span>01</span>
                    <h4>Legislação e regulamentação</h4>
                    <p>
                      O fornecedor estará em conformidade com a legislação,
                      requisitos de fabricação, distribuição e prestação de
                      serviços.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <span>02</span>
                    <h4>Trabalho infantil</h4>
                    <p>
                      O fornecedor deverá cumprir a legislação aplicável em
                      relação ao trabalho infantil.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <span>03</span>
                    <h4>Trabalho forçado</h4>
                    <p>
                      O fornecedor se compromete em não utilizar trabalho
                      forçado, escravo ou compulsório, bem como se compromete em
                      não cometer abusos físicos aos funcionários.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <span>04</span>
                    <h4>Liberdade de associação</h4>
                    <p>
                      O fornecedor respeitará a liberdade de associação sindical
                      dos funcionários.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <span>05</span>
                    <h4>Discriminação</h4>
                    <p>
                      O fornecedor deverá estar em conformidade com a legislação
                      e repudiar toda e qualquer forma de discriminação e
                      preconceito.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <span>06</span>
                    <h4>Salários</h4>
                    <p>
                      O fornecedor deverá estar em conformidade com a legislação
                      e convenções coletivas.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <span>07</span>
                    <h4>Saúde e segurança</h4>
                    <p>
                      O fornecedor deverá estar em conformidade com a
                      legislação, garantindo condições seguras de segurança e
                      saúde.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <span>08</span>
                    <h4>Meio ambiente</h4>
                    <p>
                      O fornecedor deverá estar em conformidade com a legislação
                      ambiental, assegurando a preservação do meio ambiente.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <span>09</span>
                    <h4>Integridade do negócio</h4>
                    <p>
                      O fornecedor estará em conformidade com a legislação e
                      promoverá as negociações de forma clara, ética e
                      transparente.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <span>10</span>
                    <h4>Conformidade</h4>
                    <p>
                      O fornecedor promoverá e demonstrará o atendimento aos
                      princípios de conduta de fornecedor Tecnovin, sempre que
                      solicitado.
                    </p>
                  </StaggerItem>
                </StaggerContainer>
                <div className="supplier-code-closing">
                  <ShieldCheck size={21} />
                  <p>
                    A empresa se reserva o direito de verificar e avaliar o
                    cumprimento do Código de Conduta de Fornecedor. As
                    avaliações se darão por meio de visitas e entrevistas.
                    Quando não atendidos os requisitos, serão sugeridas medidas
                    de correção.
                  </p>
                </div>
                <div className="safety-policy-footer">
                  <span>
                    <Leaf size={16} /> Ética, transparência e respeito em toda a
                    cadeia
                  </span>
                  <a href="mailto:ouvidoria@tecnovin.com.br?subject=C%C3%B3digo%20de%20Conduta%20para%20Fornecedor">
                    Canal de conformidade <Mail size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="territory-section">
          <div className="container territory-grid">
            <Reveal delay={0.08} className="territory-copy">
              <p className="kicker">Um ponto no mapa. Muitas possibilidades.</p>
              <h2 className="display-heading display-heading--light">
                Feito no Vale.
                <br />
                <em>Pronto para o mundo.</em>
              </h2>
              <p>
                Em uma região moldada por vales, vinhedos e vocação para
                alimentos e bebidas, a Tecnovin conecta conhecimento local à
                demanda de mercados cada vez mais exigentes.
              </p>
              <div className="territory-legend">
                <span>
                  <MapPin size={16} /> Bento Gonçalves, RS
                </span>
                <span>
                  <Globe2 size={16} /> Brasil
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.22} className="territory-art">
              <div className="territory-ring territory-ring--one" />
              <div className="territory-ring territory-ring--two" />
              <div className="territory-point">
                <span />
                <small>Vale dos Vinhedos</small>
              </div>
              <div className="territory-label territory-label--top">origem</div>
              <div className="territory-label territory-label--bottom">
                indústria
              </div>
            </Reveal>
          </div>
        </section>

        <section
          className="recognition-section"
          aria-labelledby="reconhecimentos-title"
        >
          <div className="container">
            <div className="recognition-header">
              <Reveal delay={0.05}>
                <p className="kicker">Reconhecimento e presença setorial</p>
                <h2
                  id="reconhecimentos-title"
                  className="display-heading display-heading--small"
                >
                  Uma trajetória que
                  <br />
                  <em>deixa marca.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  Fatos públicos que ajudam a contar uma história de presença no
                  setor. Os registros abaixo são apresentados com suas
                  respectivas fontes e datas.
                </p>
              </Reveal>
            </div>
            <AnimatedLine delay={0.18} className="mt-8" />
            <StaggerContainer
              className="recognition-grid"
              staggerDelay={0.16}
              delayChildren={0.12}
            >
              <StaggerItem className="recognition-card recognition-card--award">
                <span className="recognition-year">2018</span>
                <div className="recognition-icon">
                  <Sparkles size={23} />
                </div>
                <div
                  className="recognition-type-wrap"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                    margin: "0.4rem 0",
                  }}
                >
                  <span className="card-type-badge card-type-badge--external">
                    <ExternalLink
                      size={11}
                      strokeWidth={2}
                      aria-hidden="true"
                    />{" "}
                    Fonte externa
                  </span>
                  <p className="recognition-type" style={{ margin: 0 }}>
                    Reconhecimento
                  </p>
                </div>
                <h3>Prêmio Exportação RS</h3>
                <p>
                  A Tecnovin do Brasil foi listada na categoria{" "}
                  <strong>Destaque Setorial — Bebidas</strong> da 46ª edição do
                  prêmio.
                </p>
                <a
                  href="https://www.jornaldocomercio.com/_conteudo/2018/05/economia/627896-premio-exportacao-rs-anuncia-empresas-destaque-no-mercado-gaucho-em-2018.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    Ver fonte original
                    <span className="card-source-name">Jornal do Comércio</span>
                  </span>
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              </StaggerItem>
              <StaggerItem className="recognition-card">
                <span className="recognition-year">2023</span>
                <div className="recognition-icon">
                  <Leaf size={23} />
                </div>
                <div
                  className="recognition-type-wrap"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                    margin: "0.4rem 0",
                  }}
                >
                  <span className="card-type-badge card-type-badge--external">
                    <ExternalLink
                      size={11}
                      strokeWidth={2}
                      aria-hidden="true"
                    />{" "}
                    Fonte externa
                  </span>
                  <p className="recognition-type" style={{ margin: 0 }}>
                    Presença no setor
                  </p>
                </div>
                <h3>Tecnovitis</h3>
                <p>
                  Tecnovin e Suvalan participaram como patrocinadoras na cota
                  Prata da 5ª feira de tecnologia para viticultura e
                  fruticultura.
                </p>
                <a
                  href="https://www.bentogoncalves.rs.gov.br/5a-tecnovitis-agroindustrias-do-municipio-participam-da-feira/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    Ver fonte original
                    <span className="card-source-name">
                      Prefeitura de Bento Gonçalves
                    </span>
                  </span>
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              </StaggerItem>
              <StaggerItem className="recognition-card recognition-card--archive">
                <span className="recognition-year">2000 — 2024</span>
                <div className="recognition-icon">
                  <Quote size={23} />
                </div>
                <p className="recognition-type">Memória e contexto</p>
                <h3>Uma história em movimento</h3>
                <p>
                  Reportagens e registros públicos ajudam a preservar os marcos
                  da empresa. Informações históricas devem sempre ser lidas no
                  contexto de sua data de publicação.
                </p>
                <Link href="/blog">
                  Visitar o arquivo editorial <ArrowUpRight size={15} />
                </Link>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        <section className="editorial-section" id="conteudos">
          <div className="container">
            <div className="section-heading-row section-heading-row--editorial">
              <Reveal delay={0.05}>
                <p className="kicker">Conteúdos Tecnovin</p>
                <h2 className="display-heading display-heading--small">
                  Ideias para ir
                  <br />
                  <em>mais longe.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.18}>
                <Link className="text-link" href="/blog">
                  Ver todos os conteúdos <MoveRight size={17} />
                </Link>
              </Reveal>
            </div>
            <StaggerContainer
              className="editorial-grid"
              staggerDelay={0.14}
              delayChildren={0.1}
            >
              {editorialCards.map((card, index) => (
                <StaggerItem key={card.title} className="h-full">
                  <article className="editorial-card">
                    <div
                      className="editorial-card-art"
                      style={{ "--accent": card.accent } as React.CSSProperties}
                    >
                      <picture>
                        <source
                          srcSet={card.image.replace(
                            /\.(jpe?g|png)$/i,
                            ".webp"
                          )}
                          type="image/webp"
                        />
                        <img
                          src={card.image}
                          alt={card.imageAlt}
                          className="editorial-card-art__img"
                          loading="lazy"
                          decoding="async"
                          width={640}
                          height={360}
                        />
                      </picture>
                      <div
                        className="editorial-card-art__overlay"
                        aria-hidden="true"
                      />
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <Sparkles size={18} />
                    </div>
                    <div className="editorial-card-content">
                      <div className="editorial-card-meta">
                        <span className="card-type-badge card-type-badge--content">
                          <Sparkles
                            size={12}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                          {card.category}
                        </span>
                        <span className="editorial-card-meta-time">
                          <Clock3
                            size={12}
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                          {card.readTime}
                        </span>
                      </div>
                      <h3>{card.title}</h3>
                      <p>{card.excerpt}</p>
                      <Link href={`/blog/${card.slug}`}>
                        Ler perspectiva <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* RF-08 — Seção de Perguntas Frequentes (FAQ) na Home com Schema FAQPage */}
        <section
          className="home-faq-section"
          id="faq"
          aria-labelledby="home-faq-title"
        >
          <div className="container produto-faq-inner">
            <Reveal delay={0.05} className="produto-faq-header">
              <p className="kicker">Perguntas frequentes B2B</p>
              <h2
                id="home-faq-title"
                className="display-heading display-heading--small"
              >
                Dúvidas sobre <em>fornecimento</em> e portfólio.
              </h2>
            </Reveal>
            <StaggerContainer
              className="faq-list"
              staggerDelay={0.1}
              delayChildren={0.1}
            >
              {HOME_FAQ.map(item => (
                <StaggerItem key={item.pergunta} role="listitem">
                  <HomeFaqItem
                    pergunta={item.pergunta}
                    resposta={item.resposta}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-glow" />
          <div className="container contact-grid">
            <Reveal delay={0.08}>
              <p className="kicker kicker--light">Vamos conversar?</p>
              <h2 className="display-heading display-heading--light">
                A próxima ideia
                <br />
                <em>começa aqui.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.22} className="contact-copy">
              <p>
                Conte um pouco sobre sua aplicação, seu desafio ou o próximo
                produto que você quer colocar no mundo. Nosso time responde pelo
                canal mais direto.
              </p>
              <div className="contact-actions">
                <a
                  className="button button--light"
                  href="mailto:tecnovin@tecnovin.com.br"
                >
                  tecnovin@tecnovin.com.br <Mail size={16} />
                </a>
                <button
                  className="text-link text-link--light"
                  type="button"
                  onClick={() =>
                    toast.success(
                      "Em breve, um canal de atendimento será integrado a esta experiência."
                    )
                  }
                >
                  Solicitar contato <MoveRight size={17} />
                </button>
              </div>
            </Reveal>
          </div>
          <div className="contact-stamp">
            <Quote size={18} />
            <span>
              Ingredientes
              <br />
              <em>que elevam</em>
              <br />o natural.
            </span>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
