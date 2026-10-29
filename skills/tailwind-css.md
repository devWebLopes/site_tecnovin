# Tailwind CSS v4

## Descrição

Habilidade para estilização com Tailwind CSS versão 4, incluindo configuração, utilitários, dark mode e sistema de design.

## Competências

- Configuração do Tailwind via `@tailwindcss/vite` plugin
- Uso de utilitários para layout, tipografia, cores, espaçamento, interações
- Implementação de dark mode com `next-themes`
- Customização de tema via `tailwind.config` ou diretivas CSS
- Composição de classes com `cn()` e `tailwind-merge`
- Uso de `@tailwindcss/typography` para conteúdo editorial

## Ferramentas

- Tailwind CSS v4
- `@tailwindcss/vite` (plugin para Vite)
- `tailwind-merge` para mesclagem de classes
- `clsx` para classes condicionais
- `tw-animate-css` para animações Tailwind

## Convenções

- Organizar classes: layout → flex/grid → padding/margin → tipografia → visual → interação
- Usar `data-[state=open]:` para estados de componentes Radix
- Variantes de componentes via `cva` (class-variance-authority)
- Respeitar breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Dark mode via `dark:` prefixo ou `data-theme`

## Regras

- Nunca usar `!important`
- Manter consistência com tokens do sistema de design
- Preferir classes utilitárias sobre CSS customizado
- CSS customizado apenas para animações e efeitos que o Tailwind não suporta
- Usar `@layer` para organizar estilos em camadas
