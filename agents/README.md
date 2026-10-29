# Agentes Especializados — Tecnovin Institucional

Índice de agentes de IA responsáveis por cada função no ciclo de desenvolvimento.

## Agentes

| Agente                                       | Descrição                                                             | Skills Associadas                                                                               |
| -------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [Frontend Agent](/agents/frontend.md)        | Desenvolvimento de interfaces React, componentes, rotas e SEO técnico | react-shadcn, tailwind-css, wouter-router, framer-motion-animacoes, seo-onpage, seo-schema      |
| [Backend Agent](/agents/backend.md)          | Configuração e manutenção do servidor Express                         | express-api, typescript-zod                                                                     |
| [Editorial Agent](/agents/editorial.md)      | Produção e gestão de conteúdo institucional otimizado para busca      | editorial-conteudo, acessibilidade-wcag, seo-onpage, seo-ai-search                              |
| [QA Agent](/agents/qa.md)                    | Testes, qualidade, performance e auditorias de SEO                    | performance-web, acessibilidade-wcag, typescript-zod, editorial-conteudo, seo-audit, seo-schema |
| [Arquiteto de Sistema](/agents/arquiteto.md) | Tomada de decisões arquiteturais e integração                         | Todas as skills                                                                                 |

## Como Acionar

- **Frontend Agent**: Para tarefas de UI, componentes, rotas, estilização e implementação técnica de SEO (meta tags, schema JSON-LD, robots.txt, sitemap).
- **Backend Agent**: Para configuração do servidor, APIs e validação de dados.
- **Editorial Agent**: Para produção de conteúdo, redação, diretrizes editoriais e otimização de conteúdo para busca tradicional e IA.
- **QA Agent**: Para testes, auditorias de acessibilidade, performance e SEO (incluindo validação de schema no Rich Results Test).
- **Arquiteto de Sistema**: Para decisões que afetam a estrutura do projeto, novas dependências, mudanças arquiteturais e decisões estruturais de SEO (SSR/prerender, política de bots de IA).

## Fluxo de Trabalho

1. O **Arquiteto de Sistema** avalia o escopo da tarefa.
2. O agente especializado apropriado é acionado com as skills necessárias.
3. O **QA Agent** valida o resultado antes da entrega.
4. O **Editorial Agent** revisa conteúdo antes da publicação.
5. Toda decisão é registrada em `plans/`.

## Regras Gerais

- Cada agente deve consultar `agents.md` antes de iniciar qualquer tarefa.
- Agentes não devem modificar skills de outros domínios sem consulta ao Arquiteto.
- Conteúdo editorial deve seguir rigorosamente o GUIA_EDITORIAL_E_FONTES_TECNOVIN.md.
- Toda informação factual sobre a empresa deve ser fundamentada na base de conhecimento `docs/dossie_Tecnovin/`.
- Código deve passar por `pnpm check` e `pnpm format`.
