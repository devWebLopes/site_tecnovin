/**
 * ProductCard.tsx — Card de produto para a listagem /produtos
 * Exibe imagem, nome, sigla, tagline e link para a página individual
 */

import { ArrowUpRight, AlertTriangle, Package2 } from "lucide-react";
import { Link } from "wouter";
import type { Produto } from "@/lib/produtos";

interface ProductCardProps {
  produto: Produto;
  index: number;
}

export default function ProductCard({ produto, index }: ProductCardProps) {
  return (
    <Link
      href={`/produtos/${produto.slug}`}
      className="product-card"
      aria-label={`Ver ficha técnica: ${produto.nomeComercial}`}
    >
      <div className="product-card__image-wrap">
        <picture>
          <source
            srcSet={produto.imagem.replace(/\.(jpe?g|png)$/i, ".webp")}
            type="image/webp"
          />
          <img
            src={produto.imagem}
            alt={produto.imagemAlt}
            className="product-card__image"
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
            width={600}
            height={338}
          />
        </picture>
        <div className="product-card__image-overlay" />
        {produto.sigla && (
          <span className="product-card__sigla">{produto.sigla}</span>
        )}
        {produto.historicoNaoConfirmado && (
          <span
            className="product-card__historico-badge"
            title="Registro histórico"
          >
            <AlertTriangle size={11} aria-hidden="true" />
            Histórico
          </span>
        )}
      </div>
      <div className="product-card__body">
        <span
          className="card-type-badge card-type-badge--product"
          style={{ marginBottom: "0.4rem" }}
        >
          <Package2 size={13} strokeWidth={2} aria-hidden="true" />
          Ingrediente · {produto.sigla || "B2B"}
        </span>
        <div className="product-card__header">
          <div>
            <p className="product-card__en">{produto.nomeComercialEn}</p>
            <h2 className="product-card__name">{produto.nomeComercial}</h2>
          </div>
          <span className="product-card__arrow" aria-hidden="true">
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </span>
        </div>
        <p className="product-card__tagline">{produto.tagline}</p>
        {produto.fichaTecnica?.brix && (
          <span className="product-card__brix">
            {produto.fichaTecnica.brix}
          </span>
        )}
        <div className="product-card__sectors">
          {produto.setoresDeUso.slice(0, 3).map(s => (
            <span key={s} className="product-card__sector-chip">
              {s}
            </span>
          ))}
        </div>
        <div className="product-card__footer">
          <span className="product-card__cta">
            Ver ficha técnica{" "}
            <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
