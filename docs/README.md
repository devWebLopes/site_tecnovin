# Documentação do Projeto — Tecnovin Institucional

## Visão Geral

**Nome do Projeto:** tecnovin-institucional  
**Tipo:** Web  
**Stack:** React 19 + TypeScript + Vite + Tailwind CSS v4 + shadcn/ui + Wouter + Express  
**Licença:** MIT

## Descrição

Site institucional da **Tecnovin do Brasil** — empresa sediada no Vale dos Vinhedos, Bento Gonçalves, Rio Grande do Sul, especializada em concentrados de suco de uva, maçã, laranja, limão, acerola e abacaxi para a indústria de alimentos e bebidas.

## Base de Conhecimento da Empresa

> 📚 **`docs/dossie_Tecnovin/`** é a **base de conhecimento única e canônica** de todos os dados e informações sobre a **Tecnovin do Brasil** e sobre o seu contexto de atuação (mercado, setor, cadeia produtiva, histórico, governança, imprensa, publicações, presença digital, aspectos jurídico-regulatórios, reputacionais, pessoas e financeiro-comercial).

- Toda informação factual sobre a empresa **DEVE** ser consultada e validada nesta base antes de ser usada em código, conteúdo ou decisões.
- Qualquer dado sobre a empresa que não conste no dossiê **NÃO** deve ser apresentado como fato sem confirmação documental.
- O dossiê prevalece sobre qualquer outra fonte secundária em caso de conflito.
- O conteúdo editorial (`docs/conteudo/`) e o `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md` derivam desta base.

## Arquitetura

O projeto segue uma arquitetura **full-stack monolítica** com separação clara entre cliente e servidor:

```
tecnovin-institucional/
├── client/              # Frontend React + Vite
│   ├── src/
│   │   ├── components/  # Componentes React (shadcn/ui + customizados)
│   │   ├── pages/       # Páginas roteadas (Home, Blog, NotFound)
│   │   ├── hooks/       # Hooks customizados
│   │   ├── contexts/    # Contextos React (ThemeContext)
│   │   ├── lib/         # Utilitários
│   │   └── const.ts     # Constantes
│   ├── public/          # Assets estáticos
│   └── index.html       # Entry point
├── server/              # Backend Express
│   └── index.ts         # Servidor estático para produção
├── shared/              # Códigos compartilhados entre cliente e servidor
├── docs/                # Documentação do projeto
│   ├── dossie_Tecnovin/ # 📚 Base de conhecimento dos dados da empresa
│   └── conteudo/        # Conteúdo editorial pronto para o site
├── skills/              # Skills para agentes de IA
├── agents/              # Agentes especializados
└── plans/               # Planejamentos de tarefa
```

## Stack Detalhada

### Frontend

- **React 19** — Biblioteca de UI com componentes funcionais e hooks
- **TypeScript 5.6** — Tipagem estática para toda a aplicação
- **Vite 7** — Build tool e dev server com HMR instantâneo
- **Tailwind CSS v4** — Framework de estilos com utilitários
- **shadcn/ui** — Componentes de UI acessíveis e customizáveis
- **Wouter 3** — Router leve para navegação no lado cliente
- **Framer Motion 12** — Animações e transições
- **React Hook Form + Zod** — Formulação e validação de formulários
- **Recharts** — Gráficos e visualizações de dados

### Backend

- **Express 4** — Framework web para Node.js
- **TypeScript** — Tipagem no servidor

### Ferramentas de Desenvolvimento

- **pnpm** — Gerenciador de pacotes
- **Prettier** — Formatador de código
- **ESBuild** — Bundler para produção
- **Vitest** — Framework de testes
- **ESLint (via tsconfig)** — Verificação de tipos

## Padrões Adotados

1. **Component-Driven Development**: Toda UI é construída como componentes reutilizáveis seguindo o padrão shadcn/ui.
2. **Tipagem Estrita**: Todo o código deve ter anotações de tipo explícitas em TypeScript.
3. **Roteamento por Wouter**: As rotas são definidas em `App.tsx` usando `Switch` e `Route` do Wouter.
4. **Temas**: Sistema de temas claro/escuro via `ThemeContext` com `next-themes`.
5. **Estilização**: Tailwind CSS com `tailwind-merge` e `clsx` para classes condicionais.
6. **Acessibilidade**: Todos os componentes de UI seguem padrões ARIA do Radix UI.
7. **Build em Etapas**: `vite build` para o frontend + `esbuild` para empacotar o servidor.

## Estrutura de Diretórios de Documentação

| Diretório | Propósito                                     |
| --------- | --------------------------------------------- |
| `docs/`   | Documentação do projeto, diretrizes e padrões |
| `skills/` | Habilidades e regras para agentes de IA       |
| `agents/` | Agentes especializados por domínio            |
| `plans/`  | Planejamentos de tarefas                      |

## Comandos Principais

```bash
pnpm dev       # Inicia servidor de desenvolvimento
pnpm build     # Compila para produção
pnpm start     # Inicia servidor de produção
pnpm preview   # Pré-visualiza a build
pnpm check     # Verificação de tipos TypeScript
pnpm format    # Formata o código com Prettier
```

## Diretrizes Editoriais

Consulte [GUIA_EDITORIAL_E_FONTES_TECNOVIN.md](GUIA_EDITORIAL_E_FONTES_TECNOVIN.md) para diretrizes completas de conteúdo, fontes e uso controlado de dados históricos. Toda informação factual sobre a empresa deve ser fundamentada na base de conhecimento `docs/dossie_Tecnovin/`.

## Conteúdo do Site

- **Home**: Página institucional com identidade visual e informações seguras
- **Blog**: Frente editorial flexível para notícias, artigos e memória documental
- **Mapa**: Componente interativo de localização
- **Diálogo Manus**: Componente de interação com IA

## Regras de Conteúdo

- Fatos de capacidade, unidades, exportações e clientes só devem ser apresentados como atuais após confirmação documental.
- Dados históricos devem trazer data, fonte e rótulo de registro histórico.
- Materiais de 2000-2024 devem ser organizados como linha do tempo ou arquivo, com destaque de ano.

## Manutenção

- Use `pnpm check` antes de qualquer commit para validar tipos.
- Execute `pnpm format` para manter consistência de formatação.
- Sempre consulte `agents.md` antes de iniciar novas tarefas.
