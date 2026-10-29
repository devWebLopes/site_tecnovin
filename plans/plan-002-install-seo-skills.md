# Plano — Instalação das Skills de SEO

**ID:** plan-002-install-seo-skills
**Tarefa:** Instalar as skills de SEO mais relevantes para o projeto Tecnovin Institucional
**Agente Responsável:** Arquiteto de Sistema
**Skills Utilizadas:** seo, seo-audit, schema, ai-seo (skills do sistema)
**Data:** 04/09/2026

## Contexto

O projeto `tecnovin-institucional` é um site institucional B2B (React SPA + Express) com blog editorial. Atualmente possui skills técnicas (react-shadcn, tailwind-css, etc.) e de domínio (editorial-conteudo, acessibilidade-wcag, performance-web), mas **não possui nenhuma skill de SEO**. Para um site institucional que precisa de visibilidade orgânica no mercado brasileiro de ingredientes para alimentos e bebidas, SEO é essencial.

## Análise de Relevância

Foram avaliadas as skills de SEO disponíveis no sistema. Critérios de seleção:

| Skill         | Relevância para o Tecnovin                                             | Decisão     |
| ------------- | ---------------------------------------------------------------------- | ----------- |
| **seo**       | Alta — site institucional precisa de otimização técnica e on-page      | ✅ Instalar |
| **seo-audit** | Alta — QA Agent precisa de framework de auditoria                      | ✅ Instalar |
| **schema**    | Alta — Organization, LocalBusiness, BreadcrumbList, Article (blog)     | ✅ Instalar |
| **ai-seo**    | Alta — busca por IA em crescimento; projeto já tem componente Manus/IA | ✅ Instalar |

## Considerações Específicas do Projeto

1. **SPA (React + Wouter)**: Conteúdo renderizado no cliente exige atenção especial a indexação, meta tags dinâmicas e renderização para crawlers.
2. **B2B Brasil**: Foco em palavras-chave em português, mercado de ingredientes, concentrados de suco.
3. **Blog editorial**: Conteúdo precisa seguir o GUIA editorial + boas práticas de SEO de conteúdo.
4. **Empresa local**: LocalBusiness schema para Vale dos Vinhedos, Bento Gonçalves, RS.
5. **Dados históricos controlados**: SEO não pode contradizer as regras editoriais (sem promessas não comprovadas).

## Execução — Etapa a Etapa

### Etapa 1: Criar plano (este documento)

### Etapa 2: Criar `skills/seo-onpage.md` — SEO técnico e on-page adaptado ao React SPA

### Etapa 3: Criar `skills/seo-audit.md` — Framework de auditoria para o QA Agent

### Etapa 4: Criar `skills/seo-schema.md` — Dados estruturados (Organization, LocalBusiness, Article)

### Etapa 5: Criar `skills/seo-ai-search.md` — Otimização para buscas com IA

### Etapa 6: Atualizar `skills/README.md` — Indexar as 4 novas skills

### Etapa 7: Atualizar agentes — Atribuir skills SEO:

- **Frontend Agent**: seo-onpage, seo-schema (implementação técnica)
- **Editorial Agent**: seo-onpage, seo-ai-search (conteúdo otimizado)
- **QA Agent**: seo-audit, seo-schema (validação)
- **Arquiteto de Sistema**: todas (coordenação)

### Etapa 8: Atualizar `agents.md` — Mapa de estrutura

### Etapa 9: Validação — `pnpm check`, `pnpm format`, `pnpm build`

## Validação Final

- [ ] 4 novas skills criadas em `skills/`
- [ ] `skills/README.md` atualizado
- [ ] Agentes atualizados com skills SEO
- [ ] `agents.md` atualizado
- [ ] `pnpm check` passa
- [ ] `pnpm format` aplicado
- [ ] `pnpm build` gera sem erros

## Critérios de Aceite

1. Skills adaptadas ao contexto Tecnovin (B2B, Brasil, SPA, editorial rigoroso)
2. Nenhuma orientação de SEO pode contradizer o GUIA editorial
3. Skills devem considerar as limitações de SPA (React + Wouter)
4. Agentes devem ter atribuições claras de SEO
5. Toda documentação em português (padrão do projeto)

## Entregas

- `skills/seo-onpage.md`
- `skills/seo-audit.md`
- `skills/seo-schema.md`
- `skills/seo-ai-search.md`
- `skills/README.md` (atualizado)
- `agents/frontend.md` (atualizado)
- `agents/editorial.md` (atualizado)
- `agents/qa.md` (atualizado)
- `agents/arquiteto.md` (atualizado)
- `agents/README.md` (atualizado)
- `agents.md` (atualizado)
