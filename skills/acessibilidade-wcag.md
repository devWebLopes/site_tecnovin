# Acessibilidade WCAG

## Descrição

Padrões de acessibilidade e boas práticas WCAG para garantir que o site seja acessível a todos os usuários.

## Competências

- Implementação de componentes acessíveis com Radix UI
- Navegação por teclado completa
- Atributos ARIA corretos
- Contraste de cores adequado (WCAG AA)
- Texto alternativo para imagens
- Labels e descrições para formulários

## Regras

- Todos os componentes de UI usam primitives Radix UI (já acessíveis por padrão)
- Navegação deve ser funcional com teclado (Tab, Enter, Escape)
- Foco visível sempre presente
- Imagens possuem `alt` descritivo
- Formulários possuem labels associados
- Cores não são a única forma de transmitir informação
- Respeitar `prefers-reduced-motion` para animações
- Semântica HTML correta (main, nav, section, article, header, footer)

## Ferramentas

- Radix UI (primitivas acessíveis)
- ESLint com regras de acessibilidade
- Testes com leitores de tela (screen readers)
- Verificação de contraste com ferramentas de QA

## Checklist

- [ ] Todas as imagens têm alt text
- [ ] Formulários têm labels
- [ ] Navegação por teclado funciona
- [ ] Foco visível
- [ ] Contraste mínimo 4.5:1 para texto normal
- [ ] Sem âncoras vazias
- [ ] IDs únicos no documento
