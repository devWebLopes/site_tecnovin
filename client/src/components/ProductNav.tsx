/**
 * ProductNav.tsx — Navegação prev/next entre páginas de produto
 */

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import type { Produto } from "@/lib/produtos";

interface ProductNavProps {
  anterior: Produto | null;
  proximo: Produto | null;
}

export default function ProductNav({ anterior, proximo }: ProductNavProps) {
  if (!anterior && !proximo) return null;

  return (
    <nav className="product-nav" aria-label="Navegação entre produtos">
      <div className="container product-nav__inner">
        {anterior ? (
          <Link
            href={`/produtos/${anterior.slug}`}
            className="product-nav__link product-nav__link--prev"
          >
            <ArrowLeft size={18} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <span className="product-nav__direction">Produto anterior</span>
              <span className="product-nav__name">
                {anterior.nomeComercial}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        <Link href="/produtos" className="product-nav__all">
          Ver todos os produtos
        </Link>

        {proximo ? (
          <Link
            href={`/produtos/${proximo.slug}`}
            className="product-nav__link product-nav__link--next"
          >
            <div>
              <span className="product-nav__direction">Próximo produto</span>
              <span className="product-nav__name">{proximo.nomeComercial}</span>
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
