---
name: classic-minimalist-ui
description: Diretrizes canônicas de Design Clássico, Elegante e Minimalista combinadas com animações de scroll suaves e escalonadas (stagger) em Framer Motion 12 para o projeto Tecnovin Institucional.
---

# Classic Minimalist UI & Editorial Motion — Tecnovin Institucional

## Descrição

Skill canônica de Direção de Arte e Design Engineering para o site institucional da **Tecnovin do Brasil** (`tecnovin-institucional`). Define a estética **clássica, elegante e minimalista** — inspirada na tradição vitivinícola do Vale dos Vinhedos e na precisão industrial B2B — além das receitas padronizadas de animação de scroll com **Framer Motion 12**.

---

## 1. Direção de Arte: Clássico, Elegante e Minimalista

### 1.1. Atmosfera Editorial e Espaçamento (Whitespace)

- **Respiro Generoso:** Seções principais devem manter espaçamento vertical amplo (`py-24` a `py-36` / `7.5rem` a `9.5rem` no desktop; `py-16` / `4.5rem` a `5.5rem` no mobile).
- **Grids Assimétricos e Arquiteturais:** Estruturas editoriais com colunas de proporção áurea/assimétrica (ex.: `1.05fr / 0.75fr`, `0.85fr / 1.15fr`) alinhadas por filetes horizontais e verticais.
- **Divisórias de `1px` (Hairlines):** Utilize bordas sutis de `1px` com baixa opacidade (`rgba(28, 25, 23, 0.11)` no modo claro; `rgba(234, 230, 223, 0.14)` em seções escuras) em vez de sombras pesadas ou gradientes artificiais.

### 1.2. Tipografia de Alto Contraste

- **Display e Títulos (`h1`, `h2`, citações editoriais):**
  - Fonte serifada clássica: **`Cormorant Garamond`** (`var(--font-display)`).
  - Pesos equilibrados (`400` regular a `500` medium), `tracking-tight` (`-0.035em` a `-0.055em`), `line-height` compacto (`0.86` a `1.08`) e uso expressivo de _itálico_ em palavras-chave semânticas.
- **Corpo de Texto, Tabelas Técnicas e UI Funcional:**
  - Fonte sans-serif neutra e geométrica-humanista: **`Plus Jakarta Sans`** (`var(--font-sans)`).
  - Leitura confortável com `line-height: 1.75` a `1.85` (`leading-relaxed`) em parágrafos e `font-variant-numeric: tabular-nums` em dados técnicos (Brix, acidez, peso líquido, datas).
- **Micro-labels, Kickers, Datas Históricas (2000–2024) e Categorias:**
  - Caixa alta refinada: `uppercase`, `letter-spacing: 0.18em` a `0.2em`, `font-size: 0.72rem` (`11.5px`), `font-weight: 600`.

### 1.3. Paleta de Cores Sóbria e Sofisticada

- **Superfícies (Light Mode):**
  - Pergaminho quente principal (`--background` / `--cream`): `#FAF8F5`
  - Pedra suave para seções secundárias (`--surface-subtle`): `#F3EFEA`
  - Papel editorial elevado (`--paper`): `#FFFDFA`
  - Tinta principal (`--foreground` / `--ink`): `#1C1917`
  - Texto de apoio AA (`--muted` / `--muted-strong`): `#57504B` / `#4A433E`
- **Superfícies (Dark Mode / Seções Noturnas):**
  - Carvão profundo orgânico: `#121110` e `#1A1817`
  - Texto marfim suave: `#EAE6DF`
- **Cores de Destaque (Acentos da Uva e do Vinhedo):**
  - Bordô profundo / Vinho (`--wine`): `#5C1A2B`
  - Vinho reserva escuro (`--wine-deep`): `#3A101D` / `#4A1525`
  - Verde oliva escuro (`--olive`): `#2C3E2D`
  - Ouro envelhecido / Champagne (`--gold` / `--copper`): `#C5A059` (para linhas de destaque, badges de ano, foco de teclado e micro-acentos).

---

## 2. Receitas Padronizadas de Motion (Framer Motion 12)

Toda animação de scroll deve utilizar os componentes canônicos em `client/src/components/motion/`:

### 2.1. Curva de Easing de Luxo (Sem Bounce)

- **Curva padrão:** `EASE_CLASSIC: [number, number, number, number] = [0.22, 1, 0.36, 1]`
- **Duração:** Entre `0.75s` e `1.0s` para entradas de seção; `1.1s` a `1.25s` para revelação de imagens e desenho de linhas (`<AnimatedLine>`).
- **Proibido:** Efeitos elásticos (`spring` com bounce alto) ou durações abruptas (`< 0.3s` em entradas de scroll).

### 2.2. Componentes Reutilizáveis (`@/components/motion`)

1. **`<Reveal>` / `<FadeIn>`:**
   - Props: `delay` (`0` por padrão, escalonável em `0.1s`, `0.2s`, `0.3s`), `duration` (`0.85`), `yOffset` (`24`).
   - Dispara apenas uma vez ao entrar na viewport (`viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}`).
2. **`<StaggerContainer>` e `<StaggerItem>`:**
   - Aplica `staggerChildren: 0.14` e `delayChildren: 0.1` para revelar cards de concentrados, pilares institucionais, marcos históricos (2000–2024), artigos do blog e itens de FAQ em cascata suave.
3. **`<ScaleRevealImage>`:**
   - Envolve imagens editoriais e institucionais com `overflow-hidden` e transição de escala de `1.06` para `1.0` em `1.2s` ao entrar em tela, combinada com zoom sutil no hover (`scale(1.03)` com `700ms`).
4. **`<AnimatedLine>`:**
   - Desenha divisórias de `1px` (`scaleX: 0 -> 1` com `origin-left` ou `scaleY: 0 -> 1` com `origin-top`) sincronizadas com a rolagem.

### 2.3. Acessibilidade Obrigatória (`prefers-reduced-motion`)

- Todos os componentes de motion **DEVEM** consultar `useReducedMotion()` do `framer-motion`.
- Quando ativo, deslocamentos (`y`, `x`, `scale`) e atrasos (`delay`, `staggerChildren`) são zerados, mantendo apenas uma transição suave de opacidade (`0.2s`) ou exibição imediata.

---

## 3. Governança Editorial Inegociável

- Nenhuma alteração visual ou de layout pode introduzir métricas, capacidades produtivas, certificações ou nomes de clientes não confirmados em `docs/dossie_Tecnovin/` e `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`.
- Marcos históricos (ex.: Prêmio Exportação RS 2018, 5ª Tecnovitis 2023, Cremor de Tártaro e arquivo 2000–2024) devem preservar integralmente suas datas, fontes e rótulos de contexto histórico.
