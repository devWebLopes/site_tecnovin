/**
 * Produtos.tsx — Página de listagem /produtos
 * Grid com todos os concentrados do portfólio Tecnovin
 */

import { Link } from "wouter";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import JsonLd from "@/components/JsonLd";
import { PRODUTOS } from "@/lib/produtos";

const PAGE_TITLE = "Portfólio de Concentrados — Tecnovin do Brasil";
const PAGE_DESCRIPTION =
  "Concentrados de suco de uva, maçã, laranja, limão, acerola e abacaxi para a indústria de alimentos e bebidas. Fornecedor B2B no Vale dos Vinhedos, RS.";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://tecnovin.com.br/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Produtos",
      item: "https://tecnovin.com.br/produtos",
    },
  ],
};

export default function Produtos() {
  return (
    <>
      {/* SEO */}
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESCRIPTION} />
      <link rel="canonical" href="https://tecnovin.com.br/produtos" />
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={PAGE_DESCRIPTION} />
      <meta property="og:type" content="website" />
      <JsonLd data={breadcrumbSchema} />

      <SiteHeader />

      {/* Hero da listagem */}
      <section className="produtos-hero">
        <div className="container produtos-hero__content">
          <nav
            aria-label="Localização na página"
            className="produto-breadcrumb"
          >
            <ol className="produto-breadcrumb__list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Produtos</li>
            </ol>
          </nav>
          <p className="kicker kicker--light">Portfólio</p>
          <h1 className="display-heading display-heading--light">
            Concentrados <em>naturais</em>
            <br />
            para a indústria.
          </h1>
          <p className="produtos-hero__sub">
            Ingredientes desenvolvidos no Vale dos Vinhedos para aplicações B2B
            em alimentos, bebidas e cosméticos.
          </p>
        </div>
      </section>

      {/* Grid de produtos */}
      <main id="main-content" className="produtos-grid-section">
        <div className="container">
          <p className="kicker">Portfólio completo</p>
          <h2 className="display-heading display-heading--small">
            {PRODUTOS.length} produtos <em>disponíveis</em>
          </h2>
          <div
            className="produtos-grid"
            aria-label="Lista de produtos"
            role="list"
          >
            {PRODUTOS.map((produto, i) => (
              <div key={produto.slug} role="listitem">
                <ProductCard produto={produto} index={i} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* CTA de contato */}
      <section
        className="produtos-cta-section"
        aria-labelledby="produtos-cta-title"
      >
        <div className="container produtos-cta-inner">
          <div>
            <p className="kicker kicker--light">Pronto para o próximo passo?</p>
            <h2
              id="produtos-cta-title"
              className="display-heading display-heading--light display-heading--small"
            >
              Não encontrou o que <em>precisava?</em>
            </h2>
            <p>
              Nossa equipe está pronta para discutir especificações, volumes e
              possibilidades de fornecimento personalizadas.
            </p>
          </div>
          <a href="/#contato" className="button button--light">
            Fale com a Tecnovin
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
