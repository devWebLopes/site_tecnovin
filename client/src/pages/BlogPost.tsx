import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import {
  ArrowLeft,
  ArrowUpRight,
  Bell,
  Check,
  Clock3,
  ExternalLink,
  Share2,
} from "lucide-react";
import { toast } from "sonner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SeoHead from "@/components/SeoHead";
import BlogPostNav from "@/components/BlogPostNav";
import { Reveal, ScaleRevealImage } from "@/components/motion";
import {
  ARTIGOS_MAP,
  getArtigoNavigation,
  type ArtigoSection,
} from "@/lib/artigos";
import { SITE_URL } from "@/lib/seo";

function RenderSection({ section }: { section: ArtigoSection }) {
  switch (section.type) {
    case "paragraph":
      return <p className="blog-post-p">{section.content as string}</p>;

    case "heading":
      return <h2 className="blog-post-h2">{section.content as string}</h2>;

    case "quote":
      return (
        <blockquote className="blog-post-quote">
          <p>{section.content as string}</p>
        </blockquote>
      );

    case "callout":
      return (
        <div className="blog-post-callout" role="note">
          {section.label && (
            <span className="blog-post-callout__label">{section.label}</span>
          )}
          <p>{section.content as string}</p>
        </div>
      );

    case "list":
      return (
        <ul className="blog-post-list">
          {(section.content as string[]).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );

    default:
      return null;
  }
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const artigo = ARTIGOS_MAP[slug];
  const [email, setEmail] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  // 404 — slug inválido
  if (!artigo) {
    return (
      <>
        <title>Artigo não encontrado — Tecnovin</title>
        <SiteHeader />
        <main
          id="main-content"
          className="produto-notfound"
          aria-labelledby="artigo-notfound-title"
        >
          <div className="container">
            <p className="kicker">Erro 404</p>
            <h1 id="artigo-notfound-title" className="display-heading">
              Artigo não <em>encontrado</em>
            </h1>
            <p>O conteúdo que você procura não existe ou foi movido.</p>
            <Link
              href="/blog"
              className="button button--primary"
              style={{ marginTop: "2rem", display: "inline-flex" }}
            >
              Ver todos os conteúdos
            </Link>
          </div>
        </main>
        <SiteFooter />
      </>
    );
  }

  const { anterior, proximo } = getArtigoNavigation(slug);

  function subscribe(event: React.FormEvent) {
    event.preventDefault();
    if (!email.trim()) return;
    toast.success("Obrigado. A newsletter Tecnovin está sendo preparada.");
    setEmail("");
  }

  function handleShare() {
    if (navigator.share) {
      navigator
        .share({
          title: artigo.seo.title,
          text: artigo.excerpt,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copiado para a área de transferência!");
    }
  }

  // --- JSON-LD Schemas ---
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: artigo.title,
    description: artigo.excerpt,
    image: `${SITE_URL}${artigo.image}`,
    author: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Tecnovin do Brasil",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Tecnovin do Brasil Ltda.",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/apple-touch-icon.png`,
      },
    },
    datePublished: artigo.dateIso,
    dateModified: "2026-10-29",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${artigo.slug}`,
    },
    url: `${SITE_URL}/blog/${artigo.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Conteúdos",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: artigo.title,
        item: `${SITE_URL}/blog/${artigo.slug}`,
      },
    ],
  };

  const schemas = [articleSchema, breadcrumbSchema];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1c1917]">
      <SeoHead
        title={artigo.seo.title}
        description={artigo.seo.description}
        path={`/blog/${artigo.slug}`}
        type="article"
        image={artigo.image}
        imageAlt={artigo.imageAlt}
        keywords={artigo.seo.keywords}
        schema={schemas}
      />

      <SiteHeader />

      <main id="main-content">
        {/* Article Hero */}
        <header className="blog-post-hero">
          <div className="container blog-post-hero__inner">
            <Reveal delay={0.04} yOffset={14}>
              <nav className="blog-breadcrumb" aria-label="Trilha de navegação">
                <Link href="/">
                  <ArrowLeft size={15} /> Início
                </Link>
                <span>/</span>
                <Link href="/blog">Conteúdos</Link>
                <span>/</span>
                <span>{artigo.category}</span>
              </nav>
            </Reveal>

            <Reveal delay={0.12} yOffset={18}>
              <div className="blog-post-hero__meta">
                <span className="blog-post-category-tag">
                  {artigo.category}
                </span>
                <span className="blog-post-date-tag">{artigo.date}</span>
                <span className="blog-post-read-tag">
                  <Clock3 size={14} /> {artigo.read} de leitura
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2} yOffset={22}>
              <h1 className="blog-post-hero__title">{artigo.title}</h1>
            </Reveal>

            <Reveal delay={0.3} yOffset={18}>
              <p className="blog-post-hero__excerpt">{artigo.excerpt}</p>
            </Reveal>
          </div>
        </header>

        {/* Article Main Body */}
        <article className="blog-post-content-wrap">
          <div className="container blog-post-container">
            <figure className="blog-post-cover">
              <ScaleRevealImage delay={0.1}>
                <picture>
                  <source
                    srcSet={artigo.image.replace(/\.(jpe?g|png)$/i, ".webp")}
                    type="image/webp"
                  />
                  <img
                    src={artigo.image}
                    alt={artigo.imageAlt}
                    className="blog-post-cover__img"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width={1280}
                    height={720}
                  />
                </picture>
              </ScaleRevealImage>
            </figure>
            <Reveal delay={0.18} yOffset={20} className="blog-post-body">
              {artigo.body.map((sec, idx) => (
                <RenderSection key={idx} section={sec} />
              ))}

              {/* Source attribution box for memory/press articles */}
              {artigo.source && (
                <div className="blog-post-source-box">
                  <div className="blog-post-source-box__icon">
                    <ExternalLink size={20} />
                  </div>
                  <div className="blog-post-source-box__content">
                    <h4>Fonte e referência pública original</h4>
                    <p>
                      Para conferir a publicação integral da época e os canais
                      de divulgação primários, acesse o link documental abaixo:
                    </p>
                    <a
                      href={artigo.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-post-source-link"
                    >
                      Consultar publicação original <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              )}

              {/* Special CTA for portfolio guide */}
              {artigo.slug === "mapa-de-possibilidades-uva-maca-laranja" && (
                <div className="blog-post-portfolio-cta">
                  <h3>Explore as fichas técnicas completas</h3>
                  <p>
                    Conheça detalhes sobre Brix, acidez, variedades e laudos dos
                    nossos sucos e concentrados.
                  </p>
                  <Link href="/produtos" className="button button--primary">
                    Ver catálogo de produtos
                  </Link>
                </div>
              )}

              {/* Post actions / share */}
              <div className="blog-post-actions">
                <button
                  type="button"
                  className="blog-post-share-btn"
                  onClick={handleShare}
                >
                  <Share2 size={16} /> Compartilhar artigo
                </button>
              </div>
            </Reveal>
          </div>
        </article>

        {/* Prev / Next navigation */}
        <BlogPostNav anterior={anterior} proximo={proximo} />

        {/* Newsletter Section */}
        <section className="newsletter-section" id="newsletter">
          <div className="container newsletter-grid">
            <Reveal delay={0.05} className="newsletter-symbol">
              <Bell size={22} />
              <span>
                insights
                <br />
                <em>na sua caixa</em>
              </span>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="kicker">Receba os próximos conteúdos</p>
              <h2 className="display-heading display-heading--small">
                Uma boa ideia
                <br />
                <em>merece circular.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.26}>
              <form className="newsletter-form" onSubmit={subscribe}>
                <label htmlFor="email">Seu melhor e-mail</label>
                <div className="newsletter-input-wrap">
                  <input
                    id="email"
                    type="email"
                    placeholder="nome@empresa.com"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                  />
                  <button type="submit" aria-label="Assinar newsletter">
                    <ArrowUpRight size={17} />
                  </button>
                </div>
                <small>
                  <Check size={13} /> Sem excesso. Só o que vale a leitura.
                </small>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
