---
name: ai-image-qa-and-postprocessing
description: >-
  Protocolo de controle de qualidade visual (QA fotográfico em 12 pontos), color grading editorial e pipeline de pós-processamento WebP/JPG com Sharp para garantir que apenas imagens perfeitas e ultra-rápidas sejam publicadas no site. Use após gerar qualquer imagem com IA e antes de integrá-la ao código.
---

# AI Image QA & Post-Processing — Auditoria de Perfeição Visual & Pipeline Web

## Objetivo

Nenhuma imagem gerada por IA deve ir direto para produção sem passar por **Inspeção Visual Rigorosa (QA Fotográfico)** e **Pós-Processamento Padronizado**. Esta skill define os critérios objetivos para aprovar, corrigir ou regenerar uma imagem e o script exato para publicá-la em `.webp` + `.jpg` com performance máxima.

---

## 1. Protocolo de Inspeção Visual em 12 Pontos (Gatekeeper de Perfeição)

Sempre que o subagente `image-generator` produzir uma imagem, inspecione-a usando a ferramenta `read_file` (visualização multimodal da imagem) e verifique os **12 critérios eliminatórios**:

| #  | Critério de Perfeição Fotográfica      | O que procurar (Falha = Rejeitar e Regenerar)                                                                                     |
| -- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 1  | **Zero Texto / Símbolos Alucinados**   | Qualquer letra, número de graduação em béquer, rótulo borrado ou marca d'água ilegível = **Reprovação imediata**.                 |
| 2  | **Física de Líquidos e Menisco**       | O nível do líquido dentro do recipiente deve ser horizontal (respeitando a gravidade) e apresentar menisco real nas bordas.       |
| 3  | **Coerência de Refração no Vidro**     | Hastes, caules ou linhas de fundo vistas através do vidro/líquido não podem desaparecer ou quebrar de forma impossível.          |
| 4  | **Anatomia Botânica Autêntica**        | Frutas devem ter a morfologia correta da espécie (ex.: acerola trilobulada, coroa real do abacaxi, cabinhos naturais nas uvas).   |
| 5  | **Textura Orgânica vs. Plástico**      | Casca de frutas, pedra e inox devem exibir micro-textura real em zoom 100%, nunca superfície lisa de cera/plástico CGI.           |
| 6  | **Contato Físico e Sombras de Oclusão**| Todos os objetos devem apoiar-se firmemente na superfície com sombra de contato (*ambient occlusion*); nada pode parecer flutuar. |
| 7  | **Direção Única da Luz Principal**     | As sombras e os brilhos especulares (*catchlights*) de todos os elementos da cena devem apontar para a mesma fonte de luz.        |
| 8  | **Geometria de Elipses e Cilindros**   | Bocas de béqueres, tigelas e tanques de inox devem formar elipses geométricas contínuas, sem amassados ou assimetrias tortas.     |
| 9  | **Fidelidade Cromática Editorial**     | Cores fiéis ao ingrediente real e harmonizadas com a paleta Tecnovin (`#FAF8F5`, `#1C1917`, `#5C1A2B`, `#C5A059`), sem neon.      |
| 10 | **Transição Natural de Foco (Bokeh)**  | O plano focal deve ser nítido no sujeito principal e o desfoque de fundo deve progredir gradualmente, sem recortes duros de colagem.|
| 11 | **Enquadramento e Margem de Respiro**  | O assunto principal não pode ser cortado de forma acidental nas bordas e deve suportar `object-fit: cover` nos cards responsivos. |
| 12 | **Conformidade com o GUIA Editorial**  | Zero logotipos de terceiros, zero fachadas falsas, zero promessas visuais de escala não documentadas no dossiê.                   |

---

## 2. Pipeline de Pós-Processamento, Color Grading Sutil e Otimização (`sharp`)

Imagens brutas geradas por IA geralmente vêm em PNG ou JPEG pesado (`600 KB` a `2.5 MB`) e podem se beneficiar de um **micro-ajuste de nitidez óptica** após o redimensionamento (`sharpen`) para preservar a textura de grão fino e porosidade.

### 2.1. Dimensões e Pesos Canônicos no Projeto Tecnovin

| Categoria de Imagem                       | Prefixo do Arquivo     | Dimensão Canônica (`px`) | Proporção | Peso Alvo `.webp` | Qualidade WebP / JPG |
| ----------------------------------------- | ---------------------- | ------------------------ | --------- | ----------------- | -------------------- |
| **Hero de Produto (`/produtos/:slug`)**   | `hero-[slug]`          | `1200 × 900`             | `4:3`     | `60 KB – 140 KB`  | `82` / `85`          |
| **Detalhe de Ingrediente (3 quadros)**    | `detalhe-[slug]-[tipo]`| `900 × 675` ou `800×800` | `4:3`/`1:1`| `20 KB – 75 KB`  | `80` / `84`          |
| **Capa Editorial do Blog (`/blog/:slug`)**| `blog-[slug]`          | `1280 × 720`             | `16:9`    | `50 KB – 160 KB`  | `82` / `85`          |
| **Imagem Institucional / Story (`Home`)** | `tecnovin-[contexto]`  | `960 × 1200`             | `4:5`     | `80 KB – 150 KB`  | `82` / `85`          |

### 2.2. Script Node.js de Pós-Produção Óptica (WebP + Fallback JPG + Micro-Sharpening)

Execute via Node.js/Sharp para converter a imagem aprovada gerando simultaneamente o `.webp` principal e o `.jpg` de fallback (necessários para `<picture>` e `og:image`):

```js
import sharp from "sharp";

/**
 * Processa uma imagem gerada por IA aplicando redimensionamento de alta precisão
 * (Lanczos3), micro-sharpening óptico para realçar textura realista e exportação
 * dupla (.webp + .jpg) otimizada para Core Web Vitals.
 */
async function processarImagemRealista({
  inputPath,
  outputBasePath, // ex: "client/public/images/hero-uva"
  width = 1200,
  height = 900,
  webpQuality = 82,
  jpgQuality = 85,
}) {
  const pipeline = sharp(inputPath)
    .resize(width, height, {
      fit: "cover",
      position: "attention", // preserva o ponto focal principal
      kernel: sharp.kernel.lanczos3,
    })
    // Micro-sharpening sutil para preservar porosidade, pruína e grão óptico após resize
    .sharpen({ sigma: 0.65, m1: 0.8, m2: 1.5 });

  await pipeline
    .clone()
    .webp({ quality: webpQuality, effort: 6, smartSubsample: true })
    .toFile(`${outputBasePath}.webp`);

  await pipeline
    .clone()
    .jpeg({ quality: jpgQuality, mozjpeg: true, progressive: true })
    .toFile(`${outputBasePath}.jpg`);

  console.log(`✅ Publicado com sucesso: ${outputBasePath}.webp e .jpg`);
}
```

---

## 3. Padrão de Integração no React (`<picture>` + `<ScaleRevealImage>`)

Toda imagem realista publicada no site deve ser renderizada com suporte a `<picture>` (WebP com fallback JPG), dimensões explícitas (`width`/`height` para `CLS = 0`), `alt` descritivo rico e o wrapper de revelação suave `<ScaleRevealImage>` (quando aplicável):

```tsx
<picture>
  <source srcSet="/images/hero-uva.webp" type="image/webp" />
  <img
    src="/images/hero-uva.jpg"
    alt="Cachos de uvas tintas frescas com pruína natural ao lado de concentrado de suco de uva rubi sobre pedra travertino"
    width={1200}
    height={900}
    loading="lazy"
    decoding="async"
    className="h-full w-full object-cover"
  />
</picture>
```

