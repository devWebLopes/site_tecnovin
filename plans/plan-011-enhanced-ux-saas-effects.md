# Plan 011 — Enhanced UX: Efeitos SaaS sobre Identidade Tecnovin

## Status: Concluído ✅

## Objetivo
Aplicar efeitos visuais e interativos de alto padrão (inspirados no estilo Modern SaaS / Post2GO) mantendo
**100% da identidade visual da Tecnovin**: paleta bordô/ouro/pergaminho, tipografia Cormorant + Plus Jakarta, 
conteúdo institucional factual e estrutura de componentes existente.

## Princípios Respeitados
- ✅ Cores canônicas preservadas: wine (#5c1a2b), gold (#c5a059), cream (#faf8f5), ink (#1c1917)
- ✅ Tipografia mantida: Cormorant Garamond (display) + Plus Jakarta Sans (UI)
- ✅ Conteúdo institucional intacto (nenhum dado inventado ou adulterado)
- ✅ Infraestrutura Framer Motion estendida de forma limpa e performática
- ✅ Stack intacta: React 19 + TypeScript + Tailwind CSS v4 + Framer Motion + Wouter
- ✅ Acessibilidade (WCAG) mantida com suporte a `useReducedMotion`

---

## Implementações Realizadas

### 1. SiteHeader — Glassmorphism Tecnovin Refinado
- `backdrop-filter: blur(24px) saturate(1.6)` com leve tint dourado e vinho no scroll
- Transição de borda inferior em ouro sutil (`rgba(197, 160, 89, 0.08)`)
- Hover nos links com gradiente dourado animado (`linear-gradient(90deg, var(--gold), rgba(197, 160, 89, 0.4))`)
- Micro-shimmer em ângulo no botão CTA do Header (`.header-cta::before`) com elevação suave (`translateY(-1px)`)

### 2. Product Cards — Hover Elevation & Glow por Fruta
- Elevação aprimorada (`translateY(-6px)`) com curva clássica `cubic-bezier(0.22, 1, 0.36, 1)`
- Sombras multicamadas com glow específico por produto (Uva, Maçã, Laranja, Limão, Acerola, Abacaxi)
- Zoom sutil e cinematográfico da fotografia de produto (`scale(1.05)`) com duração de 750-800ms
- Badges de especificação (siglas GJC, AJC, FCOJ...) com glassmorphism real (`backdrop-filter: blur(12px)`) e borda luminosa

### 3. FAQ Accordion Ultra Fluido com Framer Motion
- Criado o componente [`FaqAccordionItem`](file:///d:/clientes/sites/tecnovin/client/src/components/motion/FaqAccordionItem.tsx) usando `AnimatePresence` e `motion.div`
- Abertura/fechamento com interpolação de altura física suave e fade, sem cortes bruscos
- Respeito automático ao modo de movimento reduzido (`useReducedMotion`)
- Integrado na página [`Home.tsx`](file:///d:/clientes/sites/tecnovin/client/src/pages/Home.tsx) e em [`Produto.tsx`](file:///d:/clientes/sites/tecnovin/client/src/pages/Produto.tsx)

### 4. Textos com Gradiente Nobre (Editorial Champagne & Vinho)
- Utilitário `.text-gradient-gold` (marfim → champanhe → ouro envelhecido) aplicado aos termos de destaque das seções escuras
- Utilitário `.text-gradient-wine` (bordô rubi → vinho profundo)
- Preservação da legibilidade AA sobre contrastes claros e escuros

### 5. Scroll Reveal Cinematográfico (Foco Suave / Blur)
- Atualizado [`Reveal.tsx`](file:///d:/clientes/sites/tecnovin/client/src/components/motion/Reveal.tsx) com suporte à prop `blur` opcional
- Efeito de câmera entrando em foco suavemente enquanto sobe na viewport
- Aplicado aos títulos de impacto no Hero e seções estratégicas da Home

### 6. Quick Nav & Recognition Cards
- Micro-hover com underline ouro na barra de atalhos rápidos (`quick-nav`)
- Cards de premiação e memória histórica com elevação refinada e sombra com halo dourado

### 7. Validação
- `pnpm check`: 0 erros de tipagem TypeScript
- `pnpm build`: build de produção concluído com sucesso
