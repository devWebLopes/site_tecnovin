# Express Backend

## Descrição

Habilidade para configurar e operar o servidor Express como servidou estático para produção.

## Competências

- Configurar Express para servir arquivos estáticos
- Implementar client-side routing com fallback para `index.html`
- Gerenciar variáveis de ambiente (NODE_ENV, PORT)
- Empacotamento do servidor com esbuild
- Configuração de CORS quando aplicável
- Headers HTTP seguros

## Ferramentas

- Express 4.x
- esbuild para bundling
- Node.js runtime
- `vite-plugin-manus-runtime` para runtime Manus

## Convenções

- Servidor em `server/index.ts`
- Tipagem Express com `@types/express`
- Resolução de paths com `path` e `fileURLToPath`
- Porta configurável via `process.env.PORT || 3000`
- Static files servidos de `dist/public` em produção

## Estrutura do Servidor

```ts
import express from "express";

const app = express();
app.use(express.static(staticPath));
app.get("*", (_req, res) => res.sendFile(indexHtmlPath));
app.listen(port, () => console.log(`Server on port ${port}`));
```

## Regras

- O servidor NÃO deve ter rotas API — apenas serve arquivos estáticos
- Usar sempre `NODE_ENV` para diferenciar ambientes
- O build gera `dist/index.js` via esbuild
- O servidor deve estar em `server/index.ts`
- Não adicionar middleware desnecessário ao servidor
