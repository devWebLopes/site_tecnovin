/**
 * BlogPostNav.tsx — Navegação prev/next entre artigos do blog
 */

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import type { Artigo } from "@/lib/artigos";

interface BlogPostNavProps {
  anterior: Artigo | null;
  proximo: Artigo | null;
}

export default function BlogPostNav({ anterior, proximo }: BlogPostNavProps) {
  if (!anterior && !proximo) return null;

  return (
    <nav
      className="product-nav blog-post-nav"
      aria-label="Navegação entre artigos"
    >
      <div className="container product-nav__inner">
        {anterior ? (
          <Link
            href={`/blog/${anterior.slug}`}
            className="product-nav__link product-nav__link--prev"
          >
            <ArrowLeft size={18} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <span className="product-nav__direction">Artigo anterior</span>
              <span className="product-nav__name">{anterior.title}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        <Link href="/blog" className="product-nav__all">
          Todos os conteúdos
        </Link>

        {proximo ? (
          <Link
            href={`/blog/${proximo.slug}`}
            className="product-nav__link product-nav__link--next"
          >
            <div>
              <span className="product-nav__direction">Próximo artigo</span>
              <span className="product-nav__name">{proximo.title}</span>
            </div>
            <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
