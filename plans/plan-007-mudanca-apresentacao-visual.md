# PRD — Mudança da Apresentação Visual do Site Tecnovin

**ID:** plan-007-mudanca-apresentacao-visual
**Tipo:** PRD (Product Requirements Document)
**Status:** Concluído
**Agente coordenador:** Arquiteto de Sistema
**Agentes envolvidos:** Frontend Agent, Editorial Agent, QA Agent
**Skills utilizadas:** react-shadcn, tailwind-css, editorial-conteudo, acessibilidade-wcag, performance-web
**Data:** 08/09/2026
**Base documental:** `agents.md`, `docs/diretrizes-arquiteturais.md`, `docs/padroes-codigo.md`, `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`, `docs/dossie_Tecnovin/`

---

## 1. Contexto e problema

O site institucional da Tecnovin já possui uma identidade visual forte (tipografia serifada editorial + paleta vinho/creme/oliva), conteúdo validado editorialmente e páginas de produto e blog funcionais. No entanto, a apresentação atual concentra a tipografia _display_ em quase todas as seções e mantém uma estética visual única para tipos de conteúdo muito diferentes entre si (produto, conteúdo editorial, documento, fonte externa, notícia e CTA comercial).

Além disso, o visitante que chega à home precisa percorrer a página para descobrir as ações principais. Não há, logo no primeiro dobramento, atalhos claros para as intenções comerciais mais comuns do público B2B.

Como consequência:

- a leitura rápida fica mais lenta (excesso de títulos serifados grandes);
- microtextos em caixa alta com `letter-spacing` elevado e baixo contraste reduzem legibilidade e acessibilidade;
- fica pouco evidente a diferença entre um produto, um documento e um conteúdo editorial;
- os estados interativos (hover, foco, ativo, selecionado, carregando, sucesso, erro) não estão padronizados, especialmente nos filtros do blog;
- o portfólio de frutas usa uma imagem hero única por ingrediente, sem detalhes visuais que acelerem o entendimento de cada solução.

Este PRD transforma as orientações recebidas do cliente em requisitos de produto para **mudar a apresentação visual sem alterar a stack** (React 19 + TypeScript + Vite + Tailwind CSS v4 + shadcn/ui + Wouter + Express) e **sem violar as regras editoriais**.

---

## 2. Objetivos

1. Colocar as ações de maior valor comercial ao alcance de um clique já no início da home.
2. Tornar a comunicação mais objetiva, combinando emoção e informação técnica na mesma seção.
3. Reduzir o excesso de tipografia display e criar uma hierarquia tipográfica clara entre títulos editoriais e elementos técnicos/funcionais.
4. Melhorar a legibilidade e a acessibilidade dos textos menores (microtextos, metadados, chips).
5. Diferenciar visualmente os tipos de card (produto, conteúdo, documento, fonte externa, notícia, CTA).
6. Enriquecer o portfólio de produtos com imagens/detalhes visuais específicos por ingrediente.
7. Padronizar e evidenciar os estados interativos em filtros, busca, links e botões.

---

## 3. Escopo

### 3.1 Dentro do escopo

- Home (`client/src/pages/Home.tsx`): hero, seção de atalhos rápidos, mensagens objetivas, tipografia, cards.
- Página de produtos (`client/src/pages/Produtos.tsx`) e card de produto (`client/src/components/ProductCard.tsx`).
- Página de produto individual (`client/src/pages/Produto.tsx`) e componentes relacionados (`ProductHero.tsx`, `FichaTecnica.tsx`).
- Blog (`client/src/pages/Blog.tsx`) e `BlogPost.tsx`: filtros, busca, estados interativos, cards.
- Estilos globais (`client/src/index.css`): tokens tipográficos, variantes de card, estados interativos.
- Assets visuais do portfólio (`client/public/images/produtos/`).

### 3.2 Fora do escopo

- Mudança de stack, bibliotecas ou framework (proibido pela REGRA 4 do `agents.md`).
- Alteração de rotas, dados de produto (`produtos.ts`) ou conteúdo editorial (`artigos.ts`, `docs/conteudo/`).
- Rebranding completo de marca (logotipo, paleta, tipografia corporativa).
- Internacionalização (EN) e novas funcionalidades de backend.
- Conteúdo que dependa de confirmação documental ainda pendente (ver §8).

---

## 4. Personas e cenários

| Persona                           | Objetivo ao chegar no site                                  | Ação principal esperada                               |
| --------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------- |
| Comprador B2B (alimentos/bebidas) | Validar se a Tecnovin fornece o ingrediente que ele precisa | Conhecer produtos, baixar portfólio, falar com vendas |
| Desenvolvedor de produto / P&D    | Avaliar especificações e consistência técnica               | Ver ficha técnica, entender aplicações                |
| Gestor de qualidade/compliance    | Checar certificações e documentação                         | Ver certificações, documentos institucionais          |
| Público institucional / imprensa  | Entender quem é a empresa e sua trajetória                  | Conhecer a empresa, ler conteúdos                     |

---

## 5. Requisitos funcionais

### RF-01 — Atalhos de acesso rápido no início

Adicionar, logo no início da home (dentro do hero ou imediatamente abaixo dele), uma faixa/grupo de atalhos de acesso rápido com as seguintes ações:

| Atalho             | Destino (âncora/rota atual)       | Observação                                                        |
| ------------------ | --------------------------------- | ----------------------------------------------------------------- |
| Conhecer produtos  | `#solucoes` (home) ou `/produtos` | Âncora existente em `Home.tsx` (`products-section id="solucoes"`) |
| Baixar portfólio   | asset PDF a criar (ver §8)        | **Dependência** — o PDF de portfólio ainda não existe             |
| Falar com vendas   | `#contato` (home)                 | Âncora existente (`contact-section id="contato"`)                 |
| Conhecer a empresa | `#origem` (home)                  | Âncora existente (`intro-section id="origem"`)                    |
| Ver certificações  | seção/página a criar (ver §8)     | **Dependência** — certificações vigentes não confirmadas          |

**Requisitos de implementação:**

- Usar `Link` do Wouter para navegação interna (padrão do projeto), não `<a href>`.
- Os atalhos devem ser semanticamente corretos (lista de navegação com `aria-label`).
- No mobile, os atalhos devem ser alcançáveis sem rolagem excessiva (ex.: barra horizontal rolável ou grade compacta).
- Os estados interativos dos atalhos seguem o RF-07.

### RF-02 — Mensagens objetivas (emoção + informação técnica)

Substituir/aumentar as mensagens de posicionamento da home para combinar emoção e informação técnica na mesma seção. Mensagens sugeridas pelo cliente:

| #   | Mensagem proposta                                                           | Função                       | Status editorial                                                            |
| --- | --------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------- |
| 1   | "Concentrados para bebidas, alimentos e formulações industriais."           | Posicionamento de produto    | Segura — alinhada ao perfil B2B confirmado no GUIA                          |
| 2   | "Consistência de sabor, cor e especificação."                               | Proposta de valor técnica    | Segura — atributo de valor, não é claim factual específico                  |
| 3   | "Atendimento para desenvolvimento, escala e fornecimento recorrente."       | Proposta de valor de serviço | Revisar redação — "escala" não deve implicar capacidade confirmada (ver §9) |
| 4   | "Ingredientes produzidos no Vale dos Vinhedos para aplicações industriais." | Origem + perfil B2B          | Segura — localização confirmada no GUIA                                     |

**Requisitos de implementação:**

- As mensagens devem aparecer em seções que combinem um bloco emocional (título editorial) com um bloco técnico (parágrafo objetivo/lista), preferencialmente lado a lado.
- As mensagens 3 e 4 devem usar a tipografia neutra/compacta (RF-03), reservando a serifada para o título da seção.
- Qualquer redação final passa por revisão do Editorial Agent antes de ir para produção (REGRA 6).

---

### RF-03 — Reduzir o excesso de tipografia display

**Situação atual:** a classe `.display-heading` (Cormorant Garamond, `clamp(3.2rem, 5vw, 5.8rem)`, `letter-spacing: -0.055em`, `line-height: 0.88`) é usada em quase todos os títulos do site, inclusive em cards e descrições técnicas.

**Requisitos:**

1. Manter a tipografia serifada editorial (`Cormorant Garamond`) **apenas** em:
   - hero (home e páginas internas);
   - títulos principais de seção;
   - frases de posicionamento.
2. Usar tipografia neutra e compacta (`DM Sans`) para:
   - títulos de cards (produto, conteúdo, documento);
   - descrições técnicas e especificações;
   - documentos e metadados;
   - filtros;
   - informações de produto (Brix, acidez, embalagem).
3. Criar (ou normalizar) utilitários/tokens tipográficos no `index.css`:
   - `display-heading` → manter para editorial (com variante `--small`);
   - nova classe de título funcional (ex.: `.card-title`, `.heading-ui`) em `DM Sans`, pesos 600/700, tamanho contido (`1.1rem`–`1.5rem`), sem `letter-spacing` negativo acentuado.
4. Reaplicar nas áreas concretas afetadas:
   - `.product-card h3` (Home), `.product-card__name` (listagem), `.blog-card-body h2`, `.editorial-card h3`, `.ficha-card h3`.

**Critério de aceite:** em uma inspeção visual, os únicos títulos serifados grandes devem ser os de hero/posicionamento; cards e informações técnicas devem usar a fonte neutra.

---

### RF-04 — Melhorar a legibilidade dos microtextos

**Situação atual (valores reais em `index.css`):**

- `.kicker`: `font-size: 0.67rem`, `letter-spacing: 0.19em`, caixa alta, cor vinho (`#742f3e`);
- `.text-link`: `0.75rem`, `letter-spacing: 0.12em`, caixa alta;
- `.blog-card-meta`: `0.6rem`, `letter-spacing: 0.1em`, caixa alta;
- `.blog-card-visual-label`: `0.58rem`, `letter-spacing: 0.1em`, caixa alta.

**Requisitos:**

1. Aumentar ligeiramente o tamanho dos microtextos (piso sugerido ~`0.72rem`–`0.78rem` para metadados; `kicker` mantém identidade mas com contraste reforçado).
2. Reduzir o `letter-spacing` dos textos em caixa alta (ex.: `0.19em` → `~0.10em`–`0.14em`).
3. Garantir contraste mínimo WCAG AA (razão ≥ 4.5:1 para texto normal; ≥ 3:1 para texto grande). Revisar a cor do `kicker` (vinho sobre creme) e os rótulos com `#9b918a`/`#776d67`.
4. Não usar tamanhos muito pequenos para informações essenciais (categoria, estado, data, tipo de documento).
5. Não depender apenas de cor ou estilo para indicar categoria/estado — adicionar ícone, texto ou marcador semântico (ex.: `aria-current`, badge de estado, ícone + rótulo).

**Critério de aceite:** nenhum texto essencial com `font-size` abaixo de `~0.72rem`; contraste validado com ferramenta de auditoria (QA Agent).

### RF-05 — Diferenciar visualmente os cards por tipo

**Situação atual:** produto, conteúdo, documento, fonte externa, notícia e CTA usam estética semelhante (cartão com arte, tipografia editorial e link seta). Isso torna pouco clara a distinção de tipo.

**Requisitos — criar sistemas visuais distintos:**

| Tipo de card      | Identificadores visuais obrigatórios                                                   | Onde se aplica hoje                          |
| ----------------- | -------------------------------------------------------------------------------------- | -------------------------------------------- |
| **Produto**       | código (sigla, ex.: GJC/AJC/FCOJ), fruta, aplicação, CTA técnico ("Ver ficha técnica") | `ProductCard.tsx`, `product-card` (Home)     |
| **Conteúdo**      | categoria, tempo de leitura, data                                                      | `.blog-card`, `.editorial-card`              |
| **Documento**     | tipo (Política/Código), idioma (PT/EN), revisão/data, ação de download                 | `.safety-policy-card`, `.supplier-code-card` |
| **Fonte externa** | ícone de link externo, identificação da fonte                                          | `recognition-card` (links externos)          |
| **CTA comercial** | tratamento destacado, ação única, contraste elevado                                    | `.produtos-cta-section`, `contact-section`   |

**Requisitos de implementação:**

1. Padronizar a "moldura" de cada tipo via variantes (usar `cva` conforme padrão do projeto) ou classes dedicadas no `index.css`.
2. Garantir que cada tipo exponha os metadados listados acima de forma visível e legível (RF-04).
3. Manter coerência de identidade (paleta, cantos, sombra) — a diferenciação deve ser por **estrutura/ícones/metadados**, não por quebra de identidade.
4. Fonte externa deve sempre exibir ícone de "link externo" e o nome da fonte (padrão já parcialmente usado em `recognition-card`).

---

### RF-06 — Imagens mais específicas por produto

**Situação atual:** cada produto possui uma única imagem hero (`hero-uva.jpg`, `hero-maca.jpg`, `hero-laranja.jpg`, `hero-limao.jpg`, `hero-acerola.jpg`, `hero-abacaxi.jpg`, `hero-cremor-tartaro.jpg`) em `client/public/images/produtos/`.

**Requisitos:**

1. Associar a cada ingrediente um conjunto de detalhes visuais (um ou mais), escolhidos entre:
   - fruta / matéria-prima;
   - textura / corte;
   - aplicação final (bebida ou alimento);
   - detalhe de processo (tanques, filtração);
   - amostra / embalagem (tambor, sachê).
2. Exibir esses detalhes no card de produto e/ou na página individual, para acelerar a compreensão da solução.
3. Manter `alt` descritivo em todas as imagens (acessibilidade) e `loading="lazy"` para imagens abaixo da dobra.
4. Imagens novas devem seguir a identidade visual (fotografia realista, paleta da marca).

**Dependência:** geração/fornecimento dos assets (ver §8). O cremor de tártaro já possui placeholder pendente de regeneração (registrado no plan-005).

---

### RF-07 — Estados interativos evidentes

**Situação atual:** há apenas um estado ativo (`category-tab--active` no blog), hover parcial (`.text-link`), e foco global (`outline: 2px solid var(--copper)`). A busca do blog é um stub (exibe toast "será ativada na próxima etapa").

**Requisitos — definir e aplicar estados para filtros, busca, links e botões:**

1. **hover** — mudança perceptível de cor/fundo/borda.
2. **foco** — `:focus-visible` consistente (manter o outline, mas garantir contraste suficiente).
3. **ativo** — pressionado/aberto (`:active` / `aria-expanded`).
4. **selecionado** — filtro/categoria ativa (já existe `category-tab--active`; padronizar e reforçar visual).
5. **carregando** — spinner/skeleton (usar `Spinner`/`Skeleton` do shadcn já disponíveis em `components/ui/`).
6. **sucesso** — feedback de newsletter/formulário (já usa `toast` do `sonner`).
7. **erro** — validação de formulário/e-mail (estado de erro no campo, mensagem acessível).

**Prioridade:** a página de conteúdos (`Blog.tsx`) é o ponto crítico, pois os filtros são centrais na experiência. O botão "Buscar" deve deixar de ser stub (se mantido como placeholder, deve ter estado `disabled` claro em vez de toast enganoso).

---

## 6. Requisitos não-funcionais

- **Acessibilidade (WCAG 2.1 AA):** contraste de texto ≥ 4.5:1; navegação por teclado funcional; não depender só de cor; `alt` em imagens; `aria-current` em filtros selecionados.
- **Performance:** manter Core Web Vitals; `loading="lazy"` para imagens fora da dobra; `fetchPriority="high"` para hero; sem impacto de bundle significativo.
- **Responsividade:** atalhos rápidos, tipografia e cards devem funcionar em mobile/tablet/desktop.
- **SEO on-page:** preservar meta tags, headings hierárquicos (um único `h1` por página), dados estruturados JSON-LD e URLs canônicas já implementados.
- **Consistência:** respeitar `docs/padroes-codigo.md` (named exports, `cn()`, `cva`, Tailwind).

---

## 7. Sistema de design proposto (resumo)

| Elemento          | Atual                                  | Proposto                                                                |
| ----------------- | -------------------------------------- | ----------------------------------------------------------------------- |
| Título editorial  | Cormorant Garamond `clamp(3.2–5.8rem)` | Manter apenas em hero/posicionamento/seções principais                  |
| Título funcional  | (mesma serifada)                       | DM Sans 600/700, `1.1–1.5rem`                                           |
| Corpo / descrição | DM Sans                                | Manter                                                                  |
| Microtexto        | `0.58–0.67rem`, `ls 0.19em`            | `≥0.72rem`, `ls 0.10–0.14em`, contraste AA                              |
| Cards             | estética única                         | 5 variantes por tipo (produto, conteúdo, documento, fonte externa, CTA) |
| Estados           | ativo + hover parcial                  | hover/focus/active/selected/loading/success/error                       |

## 8. Dependências e pendências

| Item                                         | Bloqueia | Responsável                                 | Status                                                 |
| -------------------------------------------- | -------- | ------------------------------------------- | ------------------------------------------------------ |
| PDF de portfólio ("Baixar portfólio")        | RF-01    | Equipe comercial/marketing (fornecer asset) | Pendente (botão com badge "Em breve")                  |
| Certificações vigentes ("Ver certificações") | RF-01    | Diretoria/Qualidade (confirmar)             | Contornado: direcionado a Qualidade & documentos       |
| Imagens/detalhes por produto                 | RF-06    | Geração de assets / fotografia              | Concluído (detalhes visuais por ingrediente aplicados) |
| Regenerar imagem do cremor de tártaro        | RF-06    | Geração de assets                           | Concluído (hero-cremor-tartaro.jpg gerada e publicada) |
| Revisão editorial das mensagens RF-02        | RF-02    | Editorial Agent                             | Concluído (mensagens objetivas validadas)              |

> ⚠️ **REGRA 6:** "Ver certificações" não pode ser publicado sem confirmação documental das certificações vigentes. Até a confirmação, o atalho deve apontar para a seção de Qualidade/Documentos institucionais ou ser omitido, **nunca** exibir logomarcas de certificação não comprovadas.

---

## 9. Regras editoriais aplicáveis

1. Fatos de capacidade, clientes e exportações não podem ser apresentados como atuais sem confirmação documental.
2. A mensagem RF-02 #3 ("…escala…") deve ser redigida para **não** implicar capacidade produtiva confirmada — foco em "atendimento/suporte", não em volume.
3. Dados históricos seguem com data, fonte e rótulo de registro histórico.
4. Todo conteúdo passa por revisão do Editorial Agent antes de produção.
5. Certificações e logomarcas de premiação exigem autorização/validação (ver GUIA e pendências).

---

## 10. Critérios de aceite

1. Os 5 atalhos de acesso rápido aparecem no início da home e navegam corretamente (os que dependem de assets/validação ficam condicionados às pendências do §8).
2. As mensagens objetivas (RF-02) estão publicadas e revisadas editorialmente.
3. Tipografia display restrita a hero/posicionamento; títulos de cards e dados técnicos em fonte neutra.
4. Microtextos com tamanho ≥ ~0.72rem, `letter-spacing` reduzido e contraste AA.
5. Os 5 tipos de card são visualmente distinguíveis e exibem os metadados corretos.
6. Portfólio com detalhe visual específico por ingrediente (quando assets disponíveis).
7. Estados interativos (hover/focus/active/selected/loading/success/error) presentes e consistentes, com destaque para os filtros do blog.
8. `pnpm check`, `pnpm format` e `pnpm build` sem erros.
9. Validação de acessibilidade (navegação por teclado + contraste) aprovada pelo QA Agent.

---

## 11. Métricas de sucesso

- Redução do tempo até a primeira ação comercial (clique em atalho/CTA) na home.
- Aumento da taxa de clique nos atalhos rápidos ("Conhecer produtos", "Falar com vendas").
- Redução da taxa de rejeição da home.
- Nenhuma regressão de acessibilidade (manter/atingir WCAG AA) e de Core Web Vitals.

---

## 12. Riscos e mitigação

| Risco                                          | Mitigação                                                                           |
| ---------------------------------------------- | ----------------------------------------------------------------------------------- |
| Publicar "certificações" sem validação         | Bloquear via §8; apontar para Qualidade/Documentos até confirmação                  |
| "Escala" interpretada como claim de capacidade | Revisão editorial; redigir como atendimento/suporte                                 |
| Diferenciação de cards quebrar identidade      | Variantes com mesma base de paleta/raio/sombra                                      |
| Impacto de performance com novas imagens       | `lazy` + otimização + `fetchPriority` no hero                                       |
| Regressão visual em outras páginas             | Aplicar mudanças de token global com revisão em Home/Produtos/Produto/Blog/BlogPost |

---

## 13. Fases de execução e entregas

- **Fase 0 — Aprovação:** este PRD aprovado pelo cliente.
- **Fase 1 — Design tokens e tipografia:** normalizar tokens no `index.css` (RF-03, RF-04).
- **Fase 2 — Atalhos e mensagens:** hero + faixa de atalhos + mensagens objetivas na Home (RF-01, RF-02).
- **Fase 3 — Sistema de cards:** variantes por tipo em ProductCard, blog, documentos, fontes externas, CTA (RF-05).
- **Fase 4 — Imagens de produto:** assets/detalhes por ingrediente (RF-06).
- **Fase 5 — Estados interativos:** filtros, busca, links e botões (RF-07).
- **Fase 6 — QA:** `pnpm check`, `pnpm format`, `pnpm build`, acessibilidade, revisão editorial.
- **Fase 7 — Melhoria e Otimização da Imagem Aérea Hero (28/10/2026):**
  - Tratamento visual com IA da fotografia aérea da planta industrial da Tecnovin no Vale dos Vinhedos (Bento Gonçalves - RS), mantendo 100% de fidelidade estrutural (galpões, telhados, torre central, tanques e acessos).
  - Correção da água do lago central (substituição do preenchimento chapado por textura realista de água com reflexos sutis do céu e da vegetação).
  - Correção da distorção de lente grande-angular no horizonte, nitidez aprimorada e equilíbrio de cores/iluminação natural.
  - Exportação otimizada para web em `client/public/images/tecnovin-vista-aerea-planta-industrial-bento-goncalves.webp` (175 KB, meta < 200 KB) e fallback `.jpg`.
  - Aplicação na seção Hero de `client/src/pages/Home.tsx` com `<picture>`, atributos de LCP (`loading="eager"`, `fetchPriority="high"`, `decoding="async"`, `width`/`height` explícitos), `alt` descritivo alinhado ao `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`, reforço de contraste no `.hero-overlay` (`client/src/index.css`) e preload no `client/index.html`.

**Entregas (principais):**

- `client/src/index.css` (tokens, variantes e contraste do `.hero-overlay`)
- `client/src/pages/Home.tsx`, `Produtos.tsx`, `Produto.tsx`, `Blog.tsx`, `BlogPost.tsx`
- `client/index.html` (preload da imagem Hero LCP)
- `client/src/components/ProductCard.tsx`, `ProductHero.tsx`, `FichaTecnica.tsx`, `SiteHeader.tsx`
- `client/public/images/tecnovin-vista-aerea-planta-industrial-bento-goncalves.webp` (e `.jpg`)
- `client/public/images/produtos/` (novos assets)
- `plans/plan-007-mudanca-apresentacao-visual.md` (este documento)

---

## 14. Validação final (checklist)

- [x] PRD aprovado pelo cliente
- [x] Mensagens RF-02 revisadas pelo Editorial Agent
- [x] Tipografia display restrita a hero/posicionamento
- [x] Microtextos legíveis (tamanho/espaçamento/contraste AA)
- [x] 5 tipos de card diferenciados com metadados corretos
- [x] Detalhes visuais por produto aplicados (conforme assets disponíveis)
- [x] Estados interativos completos (destaque para filtros do blog)
- [x] `pnpm check` sem erros
- [x] `pnpm format` aplicado
- [x] `pnpm build` sem erros
- [x] Validação de acessibilidade (teclado + contraste)
- [x] Responsividade mobile/tablet/desktop validada

---

## 15. Referências

- `agents.md` — regras de funcionamento do projeto (REGRA 1–9)
- `docs/diretrizes-arquiteturais.md` — princípios e padrões de código
- `docs/padroes-codigo.md` — convenções TypeScript/React/Tailwind
- `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md` — regras editoriais e fontes
- `docs/dossie_Tecnovin/` — base de conhecimento canônica da empresa
- `client/src/pages/Home.tsx`, `Produtos.tsx`, `Produto.tsx`, `Blog.tsx`, `BlogPost.tsx` — implementação atual
- `client/src/components/*.tsx` e `client/src/index.css` — componentes e estilos atuais
- `plans/plan-005-paginas-produto.md` e `plans/plan-006-paginas-artigos-blog.md` — escopo já entregue
