# SEO On-Page e Técnico

## Descrição

Habilidade para otimização técnica e on-page do site Tecnovin, com foco especial nas particularidades de uma **SPA React + Wouter** e no mercado **B2B brasileiro** de ingredientes para alimentos e bebidas.

## Contexto do Projeto

- **Stack**: React 19 + Vite + Wouter (SPA — renderização no cliente)
- **Mercado**: B2B Brasil — concentrados de suco (uva, maçã, laranja, limão, acerola, abacaxi)
- **Idioma**: Português (pt-BR)
- **Rotas atuais**: `/` (Home), `/blog` (Blog), `/404`

## ⚠️ Regra Editorial Inegociável

O SEO **NUNCA** pode contradizer o `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`:

- Não usar dados de capacidade (270 mil toneladas/ano), clientes (Coca-Cola, Nestlé, Maguary) ou exportações como claims atuais em title tags, meta descriptions ou headings.
- Dados históricos só com data, fonte e rótulo de "registro histórico".
- Claims permitidos: localização (Vale dos Vinhedos, Bento Gonçalves, RS), portfólio (6 frutas), perfil B2B, Prêmio Exportação RS 2018, patrocínio Tecnovitis 2023.

## Competências

### 1. Meta Tags por Rota (SPA)

Em SPA, as meta tags precisam ser gerenciadas dinamicamente por rota. Criar/atualizar no `index.html` e/ou via componente de gerenciamento de `<head>`:

```html
<!-- Home -->
<title>
  Tecnovin — Concentrados de Suco no Vale dos Vinhedos | Bento Gonçalves, RS
</title>
<meta
  name="description"
  content="Concentrados de uva, maçã, laranja, limão, acerola e abacaxi para a indústria de alimentos e bebidas. No Vale dos Vinhedos, Bento Gonçalves, RS."
/>

<!-- Blog -->
<title>Blog — Tecnovin | Notícias e Conteúdo sobre Ingredientes</title>
<meta
  name="description"
  content="Notícias, artigos e memória institucional da Tecnovin: concentrados de suco, viticultura e a cadeia de ingredientes no Rio Grande do Sul."
/>
```

**Diretrizes de title tag:**

- 50–60 caracteres como referência (não como limite rígido)
- Palavra-chave principal no início
- Marca "Tecnovin" incluída
- Único por página

**Diretrizes de meta description:**

- 150–160 caracteres como referência
- Incluir proposta de valor e call-to-action quando natural
- Único por página
- Coerente com o conteúdo visível

### 2. Estrutura de Headings

- Um `<h1>` descritivo por página, contendo o tema principal
- Hierarquia lógica: H1 → H2 → H3 (sem pular níveis)
- Headings descrevem conteúdo, não servem apenas para estilização
- Usar palavras-chave naturalmente, sem stuffing

### 3. Idioma e Localização

```html
<html lang="pt-BR"></html>
```

- Conteúdo em português brasileiro
- Sinais de localização: endereço no Vale dos Vinhedos, telefone, Bento Gonçalves/RS

### 4. URL Structure (Wouter)

```
✅ Boas URLs:
/ — Home
/blog — Blog
/blog/premio-exportacao-rs-2018 — Artigo (quando implementado)

❌ Evitar:
/?page=1
/blog?id=123
```

- URLs em lowercase, com hífens
- Descritivas e curtas
- Palavras-chave naturais quando aplicável

### 5. Crawlability para SPA

Pontos críticos para SPA React:

**robots.txt** (em `client/public/robots.txt`):

```text
User-agent: *
Allow: /

Sitemap: https://www.tecnovin.com.br/sitemap.xml
```

**Sitemap.xml** (em `client/public/sitemap.xml`):

- Incluir todas as rotas canônicas: `/`, `/blog`, e artigos do blog
- Atualizar `lastmod` quando o conteúdo mudar

**Renderização:**

- ⚠️ Como é SPA, o conteúdo principal deve estar acessível mesmo antes da hidratação completa do JS. Avaliar SSR/prerender se a indexação se mostrar problemática (decisão do Arquiteto).
- O servidor Express já serve `index.html` para todas as rotas (fallback SPA) — garantir que o conteúdo renderize rapidamente.

### 6. Imagens

```tsx
<img
  src="concentrado-suco-uva-vale-dos-vinhedos.webp"
  alt="Concentrado de suco de uva produzido no Vale dos Vinhedos"
  width={800}
  height={600}
  loading="lazy"
/>
```

- Nomes de arquivo descritivos com palavras-chave
- `alt` descritivo em todas as imagens (também exigido pela skill acessibilidade-wcag)
- Formato WebP/AVIF quando possível
- Lazy loading em imagens abaixo da dobra
- Dimensões explícitas (evita CLS — integração com performance-web)

### 7. Linkagem Interna

- Usar `Link` do Wouter (nunca `<a href>` para navegação interna)
- Âncoras descritivas: "conheça nosso portfólio de concentrados" em vez de "clique aqui"
- Blog deve linkar para a Home e vice-versa
- Breadcrumbs quando a estrutura se aprofundar

### 8. Palavras-chave-Alvo (B2B Brasil)

Pesquisa inicial de termos relevantes (validar com ferramentas):

- "concentrado de suco de uva"
- "ingredientes para indústria de bebidas"
- "concentrado de frutas B2B"
- "suco concentrado Vale dos Vinhedos"
- "fornecedor de concentrado de suco"
- "ingredientes para alimentos e bebidas RS"

**Regras:**

- Uma palavra-chave primária por página
- Alinhar title, H1 e URL
- Sem keyword stuffing (prejudica SEO tradicional e visibilidade em IA)
- Conteúdo deve satisfazer a intenção de busca

## Integração com Outras Skills

- **performance-web**: Core Web Vitals são fator de ranqueamento (LCP < 2.5s, INP < 200ms, CLS < 0.1)
- **acessibilidade-wcag**: Semântica HTML correta beneficia SEO e acessibilidade simultaneamente
- **editorial-conteudo**: Todo conteúdo otimizado segue o GUIA editorial
- **seo-schema**: Dados estruturados complementam a otimização on-page

## Checklist de Implementação

- [ ] `<html lang="pt-BR">` configurado
- [ ] Title tags únicos e descritivos por rota
- [ ] Meta descriptions únicas por rota
- [ ] Um H1 descritivo por página
- [ ] Hierarquia de headings lógica
- [ ] robots.txt criado em `client/public/`
- [ ] sitemap.xml criado em `client/public/`
- [ ] Imagens com alt text e dimensões
- [ ] Links internos com `Link` do Wouter e âncoras descritivas
- [ ] URLs limpas e descritivas
- [ ] HTTPS em produção
- [ ] Canonical URLs definidas
- [ ] Nenhum claim editorial proibido em metadados

## Regras Rigorosas

- NUNCA usar claims não validados do GUIA editorial em metadados
- NUNCA fazer keyword stuffing
- SEMPRE coordenar mudanças de rota com o Arquiteto de Sistema
- SEMPRE manter coerência entre metadados e conteúdo visível da página
- NUNCA bloquear recursos necessários à renderização no robots.txt
