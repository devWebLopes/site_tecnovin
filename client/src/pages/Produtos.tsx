/**
 * Produtos.tsx — Página de listagem /produtos
 * Grid com todos os concentrados do portfólio Tecnovin
 */

import { Link } from "wouter";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import SeoHead from "@/components/SeoHead";
import { PRODUTOS } from "@/lib/produtos";
import { PRODUTOS_SEO, SITE_URL } from "@/lib/seo";

const produtosSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/produtos#webpage`,
      url: `${SITE_URL}/produtos`,
      name: PRODUTOS_SEO.title,
      description: PRODUTOS_SEO.description,
      inLanguage: "pt-BR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Produtos",
          item: `${SITE_URL}/produtos`,
        },
      ],
    },
  ],
};

export default function Produtos() {
  return (
    <>
      <SeoHead
        title={PRODUTOS_SEO.title}
        description={PRODUTOS_SEO.description}
        path="/produtos"
        schema={produtosSchema}
      />

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
