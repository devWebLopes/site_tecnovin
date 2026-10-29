# React + shadcn/ui

## Descrição

Habilidade para desenvolver interfaces com React 19, componentes shadcn/ui primitives e padrões Radix UI.

## Competências

- Criar componentes funcionais com TypeScript tipados
- Composição de componentes usando slots e children
- Uso de `cn()` para classes condicionais (tailwind-merge + clsx)
- Implementação de formulários com `react-hook-form` + Zod
- Gerenciamento de estado com Context e hooks customizados
- Uso de `ErrorBoundary` para tratamento de erros

## Ferramentas

- React 19 com JSX transform
- shadcn/ui component library
- Radix UI primitives
- Tailwind CSS v4

## Convenções

- Export named: `export function Componente()`
- Props com interface explícita
- Componentes em `components/` com subpastas por domínio
- UI components em `components/ui/`
- Hooks em `hooks/` com prefixo `use`
- Contexts em `contexts/`

## Padrão de Componente shadcn

```tsx
import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef } from "react";

interface MeuComponenteProps extends ComponentPropsWithoutRef<"div"> {
  variant?: "default" | "secondary";
}

export function MeuComponente({
  className,
  variant = "default",
  ...props
}: MeuComponenteProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-4",
        variant === "secondary" && "bg-muted",
        className
      )}
      {...props}
    />
  );
}
```

## Regras

- Nunca usar `any` em props ou estados
- Sempre tipar eventos React (ex: `React.ChangeEvent<HTMLInputElement>`)
- Usar `useMemo` e `useCallback` quando re-renderizações desnecessárias forem identificadas
- Componentes devem ter no máximo uma responsabilidade principal
