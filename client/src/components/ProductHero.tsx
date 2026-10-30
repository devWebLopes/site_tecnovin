/**
 * ProductHero.tsx — Seção hero da página individual de produto
 * Exibe imagem de fundo, nome PT/EN, tagline e CTA de contato
 */

import { ArrowDown, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import { Reveal } from "@/components/motion";
import type { Produto } from "@/lib/produtos";

interface ProductHeroProps {
  produto: Produto;
}

export default function ProductHero({ produto }: ProductHeroProps) {
  return (
    <section className="produto-hero" aria-labelledby="produto-hero-title">
      <picture>
        <source
          srcSet={produto.imagem.replace(/\.(jpe?g|png)$/i, ".webp")}
          type="image/webp"
        />
        <img
          src={produto.imagem}
          alt={produto.imagemAlt}
          className="produto-hero__bg"
          fetchPriority="high"
          decoding="async"
          width={1400}
          height={787}
        />
      </picture>
      <div className="produto-hero__overlay" aria-hidden="true" />
      <div className="produto-hero__grain" aria-hidden="true" />

      <div className="container produto-hero__content">
        {/* Breadcrumb */}
        <Reveal delay={0.04} yOffset={14}>
          <nav
            className="produto-breadcrumb"
            aria-label="Localização na página"
          >
            <ol className="produto-breadcrumb__list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/produtos">Produtos</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{produto.nomeComercial}</li>
            </ol>
          </nav>
        </Reveal>

        <div className="produto-hero__body">
          {produto.sigla && (
            <Reveal delay={0.12} yOffset={16}>
              <div className="hero-eyebrow">
                <span aria-hidden="true" />
                {produto.sigla} · {produto.nomeComercialEn}
              </div>
            </Reveal>
          )}

          {produto.historicoNaoConfirmado && (
            <Reveal delay={0.16} yOffset={16}>
              <div className="produto-historico-aviso" role="alert">
                <AlertTriangle size={15} aria-hidden="true" />
                <span>Registro histórico — status atual não confirmado</span>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.2} yOffset={22}>
            <h1 id="produto-hero-title" className="produto-hero__title">
              {produto.nomeComercial}
            </h1>
          </Reveal>

          <Reveal delay={0.3} yOffset={18}>
            <p className="produto-hero__tagline">{produto.tagline}</p>
          </Reveal>

          <Reveal delay={0.38} yOffset={16}>
            <div className="produto-hero__actions">
              <a href="#contato-produto" className="button button--light">
                Solicitar Amostra
              </a>
              {produto.fichaTecnica && (
                <a href="#ficha-tecnica" className="text-link text-link--light">
                  Ver ficha técnica <ArrowDown size={16} />
                </a>
              )}
            </div>
          </Reveal>

          {produto.variedades && produto.variedades.length > 0 && (
            <Reveal delay={0.45} yOffset={14}>
              <div className="produto-hero__variedades">
                <span className="produto-hero__variedades-label">
                  Variedades:
                </span>
                {produto.variedades.map(v => (
                  <span key={v} className="produto-hero__variedade-chip">
                    {v}
                  </span>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
