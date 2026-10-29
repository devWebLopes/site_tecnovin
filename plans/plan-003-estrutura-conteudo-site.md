# Plano — Estruturação do Conteúdo do Site a partir do Dossiê Tecnovin

**ID:** plan-003-estrutura-conteudo-site
**Tarefa:** Analisar `docs/dossie_Tecnovin` e criar `docs/conteudo/` com documentos estruturados para construção do site institucional.
**Agente Responsável:** Editorial Agent
**Skills Utilizadas:** editorial-conteudo, seo-onpage, seo-ai-search
**Data:** 04/09/2026

## Contexto

O projeto possui 10 arquivos de dossiê (`docs/dossie_Tecnovin/`) resultantes de pesquisa aprofundada sobre a Tecnovin do Brasil. Esses documentos contêm dados cadastrais, histórico, produtos, governança, imprensa, artigos, presença digital e aspectos jurídico-reputacionais. O conteúdo precisa ser convertido em documentos prontos para alimentar as páginas e o blog do site, respeitando rigorosamente o `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`.

## Objetivo

Criar `docs/conteudo/` com:

1. Um **arquivo mestre** que mapeia como cada documento será usado no site.
2. **Dados da empresa** (institucionais e cadastrais, separando atual de histórico).
3. **Código de ética** baseado nos compromissos documentados.
4. **Arquivos de blog** com temas apoiados em fatos do dossiê.

## Execução — Etapa a Etapa

### Etapa 1: Análise do dossiê

- Ler todos os 10 arquivos de `docs/dossie_Tecnovin/`.
- Classificar: fato confirmado vs. alegação/indicador vs. histórico.
- Consultar `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md` e `agents/editorial.md`.

### Etapa 2: Criação do arquivo mestre

- `docs/conteudo/00-arquivo-mestre.md` com mapa de uso, regras editoriais e pendências.

### Etapa 3: Documentos institucionais

- `01-dados-da-empresa.md`
- `02-historia-e-linha-do-tempo.md`
- `03-portfolio-e-produtos.md`
- `04-governanca-e-estrutura.md`
- `05-reconhecimentos-e-presenca.md`

### Etapa 4: Ética e sustentabilidade

- `06-codigo-de-etica.md`
- `07-compromisso-sustentabilidade.md`

### Etapa 5: Blog

- Criar 6 artigos em `docs/conteudo/blog/`.

## Regras Editoriais Aplicadas

1. Fatos de capacidade, clientes, exportações e unidades **não** são apresentados como atuais sem confirmação documental.
2. Dados históricos sempre com **data, fonte e rótulo de "registro histórico"**.
3. Separar Tecnovin, Suvalan e Sumabras (não presumir identidade jurídica).
4. Toda afirmação com fonte citada.
5. Conteúdo restrito (270 mil t/ano, Coca-Cola, Nestlé, Maguary) apenas como registro histórico.

## Validação Final

- [ ] `docs/conteudo/` criado com arquivo mestre + 7 documentos + blog
- [ ] Nenhum dado restrito apresentado como atual
- [ ] Todos os dados históricos com data, fonte e rótulo
- [ ] Arquivo mestre mapeia cada arquivo para uma seção do site

## Entregas

- `docs/conteudo/00-arquivo-mestre.md`
- `docs/conteudo/01-dados-da-empresa.md`
- `docs/conteudo/02-historia-e-linha-do-tempo.md`
- `docs/conteudo/03-portfolio-e-produtos.md`
- `docs/conteudo/04-governanca-e-estrutura.md`
- `docs/conteudo/05-reconhecimentos-e-presenca.md`
- `docs/conteudo/06-codigo-de-etica.md`
- `docs/conteudo/07-compromisso-sustentabilidade.md`
- `docs/conteudo/blog/*.md` (6 artigos)
