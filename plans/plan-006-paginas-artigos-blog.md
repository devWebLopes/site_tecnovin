# Plan 006 — Páginas Individuais de Artigos do Blog

**Data:** 08/09/2026  
**Status:** Aprovado  
**Agente coordenador:** Arquiteto de Sistema

---

## Objetivo

Os cards do blog em `/blog` exibem título e resumo mas os links de "Continuar leitura" apontam para `#newsletter` (âncora local) ou para fontes externas. O objetivo é criar **rotas individuais para cada artigo** (`/blog/:slug`) com texto completo gerado a partir da base de conhecimento do dossiê Tecnovin, respeitando as regras editoriais vigentes.

---

## Problema atual

Em `Blog.tsx`, o CTA de cada card é:

```tsx
// posts COM source externo → abre site de terceiro
<a href={post.source} target="_blank" rel="noreferrer">
  Consultar fonte <ArrowUpRight />
</a>

// posts SEM source → vai para âncora da newsletter
<a href="#newsletter">
  Continuar leitura <ArrowUpRight />
</a>
```

Nenhum artigo carrega uma página interna real. O usuário cai na newsletter (artigos editoriais) ou sai do site (artigos de memória).

---

## Solução proposta

### Arquitetura de rotas

```
/blog              → Blog.tsx  (listagem — existente)
/blog/:slug        → BlogPost.tsx  (artigo individual — NOVO)
```

O padrão segue exatamente o modelo de `/produtos/:slug` → `Produto.tsx` já implementado no Plan-005.

### Estrutura de dados

Criar `client/src/lib/artigos.ts` como _source of truth_ dos artigos, análogo a `produtos.ts`. Cada artigo terá:

```ts
interface Artigo {
  slug: string;
  category: string;
  date: string;
  read: string;
  color: string;
  featured?: boolean;
  title: string;
  excerpt: string;
  source?: string; // URL externa de origem (artigos de memória)
  body: ArtigoSection[]; // seções do artigo
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

interface ArtigoSection {
  type: "paragraph" | "heading" | "quote" | "callout" | "list";
  content: string | string[];
  label?: string; // para callout (ex: "Fonte", "Registro histórico")
}
```

### Geração de conteúdo

Os 6 artigos já existentes na listagem (`Blog.tsx`) receberão conteúdo gerado **exclusivamente** a partir da base de conhecimento:

| #   | Slug                                        | Fonte dos dados                                        | Tipo                                        |
| --- | ------------------------------------------- | ------------------------------------------------------ | ------------------------------------------- |
| 1   | `premio-exportacao-rs-2018`                 | Dossiê de imprensa S6, GUIA_EDITORIAL §2               | Memória & notícias — com fonte jornalística |
| 2   | `tecnovitis-2023`                           | Dossiê de imprensa S9, GUIA_EDITORIAL §2               | Memória & notícias — com fonte pública      |
| 3   | `o-ingrediente-certo-carrega-uma-historia`  | Dossiê de atividade §4.2–4.6, posicionamento editorial | Perspectivas Tecnovin — autoral             |
| 4   | `mapa-de-possibilidades-uva-maca-laranja`   | `produtos.ts` (dados técnicos de todos os produtos)    | Portfólio — guia técnico                    |
| 5   | `o-valor-de-saber-de-onde-vem-cada-escolha` | Dossiê de atividade + parceria Embrapa + localg.a.p.   | Cadeia & origem — autoral                   |
| 6   | `formulacao-equilibrio-sabor-e-escala`      | Dossiê técnico de produtos (`produtos.ts`)             | Mercado & aplicações — educativo            |

### Regras editoriais (herdadas do GUIA_EDITORIAL_E_FONTES_TECNOVIN.md)

> ⚠️ **OBRIGATÓRIO em todos os artigos:**
>
> - Dados de capacidade (270 mil t/ano) e clientes (Coca-Cola, Nestlé) → **não publicar** como atuais
> - Dados históricos → obrigatoriamente com data e rótulo "Registro público · [ano]"
> - Artigos de memória → link visível para a fonte externa original
> - Dados técnicos de produto (Brix, acidez, embalagem) → apenas os que constam em `produtos.ts`
> - Artigos editoriais/autorais → linguagem de posicionamento, sem afirmações de capacidade ou clientes sem validação

---

## Arquivos a criar

### [NEW] `client/src/lib/artigos.ts`

Source of truth com os 6 artigos completos. Conteúdo gerado a partir dos dossiês. Cada artigo com:

- Metadados (slug, categoria, data, tempo de leitura, cor, destaque)
- `body[]` com seções de parágrafo, subtítulo, citação, callout e lista
- SEO (title, description, keywords)
- `source` para artigos de memória

### [NEW] `client/src/pages/BlogPost.tsx`

Página individual do artigo. Segue o padrão de `Produto.tsx`:

- `useParams<{ slug: string }>()` para resolver o artigo
- 404 elegante se slug inválido
- SEO meta tags dinâmicas (title, description, og:\*)
- JSON-LD `Article` + `BreadcrumbList`
- Navegação prev/next entre artigos (mesmo padrão de `ProductNav`)
- Link para fonte externa (artigos de memória)
- Seção de newsletter ao final (reaproveitada do `Blog.tsx`)

### [MODIFY] `client/src/App.tsx`

Adicionar rota:

```tsx
<Route path="/blog/:slug" component={BlogPost} />
```

### [MODIFY] `client/src/pages/Blog.tsx`

Substituir os links dos cards:

```tsx
// ANTES:
<a href={post.source} target="_blank">Consultar fonte</a>
<a href="#newsletter">Continuar leitura</a>

// DEPOIS:
<Link href={`/blog/${post.slug}`}>Continuar leitura</Link>
```

> Posts que antes apontavam para fonte externa passam a abrir a página interna, que exibe o texto completo **e** referencia a fonte original com link.

### [MODIFY] `client/src/index.css`

CSS para layout da página de artigo:

- `.blog-post-hero` — hero com cor temática (mesmo sistema `--color-wine`, `--color-olive` etc.)
- `.blog-post-body` — tipografia editorial de longa leitura
- `.blog-post-callout` — caixa de destaque para "Registro público", "Fonte", citações
- `.blog-post-quote` — citação tipograficamente destacada
- `.blog-post-nav` — navegação artigo anterior / próximo
- `.blog-post-source-box` — box de referência da fonte externa (artigos de memória)

---

## Conteúdo dos artigos (esboço)

### Artigo 1 — `premio-exportacao-rs-2018`

**Categoria:** Memória & notícias | **Cor:** wine | **Featured:** true

Baseado em: Dossiê de imprensa S6 (Jornal do Comércio, 17/05/2018) e GUIA_EDITORIAL §2

- Contextualização do 46º Prêmio Exportação RS (ADVB/RS)
- A Tecnovin do Brasil listada em Destaque Setorial — Bebidas
- Significado do reconhecimento no circuito exportador gaúcho
- Callout: rótulo "Registro público · 2018" + link para fonte
- Nota editorial: dados daquele período, não extrapolados para situação atual

### Artigo 2 — `tecnovitis-2023`

**Categoria:** Memória & notícias | **Cor:** olive

Baseado em: Dossiê de imprensa S9 (Gazeta News RS, 11/12/2023) e Prefeitura de BG

- A 5ª Tecnovitis: feira de viticultura e fruticultura em Bento Gonçalves
- Tecnovin e Suvalan como patrocinadoras na cota Prata
- Contexto do evento (6 mil visitantes, 150+ expositores)
- Callout: "Registro público · 2023" + links para fontes

### Artigo 3 — `o-ingrediente-certo-carrega-uma-historia`

**Categoria:** Perspectivas Tecnovin | **Cor:** coral

Artigo autoral/editorial — sem dados numéricos de capacidade:

- Reflexão sobre procedência e território como valores da cadeia de ingredientes
- Conexão com o Vale dos Vinhedos e a identidade da produção no Sul
- Parceria com produtores e cadeia de fruta temperada
- Posicionamento: diferencial não é só o produto, é a relação com a origem

### Artigo 4 — `mapa-de-possibilidades-uva-maca-laranja`

**Categoria:** Portfólio | **Cor:** amber

Guia técnico baseado em `produtos.ts`:

- Introdução ao portfólio de concentrados
- Seção por família de fruta: uva, maçã (AJC), laranja (FCOJ), limão, acerola, abacaxi
- Parâmetros técnicos resumidos (Brix, acidez, setores de uso)
- CTA: links para as páginas individuais de produto

### Artigo 5 — `o-valor-de-saber-de-onde-vem-cada-escolha`

**Categoria:** Cadeia & origem | **Cor:** forest

Artigo autoral sobre rastreabilidade e cadeia de fruta:

- Importância de conhecer a origem de ingredientes na formulação industrial
- Parceria com Embrapa Uva e Vinho (fato confirmado no dossiê)
- Localg.a.p.: participação da Tecnovin no programa (fontes confirmadas)
- Nota: participação no programa, não certificação de todos os produtos

### Artigo 6 — `formulacao-equilibrio-sabor-e-escala`

**Categoria:** Mercado & aplicações | **Cor:** gold

Artigo educativo para formuladores:

- O que considerar ao escolher uma base de fruta para bebidas
- Brix, acidez e ratio como parâmetros de decisão
- Exemplos dos produtos do portfólio como casos de escolha técnica
- Sem nomear clientes finais; foco em critérios de formulação

---

## JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[título]",
  "description": "[excerpt]",
  "author": { "@type": "Organization", "name": "Tecnovin do Brasil" },
  "publisher": {
    "@type": "Organization",
    "name": "Tecnovin do Brasil Ltda.",
    "url": "https://tecnovin.com.br"
  },
  "datePublished": "[data]",
  "url": "https://tecnovin.com.br/blog/[slug]"
}
```

---

## SEO por artigo

| Slug                                        | Title tag                                                       | Meta description                                                                                                     |
| ------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `premio-exportacao-rs-2018`                 | Prêmio Exportação RS 2018 — Tecnovin do Brasil                  | A Tecnovin do Brasil foi listada em Destaque Setorial — Bebidas na 46ª edição do Prêmio Exportação RS, em 2018.      |
| `tecnovitis-2023`                           | Tecnovitis 2023 — Tecnovin e Suvalan na feira de viticultura    | Tecnovin e Suvalan participaram como patrocinadoras Prata da 5ª Tecnovitis, em Bento Gonçalves, em dezembro de 2023. |
| `o-ingrediente-certo-carrega-uma-historia`  | O ingrediente certo também carrega uma história — Tecnovin      | Por que procedência, território e parceria importam tanto quanto o resultado no produto final.                       |
| `mapa-de-possibilidades-uva-maca-laranja`   | Uva, maçã, laranja e mais: um mapa de possibilidades — Tecnovin | Guia rápido pelas famílias de concentrados de fruta que ajudam a transformar ideias em produto.                      |
| `o-valor-de-saber-de-onde-vem-cada-escolha` | O valor de saber de onde vem cada escolha — Tecnovin            | Rastrear decisões é também construir relações mais transparentes ao longo da cadeia de ingredientes.                 |
| `formulacao-equilibrio-sabor-e-escala`      | Formulação: equilíbrio entre sabor e escala — Tecnovin          | Pontos para considerar ao escolher uma base de fruta para bebidas e alimentos industriais.                           |

---

## Navegação entre artigos

A página `BlogPost.tsx` exibirá navegação prev/next baseada na ordem de `artigos.ts`, reutilizando o padrão de `ProductNav`. Exemplo:

```
← Artigo anterior    Próximo artigo →
```

---

## Verificação

### Build

- `pnpm check` sem erros TypeScript
- `pnpm build` sem erros de bundle

### Manual

- [ ] Todas as 6 rotas `/blog/:slug` carregam corretamente
- [ ] 404 elegante para slug inválido (`/blog/xxx-invalido`)
- [ ] Links do `/blog` apontam para `/blog/:slug` (não mais para `#newsletter`)
- [ ] Artigos de memória exibem link para fonte externa
- [ ] Meta tags dinâmicas corretas em cada artigo
- [ ] JSON-LD Article válido (Google Rich Results Test)
- [ ] Responsividade mobile/tablet/desktop
- [ ] Sem dados históricos não rotulados

---

## Restrições editoriais

- **NÃO** publicar capacidade (270 mil t/ano) como dado atual
- **NÃO** citar clientes (Coca-Cola, Nestlé) sem validação atual
- **NÃO** afirmar que a localg.a.p. certifica todos os produtos
- **SEMPRE** rotular conteúdo histórico com data e fonte
- **SEMPRE** exibir link para fonte primária em artigos de memória

---

## Fontes da base de conhecimento

| Arquivo                                                           | Uso                                         |
| ----------------------------------------------------------------- | ------------------------------------------- |
| `docs/dossie_Tecnovin/Dossiê de imprensa.md`                      | Artigos 1 e 2 (Prêmio, Tecnovitis)          |
| `docs/dossie_Tecnovin/Dossiê de artigos e publicações.md`         | Artigos 3 e 5 (Embrapa, localg.a.p.)        |
| `docs/dossie_Tecnovin/Dossiê de atividade, produtos e mercado.md` | Artigos 4 e 6 (portfólio técnico)           |
| `client/src/lib/produtos.ts`                                      | Artigos 4 e 6 (dados técnicos já validados) |
| `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`                             | Regras editoriais para todos os artigos     |
