# SEO Audit

## Descrição

Framework de auditoria SEO para o QA Agent validar a saúde de otimização do site Tecnovin. Cobre aspectos técnicos, on-page, conteúdo e indexação, com atenção especial às particularidades de SPA React.

## Quando Executar

- Após implementação de novas páginas ou rotas
- Antes de deploys significativos
- Auditoria periódica (trimestral recomendado)
- Após mudanças de conteúdo ou estrutura
- Queda de tráfego orgânico ou indexação

## Framework de Auditoria — Ordem de Prioridade

### 1. Crawlability e Indexação (Pode o Google encontrar e indexar?)

**Checklist:**

- [ ] `robots.txt` existe em `client/public/robots.txt` e não bloqueia rotas importantes
- [ ] `robots.txt` referencia o sitemap
- [ ] `sitemap.xml` existe, é válido e contém todas as rotas canônicas
- [ ] Nenhuma página importante com `noindex`
- [ ] Canonical tags presentes e corretas (self-referencing)
- [ ] Sem cadeias de redirect
- [ ] Todas as rotas retornam conteúdo válido (não soft 404)
- [ ] HTTPS ativo em produção, sem mixed content
- [ ] www vs. non-www consistente (redirect 301 para a versão canônica)

**Verificação SPA específica:**

- [ ] Conteúdo principal visível no HTML/renderização inicial (não depende 100% de JS assíncrono lento)
- [ ] Google consegue renderizar as páginas (testar com URL Inspection no Search Console)
- [ ] Rotas do Wouter retornam status 200 correto (não 404 genérico para rotas válidas)

### 2. Fundamentos Técnicos (O site é rápido e funcional?)

**Core Web Vitals (integração com performance-web):**

- [ ] LCP < 2.5s
- [ ] INP < 200ms
- [ ] CLS < 0.1

**Outros fatores:**

- [ ] Mobile-friendly (viewport, tap targets, sem scroll horizontal)
- [ ] Imagens otimizadas (WebP, dimensões explícitas, lazy loading)
- [ ] Sem erros de console que quebrem renderização
- [ ] Fontes com `font-display: swap`

### 3. Otimização On-Page (O conteúdo está otimizado?)

**Por página:**

- [ ] Title tag único, 50–60 caracteres (referência), palavra-chave no início
- [ ] Meta description única, 150–160 caracteres (referência), com proposta de valor
- [ ] Um único H1 descritivo
- [ ] Hierarquia de headings lógica (H1 → H2 → H3)
- [ ] `<html lang="pt-BR">`
- [ ] Imagens com alt text descritivo
- [ ] URLs limpas, descritivas, lowercase com hífens
- [ ] Links internos com âncoras descritivas

**Site-wide:**

- [ ] Sem titles/meta descriptions duplicados
- [ ] Sem canibalização de palavras-chave entre páginas
- [ ] Mapa de palavras-chave documentado

### 4. Qualidade de Conteúdo (O conteúdo merece ranquear?)

**E-E-A-T:**

- [ ] Experiência demonstrada (história da empresa, memória institucional)
- [ ] Expertise (conteúdo técnico sobre concentrados, processo)
- [ ] Autoridade (Prêmio Exportação RS 2018, presença setorial)
- [ ] Confiabilidade (fontes citadas, informações de contato, HTTPS)

**Conformidade editorial (CRÍTICO):**

- [ ] Nenhum claim de capacidade/clientes/exportação como atual sem validação documental
- [ ] Dados históricos com data, fonte e rótulo de "registro histórico"
- [ ] Toda afirmação factual com fonte citada
- [ ] Conteúdo segue o GUIA_EDITORIAL_E_FONTES_TECNOVIN.md

**Profundidade:**

- [ ] Conteúdo cobre o tópico de forma abrangente
- [ ] Responde à intenção de busca
- [ ] Melhor ou igual aos concorrentes que ranqueiam

### 5. Dados Estruturados (Schema está implementado e válido?)

- [ ] Schema Organization presente
- [ ] Schema LocalBusiness com endereço do Vale dos Vinhedos
- [ ] Schema BreadcrumbList em páginas internas
- [ ] Schema Article/BlogPosting nos posts do blog
- [ ] Validação no Rich Results Test sem erros
- [ ] ⚠️ Não detectar schema apenas via fetch/curl — usar Rich Results Test ou navegador (plugins e JS injetam JSON-LD que ferramentas estáticas não veem)

## Ferramentas

**Gratuitas:**

- Google Search Console (essencial — cobertura, desempenho, Core Web Vitals)
- Google PageSpeed Insights
- Rich Results Test (validação de schema — renderiza JavaScript)
- Lighthouse (auditoria técnica e SEO)
- Mobile-Friendly Test

**Pagas (se disponíveis):**

- Screaming Frog (crawl completo — renderiza JS)
- Ahrefs / Semrush

## Formato do Relatório de Auditoria

**Resumo Executivo:**

- Avaliação geral de saúde SEO
- Top 3–5 problemas prioritários
- Quick wins identificados

**Para cada achado:**

- **Problema**: O que está errado
- **Impacto**: Alto / Médio / Baixo
- **Evidência**: Como foi encontrado
- **Correção**: Recomendação específica
- **Prioridade**: 1–5 ou Alto / Médio / Baixo

**Plano de Ação Priorizado:**

1. Correções críticas (bloqueiam indexação/ranqueamento)
2. Melhorias de alto impacto
3. Quick wins (fáceis, benefício imediato)
4. Recomendações de longo prazo

## Checklist Resumido de QA SEO

### Crítico

- [ ] HTTPS ativo
- [ ] robots.txt permite crawling
- [ ] Sem noindex em páginas importantes
- [ ] Title tags presentes e únicos
- [ ] H1 descritivo e hierarquia lógica

### Alta prioridade

- [ ] Meta descriptions presentes
- [ ] Sitemap enviado ao Search Console
- [ ] Canonical URLs configuradas
- [ ] Mobile-responsivo
- [ ] Core Web Vitals dentro dos alvos

### Média prioridade

- [ ] Dados estruturados implementados e válidos
- [ ] Estratégia de linkagem interna
- [ ] Alt text em todas as imagens
- [ ] URLs descritivas
- [ ] Conformidade com GUIA editorial

## Regras Rigorosas

- NUNCA aprovar conteúdo que viole o GUIA editorial, mesmo que "bom para SEO"
- NUNCA reportar "sem schema" baseado apenas em fetch/curl (limitação de detecção)
- SEMPRE separar achados técnicos de achados de conteúdo
- SEMPRE priorizar por impacto, não por facilidade
- SEMPRE revalidar após correções
- NUNCA prometer posições de ranqueamento — SEO não garante posições
