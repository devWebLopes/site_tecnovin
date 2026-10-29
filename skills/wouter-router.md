# Wouter Router

## Descrição

Habilidade para implementar roteamento cliente-side com Wouter, o router leve para React.

## Competências

- Definir rotas com `Route` e `Switch` em `App.tsx`
- Navegação programática com `useLocation`, `useParams`, `useRoute`
- Links navegáveis com componente `Link`
- Rotas catch-all para 404
- Aninhação de rotas quando necessário

## Ferramentas

- Wouter 3.x
- `useLocation` para URL atual
- `useParams` para parâmetros de rota
- `useRoute` para matching de rotas
- `Link` para navegação declarativa

## Convenções

- Rotas definidas em `App.tsx` dentro de `<Switch>`
- Página 404 como última rota no Switch
- Componentes de rota renderizados com `component=` ou como children
- Rotas com paths relativos (ex: `/blog`, `/blog/:slug`)

## Exemplo

```tsx
import { Switch, Route } from "wouter";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}
```

## Regras

- Nunca usar React Router — apenas Wouter neste projeto
- Sempre incluir rota catch-all para páginas não encontradas
- Rotas sensíveis a case — usar paths sempre em lowercase
- Navegação interna deve usar `Link`, não `window.location`
