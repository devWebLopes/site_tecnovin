---
name: photorealistic-prompt-engineering
description: >-
  Engenharia avançada de prompts para geração de imagens hiper-realistas com aparência fotográfica perfeita (indistinguível de câmera real). Use sempre que precisar criar ou refinar prompts para gerar fotografias de produtos, alimentos, ingredientes, ambientes industriais, retratos ou paisagens sem aspecto plástico ou artificial de IA.
---

# Photorealistic Prompt Engineering — Perfeição Óptica & Física Real

## Filosofia Central: "Fotografia Óptica, Nunca Renderização 3D"

Modelos geradores de imagem tendem a produzir superfícies excessivamente lisas ("plastic look"), iluminação uniforme demais e simetria artificial quando recebem prompts vagos. Para atingir **perfeição fotográfica indistinguível de uma captura real**, todo prompt deve especificar **6 camadas físicas**:

1. **Sujeito e Anatomia Material** (geometria real, variedade botânica/industrial, estado físico)
2. **Micro-Imperfeições Orgânicas** (textura submilimétrica, poeira, condensação, desgaste natural)
3. **Superfície de Apoio e Contexto Espacial** (materiais autênticos, sem objetos flutuantes)
4. **Arquitetura de Iluminação e Comportamento da Luz** (direção, temperatura Kelvin, modificadores, refração, *subsurface scattering*)
5. **Sistema Óptico de Captura** (corpo da câmera, lente exata, distância focal, abertura `f/`, plano focal, filme/sensor)
6. **Restrições Anti-IA (Negative Constraints)** (eliminação explícita de artefatos sintéticos, textos alucinados e CGI)

---

## 1. Equação Canônica do Prompt Fotorrealista

```text
[Tipo de Fotografia + Estética Editorial] +
[Sujeito Principal com Descrição Física, Textura e Comportamento Óptico] +
[Micro-imperfeições Naturais e Detalhes de Superfície] +
[Superfície/Cenário + Props Secundários Desfocados em Segundo Plano] +
[Setup de Iluminação Física (Key Light, Fill, Backlight, Kelvin, Sombras)] +
[Especificação de Câmera + Lente + Abertura + Profundidade de Campo + Color Grading] +
[Restrições Negativas: No text, no labels, no logos, no CGI, no plastic texture]
```

---

## 2. Catálogo de Sistemas Ópticos (Câmeras & Lentes)

Escolha sempre a combinação câmera + lente que um fotógrafo especializado usaria na vida real para aquele assunto:

| Assunto Fotográfico                         | Câmera / Sensor de Referência                | Lente & Distância Focal                 | Abertura Ideal | Característica Óptica Principal                                                                 |
| ------------------------------------------- | -------------------------------------------- | --------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------- |
| **Still Life Editorial / Hero de Produto**  | Hasselblad H6D-100c (Médio Formato 100MP)    | HC 120mm f/4 Macro II ou 80mm f/2.8     | `f/4` a `f/5.6`| Transição tonal cremosa (16-bit color depth), nitidez cirúrgica no centro, desfoque orgânico.   |
| **Macro de Texturas, Cristais & Gotas**     | Phase One IQ4 150MP ou Sony A7R V            | 90mm f/2.8 Macro G OSS (1:1)            | `f/5.6` a `f/8`| Micro-contraste extremo, resolução de grãos cristalinos, poros da casca e nervuras de folhas.   |
| **Gastronomia, Bebidas & Líquidos**         | Canon EOS R5 ou Leica SL2-S                  | 85mm f/1.4L ou 50mm f/1.2 Noctilux      | `f/2.0` a `f/4`| Bokeh circular suave, separação tridimensional do sujeito e refração cristalina em vidraria.    |
| **Planta Industrial, Tanques & Arquitetura**| Cambo Actus + Digital Back ou Canon R5       | 24mm f/3.5L TS-E II (Tilt-Shift)        | `f/8` a `f/11` | Linhas verticais 100% paralelas (sem distorção de perspectiva), nitidez profunda (*deep focus*).|
| **Paisagem / Vinhedos / Terroir**           | Fujifilm GFX 100 II (Médio Formato)          | GF 32-64mm f/4 ou GF 55mm f/1.7         | `f/8` a `f/11` | Alcance dinâmico de 14+ stops (preserva detalhes nas sombras das parreiras e nas altas luzes).  |

---

## 3. Física da Luz e Comportamento de Materiais (PBR)

Para que o modelo de IA calcule a luz como fotografia real e não como ilustração:

### 3.1. Subsurface Scattering (SSS — Espalhamento Subsuperficial)
Essencial para frutas, uvas, gomos de cítricos, folhas verdes, polpas e cera:
- **Termos obrigatórios no prompt:** `realistic subsurface scattering through translucent fruit flesh`, `backlit skin translucency`, `internal glow where directional sunlight hits the berry`.

### 3.2. Índice de Refração (IOR), Cáusticas e Menisco (Líquidos e Vidros)
Essencial para sucos concentrados, béqueres, garrafas e cálices:
- **Termos obrigatórios no prompt:** `physically accurate glass refraction`, `natural liquid meniscus clinging to the inner borosilicate glass wall`, `warm amber caustic light patterns projected onto the stone surface`, `viscous high-Brix syrup texture with subtle surface tension`.

### 3.3. Reflexos Anisotrópicos (Metais e Aço Inoxidável)
Essencial para tanques industriais, tubulações e bancadas de laboratório:
- **Termos obrigatórios no prompt:** `brushed 316L stainless steel with realistic anisotropic specular highlights`, `subtle micro-scratches from industrial polishing`, `natural environmental reflections on curved metal surfaces`.

---

## 4. Micro-Imperfeições que Criam Hiper-Realismo ("The Imperfection Rule")

A perfeição fotográfica nasce da **imperfeição orgânica controlada**. Nunca peça frutas ou objetos "perfeitos"; peça detalhes reais:

- **Em Frutas e Botânica:**
  - Uvas: `natural white epicuticular wax bloom (pruína) on dark grape skins`, `varied berry sizes`, `slightly woody pedicel stem with natural oxidation`.
  - Maçãs: `natural lenticels (micro-speckles) on red-gold peel`, `subtle asymmetry`, `fresh water droplets with realistic contact angle`.
  - Cítricos (Laranja/Limão): `porous oil glands visible on peel (albedo and flavedo detail)`, `fine white pith fibers`, `juice vesicles bursting with specular highlights`.
  - Abacaxi/Acerola: `fibrous crown bracts with natural dry tips`, `irregular organic lobules on ripe acerola skin`.
- **Em Superfícies e Ambiente:**
  - `microscopic dust motes floating in a shaft of morning sunlight`, `subtle moisture ring on porous travertine stone`, `natural linen weave with irregular slub threads`, `fine film grain (ISO 100 organic structure)`.

---

## 5. Iluminação Fotográfica de Estúdio e Locação

Substitua "good lighting" por direções precisas de Diretor de Fotografia (DoP):

1. **Chiaroscuro Editorial Suave (Clássico / Vale dos Vinhedos):**
   - `"Soft directional side-lighting from a large north-facing window at 45 degrees, diffused through unbleached muslin, creating gentle chiaroscuro falloff, deep rich shadows (#121110) with preserved detail, and warm cream highlights (#FAF8F5)."`
2. **Contraluz para Líquidos e Concentrados (Backlit Translucency):**
   - `"Precision studio backlighting through a diffused scrim directly behind the glass vessel to illuminate the ruby/amber viscosity of the juice concentrate, paired with two narrow white strip-lights for clean specular rim highlights on the glass edges."`
3. **Luz Natural de Neblina na Serra Gaúcha (Terroir / Manhã):**
   - `"Early morning golden hour sunlight (3800K) breaking through low valley mist in Southern Brazil, long soft shadows across vineyard rows, atmospheric depth, gentle backlit dew on leaves."`

---

## 6. Bloco Universal de Restrições Anti-Artefatos (Sempre Incluir)

Adicione sempre ao final de qualquer prompt para `image-generator`:

```text
Photographic authenticity constraints: Shot on real medium-format optics, raw unretouched optical capture, natural color rendition. Strictly NO text, NO typography, NO labels, NO watermarks, NO brand logos, NO gibberish writing on glassware or equipment. NO CGI look, NO 3D render artifacts, NO plastic sheen, NO oversaturated neon colors, NO floating objects, NO symmetrical clone patterns.
```

---

## 7. Checklist Antes de Disparar a Geração

- [ ] A proporção (`aspect ratio`: `16:9`, `4:3`, `4:5`, `1:1`) foi especificada explicitamente no prompt?
- [ ] O prompt define câmera, lente e abertura (`f/`) compatíveis com a escala do objeto?
- [ ] Há pelo menos 2 micro-imperfeições físicas descritas (ex.: pruína na uva, poros na casca, menisco no vidro)?
- [ ] A direção da luz (lateral, contraluz, difusa) e a superfície de apoio estão definidas?
- [ ] O bloco de restrições contra textos falsos (`NO text, NO labels, NO logos`) foi incluído?

