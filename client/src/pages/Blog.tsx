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
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

import { ARTIGOS } from "@/lib/artigos";

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
    <div className="min-h-screen bg-[#f7f4ef] text-[#251e1c]">
      <SiteHeader />
      <main>
        <section className="blog-hero">
          <div className="container blog-hero-inner">
            <div className="blog-breadcrumb">
              <Link href="/">
                <ArrowLeft size={15} /> Início
              </Link>
              <span>/</span>
              <span>Conteúdos</span>
            </div>
            <p className="kicker">Conteúdos Tecnovin</p>
            <h1>
              Ideias que começam
              <br />
              <em>na origem.</em>
            </h1>
            <p>
              Notícias, perspectivas e conhecimento para quem trabalha com
              alimentos, bebidas e ingredientes que fazem diferença.
            </p>
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
              <div className="blog-grid">
                {filteredPosts.map(post => (
                  <article
                    className={`blog-card ${post.featured ? "blog-card--featured" : ""}`}
                    key={post.title}
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
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="newsletter-section" id="newsletter">
          <div className="container newsletter-grid">
            <div className="newsletter-symbol">
              <Bell size={22} />
              <span>
                insights
                <br />
                <em>na sua caixa</em>
              </span>
            </div>
            <div>
              <p className="kicker">Receba os próximos conteúdos</p>
              <h2 className="display-heading display-heading--small">
                Uma boa ideia
                <br />
                <em>merece circular.</em>
              </h2>
            </div>
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
