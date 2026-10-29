# Padrões de Código — Tecnovin Institucional

## TypeScript

### Configuração

- `tsconfig.json` com strict mode habilitado
- Tipagem explícita em todas as funções, props e variáveis públicas
- Uso de `type` para tipos compostos e `interface` para objetos que podem ser estendidos
- Genéricos quando aplicável para reutilização de tipos

### Exceções

- Dados de runtime (API responses, localStorage) devem ser validados com Zod antes do uso
- Evitar `any`; usar `unknown` com narrowings quando o tipo for incerto

## React

### Componentes

- Componentes funcionais com props tipadas
- Exportar como named export (`export function Componente()`)
- Usar `export default` apenas no nível do arquivo se houver um componente principal
- Composicionalidade sobre props booleanas (composite pattern)
- Hooks customizados para lógica reutilizável

### Estado e Efeitos

- Estado local via `useState` quando possível
- Estado compartilhado via Context apenas quando necessário
- `useEffect` com dependências corretas e limpeza sempre que aplicável
- Evitar efeitos colaterais em renderizações desnecessárias

### Forms

- Todos os formulários usam `react-hook-form` com `@hookform/resolvers` e Zod
- Validação no schema Zod, não em estado separado

## Estilização

### Tailwind CSS

- Classes organizadas de forma lógica (layout → typography → visual → interação)
- Uso de `cn()` para classes condicionais
- Variantes de componentes definidas com `cva` (class-variance-authority)
- Responsividade com breakpoints nativos do Tailwind
- Temas claros/escuros aplicados via `data-theme` ou classes Tailwind

### Convenções de CSS

- Classes CSS apenas para animações complexas que o Tailwind não suporta
- `@layer` para organizar estilos customizados
- Sem !important

## Roteamento

- Definido em `App.tsx` usando `Switch` e `Route` do Wouter
- Rotas protegidas (quando aplicável) via componentes de wrapper
- Página 404 como rota catch-all
- Navegação programática com `useLocation` e `useParams` do Wouter

## Testes

- Testes unitários com **Vitest**
- Testes de componentes com renderização e interação
- Cobertura de hooks customizados e utilitários
- Mock de APIs e contextos quando necessário

## Git

- Commits com mensagens descritivas em português ou inglês
- Formatação automática via Prettier antes de commits
- Verificação de tipos (`pnpm check`) como etapa obrigatória
- Branch naming: `feature/descricao`, `fix/descricao`, `docs/descricao`

## Performance

- Code splitting via lazy loading de rotas quando necessário
- `memo` em componentes que re-renderizam frequentemente com props estáveis
- Imports dinâmicos para componentes pesados
- Otimização de imagens e assets estáticos

## Segurança

- Sanitização de inputs no cliente e servidor
- Headers HTTP seguros via Express
- Proteção contra XSS com escapes automáticos do React
- Validação de todos os dados de entrada com Zod
