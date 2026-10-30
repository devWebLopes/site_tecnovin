# Plano 012 — Instalação das Skills de Criação de Imagens Fotorrealistas de Alta Precisão

**ID:** plan-012-install-photorealistic-image-skills  
**Tarefa:** Instalar as melhores skills para criação de imagens com aparência fotorrealista de nível editorial e industrial (perfeição óptica, física de materiais e QA visual)  
**Agente Responsável:** Arquiteto de Sistema (`agents/arquiteto.md`)  
**Agentes Beneficiados:** Frontend Agent, Editorial Agent, QA Agent, Subagente `image-generator`  
**Data:** 29/10/2026  
**Base Documental:** `AGENTS.md`, `GUIA_EDITORIAL_E_FONTES_TECNOVIN.md`, `skills/classic-minimalist-ui/SKILL.md`, `plans/plan-008-criacao-e-padronizacao-imagens-ia.md`

---

## 1. Contexto e Objetivo

Para elevar a geração e curadoria de imagens do projeto **Tecnovin Institucional** (e do ambiente global Antigravity) ao nível de **fotografia profissional indistinguível de câmera real**, este plano instala uma suíte de **4 skills especializadas em fotorrealismo óptico, direção de arte botânica/líquidos, fotografia industrial/terroir e auditoria/pós-produção visual**, integradas às skills já existentes (`image-ai-processing`, `image-optimization` e `image-naming-standards`).

---

## 2. Seleção e Arquitetura das Skills Instaladas

| Skill                                    | Caminho no Projeto                                        | Escopo Principal                                                                                                                                             |
| ---------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`photorealistic-prompt-engineering`**  | `skills/photorealistic-prompt-engineering/SKILL.md`       | Engenharia de prompts baseada em física óptica real (câmeras médio formato/full-frame, lentes macro/tilt-shift, iluminação global, micro-imperfeições, IOR). |
| **`editorial-product-food-photography`** | `skills/editorial-product-food-photography/SKILL.md`      | Fotografia comercial e editorial de frutas in natura, concentrados líquidos (°Brix, viscosidade, contraluz), cristais (Cremor de Tártaro) e food styling.    |
| **`industrial-architectural-photography`**| `skills/industrial-architectural-photography/SKILL.md`   | Fotografia agroindustrial B2B (tanques inox 316L, laboratórios de qualidade, envase asséptico) e paisagens de terroir no Vale dos Vinhedos.                  |
| **`ai-image-qa-and-postprocessing`**     | `skills/ai-image-qa-and-postprocessing/SKILL.md`          | Protocolo de inspeção visual em 12 pontos (anti-CGI, anti-alucinação), color grading editorial e pipeline WebP/JPG de alta fidelidade com `sharp`.           |

Além disso, as 3 skills base do sistema (`image-ai-processing`, `image-optimization` e `image-naming-standards`) também são sincronizadas e documentadas no índice do projeto para operação conjunta.

---

## 3. Execução — Etapa a Etapa

1. **Etapa 1:** Criar este plano em `plans/plan-012-install-photorealistic-image-skills.md`.
2. **Etapa 2:** Criar `skills/photorealistic-prompt-engineering/SKILL.md` (e instalar em `~/.gemini/config/skills/`).
3. **Etapa 3:** Criar `skills/editorial-product-food-photography/SKILL.md` (e instalar em `~/.gemini/config/skills/`).
4. **Etapa 4:** Criar `skills/industrial-architectural-photography/SKILL.md` (e instalar em `~/.gemini/config/skills/`).
5. **Etapa 5:** Criar `skills/ai-image-qa-and-postprocessing/SKILL.md` (e instalar em `~/.gemini/config/skills/`).
6. **Etapa 6:** Atualizar `skills/README.md`, `agents/frontend.md`, `agents/editorial.md`, `agents/qa.md`, `agents/README.md` e `AGENTS.md`.
7. **Etapa 7:** Executar validações obrigatórias (`pnpm check`, `pnpm format`, `pnpm build`).

---

## 4. Checklist de Validação (`REGRA 5`)

- [x] 4 novas skills de fotorrealismo criadas em `skills/<nome>/SKILL.md`
- [x] Skills instaladas também no diretório global de skills do Antigravity (`~/.gemini/config/skills/`)
- [x] `skills/README.md` atualizado com a nova categoria **Skills de Fotografia Fotorrealista & Imagens IA**
- [x] Agentes (`frontend.md`, `editorial.md`, `qa.md`, `README.md`) e `AGENTS.md` atualizados
- [x] `pnpm check` executado sem erros
- [x] `pnpm format` aplicado
- [x] `pnpm build` validado com sucesso

