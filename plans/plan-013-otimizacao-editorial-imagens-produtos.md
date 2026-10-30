# Plan 013 — Otimização e Unificação Editorial das Imagens de Produtos (Hero Images)

## Contexto e Diagnóstico

A seção "Portfólio para criar / A fruta em sua forma mais versátil" na Home (`client/src/pages/Home.tsx`) e as páginas individuais de produtos (`client/src/pages/Produto.tsx` / `client/src/lib/produtos.ts`) apresentavam inconsistências críticas de direção de arte:

1. **Disparidade de Iluminação e Cenário:**
   - Card 02 (Maçã): Foto externa em pomar rústico com clarão solar estourado (_golden hour flare_) e caixote de feira, destoando totalmente do estúdio escuro.
   - Card 01 (Uva) e Card 05 (Acerola): Galhos escuros em ambientes rústicos desiguais.
   - Card 03 (Laranja): Cozinha com tábua de madeira rústica e tigela cerâmica.
   - Card 04 (Limão) e Card 06 (Abacaxi): Ardósia escura de estúdio.
     Essa mistura quebrava a estética canônica clássica e minimalista (`skills/classic-minimalist-ui/SKILL.md`).

2. **Desconexão com o Negócio B2B da Tecnovin:**
   - As fotos anteriores mostravam apenas frutas in natura de mercearia, sem representar o produto industrial nobre da empresa: **sucos concentrados de alto Brix (65–70° Brix)**, viscosidade, pureza analítica e vidraria técnica de alta gastronomia / laboratório.

3. **Integração com a UI:**
   - O rodapé de cada card possui um degradê escuro (`product-card-media__overlay`) sobre fundo ameixa/vinho. Fundos claros (como o céu do pomar de maçã) causavam cortes bruscos.

## Skills Acionadas

- `editorial-product-food-photography` (Direção de arte de alimentos B2B, botânica, escala 1 e 2).
- `photorealistic-prompt-engineering` (Sistemas ópticos Hasselblad, subsurface scattering, iluminação chiaroscuro e restrições anti-IA).
- `ai-image-qa-and-postprocessing` (Auditoria em 12 pontos, micro-sharpening e pipeline WebP/JPG).
- `classic-minimalist-ui` (Consistência cromática com paleta Tecnovin `#FAF8F5`, `#1C1917`, `#5C1A2B`, `#C5A059`).

## Etapas de Execução

- [x] **Diagnóstico das Imagens Atuais:** Identificação das inconsistências estéticas e botânicas.
- [x] **Geração Editorial com Subagente `image-generator`:**
  - Uva (GJC): Uvas Isabel/Concord com pruína aveludada + concentrado rubi-violeta denso em copo borossilicato + ardósia vulcânica escura.
  - Maçã (AJC): Maçãs Gala/Fuji com lenticelas + corte com sementes + concentrado límpido âmbar-dourado (70° Brix) + ardósia vulcânica escura.
  - Laranja (FCOJ): Laranjas Valência com glândulas de óleo + gomos suculentos + concentrado denso solar-orange + ardósia escura.
  - Limão (LEMON JC): Limão Siciliano + Lima Tahiti + corte transversal cristalino + concentrado opalescente + ardósia escura.
  - Acerola (ACEROLA JC): Acerolas trilobadas carmesim + corte + concentrado escarlate-terracota + ardósia escura.
  - Abacaxi (PINEAPPLE JC): Harmonização tonal e enquadramento focado na ardósia mineral e polpa dourada.
- [x] **Inspeção de QA em 12 Pontos:** Validação multimodal (`read_file`) eliminando textos, números de béquer, deformações e saturação excessiva.
- [ ] **Pós-Processamento e Otimização Dupla (WebP + JPG):**
  - Redimensionamento 4:3 (1200x900px).
  - Micro-sharpening óptico para realçar porosidade e grão orgânico.
  - Exportação WebP (q=82) e JPG otimizado (q=85).
- [ ] **Integração e Validação no Código:**
  - Atualização dos metadados `imageAlt` em `client/src/pages/Home.tsx` e `client/src/lib/produtos.ts`.
  - Execução de `pnpm check`, `pnpm build` e visualização.
