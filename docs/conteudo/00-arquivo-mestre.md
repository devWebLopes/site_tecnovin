# Arquivo Mestre — Conteúdo do Site Tecnovin

**Versão:** 1.0
**Data:** 04/09/2026
**Origem dos dados:** `docs/dossie_Tecnovin/` (10 arquivos de pesquisa)
**Agente responsável:** Editorial Agent

> ⚠️ **Leia antes de usar:** este arquivo é o ponto de entrada do conteúdo do site. Ele explica **como cada documento em `docs/conteudo/` deve ser usado** nas páginas e seções do site institucional da Tecnovin.

---

## 1. Objetivo desta pasta

`docs/conteudo/` concentra o material editorial **pronto para ser transformado em páginas e artigos do site**. Os documentos foram derivados do dossiê de pesquisa e seguem rigorosamente o `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`.

Cada documento abaixo corresponde a uma **seção do site** e já contém:

- Texto redigido em linguagem institucional e formal;
- Separação entre **fato atual** e **registro histórico**;
- Fontes e datas citadas;
- Rótulo de "registro histórico" para dados de escala, clientes e exportações antigas.

---

## 2. Mapa de uso — como cada arquivo alimenta o site

| #   | Arquivo                              | Seção do site                               | Conteúdo entregue                                                           | Status editorial            |
| --- | ------------------------------------ | ------------------------------------------- | --------------------------------------------------------------------------- | --------------------------- |
| 01  | `01-dados-da-empresa.md`             | **Home / Sobre nós / Quem somos / Contato** | Identidade, localização, portfólio, perfil B2B, dados cadastrais e contatos | ✅ Seguro                   |
| 02  | `02-historia-e-linha-do-tempo.md`    | **Nossa História / Arquivo**                | Linha do tempo com marcos históricos datados e fontes                       | ⚠️ Histórico (rotular)      |
| 03  | `03-portfolio-e-produtos.md`         | **Produtos / Soluções**                     | Portfólio de concentrados, aplicações e processo produtivo                  | ⚠️ Parcial (validar fichas) |
| 04  | `04-governanca-e-estrutura.md`       | **Governança / Institucional**              | Estrutura societária, administradores e unidades                            | ⚠️ Dados registrais         |
| 05  | `05-reconhecimentos-e-presenca.md`   | **Home (selo) / Reconhecimentos**           | Prêmios, patrocínios e presença setorial                                    | ✅ Seguro                   |
| 06  | `06-codigo-de-etica.md`              | **Governança / Ética e Conduta**            | Código de ética e conduta (rascunho para validação)                         | 🔶 Rascunho                 |
| 07  | `07-compromisso-sustentabilidade.md` | **Sustentabilidade**                        | Compromissos ambientais e sociais                                           | ⚠️ Parcial (validar)        |
| —   | `blog/01` a `blog/06`                | **Blog**                                    | Artigos autorais educativos e de memória                                    | 🔶 Rascunho                 |

### Legenda de status

- ✅ **Seguro** — pronto para publicação sem validação adicional.
- ⚠️ **Parcial** — publicável com rótulo de registro histórico ou aguardando ficha técnica vigente.
- 🔶 **Rascunho** — requer aprovação da Tecnovin antes de ir ao ar.

---

## 3. Regras editoriais obrigatórias (resumo)

Aplicam-se a **todos** os documentos desta pasta:

1. **Fatos de capacidade, unidades, exportações e clientes** só podem ser apresentados como atuais após **confirmação documental** da Tecnovin.
2. **Dados históricos** (2000–2024) devem sempre vir com **data, fonte e o rótulo "registro histórico"**.
3. **Nunca** converter informação histórica em promessa atual.
4. **Não presumir identidade jurídica** entre Tecnovin, Suvalan e Sumabras — tratar como marcas/entidades relacionadas.
5. **Toda afirmação** deve ter fonte citada.
6. **Conteúdo restrito** — os números abaixo **não podem** aparecer na Home, em "Soluções" ou em materiais comerciais como dados atuais:
   - Capacidade de "270 mil toneladas por ano" (2010);
   - Clientes Coca-Cola, Nestlé, Maguary, Parmalat, Grupo Martins (fontes históricas);
   - Operação em mais de uma unidade sem comprovação cadastral atual.

---

## 4. Pendências antes da publicação definitiva

| Pendência                                                                                         | Impacto                             | Onde aparece |
| ------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------ |
| Confirmar denominação corporativa (TECNOVIN-SUMABRAS vs. Tecnovin do Brasil vs. Tecnovin-Suvalan) | Identidade e razão social           | `01`, `04`   |
| Obter fichas técnicas vigentes (Brix, pH, acidez, embalagem por fruta)                            | Página de Produtos/Soluções         | `03`         |
| Validar código de ética e compromissos com a diretoria                                            | Páginas de Ética e Sustentabilidade | `06`, `07`   |
| Confirmar com ADVB/RS a forma de citar o Prêmio Exportação RS                                     | Página de Reconhecimentos           | `05`         |
| Obter desfecho oficial da investigação ambiental de 2025 (Arroio Pedrinho)                        | Página de Sustentabilidade          | `07`         |

---

## 5. Fontes principais do dossiê

| Fonte                                                          | Tipo                          | Referência                   |
| -------------------------------------------------------------- | ----------------------------- | ---------------------------- |
| Site institucional                                             | Primária corporativa          | `tecnovin.com.br`            |
| Páginas técnicas históricas                                    | Primária corporativa (legado) | `tecnovin.com.br/tecnovin/*` |
| MonitorCNPJ / BrasilAPI / Econodata                            | Cadastro empresarial          | CNPJ 92.320.233/0001-90      |
| Jornal do Comércio, GZH, Correio do Povo, Diário do Grande ABC | Imprensa                      | Diversas edições             |
| SEC/EDGAR (Ambev 6-K)                                          | Documento regulatório         | 2017 e 2018                  |
| BNDES                                                          | Estudo setorial               | Exportações 1990–1999        |
| Embrapa Uva e Vinho                                            | Institucional                 | Programa Uvas do Brasil      |
| Prefeitura de Bento Gonçalves                                  | Órgão público                 | Licenças e notícias          |

---

## 6. Sequência recomendada de implementação

1. Começar pela **Home** usando `01` (dados seguros) + selos de `05`.
2. Montar **Sobre nós** com `01` + `02` (história).
3. Montar **Produtos/Soluções** com `03` (aguardando fichas técnicas).
4. Montar **Governança e Ética** com `04` + `06`.
5. Montar **Sustentabilidade** com `07`.
6. Publicar **Blog** gradualmente com `blog/*`.
7. Criar **Arquivo/linha do tempo** com `02` como seção de memória.
