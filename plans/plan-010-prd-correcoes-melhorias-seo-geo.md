# PRD — Otimização Técnica de SEO e GEO (AI Search)

**ID:** plan-010-prd-correcoes-melhorias-seo-geo  
**Tipo:** PRD (Product Requirements Document)  
**Status:** Concluído  
**Data:** 29/10/2026  
**Agente Coordenador:** Arquiteto de Sistema (`agents/arquiteto.md`)  
**Agentes Envolvidos:** Frontend Agent (`agents/frontend.md`), Editorial Agent (`agents/editorial.md`), Backend Agent (`agents/backend.md`), QA Agent (`agents/qa.md`)  
**Skills Acionadas:** `seo-onpage`, `seo-schema`, `seo-ai-search`, `seo-audit`, `editorial-conteudo`, `react-shadcn`, `acessibilidade-wcag`, `performance-web`  
**Base Documental:** `AGENTS.md`, `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`, `docs/conteudo/01-dados-da-empresa.md`, Relatório Automarticles (29/10/2026)

---

## 1. Contexto e Diagnóstico Executivo

Em **29/10/2026**, foi realizado o diagnóstico automatizado de **SEO (Ranquear no Google)** e **GEO (Ser citado pelas IAs — Generative Engine Optimization)** sobre a URL de homologação/produção `https://site-tecnovin.vercel.app/`.

### Pontuação Atual

- **Ranquear no Google (SEO):** `76 / 100` — **3 erros críticos** a corrigir, **5 alertas** de atenção, **15 itens aprovados**.
- **Ser citado pelas IAs (GEO):** `61 / 100` — **2 erros críticos** a corrigir, **3 alertas** de atenção, **4 itens aprovados**.

### Causa Raiz Técnica (Análise Arquitetural)

A investigação no código-fonte revelou que **muitos dos problemas apontados derivam de dois fatores estruturais interligados**:

1. **Rewrite Catch-All da SPA (`vercel.json`) + Ausência de arquivos em `client/public/`:**
   - Atualmente, `robots.txt`, `sitemap.xml`, `llms.txt` e `favicon` **não existem** em `client/public/`.
   - Como o `vercel.json` possui a regra `"source": "/(.*)", "destination": "/index.html"`, qualquer requisição para `/robots.txt`, `/sitemap.xml` ou `/llms.txt` retorna o próprio `index.html` com status `HTTP 200`.
   - **Consequência no relatório:**
     - O validador tentou ler `/robots.txt` e encontrou 87 linhas de HTML (`87 linha(s) inválida(s)`).
     - O validador tentou ler `/sitemap.xml` e recebeu HTML em vez de XML (`HTTP 200 ou XML inválido`).
     - O validador requisitou `/llms.txt`, recebeu status 200 (com o bundle/HTML) e deu um **falso positivo** (`presente - 187492 caracteres`), quando na verdade o arquivo `llms.txt` estruturado em Markdown ainda precisa ser criado.

2. **Renderização Exclusiva no Cliente (CSR) em `client/index.html` e Ausência de SEO na `Home.tsx`:**
   - Enquanto `Produtos.tsx`, `Produto.tsx` e `BlogPost.tsx` já injetam `<title>`, `<meta>`, `<link rel="canonical">` e `<JsonLd>` via React 19, as páginas **`Home.tsx` (`/`)** e **`Blog.tsx` (`/blog`)** não possuem tags de SEO nem dados estruturados.
   - Mais importante: crawlers de IA (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `OAI-SearchBot`) e validadores estáticos de SEO **não executam JavaScript** ao inspecionar a URL inicial. Eles leem apenas o `client/index.html` cru, que hoje contém `<div id="root"></div>` vazio (gerando o erro crítico de GEO: _"44 caracteres no HTML inicial — invisível pra IA"_) e não possui tags Open Graph, Twitter Card, Canonical, Favicon nem JSON-LD estático no `<head>`.

---

## 2. Objetivos e Metas (KPIs)

1. **Elevar o Score de SEO (Google) de `76` para `≥ 95/100`**, zerando todos os 3 erros críticos e os 5 alertas de atenção.
2. **Elevar o Score de GEO (Citação por IAs) de `61` para `≥ 92/100`**, zerando os 2 erros críticos e endereçando os 3 alertas e itens não aplicáveis (`FAQPage`).
3. **Garantir 100% de conformidade com o `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`**, sem utilizar claims proibidos (como capacidade de 270 mil t/ano ou nomes de clientes históricos sem validação) em metadados, schemas ou `llms.txt`.
4. **Manter a stack oficial intacta** (React 19 + TypeScript + Vite + Tailwind CSS v4 + Wouter + Express — **REGRA 4** do `AGENTS.md`).

---

## 3. Mapeamento Completo: Diagnóstico × Requisitos do PRD

| Categoria          | Item do Relatório                                              | Status Atual      | Requisito no PRD                                                                                                                  | Prioridade |
| :----------------- | :------------------------------------------------------------- | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :--------: |
| **SEO · Corrigir** | `robots.txt` válido (87 linhas inválidas)                      | 🔴 Erro           | **RF-01** — Criar `client/public/robots.txt` + ajustar `vercel.json`                                                              |   **P0**   |
| **SEO · Corrigir** | `Sitemap.xml` válido (HTTP 200 ou XML inválido)                | 🔴 Erro           | **RF-02** — Criar `client/public/sitemap.xml` com as 16 URLs canônicas                                                            |   **P0**   |
| **SEO · Corrigir** | Open Graph e Twitter Card ausentes                             | 🔴 Erro           | **RF-03** — Implementar OG + Twitter Cards no `index.html` e por rota                                                             |   **P0**   |
| **GEO · Corrigir** | Conteúdo no HTML cru (44 caracteres no HTML inicial)           | 🔴 Erro           | **RF-04** — Incluir fallback semântico estático dentro de `<div id="root">` no `index.html`                                       |   **P0**   |
| **GEO · Corrigir** | `Organization` + `WebSite` schema ausentes                     | 🔴 Erro           | **RF-05** — Injetar JSON-LD `@graph` (`Organization`, `LocalBusiness`, `WebSite`, `WebPage`) no `index.html` e `Home.tsx`         |   **P0**   |
| **SEO · Atenção**  | Tamanho do título (44 chars — ideal 50 a 60)                   | 🟠 Atenção        | **RF-03** — Ajustar `<title>` da Home para **56 caracteres**                                                                      |   **P1**   |
| **SEO · Atenção**  | Tamanho da meta description (113 chars — ideal 120 a 160)      | 🟠 Atenção        | **RF-03** — Ajustar `description` da Home para **152 caracteres**                                                                 |   **P1**   |
| **SEO · Atenção**  | Sitemap declarado no `robots.txt`                              | 🟠 Atenção        | **RF-01** — Incluir diretiva `Sitemap:` e regras para bots de IA no `robots.txt`                                                  |   **P1**   |
| **SEO · Atenção**  | Favicon ausente                                                | 🟠 Atenção        | **RF-06** — Criar `favicon.svg`, `favicon.ico` e `apple-touch-icon.png` com identidade Tecnovin                                   |   **P1**   |
| **SEO · Atenção**  | `Organization` / `WebSite` ausentes                            | 🟠 Atenção        | **RF-05** — Resolvido pelo mesmo JSON-LD unificado da Home                                                                        |   **P1**   |
| **GEO · Atenção**  | Entidade (`sameAs`) ausente                                    | 🟠 Atenção        | **RF-05** — Adicionar `sameAs` e identificadores oficiais (CNPJ/DUNS/fontes públicas) no Schema `Organization`                    |   **P1**   |
| **GEO · Atenção**  | Schema da página (`WebPage`, `FAQPage`) ausente                | 🟠 Atenção        | **RF-05 / RF-08** — Adicionar `WebPage` e `FAQPage` na Home e `CollectionPage` em `/produtos` e `/blog`                           |   **P1**   |
| **GEO · Atenção**  | About/Contato + marca (`Organization: não`)                    | 🟠 Atenção        | **RF-05** — Vincular `contactPoint`, `address`, `telephone` e `email` no `Organization`                                           |   **P1**   |
| **SEO · N/A**      | `rel="canonical"` self-referential ausente na Home e Blog      | ⚪ N/A            | **RF-03 / RF-09** — Adicionar `<link rel="canonical">` estático no `index.html` e dinâmico em todas as rotas + padronizar domínio |   **P1**   |
| **SEO · Verde**    | Links quebrados (`21 checados · 2 inconclusivos`)              | 🟡 Alerta leve    | **RF-10** — Auditar e corrigir links para PDFs inexistentes (`/manus-storage/*.pdf`) e links externos                             |   **P2**   |
| **GEO · Verde**    | Arquivo `llms.txt` (falso positivo de 187.492 chars)           | 🟡 Falso positivo | **RF-07** — Criar `client/public/llms.txt` real em Markdown estruturado para LLMs                                                 |   **P1**   |
| **GEO · Opcional** | `FAQ na página (FAQPage)` e Tabelas comparativas (`0 tabelas`) | ⚪ Oportunidade   | **RF-08** — Adicionar tabela comparativa de portfólio + seção de FAQ institucional com schema `FAQPage` na Home                   |   **P2**   |

---

## 4. Requisitos Funcionais e Especificações Técnicas

### RF-01 — Criação de `robots.txt` Válido e Configuração de Rotas Estáticas (`P0`)

**Problema:** O acesso a `/robots.txt` cai no fallback SPA do `vercel.json` e devolve 87 linhas de HTML (`index.html`).  
**Solução:**

1. Criar `client/public/robots.txt` com sintaxe 100% válida, liberando o rastreamento geral e declarando explicitamente os crawlers de busca e IA (`Googlebot`, `Bingbot`, `OAI-SearchBot`, `ChatGPT-User`, `GPTBot`, `ClaudeBot`, `Claude-SearchBot`, `PerplexityBot`, `Google-Extended`, `CCBot`).
2. Declarar a diretiva `Sitemap:` ao final do arquivo.
3. Ajustar a regex de `rewrites` em `vercel.json` para garantir que arquivos estáticos na raiz (`robots.txt`, `sitemap.xml`, `llms.txt`, `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `site.webmanifest`) nunca sofram fallback para `/index.html` caso haja cache ou falha de resolução.

**Conteúdo especificado para `client/public/robots.txt`:**

```text
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

Sitemap: https://site-tecnovin.vercel.app/sitemap.xml
```

> 📌 **Nota sobre Domínio (ver Decisões em Aberto §8):** Quando o domínio definitivo `https://www.tecnovin.com.br` apontar para a Vercel, a linha `Sitemap:` e a constante central `SITE_URL` serão atualizadas em um único ponto.

---

### RF-02 — Criação de `sitemap.xml` Válido e Completo (`P0`)

**Problema:** `/sitemap.xml` retorna HTML 200 inválido, impedindo também que a ferramenta meça **Volume de conteúdo** e **Frequência de postagem** (página 3 do relatório).  
**Solução:** Criar `client/public/sitemap.xml` seguindo o protocolo oficial `http://www.sitemaps.org/schemas/sitemap/0.9`, listando todas as **16 URLs canônicas** públicas do site com `<loc>`, `<lastmod>`, `<changefreq>` e `<priority>`:

- **Páginas Principais (3):**
  - `/` (`priority: 1.0`, `changefreq: weekly`)
  - `/produtos` (`priority: 0.9`, `changefreq: monthly`)
  - `/blog` (`priority: 0.8`, `changefreq: weekly`)
- **Páginas de Produtos (7):**
  - `/produtos/concentrado-de-uva` (`priority: 0.8`)
  - `/produtos/concentrado-de-maca` (`priority: 0.8`)
  - `/produtos/concentrado-de-laranja` (`priority: 0.8`)
  - `/produtos/concentrado-de-limao` (`priority: 0.8`)
  - `/produtos/concentrado-de-acerola` (`priority: 0.8`)
  - `/produtos/concentrado-de-abacaxi` (`priority: 0.8`)
  - `/produtos/cremor-de-tartaro` (`priority: 0.7`)
- **Artigos do Blog (6):**
  - `/blog/premio-exportacao-rs-2018` (`priority: 0.7`)
  - `/blog/tecnovitis-2023` (`priority: 0.7`)
  - `/blog/o-ingrediente-certo-carrega-uma-historia` (`priority: 0.7`)
  - `/blog/mapa-de-possibilidades-uva-maca-laranja` (`priority: 0.7`)
  - `/blog/o-valor-de-saber-de-onde-vem-cada-escolha` (`priority: 0.7`)
  - `/blog/formulacao-equilibrio-sabor-e-escala` (`priority: 0.7`)

---

### RF-03 — Otimização de Title, Meta Description, Canonical, Open Graph e Twitter Cards (`P0` / `P1`)

**Problemas apontados no relatório:**

- **Title da Home com 44 caracteres** (`Tecnovin — Ingredientes que elevam o natural`), abaixo da faixa ideal de **50 a 60 caracteres**.
- **Meta Description da Home com 113 caracteres**, abaixo da faixa ideal de **120 a 160 caracteres**.
- **Open Graph e Twitter Card ausentes** no HTML inicial (`Open Graph: ausente · Twitter Card: ausente`).
- **Canonical (`rel="canonical"`) ausente** no HTML inicial da Home e na página `/blog`.

**Solução:**

1. Criar uma constante centralizada `SITE_URL` em `client/src/const.ts` (ou `client/src/lib/seo.ts`) e um componente reutilizável `<SeoHead />` para padronizar todas as rotas (`Home.tsx`, `Blog.tsx`, `BlogPost.tsx`, `Produtos.tsx`, `Produto.tsx`).
2. Atualizar `client/index.html` e `Home.tsx` com os metadados calibrados dentro das faixas exatas do diagnóstico:

| Meta Tag                     | Valor Proposto (Validado pelo Guia Editorial)                                                                                                              |     Contagem      | Meta do Relatório  |
| :--------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------: | :----------------: | ---------------- |
| **`<title>` (Home)**         | `Tecnovin do Brasil — Concentrados de Frutas B2B no RS`                                                                                                    |   **53 chars**    |  ✅ 50 a 60 chars  |
| **`description` (Home)**     | `Tecnovin do Brasil: sucos concentrados de uva, maçã, laranja, limão, acerola e abacaxi para a indústria de alimentos e bebidas no Vale dos Vinhedos, RS.` |   **153 chars**   | ✅ 120 a 160 chars |
| **`<title>` (Blog)**         | `Blog e Conteúdos — Tecnovin do Brasil                                                                                                                     | Ingredientes B2B` |    **56 chars**    | ✅ 50 a 60 chars |
| **`description` (Blog)**     | `Artigos técnicos, memória institucional e análises sobre sucos concentrados de frutas, formulação industrial e rastreabilidade no Vale dos Vinhedos, RS.` |   **152 chars**   | ✅ 120 a 160 chars |
| **`<title>` (Produtos)**     | `Portfólio de Sucos Concentrados B2B — Tecnovin do Brasil`                                                                                                 |   **56 chars**    |  ✅ 50 a 60 chars  |
| **`description` (Produtos)** | `Concentrados de suco de uva, maçã, laranja, limão, acerola e abacaxi para a indústria de alimentos e bebidas. Fornecedor B2B no Vale dos Vinhedos, RS.`   |   **150 chars**   | ✅ 120 a 160 chars |

3. Incluir no `<head>` de `client/index.html` (e atualizar dinamicamente via `<SeoHead />` em cada rota):
   - `<link rel="canonical" href="https://site-tecnovin.vercel.app/" />`
   - **Open Graph completo:** `og:type`, `og:site_name`, `og:locale` (`pt_BR`), `og:title`, `og:description`, `og:url`, `og:image` (`/images/tecnovin-vista-aerea-planta-industrial-bento-goncalves.jpg`), `og:image:width` (`1376`), `og:image:height` (`768`), `og:image:alt`.
   - **Twitter Card completo:** `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`, `twitter:image:alt`.

4. Revisar e ajustar os títulos e descrições em `client/src/lib/produtos.ts` e `client/src/lib/artigos.ts` para que todos fiquem entre **50–60 chars** (title) e **120–160 chars** (description).

---

### RF-04 — Conteúdo Semântico no HTML Cru para Crawlers de IA (`P0` · GEO)

**Problema:** O relatório de GEO apontou erro vermelho crítico:

> _"Conteúdo no HTML cru (não só JS): 44 caracteres no HTML inicial (pode depender de JavaScript, invisível pra IA). Crawlers de IA não rodam JavaScript. Seu conteúdo principal precisa estar no HTML inicial."_

**Solução Arquitetural (Sem quebrar a SPA React 19):**
Inserir dentro de `<div id="root">...</div>` em `client/index.html` o esqueleto semântico estático da página inicial (`<header>`, `<main>`, `<h1>`, proposta de valor B2B, lista dos 6 concentrados de frutas, tabela resumo de especificações, seção Sobre/Origem no Vale dos Vinhedos, perguntas frequentes e `<footer id="contato">` com endereço e telefone oficiais).

- **Como funciona:**
  1. Quando um crawler sem JS (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Automarticles`, `curl`) lê a URL, ele encontra imediatamente no HTML inicial mais de **2.500 caracteres** de conteúdo institucional rico, estruturado com `<h1>`, `<h2>`, listas `<ul>`, `<table>` e links `<a href="/produtos/...">` e `<a href="/blog/...">`.
  2. Quando o navegador de um usuário humano carrega a página, o `createRoot(document.getElementById("root")!).render(<App />)` do React 19 substitui instantaneamente o conteúdo interno de `#root` pela interface interativa completa, sem qualquer flicker visual ou impacto de layout.

---

### RF-05 — Dados Estruturados JSON-LD (`Organization`, `WebSite`, `LocalBusiness`, `WebPage` e `sameAs`) (`P0` / `P1`)

**Problemas apontados no relatório:**

- **SEO (Atenção):** `Organization / WebSite: sem Organization nem WebSite`
- **SEO (N/A):** `Dados estruturados (JSON-LD): nenhum JSON-LD` (na Home)
- **GEO (Corrigir):** `Organization + WebSite schema: Organization: não · WebSite: não`
- **GEO (Atenção):** `Entidade (sameAs): sem sameAs (Wikipedia/Wikidata/redes)`
- **GEO (Atenção):** `Schema da página: sem schema de tipo de página (WebPage, Product, Service, FAQPage)`
- **GEO (Atenção):** `About/Contato + marca: About/Contato: sim · Organization: não`

**Solução:**
Incluir diretamente no `<head>` do `client/index.html` (para leitura sem JS) e manter sincronizado nas rotas via `JsonLd.tsx` um bloco JSON-LD unificado usando `@graph` com dados 100% fundamentados em `docs/conteudo/01-dados-da-empresa.md`:

1. **`Organization` & `FoodEstablishment` / `LocalBusiness`:**
   - `@id`: `"https://site-tecnovin.vercel.app/#organization"`
   - `name`: `"Tecnovin do Brasil"`
   - `legalName`: `"Tecnovin do Brasil Ltda."`
   - `alternateName`: `["TECNOVIN-SUMABRAS", "Tecnovin"]`
   - `taxID`: `"92.320.233/0001-90"`
   - `foundingDate`: `"1988-09-12"`
   - `url`: `"https://site-tecnovin.vercel.app/"`
   - `logo` & `image`: URLs absolutas para o logo e a foto aérea da planta no Vale dos Vinhedos
   - `address`: `Linha Leopoldina, s/n, Km 6 — Distrito Vale dos Vinhedos, Bento Gonçalves, RS, CEP 95711-970, BR`
   - `contactPoint`: Telefone `+55-54-2102-1999`, e-mail `tecnovin@tecnovin.com.br`, `contactType: "sales"` / `"customer service"`, `areaServed: "BR"`, `availableLanguage: ["Portuguese", "English"]`
   - `sameAs`: Links de ancoragem de entidade confirmados no dossiê (`https://www.tecnovin.com.br/`, `https://sucosuvalan.com.br/`, referências institucionais oficiais verificáveis).
2. **`WebSite` (com `SearchAction` apontando para a busca do Blog):**
   - `@id`: `"https://site-tecnovin.vercel.app/#website"`
   - `url`: `"https://site-tecnovin.vercel.app/"`
   - `name`: `"Tecnovin do Brasil"`
   - `publisher`: `{"@id": "https://site-tecnovin.vercel.app/#organization"}`
   - `potentialAction`: `SearchAction` com `target: "https://site-tecnovin.vercel.app/blog?q={search_term_string}"` (e suporte ao query param `?q=` em `Blog.tsx`).
3. **`WebPage` (Home) e `CollectionPage` (`/produtos` e `/blog`):**
   - Marca explicitamente o tipo da página para os motores de IA (`@type: "WebPage"`, `about: {"@id": "#organization"}`).

---

### RF-06 — Criação e Configuração de Favicon Multi-Formato (`P1`)

**Problema:** `Favicon: sem favicon`.  
**Solução:**

1. Criar `client/public/favicon.svg` vetorizado seguindo a identidade visual da marca (monograma serifado **"T"** em creme `#f7f4ef` / dourado `#d4b17d` sobre fundo vinho institucional `#351820` com cantos arredondados).
2. Gerar também `client/public/favicon.ico` (32×32) e `client/public/apple-touch-icon.png` (180×180) para compatibilidade total com Google Search, Safari/iOS e agregadores de IA.
3. Declarar no `<head>` do `client/index.html`:
   ```html
   <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
   <link rel="icon" type="image/x-icon" href="/favicon.ico" />
   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
   ```

---

### RF-07 — Criação do Arquivo `llms.txt` Autêntico em Markdown (`P1` · GEO)

**Problema:** O diagnóstico reportou `llms.txt presente (187492 caracteres)` apenas porque a requisição a `/llms.txt` caiu no rewrite da SPA. Quando um agente de IA real (ChatGPT, Claude, Perplexity) lê `/llms.txt`, ele recebe código HTML/JS em vez do guia em Markdown.  
**Solução:** Criar `client/public/llms.txt` seguindo o padrão `llms.txt` e a skill `skills/seo-ai-search.md`, contendo:

- Identificação clara da **Tecnovin do Brasil Ltda.** (CNPJ `92.320.233/0001-90`, fundada em 1988, localizada no Vale dos Vinhedos, Bento Gonçalves/RS).
- Resumo claro da proposta de valor B2B (fabricação de sucos concentrados de frutas para indústrias de alimentos, bebidas, cosméticos e químicos).
- Ficha resumida dos 6 concentrados do portfólio ativo (Uva GJC 68° Brix, Maçã AJC 70° Brix, Laranja FCOJ 65° Brix, Limão 44° Brix, Acerola, Abacaxi) + Cremor de Tártaro (rotulado como registro histórico).
- Reconhecimentos públicos datados e com fonte (46º Prêmio Exportação RS 2018 — Destaque Setorial Bebidas; 5ª Tecnovitis 2023 — Patrocinadora Prata; cooperação técnica com Embrapa Uva e Vinho).
- Diretrizes de citação para IAs (separação explícita entre dados atuais e registros históricos, conforme o `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`).
- Mapa de links diretos para todas as páginas de produtos e artigos do blog.

---

### RF-08 — Tabela Comparativa de Portfólio + Seção FAQ com Schema `FAQPage` na Home (`P2` · GEO)

**Problema / Oportunidade no Relatório (Página 4):**

- `Listas e tabelas: 1 lista(s), 0 tabela(s) — Listas e tabelas (features, comparativos) são fáceis de extrair e citar por uma IA.`
- `FAQ na página (FAQPage): sem FAQ/FAQPage (opcional) — Uma seção de FAQ com schema FAQPage entrega perguntas e respostas prontas pra IA citar.`

**Solução:**

1. **Tabela Comparativa Técnica na Home (`Home.tsx`):** Na seção de portfólio/soluções (`#solucoes`), incluir uma tabela semântica (`<table>`, `<thead>`, `<tbody>`) limpa e elegante comparando as 6 famílias de concentrados da Tecnovin (`Ingrediente`, `Sigla Comercial`, `Graus Brix / Especificação`, `Armazenamento`, `Principais Aplicações Industriais`), com dados extraídos exclusivamente de `client/src/lib/produtos.ts`.
2. **Seção de Perguntas Frequentes (FAQ) na Home (`Home.tsx`) + Schema `FAQPage`:** Adicionar antes da seção de contato uma seção de FAQ institucional B2B com 5 perguntas estratégicas (ex.: _"Quais concentrados de frutas a Tecnovin produz?"_, _"Onde fica a planta industrial da Tecnovin?"_, _"Quais são os formatos de embalagem e fornecimento B2B?"_, _"Como solicitar fichas técnicas, laudos ou amostras comerciais?"_, _"A Tecnovin atende indústrias de quais segmentos?"_) acompanhada do respectivo schema `FAQPage` no JSON-LD.

---

### RF-09 — Padronização de Domínio Canônico (`SITE_URL`) (`P1`)

**Problema:** Atualmente, `Produtos.tsx`, `Produto.tsx` e `BlogPost.tsx` usam `https://tecnovin.com.br` hardcoded nas tags `<link rel="canonical">` e `og:url`, enquanto o ambiente avaliado está em `https://site-tecnovin.vercel.app`. Isso gera divergência de canonical (onde a página avaliada aponta para outro domínio).  
**Solução:**

1. Criar `SITE_URL` centralizado em `client/src/lib/seo.ts` (lendo `import.meta.env.VITE_SITE_URL` com fallback para `https://site-tecnovin.vercel.app` ou `https://www.tecnovin.com.br` conforme definição).
2. Garantir que **todas as rotas** (`Home`, `Produtos`, `Produto`, `Blog`, `BlogPost`) gerem `<link rel="canonical">` **self-referential** (apontando para a própria URL canônica da rota atual).

---

### RF-10 — Correção dos Links Inconclusivos / Quebrados (`P2`)

**Problema:** O relatório apontou `Links quebrados: 21 checado(s) · 2 inconclusivo(s)`.  
**Causa identificada no código (`Home.tsx` linhas 621 e 762):**
Existem dois links na Home que apontam para `/manus-storage/PoliticadeSeguranca_d15f670c.pdf` e `/manus-storage/PrincipiosdeCondutaparaFornecedor_84142fb6.pdf`. Porém, a pasta `client/public/manus-storage/` **não existe** no repositório, fazendo com que esses 2 links caiam no fallback HTML da SPA em vez de retornar um PDF válido.  
**Solução:**

- Verificar se os PDFs originais estão disponíveis para serem adicionados em `client/public/docs/` **ou** converter esses dois botões em modais/visualizadores de documento institucional ou âncoras para o conteúdo integral que já está transcrito nos próprios cards da página, eliminando links quebrados/inconclusivos.

---

## 5. Regras Editoriais Inegociáveis (Conformidade `AGENTS.md` — Regra 6 e Regra 9)

Toda implementação deste PRD obedecerá rigorosamente ao `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`:

1. **Proibido** incluir nos títulos, meta descriptions, FAQs, JSON-LD ou `llms.txt` a capacidade histórica de _"270 mil toneladas/ano"_ ou nomes de clientes como _"Coca-Cola, Nestlé, Maguary"_ como se fossem dados operacionais atuais.
2. **Permitido e recomendado:** Localização no Vale dos Vinhedos (Bento Gonçalves, RS), portfólio de 6 frutas (uva, maçã, laranja, limão, acerola e abacaxi), perfil B2B para indústria de alimentos e bebidas, dados cadastrais públicos da matriz (`CNPJ 92.320.233/0001-90`, fundação em `1988`), listagem no 46º Prêmio Exportação RS (2018) e patrocínio Prata da 5ª Tecnovitis (2023).
3. O **Cremor de Tártaro** deve manter seu aviso explícito de _"Registro histórico — status atual de fabricação não confirmado para 2026"_ tanto no `sitemap.xml`/`llms.txt` quanto na página individual.

---

## 6. Arquitetura da Solução e Arquivos Impactados

```text
tecnovin-institucional/
├── vercel.json                        # [MODIFY] Exceção para arquivos estáticos na raiz antes do rewrite SPA
├── client/
│   ├── index.html                     # [MODIFY] Title (53c), Description (153c), OG, Twitter, Canonical, Favicon, JSON-LD e HTML semântico inicial em #root
│   ├── public/
│   │   ├── robots.txt                 # [NEW] Regras de crawl + bots de IA + declaração de Sitemap
│   │   ├── sitemap.xml                # [NEW] XML válido com as 16 rotas canônicas e lastmod
│   │   ├── llms.txt                   # [NEW] Guia estruturado em Markdown para citação por IAs (GEO)
│   │   ├── favicon.svg                # [NEW] Favicon vetorial institucional Tecnovin ("T" vinho/dourado)
│   │   ├── favicon.ico                # [NEW] Favicon 32x32 para compatibilidade universal
│   │   └── apple-touch-icon.png       # [NEW] Ícone 180x180 para dispositivos Apple/mobile
│   └── src/
│       ├── lib/
│       │   ├── seo.ts                 # [NEW] Constante SITE_URL, schemas globais (Organization, WebSite, LocalBusiness) e helpers
│       │   ├── produtos.ts            # [MODIFY] Ajuste fino de tamanho de seo.title (50-60c) e seo.description (120-160c)
│       │   └── artigos.ts             # [MODIFY] Ajuste fino de tamanho de seo.title (50-60c) e seo.description (120-160c) + datas ISO
│       ├── components/
│       │   ├── SeoHead.tsx            # [NEW] Componente padronizado para Title, Description, Canonical, OG, Twitter e JsonLd
│       │   └── JsonLd.tsx             # [MODIFY] Suporte a @graph e IDs estáveis
│       └── pages/
│           ├── Home.tsx               # [MODIFY] <SeoHead />, Tabela comparativa de concentrados, Seção FAQ + FAQPage schema, correção dos 2 links PDF
│           ├── Blog.tsx               # [MODIFY] <SeoHead /> completo + suporte a query param ?q= do SearchAction
│           ├── BlogPost.tsx           # [MODIFY] Migração para <SeoHead /> + Twitter Cards + datas ISO no Article schema
│           ├── Produtos.tsx           # [MODIFY] Migração para <SeoHead /> + CollectionPage schema
│           └── Produto.tsx            # [MODIFY] Migração para <SeoHead /> + Twitter Cards
└── plans/
    └── plan-010-prd-correcoes-melhorias-seo-geo.md  # [NEW] Este PRD documentado
```

---

## 7. Plano de Execução em Fases

### Fase 1 — Infraestrutura de Crawlability e Indexação (`P0`)

- Criar `client/public/robots.txt`, `client/public/sitemap.xml` e `client/public/llms.txt`.
- Gerar `favicon.svg`, `favicon.ico` e `apple-touch-icon.png` em `client/public/`.
- Atualizar `vercel.json` para servir arquivos estáticos da raiz diretamente sem cair no rewrite SPA.

### Fase 2 — HTML Inicial para IAs (GEO) e Metadados Globais (`P0`)

- Criar `client/src/lib/seo.ts` e `client/src/components/SeoHead.tsx`.
- Atualizar `client/index.html` com `<title>` (53 chars), `<meta name="description">` (153 chars), Open Graph, Twitter Card, Canonical, Favicons, JSON-LD (`Organization`, `LocalBusiness`, `WebSite`, `WebPage`) e conteúdo semântico rico dentro de `<div id="root">`.

### Fase 3 — Otimização On-Page por Rota e Enriquecimento GEO na Home (`P1` / `P2`)

- Integrar `<SeoHead />` em `Home.tsx`, `Blog.tsx`, `BlogPost.tsx`, `Produtos.tsx` e `Produto.tsx`.
- Calibrar os tamanhos de `title` (50–60 chars) e `description` (120–160 chars) em `produtos.ts` e `artigos.ts`.
- Adicionar a **Tabela Comparativa de Concentrados** e a **Seção de FAQ com schema `FAQPage`** em `Home.tsx`.
- Corrigir os 2 links inconclusivos de PDF na seção de Qualidade da `Home.tsx`.

### Fase 4 — Auditoria de QA e Validação Final (`REGRA 5`)

- Executar `pnpm check` (TypeScript strict).
- Executar `pnpm format` (Prettier).
- Executar `pnpm build` e inspecionar `dist/public/` para confirmar a presença de `robots.txt`, `sitemap.xml`, `llms.txt`, `favicon.svg` e do conteúdo HTML inicial em `dist/public/index.html`.
- Validar acessibilidade (teclado/contraste na nova tabela e FAQ) e conformidade editorial.

---

## 8. Critérios de Aceite (Definition of Done)

- [x] `/robots.txt` responde com `Content-Type: text/plain`, zero linhas inválidas, crawlers de IA liberados e diretiva `Sitemap:` presente.
- [x] `/sitemap.xml` responde com `Content-Type: application/xml` válido contendo as 16 URLs do site.
- [x] `/llms.txt` responde com `Content-Type: text/plain; charset=utf-8` contendo o documento Markdown estruturado da Tecnovin.
- [x] `<title>` da Home possui entre **50 e 60 caracteres** (53 chars) e `meta description` possui entre **120 e 160 caracteres** (153 chars).
- [x] Todas as páginas possuem Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`), Twitter Card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) e `<link rel="canonical">` self-referential.
- [x] O HTML inicial (`client/index.html`) entregue sem JavaScript contém o texto institucional principal, headings, tabela, FAQ e JSON-LD (`Organization`, `LocalBusiness`, `WebSite`, `WebPage`, `FAQPage`) com `sameAs` e dados de contato completos.
- [x] Favicon aparece corretamente na aba do navegador e nos metadados.
- [x] Nenhum link retorna falso 200 ou 404 (corrigidos os 2 links de PDF na Home e o link legado do rodapé).
- [x] `pnpm check`, `pnpm format` e `pnpm build` executam com zero erros.
