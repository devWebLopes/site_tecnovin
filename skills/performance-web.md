# Performance Web

## Descrição

Otimização de performance e Core Web Vitals para garantir excelente experiência do usuário.

## Competências

- Análise de Core Web Vitals (LCP, INP, CLS)
- Otimização de bundle com Vite e esbuild
- Lazy loading de componentes e imagens
- Code splitting estratégico
- Minificação e tree-shaking
- Otimização de fontes e assets

## Métricas Alvo

- **LCP (Largest Contentful Paint)**: < 2.5s
- **INP (Interaction to Next Paint)**: < 200ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FCP (First Contentful Paint)**: < 1.8s
- **TBT (Total Blocking Time)**: < 200ms

## Regras de Performance

- Usar `lazy` para imagens e iframes
- Componentes pesados com `React.lazy()` e `Suspense`
- Vite configurado para tree-shaking eficiente
- esbuild para bundling do servidor
- Prevenir layout shifts com dimensões explícitas em imagens e containers
- Usar `font-display: swap` para fontes
- Evitar fontes excessivas ou múltiplos pesos
- Minimizar re-renderizações com `memo`, `useMemo`, `useCallback`

## Ferramentas

- Lighthouse para auditoria
- Chrome DevTools Performance tab
- Vitest para benchmarks de componentes
- Vite build analysis
