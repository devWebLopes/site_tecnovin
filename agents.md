# 🤖 Tecnovin Institucional — Cérebro da IA

## Contexto e Objetivos

Este é o ponto de entrada principal da IA no projeto **tecnovin-institucional**. Antes de iniciar qualquer tarefa, modifcar código ou gerar conteúdo, você **DEVE** consultar este arquivo e seguir suas diretrizes rigorosamente.

**Projeto:** Site institucional da Tecnovin do Brasil — empresa de concentrados de suco no Vale dos Vinhedos, Bento Gonçalves, RS.  
**Stack:** React 19 + TypeScript + Vite + Tailwind CSS v4 + shadcn/ui + Wouter + Express  
**Tipo:** WEB  
**Licença:** MIT

---

## Estrutura do Projeto

```
tecnovin-institucional/
├── agents/              # Agentes especializados de IA
│   ├── arquiteto.md     # Arquiteto de Sistema
│   ├── frontend.md      # Frontend Agent
│   ├── backend.md       # Backend Agent
│   ├── editorial.md     # Editorial Agent
│   └── qa.md            # QA Agent
├── docs/                # Documentação do projeto
│   ├── README.md                    # Índice principal
│   ├── diretrizes-arquiteturais.md  # Diretrizes arquiteturais
│   ├── padroes-codigo.md            # Padrões de código
│   ├── dossie_Tecnovin/             # 📚 Base de conhecimento dos dados da empresa
│   └── conteudo/                    # Conteúdo editorial pronto para o site
├── plans/               # Planejamentos de tarefas
│   ├── plan-001-init-project-structure.md
│   └── plan-002-install-seo-skills.md
├── skills/              # Skills para agentes de IA
│   ├── README.md                    # Índice de skills
│   ├── react-shadcn.md
│   ├── tailwind-css.md
│   ├── wouter-router.md
│   ├── express-api.md
│   ├── typescript-zod.md
│   ├── framer-motion-animacoes.md
│   ├── editorial-conteudo.md
│   ├── acessibilidade-wcag.md
│   ├── performance-web.md
│   ├── seo-onpage.md
│   ├── seo-audit.md
│   ├── seo-schema.md
│   └── seo-ai-search.md
├── client/              # Frontend React + Vite
├── server/              # Backend Express
├── shared/              # Código compartilhado
├── GUIA_EDITORIAL_E_FONTES_TECNOVIN.md  # Diretrizes editoriais
├── package.json
├── tsconfig.json
├── vite.config.ts
└── agents.md            # ← Este arquivo (ponto de entrada)
```

---

## Mapa da Estrutura Criada

### 📁 docs/

Documentação do projeto para que qualquer pessoa entenda as guidelines.

- **README.md**: Arquitetura, stack, padrões e comandos principais.
- **diretrizes-arquiteturais.md**: Princípios arquiteturais e padrões de código.
- **padroes-codigo.md**: Convenções TypeScript, React, estilização, roteamento, testes.
- **dossie_Tecnovin/**: 📚 **BASE DE CONHECIMENTO** — fonte única e canônica de todas as informações sobre a empresa Tecnovin (cadastro, histórico, produtos, governança, imprensa, publicações, presença digital, pessoas, financeiro-comercial, jurídico-regulatório e reputacional) e sobre o contexto de atuação da empresa.
- **conteudo/**: Material editorial pronto para alimentar as páginas e o blog do site (derivado do dossiê).

### 📁 skills/

Habilidades técnicas, regras de negócio e ferramentas que os agentes precisam dominar.

- **react-shadcn**: Componentes React e shadcn/ui.
- **tailwind-css**: Estilização com Tailwind CSS v4.
- **wouter-router**: Roteamento com Wouter.
- **express-api**: Backend Express serve estático.
- **typescript-zod**: Tipagem e validação.
- **framer-motion-animacoes**: Animações e transições.
- **classic-minimalist-ui**: Diretrizes canônicas de design clássico, elegante e minimalista e efeitos de scroll suaves com delay escalonado (`skills/classic-minimalist-ui/SKILL.md`).
- **editorial-conteudo**: Diretrizes editoriais do site.
- **acessibilidade-wcag**: Padrões WCAG de acessibilidade.
- **performance-web**: Core Web Vitals e otimização.
- **seo-onpage**: Otimização técnica e on-page para SPA React (meta tags, headings, URLs, robots.txt, sitemap).
- **seo-audit**: Framework de auditoria SEO (técnica, on-page, conteúdo, indexação).
- **seo-schema**: Dados estruturados JSON-LD (Organization, LocalBusiness, Breadcrumb, Article).
- **seo-ai-search**: Otimização para buscas com IA (AI Overviews, ChatGPT, Perplexity, Claude).

### 📁 agents/

Agentes de IA responsáveis por cada função no ciclo de desenvolvimento.

- **arquiteto.md**: Decisões arquiteturais e coordenação geral.
- **frontend.md**: Desenvolvimento de interfaces React e implementação técnica de SEO.
- **backend.md**: Configuração e manutenção do servidor.
- **editorial.md**: Produção e gestão de conteúdo institucional otimizado para busca e IA.
- **qa.md**: Testes, verificação de qualidade, performance e auditorias de SEO.

### 📁 plans/

Planejamentos de tarefas passo a passo.

- **plan-001-init-project-structure.md**: Estrutura base do projeto.
- **plan-002-install-seo-skills.md**: Instalação das skills de SEO.

---

## Regras Rígidas de Funcionamento

### 🚨 REGRA 1: SEMPRE consultar este arquivo

Antes de iniciar qualquer nova tarefa ou modificar o código, leia `agents.md`. Este é o documento de controle que define o contexto, a estrutura e as regras do projeto.

### 🚨 REGRA 2: SEMPRE seguir as diretrizes documentadas

- Código: siga `docs/padroes-codigo.md` e as skills correspondentes
- Conteúdo: siga `skills/editorial-conteudo.md` e `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`
- Dados da empresa: fundamente toda informação factual sobre a Tecnovin na base de conhecimento `docs/dossie_Tecnovin/`
- Arquitetura: siga `docs/diretrizes-arquiteturais.md`
- Qualidade: siga `agents/qa.md`

### 🚨 REGRA 3: Acionar o agente correto

- **Tarefas de UI/componentes/rotas/implementação técnica de SEO** → `agents/frontend.md`
- **Tarefas de servidor/configuração** → `agents/backend.md`
- **Tarefas de conteúdo/redação/otimização para busca e IA** → `agents/editorial.md`
- **Testes/qualidade/performance/auditorias de SEO** → `agents/qa.md`
- **Decisões estruturais/mudanças de stack/SEO estrutural** → `agents/arquiteto.md`

### 🚨 REGRA 4: NUNCA alterar a stack sem autorização

A stack do projeto é fixa: React 19 + TypeScript + Vite + Tailwind CSS v4 + shadcn/ui + Wouter + Express. Qualquer mudança requer aprovação do Arquiteto de Sistema e atualização deste arquivo.

### 🚨 REGRA 5: Validação obrigatória antes de entrega

Toda task deve passar por:

1. `pnpm check` — verificação de tipos
2. `pnpm format` — formatação com Prettier
3. `pnpm build` — validação do build
4. Validação de acessibilidade (navegação por teclado)
5. Revisão editorial do conteúdo (se aplicável)

### 🚨 REGRA 6: Conteúdo editorial rigoroso

- Dados de capacidade, clientes e exportações NÃO podem ser apresentados como atuais sem confirmação documental
- Dados históricos devem trazer data, fonte e rótulo de "registro histórico"
- Toda afirmação deve ter fonte citada
- Siga estritamente o `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`

### 🚨 REGRA 7: Registrar tudo em plans/

Toda task deve ter um planejamento documentado em `plans/plan-XXX-[nome].md`, mesmo que seja uma tarefa simples.

### 🚨 REGRA 8: Nenhuma modificação sem seguir o fluxo

1. Consultar `agents.md`
2. Identificar o agente responsável
3. Acionar as skills necessárias
4. Executar a task
5. Validar com QA Agent
6. Registrar em plans/

### 🚨 REGRA 9: Base de conhecimento da empresa

`docs/dossie_Tecnovin/` é a **base de conhecimento única e canônica** de todos os dados e informações sobre a **Tecnovin do Brasil** e sobre o seu contexto de atuação (mercado, setor, cadeia produtiva, histórico, governança, imprensa, publicações, presença digital, aspectos jurídicos, regulatórios, reputacionais, pessoas e financeiro-comercial).

- Toda informação factual sobre a empresa **DEVE** ser consultada e validada nesta base antes de ser usada em código, conteúdo ou decisões.
- Qualquer dado sobre a empresa que não conste no dossiê **NÃO** deve ser apresentado como fato sem confirmação documental.
- O dossiê prevalece sobre qualquer outra fonte secundária em caso de conflito.
- O conteúdo editorial (`docs/conteudo/`) e o `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md` derivam desta base.

---

## Comandos Essenciais

```bash
pnpm dev       # Servidor de desenvolvimento
pnpm build     # Build para produção
pnpm start     # Servidor de produção
pnpm preview   # Pré-visualização
pnpm check     # Verificação de tipos TypeScript
pnpm format    # Formatação com Prettier
```

---

## Contato e Fontes

**Site institucional:** https://www.tecnovin.com.br  
**Base de conhecimento da empresa:** `docs/dossie_Tecnovin/`  
**GUIA editorial completo:** `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`  
**Licença:** MIT

---

> ⚠️ **ATENÇÃO**: Este arquivo é o "cérebro" da IA no projeto. Qualquer agente que inicie uma task sem consultar este arquivo está violando as regras do projeto. Se houver inconsistência entre este arquivo e qualquer outro documento, **este arquivo prevalece**.
