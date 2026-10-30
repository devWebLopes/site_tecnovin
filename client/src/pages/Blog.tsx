import {
  ArrowLeft,
  ArrowUpRight,
  Bell,
  Check,
  Clock3,
  Leaf,
  Search,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";
import SeoHead from "@/components/SeoHead";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion";

import { ARTIGOS } from "@/lib/artigos";
import { BLOG_SEO, SITE_URL } from "@/lib/seo";

const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/blog#webpage`,
      url: `${SITE_URL}/blog`,
      name: BLOG_SEO.title,
      description: BLOG_SEO.description,
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
          name: "Início",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Conteúdos",
          item: `${SITE_URL}/blog`,
        },
      ],
    },
  ],
};

const categories = [
  "Todos",
  "Memória & notícias",
  "Cadeia & origem",
  "Mercado & aplicações",
  "Perspectivas Tecnovin",
  "Portfólio",
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const qParam = params.get("q");
    if (qParam) {
      setQuery(qParam);
    }
  }, []);

  const normalizedQuery = query.trim().toLowerCase();
  const filteredPosts = ARTIGOS.filter(post => {
    const matchesCategory =
      activeCategory === "Todos" || post.category === activeCategory;
    const matchesQuery =
      normalizedQuery.length === 0 ||
      `${post.title} ${post.excerpt} ${post.category}`
        .toLowerCase()
        .includes(normalizedQuery);
    return matchesCategory && matchesQuery;
  });
  const isFiltering = activeCategory !== "Todos" || normalizedQuery.length > 0;

  function subscribe(event: React.FormEvent) {
    event.preventDefault();
    if (!email.trim()) return;
    toast.success("Obrigado. A newsletter Tecnovin está sendo preparada.");
    setEmail("");
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1c1917]">
      <SeoHead
        title={BLOG_SEO.title}
        description={BLOG_SEO.description}
        path="/blog"
        schema={blogSchema}
      />
      <SiteHeader />
      <main>
        <section className="blog-hero">
          <div className="container blog-hero-inner">
            <Reveal delay={0.04} yOffset={14}>
              <div className="blog-breadcrumb">
                <Link href="/">
                  <ArrowLeft size={15} /> Início
                </Link>
                <span>/</span>
                <span>Conteúdos</span>
              </div>
            </Reveal>
            <Reveal delay={0.12} yOffset={18}>
              <p className="kicker">Conteúdos Tecnovin</p>
              <h1>
                Ideias que começam
                <br />
                <em>na origem.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.25} yOffset={20}>
              <p style={{ marginTop: "2rem" }}>
                Notícias, perspectivas e conhecimento para quem trabalha com
                alimentos, bebidas e ingredientes que fazem diferença.
              </p>
            </Reveal>
          </div>
          <div className="blog-hero-orbit">
            <span />
            <div>
              <Leaf size={24} />
              <small>
                origem
                <br />& processo
              </small>
            </div>
          </div>
        </section>

        <section className="blog-content-section">
          <div className="container">
            <Reveal delay={0.1}>
              <div className="blog-toolbar">
                <div
                  className="category-tabs"
                  role="group"
                  aria-label="Filtrar conteúdos por categoria"
                >
                  {categories.map(category => (
                    <button
                      type="button"
                      key={category}
                      className={
                        activeCategory === category
                          ? "category-tab category-tab--active"
                          : "category-tab"
                      }
                      aria-pressed={activeCategory === category}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <div
                  className="search-form"
                  role="search"
                  aria-label="Buscar nos conteúdos"
                >
                  <div className="search-input-wrap">
                    <Search size={16} aria-hidden="true" />
                    <input
                      type="search"
                      placeholder="Buscar conteúdo..."
                      aria-label="Buscar por palavra-chave"
                      value={query}
                      onChange={event => setQuery(event.target.value)}
                    />
                    {query.length > 0 && (
                      <button
                        type="button"
                        className="search-clear"
                        aria-label="Limpar busca"
                        onClick={() => setQuery("")}
                      >
                        <X size={15} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
            {isFiltering && (
              <p className="blog-results-meta" role="status">
                {filteredPosts.length === 0
                  ? "Nenhum conteúdo encontrado"
                  : `${filteredPosts.length} ${filteredPosts.length === 1 ? "conteúdo encontrado" : "conteúdos encontrados"}`}
                {normalizedQuery.length > 0 && ` para “${query.trim()}”`}
                {activeCategory !== "Todos" && ` em ${activeCategory}`}
              </p>
            )}
            {filteredPosts.length === 0 ? (
              <div className="blog-empty">
                <strong>Nenhum conteúdo encontrado.</strong>
                Tente outra palavra-chave ou limpe os filtros para ver todos os
                conteúdos.
                <div>
                  <button
                    type="button"
                    className="button button--primary"
                    onClick={() => {
                      setQuery("");
                      setActiveCategory("Todos");
                    }}
                  >
                    Limpar filtros
                  </button>
                </div>
              </div>
            ) : (
              <StaggerContainer
                key={`${activeCategory}-${normalizedQuery}`}
                className="blog-grid"
                staggerDelay={0.14}
                delayChildren={0.1}
              >
                {filteredPosts.map(post => (
                  <StaggerItem
                    key={post.title}
                    className={
                      post.featured ? "col-span-2 max-[600px]:col-span-1" : ""
                    }
                  >
                    <article
                      className={`blog-card h-full ${post.featured ? "blog-card--featured" : ""}`}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className={`blog-card-visual blog-card-visual--${post.color}`}
                        aria-label={`Ler artigo: ${post.title}`}
                      >
                        <picture>
                          <source
                            srcSet={post.image.replace(
                              /\.(jpe?g|png)$/i,
                              ".webp"
                            )}
                            type="image/webp"
                          />
                          <img
                            src={post.image}
                            alt={post.imageAlt}
                            className="blog-card-visual-img"
                            loading={post.featured ? "eager" : "lazy"}
                            decoding="async"
                            width={1280}
                            height={720}
                          />
                        </picture>
                        <div
                          className="blog-card-visual-overlay"
                          aria-hidden="true"
                        />
                        <div className="blog-card-visual-grid" />
                        <span className="blog-card-fruit">
                          {post.category === "Portfólio" ? "06" : "T"}
                        </span>
                        <span className="blog-card-visual-label">
                          Tecnovin / {post.date}
                        </span>
                      </Link>
                      <div className="blog-card-body">
                        <div className="blog-card-meta">
                          <span>{post.category}</span>
                          <span>
                            <Clock3 size={13} /> {post.read}
                          </span>
                        </div>
                        <h2>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="blog-card-title-link"
                          >
                            {post.title}
                          </Link>
                        </h2>
                        <p>{post.excerpt}</p>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="blog-card-cta-link"
                        >
                          Continuar leitura <ArrowUpRight size={15} />
                        </Link>
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}
          </div>
        </section>

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
