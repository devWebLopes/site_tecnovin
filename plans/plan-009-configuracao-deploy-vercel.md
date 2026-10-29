# Plano 009 — Configuração de Deploy na Vercel

## Contexto e Diagnóstico

Ao realizar o deploy na Vercel, o navegador passou a exibir o código JavaScript compilado de `server/index.ts` (`dist/index.js`) em vez da aplicação React.

**Causa raiz:**

1. O script `pnpm build` em `package.json` executa:
   - `vite build` → gera o frontend estático (`index.html`, `assets/`, etc.) em `dist/public` (conforme `vite.config.ts`).
   - `esbuild server/index.ts ... --outdir=dist` → gera o servidor Node/Express em `dist/index.js`.
2. Por padrão, a Vercel detecta projetos Vite e assume que o **Output Directory** é `dist/`.
3. Como na raiz de `dist/` existe apenas `index.js` (e o `index.html` está em `dist/public/index.html`), a Vercel serviu o arquivo `dist/index.js` como conteúdo estático na rota principal.

## Solução

1. Criar o arquivo `vercel.json` na raiz do projeto configurando:
   - `buildCommand`: `"pnpm build"`
   - `outputDirectory`: `"dist/public"` (apontando para onde o Vite gera o `index.html` e os assets públicos)
   - `rewrites`: redirecionamento SPA (`/(.*)` → `/index.html`) para suportar o roteamento client-side com Wouter em todas as rotas (`/sobre`, `/produtos`, `/blog`, etc.).

## Agentes Acionados

- **Backend Agent** (`agents/backend.md`) — configuração de ambiente de produção e empacotamento.
- **QA Agent** (`agents/qa.md`) — validação de `pnpm check`, `pnpm format` e `pnpm build`.

## Checklist de Validação

- [x] Criar `vercel.json` com `outputDirectory: "dist/public"` e `rewrites` para SPA
- [x] Executar `pnpm check`
- [x] Executar `pnpm format`
- [x] Executar `pnpm build`
