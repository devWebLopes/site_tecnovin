# Plano 011 — Redesign Visual Clássico Minimalista & Motion (Framer Motion 12)

**ID:** plan-011-redesign-visual-classic-minimalist-motion  
**Data:** 29/10/2026  
**Agente Coordenador:** Arquiteto de Sistema (`agents/arquiteto.md`)  
**Agente Executor Principal:** Frontend Agent (`agents/frontend.md`)  
**Agentes de Apoio:** Editorial Agent (`agents/editorial.md`), QA Agent (`agents/qa.md`)  
**Skills Acionadas:** `classic-minimalist-ui`, `framer-motion-animacoes`, `tailwind-css`, `react-shadcn`, `acessibilidade-wcag`, `performance-web`, `editorial-conteudo`

---

## 1. Contexto e Objetivo

Elevar o padrão visual e interativo do site institucional da **Tecnovin do Brasil** (`tecnovin-institucional`) com uma direção de arte **clássica, elegante e minimalista** — inspirada na herança vitivinícola do Vale dos Vinhedos aliada à precisão industrial B2B — e uma camada de **efeitos de scroll suaves com delay escalonado (stagger)** construída com **Framer Motion 12**, respeitando integralmente `prefers-reduced-motion` e a governança documental (`docs/dossie_Tecnovin/` e `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`).

---

## 2. Diretrizes de Design e Engenharia

### 2.1. Tipografia Clássica de Alto Contraste

- **Display & Títulos Editoriais (`h1`, `h2`, `h3` editoriais e citações):** `Cormorant Garamond` (pesos `400`, `500`, `600` e itálicos), com `letter-spacing` refinado, contraste clássico e proporções atemporais.
- **Corpo de Texto, Tabelas Técnicas e UI Funcional:** `Plus Jakarta Sans` (com fallback para `DM Sans` e `sans-serif`), garantindo leitura fluida (`leading-relaxed`) e nitidez em tabelas de graus Brix, acidez e especificações B2B.
- **Micro-labels, Datas Históricas (2000–2024) e Categorias:** Caixa alta discreta (`uppercase tracking-[0.2em] text-xs font-medium`).

### 2.2. Paleta Sóbria e Sofisticada (Light & Dark Tokens)

- **Superfícies (Light Mode):**
  - Fundo principal (Pergaminho Quente): `#FAF8F5` (`--background`, `--cream`)
  - Superfície secundária e cards (Pedra Suave): `#F3EFEA` (`--surface-subtle`, `--paper-warm`) e `#FFFDFA` para cartões de contraste sutil
  - Texto principal (Carvão Mineral): `#1C1917` (`--foreground`, `--ink`)
  - Divisórias sutis de `1px`: `rgba(28, 25, 23, 0.11)` (`--border`)
- **Superfícies (Dark Mode / Seções Noturnas):**
  - Carvão profundo orgânico: `#121110` e `#1A1817`
  - Texto marfim suave: `#EAE6DF`
- **Acentos do Vinhedo e Precisão Industrial:**
  - Bordô profundo / Vinho: `#5C1A2B` (`--wine`) e `#3A101D` / `#4A1525` (`--wine-deep`)
  - Verde oliva escuro: `#2C3E2D` (`--olive`)
  - Ouro envelhecido / Champagne: `#C5A059` (`--gold`, `--copper`) para filetes, insígnias de ano, estados de foco e destaques sutis.

### 2.3. Arquitetura de Motion (`client/src/components/motion/`)

- **Curva de Easing Canônica:** `EASE_CLASSIC = [0.22, 1, 0.36, 1]` (cubic-bezier longa, sem bounce/elástico, duração entre `0.75s` e `1.0s`).
- **`Reveal.tsx` (`<Reveal>`, `<FadeIn>`, `<ScaleRevealImage>`):**
  - Entrada suave (`initial={{ opacity: 0, y: 24 }}` -> `whileInView={{ opacity: 1, y: 0 }}`).
  - `viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}`.
  - Suporte a `delay` configurável e desativação automática de deslocamento quando `useReducedMotion()` estiver ativo.
  - `<ScaleRevealImage>` para máscara suave com transição de escala (`1.06 -> 1.0` em `1.2s`) ao entrar na viewport.
- **`StaggerGroup.tsx` (`<StaggerContainer>`, `<StaggerItem>`):**
  - Orquestração em cascata (`staggerChildren: 0.14`, `delayChildren: 0.1`) para grids de produtos, pilares de qualidade, marcos históricos (2000–2024), princípios de fornecedores, artigos do blog e FAQs.
- **`AnimatedLine.tsx` (`<AnimatedLine>`):**
  - Linhas divisórias horizontais e verticais (`1px`) que se desenham suavemente (`scaleX` ou `scaleY` de `0` para `1` com `origin-left` / `origin-top`) durante o scroll.

---

## 3. Etapas de Execução

1. **Auditoria & Skill Canônica:**
   - Criar `skills/classic-minimalist-ui/SKILL.md` com as diretrizes completas de UI Clássica Minimalista e Framer Motion 12.
   - Atualizar `skills/README.md`, `agents/frontend.md` e `AGENTS.md`.
2. **Fundação Tipográfica e Tokens Visuais:**
   - Atualizar `client/index.html` com carregamento otimizado (`preconnect` + Google Fonts) de `Cormorant Garamond` e `Plus Jakarta Sans`.
   - Refinar variáveis CSS, espaçamentos editoriais (`py-24` a `py-36` desktop, `py-16` mobile), bordas de `1px` e sombras/transições em `client/src/index.css`.
3. **Biblioteca de Motion (`client/src/components/motion/`):**
   - Criar `Reveal.tsx`, `StaggerGroup.tsx`, `AnimatedLine.tsx` e `index.ts`.
4. **Refinamento de Páginas e Componentes:**
   - `Home.tsx`: Hero com encadeamento por delay, QuickNav em cascata, Origem com linhas animadas e stats escalonados, Image Story com máscara reveladora, Portfólio de Concentrados e Tabela Comparativa com stagger, Qualidade e Documentos Institucionais, Mapa do Território, Linha do Tempo/Reconhecimentos (2000–2024), Conteúdos Editoriais, FAQ B2B e Contato.
   - `Blog.tsx` e `BlogPost.tsx`: Hero editorial animado, filtros com transição suave, grid de artigos com stagger e leitura de artigo com revelação progressiva.
   - `Produtos.tsx`, `Produto.tsx`, `ProductHero.tsx`, `FichaTecnica.tsx` e `ProductContactForm.tsx`: Animações de entrada com delay e cascata nos cards técnicos.
5. **Validação e QA (`REGRA 5`):**
   - Executar `pnpm check` (TypeScript sem erros).
   - Executar `pnpm format` (Prettier).
   - Executar `pnpm build` (Vite + esbuild).
   - Confirmar preservação integral dos fatos, fontes e rótulos históricos do dossiê.

