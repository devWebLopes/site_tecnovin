# Plano — Registro da Base de Conhecimento da Empresa (dossiê Tecnovin)

**ID:** plan-004-base-conhecimento-dossie
**Tarefa:** Registrar em `agents.md` e demais arquivos de regras/documentação que `docs/dossie_Tecnovin/` é a base de conhecimento única e canônica dos dados da empresa.
**Agente Responsável:** Arquiteto de Sistema
**Skills Utilizadas:** editorial-conteudo (contexto de dados)
**Data:** 06/09/2026

## Contexto

O projeto possui a pasta `docs/dossie_Tecnovin/` contendo o levantamento completo de dados e informações sobre a Tecnovin do Brasil (cadastro, histórico, produtos, governança, imprensa, publicações, presença digital, aspectos jurídico-regulatórios, reputacionais, pessoas e financeiro-comercial). Essa pasta deve ser tratada como a **base de conhecimento única e canônica** dos dados da empresa e de seu contexto de atuação, e essa regra precisa estar registrada nos arquivos de configuração e regras do projeto.

## Objetivo

Registrar, de forma consistente, que `docs/dossie_Tecnovin/` é a base de conhecimento dos dados da empresa, atualizando `agents.md` e demais arquivos onde são gravadas as informações e regras do projeto.

## Regra Registrada

- `docs/dossie_Tecnovin/` é a base de conhecimento única e canônica dos dados da Tecnovin e de seu contexto de atuação.
- Toda informação factual sobre a empresa DEVE ser consultada e validada nessa base antes de uso.
- Qualquer dado sobre a empresa que não conste no dossiê NÃO deve ser apresentado como fato sem confirmação documental.
- O dossiê prevalece sobre fontes secundárias em caso de conflito.
- Conteúdo editorial (`docs/conteudo/`) e o GUIA editorial derivam dessa base.

## Execução — Etapa a Etapa

1. Atualizar `agents.md` (arquivo mestre / cérebro da IA).
2. Atualizar `docs/README.md`.
3. Atualizar `docs/diretrizes-arquiteturais.md`.
4. Atualizar `agents/README.md`.
5. Atualizar `agents/editorial.md`.
6. Atualizar `agents/arquiteto.md`.
7. Atualizar `skills/editorial-conteudo.md`.
8. Atualizar `skills/README.md`.
9. Atualizar `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`.

## Validação Final

- [ ] `agents.md` atualizado
- [ ] Demais arquivos de regras/documentação atualizados
- [ ] Referência à base de conhecimento consistente em todos os arquivos

## Entregas

- `agents.md`
- `docs/README.md`
- `docs/diretrizes-arquiteturais.md`
- `agents/README.md`
- `agents/editorial.md`
- `agents/arquiteto.md`
- `skills/editorial-conteudo.md`
- `skills/README.md`
- `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`
