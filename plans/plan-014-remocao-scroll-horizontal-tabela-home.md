# Plan 014 — Remoção do Scroll Horizontal na Tabela Comparativa de Concentrados (Home)

## Contexto e Diagnóstico

Na página inicial (`client/src/pages/Home.tsx`), na seção "Portfólio para criar / Comparativo técnico B2B" (`#solucoes`), a tabela de especificações técnicas de referência apresentava uma barra de rolagem horizontal nativa do navegador (visível principalmente em sistemas Windows ou telas com largura <= 1200px / zoom 125%).

### Causas Identificadas:
1. **Largura Mínima Rígida:** `.portfolio-comparison-table` possuía `min-width: 980px;`, forçando overflow em telas ou contêineres menores que 980px + padding.
2. **Propriedade de Overflow:** `.portfolio-table-scroll` estava configurado com `overflow-x: auto;`, disparando a barra de rolagem horizontal sempre que o conteúdo excedesse o contêiner por 1 pixel.
3. **Impedimento de Quebra de Linha:** Células `th`, `td` e classes internas (`.portfolio-table-primary`, `.portfolio-table-sub`, `.portfolio-table-product-link`) tinham `white-space: nowrap;` indiscriminadamente, somado a um padding lateral acumulado de mais de 220px entre as 6 colunas.
4. **Ausência de Adaptação Mobile:** Dispositivos móveis e tablets (< 860px) mantinham o comportamento de tabela larga com rolagem horizontal obrigatória.

---

## Solução Implementada

### 1. Fluidez Total no Desktop & Laptops
- Remoção do `min-width: 980px;` e definição de larguras percentuais proporcionais para as 6 colunas (`22%`, `9%`, `13%`, `20%`, `18%`, `18%`).
- Ajuste de padding para `0.95rem 0.85rem` e permissão de quebra de linha suave (`line-height: 1.35`) em parâmetros descritivos e embalagens.
- Aplicação de `overflow: hidden;` em `.portfolio-table-scroll`, eliminando definitivamente qualquer barra de rolagem horizontal.

### 2. Layout Responsivo Elegante em Cards para Mobile (< 860px)
- Em telas menores que 860px (smartphones e tablets portrait), a tabela é adaptada semanticamente:
  - O cabeçalho `<thead>` é ocultado visualmente.
  - Cada linha `<tr>` converte-se em um card escuro sofisticado com as bordas e cores da identidade visual Tecnovin.
  - Cada célula `<td>` exibe o rótulo do dado em dourado à esquerda via `data-label` e os valores técnicos alinhados à direita.
  - Zero overflow horizontal em qualquer resolução de celular (360px a 820px).

### 3. Proteção Global de Viewport
- Configuração de `overflow-x: hidden;` no `html` e `body` em `client/src/index.css`.

---

## Validações de Qualidade (QA)

- [x] `pnpm check`: 0 erros de tipagem TypeScript.
- [x] `pnpm build`: build concluído com sucesso em 12.12s.
- [x] `pnpm format`: arquivos formatados com Prettier.

