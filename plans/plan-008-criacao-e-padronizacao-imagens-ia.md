# Plan 008 — Criação, Substituição e Otimização das Fotografias do Site com IA

**ID:** plan-008-criacao-e-padronizacao-imagens-ia  
**Tipo:** Plano de Execução e Backlog de Tasks (Assets Visuais)  
**Status:** Concluído  
**Agente coordenador:** Arquiteto de Sistema  
**Agentes envolvidos:** Frontend Agent, Editorial Agent, QA Agent (`image-generator`)  
**Skills utilizadas:** `image-ai-processing`, `image-naming-standards`, `image-optimization`, `performance-web`, `acessibilidade-wcag`, `editorial-conteudo`  
**Data:** 29/10/2026  
**Base documental:** `AGENTS.md`, `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`, `plans/plan-007-mudanca-apresentacao-visual.md`

---

## 1. Objetivo

Organizar e executar a geração por IA, padronização de nomenclatura SEO, otimização em formato `.webp` (com fallback `.jpg`) e integração no código de todas as imagens do site institucional da **Tecnovin do Brasil**, divididas em 4 fases:

1. **Fase 1 (P0):** Substituição da imagem quebrada na Home (`/manus-storage/tecnovin-quality_c97971d8.jpg` → `/images/tecnovin-processo-industrial-tanques-inox.webp` e `.jpg`) e alinhamento do `imagemAlt` do Cremor de Tártaro mantendo a fotografia aprovada.
2. **Fase 2 (P1):** Criação e publicação dos **21 arquivos dedicados** da seção _"Detalhes do Ingrediente — Da fruta à aplicação"_ (`Produto.tsx`), eliminando a repetição da imagem Hero nos 3 quadros (`Matéria-prima`, `Textura & cor`, `Aplicação industrial`).
3. **Fase 3 (P2):** Conversão e otimização WebP das 7 imagens Hero de produtos (`60 KB` a `140 KB`, reduzindo de `642 KB`–`844 KB`) e implementação de `<picture>` em `ProductCard.tsx` e `ProductHero.tsx`.
4. **Fase 4 (P3):** Criação e publicação das **6 capas fotográficas editoriais** para os artigos do Blog (`Blog.tsx`, `BlogPost.tsx` e `Home.tsx`).

---

## 2. Checklist de Tasks Concluídas

### Fase 1 (P0) — Correção de Imagem Ausente na Home e Alinhamento de Produto

- [x] **Task 1.1 — Gerar imagem institucional de processo industrial da Home**
  - **Local:** `client/src/pages/Home.tsx` (`.image-story-section`)
  - **Arquivos gerados:** `client/public/images/tecnovin-processo-industrial-tanques-inox.webp` (`124.9 KB`) e `.jpg` (`960x1200`)
- [x] **Task 1.2 — Manter a foto do Cremor de Tártaro e alinhar `imagemAlt`**
  - **Local:** `client/src/lib/produtos.ts` (`/produtos/cremor-de-tartaro`)
  - **Ação concluída:** Mantida a foto minimalista na tigela de cerâmica sobre pedra travertino e atualizado o `imagemAlt` + gerado `hero-cremor-tartaro.webp` (`60.3 KB`).

---

### Fase 2 (P1) — Criação das 21 Fotos de "Detalhes do Ingrediente" (`Produto.tsx`)

#### 2.1. Concentrado de Uva (GJC)

- [x] **Task 2.1.1 — Uva · Matéria-prima (`detalhe-uva-materia-prima.webp` / `.jpg`)**
- [x] **Task 2.1.2 — Uva · Textura & cor (`detalhe-uva-textura.webp` / `.jpg` — `19.8 KB`)**
- [x] **Task 2.1.3 — Uva · Aplicação industrial (`detalhe-uva-aplicacao.webp` / `.jpg` — `40.1 KB`)**

#### 2.2. Concentrado de Maçã (AJC)

- [x] **Task 2.2.1 — Maçã · Matéria-prima (`detalhe-maca-materia-prima.webp` / `.jpg` — `63.3 KB`)**
- [x] **Task 2.2.2 — Maçã · Textura & cor (`detalhe-maca-textura.webp` / `.jpg` — `25.2 KB`)**
- [x] **Task 2.2.3 — Maçã · Aplicação industrial (`detalhe-maca-aplicacao.webp` / `.jpg` — `31.2 KB`)**

#### 2.3. Concentrado de Laranja Congelado (FCOJ)

- [x] **Task 2.3.1 — Laranja · Matéria-prima (`detalhe-laranja-materia-prima.webp` / `.jpg` — `44.3 KB`)**
- [x] **Task 2.3.2 — Laranja · Textura & cor (`detalhe-laranja-textura.webp` / `.jpg` — `45.8 KB`)**
- [x] **Task 2.3.3 — Laranja · Aplicação industrial (`detalhe-laranja-aplicacao.webp` / `.jpg` — `35.5 KB`)**

#### 2.4. Concentrado de Limão (Siciliano & Tahiti)

- [x] **Task 2.4.1 — Limão · Matéria-prima (`detalhe-limao-materia-prima.webp` / `.jpg` — `68.7 KB`)**
- [x] **Task 2.4.2 — Limão · Textura & cor (`detalhe-limao-textura.webp` / `.jpg` — `23.3 KB`)**
- [x] **Task 2.4.3 — Limão · Aplicação industrial (`detalhe-limao-aplicacao.webp` / `.jpg` — `22.9 KB`)**

#### 2.5. Concentrado de Acerola

- [x] **Task 2.5.1 — Acerola · Matéria-prima (`detalhe-acerola-materia-prima.webp` / `.jpg` — `42.4 KB`)**
- [x] **Task 2.5.2 — Acerola · Textura & cor (`detalhe-acerola-textura.webp` / `.jpg` — `40.2 KB`)**
- [x] **Task 2.5.3 — Acerola · Aplicação industrial (`detalhe-acerola-aplicacao.webp` / `.jpg` — `22.2 KB`)**

#### 2.6. Concentrado de Abacaxi

- [x] **Task 2.6.1 — Abacaxi · Matéria-prima (`detalhe-abacaxi-materia-prima.webp` / `.jpg` — `77.0 KB`)**
- [x] **Task 2.6.2 — Abacaxi · Textura & cor (`detalhe-abacaxi-textura.webp` / `.jpg` — `29.6 KB`)**
- [x] **Task 2.6.3 — Abacaxi · Aplicação industrial (`detalhe-abacaxi-aplicacao.webp` / `.jpg` — `30.4 KB`)**

#### 2.7. Cremor de Tártaro

- [x] **Task 2.7.1 — Cremor de Tártaro · Matéria-prima (`detalhe-cremor-materia-prima.webp` / `.jpg` — `24.3 KB`)**
- [x] **Task 2.7.2 — Cremor de Tártaro · Textura & cor (`detalhe-cremor-textura.webp` / `.jpg` — `24.4 KB`)**
- [x] **Task 2.7.3 — Cremor de Tártaro · Aplicação industrial (`detalhe-cremor-aplicacao.webp` / `.jpg` — `27.6 KB`)**
- [x] **Task 2.8 — Atualização de `produtos.ts`, `Produto.tsx` e `index.css` com `<picture>` WebP + JPG**

---

### Fase 3 (P2) — Otimização WebP das 7 Imagens Hero de Produto

- [x] **Task 3.1 — `hero-uva.webp` (`109.0 KB`, redução de 86%)**
- [x] **Task 3.2 — `hero-maca.webp` (`83.4 KB`, redução de 88%)**
- [x] **Task 3.3 — `hero-laranja.webp` (`85.3 KB`, redução de 88%)**
- [x] **Task 3.4 — `hero-limao.webp` (`93.1 KB`, redução de 87%)**
- [x] **Task 3.5 — `hero-acerola.webp` (`104.5 KB`, redução de 86%)**
- [x] **Task 3.6 — `hero-abacaxi.webp` (`140.5 KB`, redução de 83%)**
- [x] **Task 3.7 — `hero-cremor-tartaro.webp` (`60.3 KB`, redução de 90%)**
- [x] **Task 3.8 — Atualização de `ProductCard.tsx`, `ProductHero.tsx` e cards de produtos na `Home.tsx` (`.product-grid .product-card`) com `<picture>` WebP + JPG e correção de escopo CSS no `index.css`**

---

### Fase 4 (P3) — Criação e Integração das 6 Capas Fotográficas do Blog

- [x] **Task 4.1 — `blog-premio-exportacao-rs-2018.webp` (`68.3 KB`) e `.jpg`**
- [x] **Task 4.2 — `blog-tecnovitis-2023.webp` e `.jpg`**
- [x] **Task 4.3 — `blog-ingrediente-certo-carrega-historia.webp` (`161.2 KB`) e `.jpg`**
- [x] **Task 4.4 — `blog-mapa-possibilidades-portfolio.webp` (`59.3 KB`) e `.jpg`**
- [x] **Task 4.5 — `blog-valor-saber-de-onde-vem-escolha.webp` (`155.1 KB`) e `.jpg`**
- [x] **Task 4.6 — `blog-formulacao-equilibrio-sabor-escala.webp` (`51.8 KB`) e `.jpg`**
- [x] **Task 4.7 — Integração em `artigos.ts`, `Blog.tsx`, `BlogPost.tsx` (incluindo `og:image`, Schema.org `Article.image` e `.blog-post-cover`) e `Home.tsx` (`.editorial-card-art`)**

---

### Fase 5 — Validação e QA Obrigatório (`REGRA 5`)

- [x] **Task 5.1 — Executar `pnpm check` (TypeScript sem erros)**
- [x] **Task 5.2 — Executar `pnpm format` (Prettier)**
- [x] **Task 5.3 — Executar `pnpm build` (validação do bundle de produção)**
- [x] **Task 5.4 — Auditoria de acessibilidade (`alt`, contraste, CLS) e tamanho de arquivos**
