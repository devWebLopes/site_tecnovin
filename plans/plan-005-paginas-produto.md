# Plan 005 — Páginas Individuais de Produto

**Data:** 07/09/2026  
**Status:** Fases 0–4 concluídas · QA pendente  
**PRD:** Aprovado pelo cliente em 07/09/2026  
**Agente coordenador:** Arquiteto de Sistema

---

## Objetivo

Criar páginas individuais para cada produto do portfólio declarado da Tecnovin, com rotas próprias, conteúdo editorial validado, SEO técnico, dados estruturados JSON-LD e design premium.

## Produtos do Escopo

| #   | Produto                                 | Slug                               | Dados técnicos                       |
| --- | --------------------------------------- | ---------------------------------- | ------------------------------------ |
| 1   | Concentrado de Uva (GJC)                | `/produtos/concentrado-de-uva`     | Alto                                 |
| 2   | Concentrado de Maçã (AJC)               | `/produtos/concentrado-de-maca`    | Alto                                 |
| 3   | Concentrado de Laranja Congelado (FCOJ) | `/produtos/concentrado-de-laranja` | Alto                                 |
| 4   | Concentrado de Limão                    | `/produtos/concentrado-de-limao`   | Alto                                 |
| 5   | Concentrado de Acerola                  | `/produtos/concentrado-de-acerola` | Baixo                                |
| 6   | Concentrado de Abacaxi                  | `/produtos/concentrado-de-abacaxi` | Baixo                                |
| 7   | Cremor de Tártaro _(histórico)_         | `/produtos/cremor-de-tartaro`      | Médio — rótulo histórico obrigatório |

## Decisões Arquiteturais

- Rotas: `/produtos` (listagem) + `/produtos/:slug` (individual)
- Internacionalização: PT apenas no MVP; EN em fase futura com rotas separadas
- CTA: formulário embutido na página de produto
- Imagens: fotografias realistas de fruta (geradas via generate_image)
- Cremor de tártaro: listado com rótulo _"Registro histórico — status atual não confirmado"_

## Arquivos Novos

```
client/src/
├── lib/produtos.ts              ✅ Source of truth dos dados de produto
├── pages/Produtos.tsx           ✅ Listagem /produtos
├── pages/Produto.tsx            ✅ Individual /produtos/:slug
├── components/ProductCard.tsx   ✅
├── components/ProductHero.tsx   ✅
├── components/FichaTecnica.tsx  ✅
├── components/ProductNav.tsx    ✅
├── components/ProductContactForm.tsx ✅
└── components/JsonLd.tsx        ✅
```

## Arquivos Modificados

- `client/src/App.tsx` ✅ — novas rotas adicionadas
- `client/src/components/SiteHeader.tsx` ✅ — link "Produtos" adicionado
- `client/src/pages/Home.tsx` ✅ — links para páginas individuais na seção de produtos
- `client/src/index.css` ✅ — ~700 linhas de CSS para as novas páginas

## Imagens Hero

```
client/public/images/produtos/
├── hero-uva.jpg         ✅
├── hero-maca.jpg        ✅
├── hero-laranja.jpg     ✅
├── hero-limao.jpg       ✅
├── hero-acerola.jpg     ✅
├── hero-abacaxi.jpg     ✅
└── hero-cremor-tartaro.jpg  ⚠️ placeholder (quota de geração esgotada; regenerar)
```

## Fases de Execução

### Fase 0 — Preparação (CONCLUÍDA)

- [x] PRD criado e aprovado
- [x] Decisões do cliente registradas
- [x] Plan-005 documentado

### Fase 1 — Dados e Imagens (CONCLUÍDA)

- [x] Criar `client/src/lib/produtos.ts` com todos os dados
- [x] Gerar 6/7 imagens hero realistas (cremor pendente de regeneração)

### Fase 2 — Componentes Base (CONCLUÍDA)

- [x] `ProductCard.tsx`
- [x] `ProductHero.tsx`
- [x] `FichaTecnica.tsx`
- [x] `ProductNav.tsx`
- [x] `ProductContactForm.tsx`
- [x] `JsonLd.tsx`

### Fase 3 — Páginas (CONCLUÍDA)

- [x] `Produtos.tsx` (listagem)
- [x] `Produto.tsx` (individual com meta tags dinâmicas)

### Fase 4 — Integração (CONCLUÍDA)

- [x] Rotas em `App.tsx`
- [x] Link "Produtos" no `SiteHeader.tsx`
- [x] Atualizar seção produtos na `Home.tsx`
- [x] CSS completo em `index.css`

### Fase 5 — QA

- [x] `pnpm check` sem erros ✅
- [x] `pnpm build` sem erros ✅
- [ ] Acessibilidade WCAG 2.1 AA (revisão manual)
- [ ] Schema JSON-LD válido (Google Rich Results Test)
- [ ] Responsividade mobile/tablet/desktop (revisão visual)
- [ ] Imagem cremor de tártaro regenerada

## Restrições Editoriais

- NÃO publicar capacidade de 270 mil t/ano como dado atual
- NÃO nomear clientes (Coca-Cola, Nestlé) sem validação atual
- Dados técnicos de Acerola e Abacaxi: apenas portfólio declarado
- Cremor de tártaro: sempre com rótulo histórico explícito

## Fontes da Base de Conhecimento

- `docs/dossie_Tecnovin/Dossiê de atividade, produtos e mercado.md` — dados técnicos dos produtos
- `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md` — regras editoriais
- `docs/diretrizes-arquiteturais.md` — padrões técnicos
