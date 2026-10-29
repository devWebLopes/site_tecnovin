# SEO Schema — Dados Estruturados

## Descrição

Habilidade para implementar dados estruturados (schema.org / JSON-LD) no site Tecnovin, habilitando rich results e ajudando buscadores e sistemas de IA a entender o conteúdo.

## Princípios Fundamentais

### 1. Precisão Acima de Tudo

- O schema DEVE representar fielmente o conteúdo visível da página
- NUNCA marcar conteúdo que não existe na página
- NUNCA usar schema para inflar claims (coerência com o GUIA editorial)
- Manter atualizado quando o conteúdo mudar

### 2. Formato JSON-LD

- Google recomenda JSON-LD (não Microdata nem RDFa)
- Injetado via componente React (SPA) — renderizado no cliente
- ⚠️ Google processa JSON-LD injetado via JavaScript, mas a renderização precisa ocorrer; validar sempre com Rich Results Test (que executa JS)

### 3. Validação Obrigatória

- Testar ANTES de deploy no Rich Results Test: https://search.google.com/test/rich-results
- ⚠️ `fetch`/`curl` NÃO detectam schema injetado via JS — usar ferramentas que renderizam JavaScript
- Monitorar relatórios de melhorias no Search Console

## Schemas Prioritários para o Tecnovin

### 1. Organization (Home)

Marca a entidade empresa. Aplicar na Home.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tecnovin",
  "url": "https://www.tecnovin.com.br/",
  "logo": "https://www.tecnovin.com.br/logo.png",
  "description": "Concentrados de suco de uva, maçã, laranja, limão, acerola e abacaxi para a indústria de alimentos e bebidas.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bento Gonçalves",
    "addressRegion": "RS",
    "addressCountry": "BR"
  }
}
```

**Propriedades obrigatórias:** `name`, `url`
**Recomendadas:** `logo`, `sameAs` (redes sociais oficiais), `contactPoint`
**⚠️ Pendente:** Confirmar denominação corporativa exata (Tecnovin do Brasil vs. TECNOVIN-SUMABRAS) antes de fixar o `name` — ver GUIA editorial, seção "Pendências".

### 2. LocalBusiness (Home / Contato)

Sinaliza presença física no Vale dos Vinhedos — importante para SEO local.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Tecnovin",
  "image": "https://www.tecnovin.com.br/fachada.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[endereço completo — confirmar com a empresa]",
    "addressLocality": "Bento Gonçalves",
    "addressRegion": "RS",
    "postalCode": "[CEP — confirmar]",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[latitude]",
    "longitude": "[longitude]"
  },
  "url": "https://www.tecnovin.com.br/",
  "telephone": "[telefone oficial]"
}
```

**⚠️ Dados a confirmar com a empresa:** endereço completo, CEP, telefone, coordenadas geográficas. O componente `Map.tsx` já existe — as coordenadas devem ser consistentes entre o mapa e o schema.

### 3. BreadcrumbList (Páginas internas / Blog)

Melhora a exibição nos resultados de busca e a compreensão da hierarquia.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.tecnovin.com.br/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://www.tecnovin.com.br/blog"
    }
  ]
}
```

### 4. Article / BlogPosting (Posts do Blog)

Essencial para o blog editorial. Aplicado por post.

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Prêmio Exportação RS: um reconhecimento à presença da Tecnovin no setor",
  "image": "https://www.tecnovin.com.br/blog/premio-exportacao.jpg",
  "datePublished": "2018-05-XX",
  "dateModified": "2026-09-04",
  "author": {
    "@type": "Organization",
    "name": "Tecnovin"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Tecnovin",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.tecnovin.com.br/logo.png"
    }
  },
  "description": "Registro histórico: em 2018, a Tecnovin foi listada no 46º Prêmio Exportação RS, categoria Destaque Setorial — Bebidas. Fonte: Jornal do Comércio."
}
```

**Propriedades obrigatórias:** `headline`, `image`, `datePublished`, `author`
**Regra editorial:** Conteúdo histórico deve refletir data real do registro em `datePublished` e incluir fonte — coerência com o GUIA editorial.

### 5. WebSite (Home — opcional)

Se houver busca interna no futuro, habilita o sitelinks searchbox.

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Tecnovin",
  "url": "https://www.tecnovin.com.br/"
}
```

## Implementação em React (SPA)

Criar um componente reutilizável, ex. `client/src/components/JsonLd.tsx`:

```tsx
interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

**Uso combinado com @graph** quando múltiplos schemas na mesma página:

```tsx
const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization" /* ... */ },
    { "@type": "LocalBusiness" /* ... */ },
    { "@type": "WebSite" /* ... */ },
  ],
};

<JsonLd data={homeSchema} />;
```

**Regras de implementação:**

- Dados do schema em constantes tipadas (TypeScript) ou gerados a partir dos dados reais do post
- URLs sempre absolutas (https://www.tecnovin.com.br/...)
- Datas em formato ISO 8601 (AAAA-MM-DD)
- Identificadores estáveis entre renders

## Validação

### Ferramentas

- **Rich Results Test**: https://search.google.com/test/rich-results (renderiza JS — ferramenta principal)
- **Schema.org Validator**: https://validator.schema.org/
- **Search Console**: relatórios de melhorias após indexação

### Checklist de Validação

- [ ] Valida no Rich Results Test sem erros
- [ ] Sem warnings críticos
- [ ] Schema corresponde ao conteúdo visível da página
- [ ] Todas as propriedades obrigatórias presentes
- [ ] URLs absolutas e corretas
- [ ] Datas em ISO 8601
- [ ] Claims coerentes com o GUIA editorial

## Erros Comuns a Evitar

- **Propriedades obrigatórias ausentes** — consultar documentação do Google por tipo
- **Valores inválidos** — datas fora de ISO 8601, URLs relativas, enums incorretos
- **Divergência schema/conteúdo** — schema descrevendo algo que não está na página (risco de ação manual)
- **Schema com claims não validados** — ex.: não marcar "270 mil toneladas/ano" sem validação documental (GUIA editorial)
- **Duplicar schema** — múltiplos scripts JSON-LD conflitantes na mesma página

## Integração com Outras Skills

- **seo-onpage**: Schema complementa meta tags e estrutura de headings
- **seo-ai-search**: Dados estruturados aumentam visibilidade em buscas com IA (+30-40% em motores não-Google)
- **editorial-conteudo**: Toda informação no schema deve passar pelo crivo editorial
- **react-shadcn**: Implementação via componente React tipado

## Regras Rigorosas

- NUNCA implementar schema que contradiga o GUIA editorial
- SEMPRE validar com ferramenta que renderiza JavaScript (não fetch/curl)
- SEMPRE usar URLs absolutas
- NUNCA marcar conteúdo invisível ou inexistente na página
- SEMPRE confirmar dados corporativos (nome, endereço, telefone) antes de fixar no schema
- SEMPRE tipar os dados do schema em TypeScript
