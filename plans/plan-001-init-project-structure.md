# Plano — Inicialização da Estrutura Base do Projeto

**ID:** plan-001-init-project-structure
**Tarefa:** Inicialização da estrutura base do projeto (docs, skills, agents, plans)
**Agente Responsável:** Arquiteto de Sistema
**Skills Utilizadas:** Todas as skills do projeto
**Data:** 04/09/2026

## Contexto

O projeto `tecnovin-institucional` precisa de uma estrutura base organizada para operar com fluxos de trabalho com IA. Esta tarefa estabelece a fundação documental (`docs/`, `skills/`, `agents/`, `plans/`) e o arquivo mestre (`agents.md`) que serve como ponto de entrada da IA no projeto.

## Objetivo

Criar a estrutura completa de documentação e agentes para que qualquer pessoa entenda as guidelines, skills e papéis disponíveis no projeto, garantindo que a IA sempre consulte `agents.md` antes de iniciar qualquer tarefa.

## Execução — Etapa a Etapa

### Etapa 1: Documentação do Projeto (@docs/)

**Agente:** Arquiteto de Sistema  
**Skills:** Todas as skills de contexto  
**Duração estimada:** 15 minutos

1. Criar pasta `docs/`
2. Criar `docs/README.md` — Índice principal com arquitetura e padrões
3. Criar `docs/diretrizes-arquiteturais.md` — Diretrizes arquiteturais detalhadas
4. Criar `docs/padroes-codigo.md` — Padrões de código e convenções
5. ✅ Validar: todos os arquivos presentes e consistentes

### Etapa 2: Habilidades/Skills (@skills/)

**Agente:** Arquiteto de Sistema  
**Skills:** react-shadcn, tailwind-css, wouter-router, express-api, typescript-zod, editorial-conteudo  
**Duração estimada:** 20 minutos

1. Criar pasta `skills/`
2. Criar `skills/README.md` — Índice de skills
3. Criar `skills/react-shadcn.md` — React + shadcn/ui
4. Criar `skills/tailwind-css.md` — Tailwind CSS v4
5. Criar `skills/wouter-router.md` — Wouter Router
6. Criar `skills/express-api.md` — Express Backend
7. Criar `skills/typescript-zod.md` — TypeScript + Zod
8. Criar `skills/framer-motion-animacoes.md` — Framer Motion
9. Criar `skills/editorial-conteudo.md` — Editorial e Conteúdo
10. Criar `skills/acessibilidade-wcag.md` — Acessibilidade WCAG
11. Criar `skills/performance-web.md` — Performance Web
12. ✅ Validar: todas as skills documentadas e indexadas

### Etapa 3: Agentes Especializados (@agents/)

**Agente:** Arquiteto de Sistema  
**Skills:** Todas as skills  
**Duração estimada:** 20 minutos

1. Criar pasta `agents/`
2. Criar `agents/README.md` — Índice de agentes
3. Criar `agents/frontend.md` — Frontend Agent
4. Criar `agents/backend.md` — Backend Agent
5. Criar `agents/editorial.md` — Editorial Agent
6. Criar `agents/qa.md` — QA Agent
7. Criar `agents/arquiteto.md` — Arquiteto de Sistema
8. ✅ Validar: todos os agentes documentados com skills associadas

### Etapa 4: Planejamento da Tarefa (@plans/)

**Agente:** Arquiteto de Sistema  
**Skills:** Todas as skills  
**Duração estimada:** 10 minutos

1. Criar pasta `plans/`
2. Criar `plans/plan-001-init-project-structure.md` — Este documento
3. ✅ Validar: planejamento completo e documentado

### Etapa 5: Arquivo Mestre (@agents.md)

**Agente:** Arquiteto de Sistema  
**Skills:** Todas as skills  
**Duração estimada:** 10 minutos

1. Criar `agents.md` na raiz do projeto
2. ✅ Validar: arquivo mestre completo com contexto, mapa e regras

## Validação Final

- [ ] `docs/` criado com README.md + diretrizes + padrões
- [ ] `skills/` criado com README.md + 9 skills
- [ ] `agents/` criado com README.md + 5 agentes
- [ ] `plans/` criado com plano-001
- [ ] `agents.md` criado na raiz
- [ ] `pnpm check` passa
- [ ] `pnpm format` aplicado
- [ ] `pnpm build` gera sem erros

## Critérios de Aceite

1. Todo arquivo deve seguir o padrão Markdown
2. Toda documentação deve refletir a stack real do projeto
3. Todas as skills devem ter competências, ferramentas e regras claras
4. Todo agente deve ter papel, competências e skills associadas
5. O arquivo `agents.md` deve funcionar como ponto de entrada único da IA
6. Nenhuma habilidade ou agente pode ser fictícia — devem refletir o projeto real

## Risco e Mitigação

| Risco                                    | Mitigação                                                   |
| ---------------------------------------- | ----------------------------------------------------------- |
| Documentação inconsistente com o projeto | Validar contra `package.json`, `App.tsx`, `server/index.ts` |
| Skills genéricas demais                  | Ancorar cada skill nos pacotes e padrões reais              |
| Agentes com sobreposição                 | Definir claramente domínio de cada agente                   |
| `agents.md` muito longo ou curto demais  | Manter como "cérebro" conciso e direcional                  |

## Entregas

- `docs/README.md`
- `docs/diretrizes-arquiteturais.md`
- `docs/padroes-codigo.md`
- `skills/README.md`
- `skills/react-shadcn.md`
- `skills/tailwind-css.md`
- `skills/wouter-router.md`
- `skills/express-api.md`
- `skills/typescript-zod.md`
- `skills/framer-motion-animacoes.md`
- `skills/editorial-conteudo.md`
- `skills/acessibilidade-wcag.md`
- `skills/performance-web.md`
- `agents/README.md`
- `agents/frontend.md`
- `agents/backend.md`
- `agents/editorial.md`
- `agents/qa.md`
- `agents/arquiteto.md`
- `plans/plan-001-init-project-structure.md`
- `agents.md`
