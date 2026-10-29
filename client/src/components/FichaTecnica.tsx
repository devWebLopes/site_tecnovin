/**
 * FichaTecnica.tsx — Tabela de especificações técnicas do produto
 * Exibe parâmetros físico-químicos e dados de embalagem/logística
 */

import {
  Package2,
  Thermometer,
  Clock,
  FlaskConical,
  Scale,
} from "lucide-react";
import type { Produto } from "@/lib/produtos";

interface FichaTecnicaProps {
  produto: Produto;
}

const PARAM_LABELS: Record<string, string> = {
  brix: "Brix",
  acidez: "Acidez",
  ph: "pH",
  ratio: "Ratio",
  cor: "Cor",
  polpa: "Polpa",
  transmitancia: "Transmitância",
  vitamC: "Vitamina C",
};

export default function FichaTecnica({ produto }: FichaTecnicaProps) {
  const { fichaTecnica, embalagem } = produto;
  const hasFicha =
    fichaTecnica &&
    Object.keys(fichaTecnica).some(
      k =>
        k !== "extras" &&
        fichaTecnica[k as keyof typeof fichaTecnica] !== undefined
    );
  const hasExtras =
    fichaTecnica?.extras && Object.keys(fichaTecnica.extras).length > 0;
  const hasEmbalagem = !!embalagem;

  if (!hasFicha && !hasExtras && !hasEmbalagem) return null;

  return (
    <section
      id="ficha-tecnica"
      className="ficha-tecnica-section"
      aria-labelledby="ficha-tecnica-title"
    >
      <div className="container">
        <p className="kicker">Especificações</p>
        <h2
          id="ficha-tecnica-title"
          className="display-heading display-heading--small"
        >
          Ficha <em>Técnica</em>
        </h2>

        <div className="ficha-tecnica-grid">
          {/* Parâmetros físico-químicos */}
          {(hasFicha || hasExtras) && (
            <div
              className="ficha-card ficha-card--params"
              aria-label="Parâmetros físico-químicos"
            >
              <div className="ficha-card__header">
                <FlaskConical size={18} aria-hidden="true" />
                <h3>Parâmetros Físico-Químicos</h3>
              </div>
              <dl className="ficha-params">
                {fichaTecnica &&
                  Object.entries(fichaTecnica)
                    .filter(([k, v]) => k !== "extras" && v !== undefined)
                    .map(([key, value]) => (
                      <div key={key} className="ficha-param">
                        <dt>{PARAM_LABELS[key] ?? key}</dt>
                        <dd>{value as string}</dd>
                      </div>
                    ))}
                {hasExtras &&
                  Object.entries(fichaTecnica!.extras!).map(([key, value]) => (
                    <div key={key} className="ficha-param">
                      <dt>{key}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
              </dl>
            </div>
          )}

          {/* Embalagem & Logística */}
          {hasEmbalagem && (
            <div
              className="ficha-card ficha-card--embalagem"
              aria-label="Embalagem e logística"
            >
              <div className="ficha-card__header">
                <Package2 size={18} aria-hidden="true" />
                <h3>Embalagem &amp; Logística</h3>
              </div>
              <div className="ficha-embalagem">
                <div className="ficha-embalagem__item">
                  <span className="ficha-embalagem__icon">
                    <Package2 size={16} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="ficha-embalagem__label">Tipo de embalagem</p>
                    <p className="ficha-embalagem__value">{embalagem.tipo}</p>
                    {embalagem.revestimentoInterno && (
                      <p className="ficha-embalagem__sub">
                        + {embalagem.revestimentoInterno}
                      </p>
                    )}
                  </div>
                </div>
                {embalagem.pesoLiquido && (
                  <div className="ficha-embalagem__item">
                    <span className="ficha-embalagem__icon">
                      <Scale size={16} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="ficha-embalagem__label">Peso líquido</p>
                      <p className="ficha-embalagem__value">
                        {embalagem.pesoLiquido}
                      </p>
                    </div>
                  </div>
                )}
                {embalagem.tamanhoDeLote && (
                  <div className="ficha-embalagem__item">
                    <span className="ficha-embalagem__icon">
                      <Package2 size={16} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="ficha-embalagem__label">Tamanho de lote</p>
                      <p className="ficha-embalagem__value">
                        {embalagem.tamanhoDeLote}
                      </p>
                    </div>
                  </div>
                )}
                <div className="ficha-embalagem__item">
                  <span className="ficha-embalagem__icon">
                    <Thermometer size={16} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="ficha-embalagem__label">Armazenamento</p>
                    <p className="ficha-embalagem__value">
                      {embalagem.armazenamento}
                    </p>
                  </div>
                </div>
                {embalagem.validade && (
                  <div className="ficha-embalagem__item">
                    <span className="ficha-embalagem__icon">
                      <Clock size={16} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="ficha-embalagem__label">Validade</p>
                      <p className="ficha-embalagem__value">
                        {embalagem.validade}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Setores de uso */}
          <div
            className="ficha-card ficha-card--setores"
            aria-label="Setores de aplicação"
          >
            <div className="ficha-card__header">
              <Package2 size={18} aria-hidden="true" />
              <h3>Setores de Aplicação</h3>
            </div>
            <ul className="ficha-setores">
              {produto.setoresDeUso.map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            {produto.destaquesInstitucionais.length > 0 && (
              <ul className="ficha-destaques">
                {produto.destaquesInstitucionais.map(d => (
                  <li key={d}>
                    <span aria-hidden="true">—</span> {d}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
