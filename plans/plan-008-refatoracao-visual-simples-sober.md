# PRD — Refatoração Visual: Interface Soberana e Sem Efeitos Pesados

**ID:** plan-008-refatoracao-visual-simples-sober  
**Tipo:** PRD  
**Status:** Em andamento  
**Agente coordenador:** Frontend Agent  
**Agentes envolvidos:** Frontend Agent, QA Agent  
**Skills utilizadas:** react-shadcn, tailwind-css, acessibilidade-wcag  
**Data:** 30/10/2026  
**Base documental:** `agents.md`, `docs/padroes-codigo.md`, `docs/diretrizes-arquiteturais.md`

---

## 1. Objetivo

Transformar o site para uma interface limpa, sóbria e focada em conteúdo editorial e especificações técnicas, eliminando completamente efeitos pesados de UI, mantendo a stack atual.

## 2. Diretrizes a aplicar

### 2.1. Ausência total de efeitos pesados
- **Sem animações de scroll:** Remover `scroll reveal`, `parallax`, elementos flutuantes. Conteúdo carrega direto e instantâneo.
- **Sem efeitos metalizados/glows:** Remover brilhos, bordas neon, sombras exageradas, gradientes chamativos em cards e botões.
- **Sem glassmorphism/vidro fosco:** Remover `backdrop-blur`. Usar cores sólidas e contrastantes.

### 2.2. Estética corporativa, editorial e técnica
- **Paleta clássica:** Fundo claro (branco/cinza neutro muito suave), tipografia escura com alto contraste, acentos sóbrios (azul corporativo ou verde institucional).
- **Layout semântico:** Hierarquia clara (H1,H2,H3), tabelas comparativas limpas, listas objetivas, cards minimalistas com bordas sutis de 1px.
- **Foco na leitura:** Clareza técnica, leitura rápida de dados/especificações, navegação B2B facilitada.

## 3. Escopo

### Dentro do escopo
- `client/src/index.css` — Remover efeitos, simplificar estilos
- `client/src/pages/Home.tsx` — Remover componentes de motion, simplificar hero, atalhos, cards
- Componentes relacionados afetados por estilos globais

### Fora do escopo
- Mudança de stack
- Alteração de conteúdo editorial/dados
- Rebranding completo

## 4. Mudanças planejadas

### 4.1. CSS Global (`index.css`)
- Remover animações/transições complexas
- Remover `backdrop-filter`, `box-shadow` exagerados
- Simplificar botões (sem pseudo-elementos shimmer)
- Cards com `border: 1px solid var(--border)`, sem sombras
- Header sólido sem blur
- Remover overlays com gradientes complexos
- Manter tipografia legível

### 4.2. Home (`Home.tsx`)
- Remover imports: `Reveal`, `StaggerContainer`, `StaggerItem`, `AnimatedLine`, `ScaleRevealImage`, `FaqAccordionItem` (ou simplificar)
- Substituir por elementos estáticos
- Hero mais limpo, sem grain/overlays pesados
- Atalhos rápidos com bordas simples
- Cards minimalistas
- Tabela comparativa já limpa, manter

## 5. Critérios de aceite
- [ ] Sem animações de scroll
- [ ] Sem backdrop-blur
- [ ] Sem sombras/glow exagerados
- [ ] Cards com bordas 1px sutis
- [ ] Tipografia com bom contraste
- [ ] Layout semântico e hierárquico
- [ ] `pnpm check` sem erros
- [ ] `pnpm build` sem erros

## 6. Execução
1. Atualizar `index.css` - simplificar estilos
2. Refatorar `Home.tsx` - remover motion, simplificar
3. Validar build
4. Ajustar se necessário
