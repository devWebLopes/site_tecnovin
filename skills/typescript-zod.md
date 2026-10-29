# TypeScript + Zod

## Descrição

Habilidade para tipagem estática com TypeScript e validação de schemas com Zod.

## Competências

- Configuração de TypeScript com strict mode
- Criação de interfaces, types, generics e utilitários de tipo
- Validação de dados com Zod schemas
- Integração de Zod com `react-hook-form` via `@hookform/resolvers`
- Type-safe API integration
- Narrowing de tipos com type guards

## Regras

- Nunca usar `any` — usar `unknown` com validação Zod
- Schemas Zod para todos os dados de entrada e API responses
- Tipar todas as props, estados e retornos de funções
- Usar `satisfies` para inferência de tipos
- `as const` para valores literais
