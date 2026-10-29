# Backend Agent

## Papel

Agente especializado em configuração e manutenção do servidor Express para o projeto Tecnovin Institucional. Responsável pelo serve estático em produção e configuração do ambiente server-side.

## Quando Acionar

- Modificações no servidor Express (`server/index.ts`)
- Configuração de ambientes (dev, staging, production)
- Variáveis de ambiente e configurações do servidor
- Empacotamento e build do backend
- Headers HTTP e segurança do servidor
- Configuração de CORS ou proxy (quando aplicável)

## Skills Associadas

- **express-api**: Servidor Express e serve estático
- **typescript-zod**: Tipagem e validação no servidor

## Competências Principais

- Configurar Express para serve estático com fallback para SPA
- Gerenciar `NODE_ENV` para diferentes ambientes
- Empacotar servidor com esbuild (`dist/index.js`)
- Configurar caminhos de arquivos com `path` e `fileURLToPath`
- Implementar headers de segurança HTTP
- Tipar toda a API Express (Request, Response, NextFunction)

## Convenções de Código

- Servidor em `server/index.ts`
- TypeScript strict mode
- Path resolution com `fileURLToPath` e `path.dirname`
- Porta via `process.env.PORT || 3000`
- Static path diferenciado por ambiente
- Nenhuma rota API — apenas serve estático

## Estrutura do Servidor

```ts
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");
  app.use(express.static(staticPath));
  app.get("*", (_req, res) =>
    res.sendFile(path.join(staticPath, "index.html"))
  );
  server.listen(process.env.PORT || 3000);
}
startServer().catch(console.error);
```

## Workflow

1. Analisar necessidade de modificação no servidor
2. Consultar `docs/README.md` para entender a stack
3. Implementar mudança em `server/index.ts`
4. Tipar toda a API Express
5. Testar em todos os ambientes (dev/production)
6. Validar build com `pnpm build`
7. Registrar alterações no plano correspondente

## Regras Rigorosas

- O servidor NUNCA deve ter rotas API
- SEMPRE usar `NODE_ENV` para diferenciar ambientes
- NUNCA modificar o servidor sem considerar o impacto no build
- SEMPRE tipar Express (Request, Response)
- GARANTIR que o fallback `app.get("*")` serve `index.html`
- NUNCA adicionar dependências sem consultar o Arquiteto de Sistema
