/**
 * Produto.tsx — Página individual de produto · /produtos/:slug
 * Exibe hero, ficha técnica, FAQ e formulário de contato
 */

import { useParams, Link } from "wouter";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductHero from "@/components/ProductHero";
import FichaTecnica from "@/components/FichaTecnica";
import ProductNav from "@/components/ProductNav";
import ProductContactForm from "@/components/ProductContactForm";
import SeoHead from "@/components/SeoHead";
import { PRODUTOS_MAP, getProdutoNavigation } from "@/lib/produtos";
import { SITE_URL } from "@/lib/seo";
import { ChevronDown, Factory, Leaf, Sparkles } from "lucide-react";
import { useState } from "react";

function FaqItem({
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

export default function Produto() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const produto = PRODUTOS_MAP[slug];

  // 404 — slug inválido
  if (!produto) {
    return (
      <>
        <title>Produto não encontrado — Tecnovin</title>
        <SiteHeader />
        <main
          id="main-content"
          className="produto-notfound"
          aria-labelledby="produto-notfound-title"
        >
          <div className="container">
            <p className="kicker">Erro 404</p>
            <h1 id="produto-notfound-title" className="display-heading">
              Produto não <em>encontrado</em>
            </h1>
            <p>O produto que você procura não existe ou foi removido.</p>
            <Link
              href="/produtos"
              className="button button--primary"
              style={{ marginTop: "2rem", display: "inline-flex" }}
            >
              Ver todos os produtos
            </Link>
          </div>
        </main>
        <SiteFooter />
      </>
    );
  }

  const { anterior, proximo } = getProdutoNavigation(slug);

  // --- JSON-LD schemas ---
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: produto.nomeComercial,
    description: produto.descricao,
    image: `${SITE_URL}${produto.imagem}`,
    brand: {
      "@type": "Brand",
      name: "Tecnovin do Brasil",
    },
    manufacturer: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Tecnovin do Brasil Ltda.",
      url: `${SITE_URL}/`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bento Gonçalves",
        addressRegion: "RS",
        addressCountry: "BR",
      },
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BRL",
      seller: {
        "@type": "Organization",
        name: "Tecnovin do Brasil Ltda.",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
      {
        "@type": "ListItem",
        position: 3,
        name: produto.nomeComercial,
        item: `${SITE_URL}/produtos/${produto.slug}`,
      },
    ],
  };

  const faqSchema =
    produto.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: produto.faq.map(q => ({
            "@type": "Question",
            name: q.pergunta,
            acceptedAnswer: { "@type": "Answer", text: q.resposta },
          })),
        }
      : null;

  const schemas = [
    productSchema,
    breadcrumbSchema,
    ...(faqSchema ? [faqSchema] : []),
  ];

  return (
    <>
      <SeoHead
        title={produto.seo.title}
        description={produto.seo.description}
        path={`/produtos/${produto.slug}`}
        type="product"
        image={produto.imagem}
        imageAlt={produto.imagemAlt}
        keywords={produto.seo.keywords}
        schema={schemas}
      />

      <SiteHeader />

      <main id="main-content">
        {/* Hero */}
        <ProductHero produto={produto} />

        {/* Descrição completa */}
        <section
          className="produto-descricao-section"
          aria-labelledby="produto-descricao-title"
        >
          <div className="container produto-descricao-inner">
            <div>
              <p className="kicker">Sobre o produto</p>
              <h2
                id="produto-descricao-title"
                className="display-heading display-heading--small"
              >
                {produto.nomeComercial}
                <br />
                <em>{produto.nomeComercialEn}</em>
              </h2>
            </div>
            <div className="produto-descricao-copy">
              <p>{produto.descricao}</p>
              {produto.historicoNaoConfirmado && produto.historicoAviso && (
                <div className="produto-historico-card" role="note">
                  <p>{produto.historicoAviso}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Detalhes visuais (RF-06) — imagens dedicadas de matéria-prima,
            textura/cor e aplicação industrial */}
        <section
          className="produto-detalhes-section"
          aria-labelledby="produto-detalhes-title"
        >
          <div className="container">
            <p className="kicker">Detalhes do ingrediente</p>
            <h2
              id="produto-detalhes-title"
              className="display-heading display-heading--small"
            >
              Da fruta à <em>aplicação</em>
            </h2>
            <div className="produto-detalhes-grid">
              <figure className="produto-detalhe produto-detalhe--materia-prima">
                <picture>
                  <source
                    srcSet={produto.detalhesVisuais.materiaPrima.imagem.replace(
                      /\.(jpe?g|png)$/i,
                      ".webp"
                    )}
                    type="image/webp"
                  />
                  <img
                    src={produto.detalhesVisuais.materiaPrima.imagem}
                    alt={produto.detalhesVisuais.materiaPrima.alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                  />
                </picture>
                <figcaption>
                  <Leaf size={15} strokeWidth={1.8} aria-hidden="true" />
                  Matéria-prima
                </figcaption>
              </figure>
              <figure className="produto-detalhe produto-detalhe--textura">
                <picture>
                  <source
                    srcSet={produto.detalhesVisuais.textura.imagem.replace(
                      /\.(jpe?g|png)$/i,
                      ".webp"
                    )}
                    type="image/webp"
                  />
                  <img
                    src={produto.detalhesVisuais.textura.imagem}
                    alt={produto.detalhesVisuais.textura.alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                  />
                </picture>
                <figcaption>
                  <Sparkles size={15} strokeWidth={1.8} aria-hidden="true" />
                  Textura &amp; cor
                </figcaption>
              </figure>
              <figure className="produto-detalhe produto-detalhe--aplicacao">
                <picture>
                  <source
                    srcSet={produto.detalhesVisuais.aplicacao.imagem.replace(
                      /\.(jpe?g|png)$/i,
                      ".webp"
                    )}
                    type="image/webp"
                  />
                  <img
                    src={produto.detalhesVisuais.aplicacao.imagem}
                    alt={produto.detalhesVisuais.aplicacao.alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                  />
                </picture>
                <figcaption>
                  <Factory size={15} strokeWidth={1.8} aria-hidden="true" />
                  Aplicação industrial
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Ficha Técnica */}
        <FichaTecnica produto={produto} />

        {/* FAQ */}
        {produto.faq.length > 0 && (
          <section
            className="produto-faq-section"
            aria-labelledby="produto-faq-title"
          >
            <div className="container produto-faq-inner">
              <div className="produto-faq-header">
                <p className="kicker">Perguntas frequentes</p>
                <h2
                  id="produto-faq-title"
                  className="display-heading display-heading--small"
                >
                  Dúvidas sobre o <em>produto</em>
                </h2>
              </div>
              <div
                className="faq-list"
                role="list"
                aria-label={`Perguntas frequentes sobre ${produto.nomeComercial}`}
              >
                {produto.faq.map(q => (
                  <div key={q.pergunta} role="listitem">
                    <FaqItem pergunta={q.pergunta} resposta={q.resposta} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Formulário de contato */}
        <ProductContactForm produto={produto} />

        {/* Navegação prev/next */}
        <ProductNav anterior={anterior} proximo={proximo} />
      </main>

      <SiteFooter />
    </>
  );
}
