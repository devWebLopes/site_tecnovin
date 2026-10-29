# Diretrizes Arquiteturais — Tecnovin Institucional

## Princípios Arquiteturais

### 1. Separação Cliente-Servidor

O projeto adota uma separação clara entre o frontend (client/) e o backend (server/). O cliente é uma aplicação SPA (Single Page Application) construída com React e Vite, enquanto o servidor Express serve exclusivamente os arquivos estáticos gerados pelo build.

### 2. Roteamento no Lado Cliente

Todo o roteamento é gerenciado pelo **Wouter** no frontend. O servidor Express captura todas as rotas (`app.get("*")`) e serve o `index.html`, delegando o gerenciamento de rotas ao router do cliente.

### 3. Componentes como Unidade de Construção

Toda interface é composta por componentes React. Os componentes seguem o padrão shadcn/ui, com uso extensivo de **Radix UI** para acessibilidade e **Tailwind CSS** para estilização.

### 4. Tipagem em Toda a Stack

- **Frontend**: TypeScript estrito com interfaces e tipos explícitos
- **Backend**: TypeScript com tipos para Express
- **Compartilhado**: Códigos em `shared/` podem ser importados por ambos os lados

### 5. Estilização Baseada em Utility Classes

Todo estilo é definido via classes do Tailwind CSS. O uso de CSS customizado é restrito a overrides necessários. Classes condicionais são construídas com `cn()` (tailwind-merge + clsx).

### 6. Gerenciamento de Estado Minimalista

O estado global é mantido ao mínimo, usando apenas `ThemeContext` para temas e `next-themes` para persistência de preferências. O restante do estado é gerenciado localmente nos componentes ou via hooks customizados.

### 7. Separação entre Base de Conhecimento e Conteúdo

Os dados factuais sobre a empresa ficam na base de conhecimento `docs/dossie_Tecnovin/` (fonte única e canônica). O conteúdo editorial pronto para o site vive em `docs/conteudo/` e deriva dessa base, respeitando o `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`. Nenhuma informação sobre a empresa deve ser inserida em código ou conteúdo sem fundamentação na base de conhecimento.

## Padrões de Código

### Estrutura de Componentes

```tsx
import { type ComponentProps } from "react";

interface MeuComponenteProps {
  title: string;
  variant?: "default" | "destructive";
}

export function MeuComponente({
  title,
  variant = "default",
}: MeuComponenteProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-lg",
        variant === "destructive" && "bg-red-500"
      )}
    >
      {title}
    </div>
  );
}
```

### Convenções de Nomenclatura

- **Arquivos de componentes**: `PascalCase.tsx` (ex: `SiteHeader.tsx`)
- **Hooks**: `usePascalCase.ts` ou `usePascalCase.tsx` (ex: `useMobile.tsx`)
- **Páginas**: `PascalCase.tsx` dentro de `pages/` (ex: `Home.tsx`)
- **Constantes**: `camelCase.ts` (ex: `const.ts`)
- **Utilitários**: `camelCase.ts` (ex: `utils.ts`)

### Regras de Imports

- Imports absolutos usam alias `@/` para o diretório `src/`
- Componentes de UI do shadcn/ui são importados de `@/components/ui/`
- Hooks são importados de `@/hooks/`
- Contextos de `@/contexts/`

### Tratamento de Erros

- Cada rota e componente deve estar envolvido por `ErrorBoundary`
- Erros de fetch e requisições devem ser tratados com estados de erro explícitos
- O componente `ErrorBoundary` envolve a aplicação inteira em `App.tsx`

### Acessibilidade

- Todos os componentes de UI usam primitives do Radix UI
- Componentes interativos devem ter labels, descrições e estados acessíveis
- Navegação deve ser funcional exclusivamente com teclado

## Configuração do Build

O build é executado em duas etapas:

1. **Frontend**: `vite build` gera os assets no diretório `dist/`
2. **Backend**: `esbuild` empacota `server/index.ts` em `dist/index.js`

O servidor Express serve os arquivos estáticos do `dist/public` em produção.

## Dependências Críticas

| Pacote               | Versão    | Função                    |
| -------------------- | --------- | ------------------------- |
| react                | ^19.2.1   | Biblioteca de UI          |
| react-dom            | ^19.2.1   | Renderização no DOM       |
| vite                 | ^7.1.7    | Build tool e dev server   |
| @vitejs/plugin-react | ^5.0.4    | Plugin React para Vite    |
| tailwindcss          | ^4.1.14   | Framework de estilos      |
| @tailwindcss/vite    | ^4.1.3    | Plugin Tailwind para Vite |
| wouter               | ^3.3.5    | Router                    |
| express              | ^4.21.2   | Servidor web              |
| zod                  | ^4.1.12   | Validação de esquemas     |
| framer-motion        | ^12.23.22 | Animações                 |
| next-themes          | ^0.4.6    | Gerenciamento de temas    |
