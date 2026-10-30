---
name: image-ai-processing
description: >-
  Geração, edição e processamento de imagens com inteligência artificial.
  Use quando precisar gerar imagens com IA (Imagen, DALL-E, Stable Diffusion),
  fazer upscaling com IA, remover fundo de imagens automaticamente, restaurar
  fotos antigas, aplicar edições de estilo, criar variações de imagens existentes,
  gerar alt-text automático, ou integrar visão computacional em projetos web.
---

# Image AI Processing — Processamento de Imagens com IA

## Ferramentas Cobertas

| Ferramenta          | Uso Principal                        | Acesso          |
|---------------------|--------------------------------------|-----------------|
| **generate_image**  | Geração de imagens (nativo AGY)      | Tool nativa      |
| **Remove.bg API**   | Remoção de fundo                     | API REST         |
| **Real-ESRGAN**     | Upscaling / super-resolução          | Python / CLI     |
| **Replicate API**   | Stable Diffusion / modelos diversos  | API REST         |
| **Google Vision AI**| OCR, labels, detecção de objetos     | Google Cloud API |
| **Cloudinary AI**   | Transformações automáticas + CDN     | API REST         |

---

## 1. Geração de Imagens com `generate_image` (Nativo)

### Quando usar
- Criar mockups de UI/UX
- Gerar assets para sites e apps
- Criar ilustrações para projetos de clientes
- Gerar imagens placeholder com contexto real

### Melhores Práticas de Prompt

```
# Estrutura de prompt eficaz:
[estilo visual] + [conteúdo principal] + [ambiente/contexto] + [iluminação] + [acabamento]

# Exemplos para fotografia profissional:
"Professional interior photography of a calm therapy room,
 warm natural lighting, plants, neutral beige tones,
 minimalist furniture, photorealistic, 16:9"

"Overhead flat lay of mindfulness tools — journal, pen, candle,
 dried flowers on white linen background, soft shadows,
 editorial photography style"

# Exemplos para UI/Web:
"Modern wellness website hero section UI design,
 light sage green and warm white palette, clean sans-serif typography,
 glassmorphism cards, premium aesthetic, desktop viewport"
```

### Aspect Ratios por Uso

| Destino           | Ratio  | Resolução Típica |
|-------------------|--------|------------------|
| Hero / Banner     | `16:9` | 1920 × 1080      |
| Post Instagram    | `1:1`  | 1080 × 1080      |
| Stories / Reels   | `9:16` | 1080 × 1920      |
| Card / Produto    | `3:4`  | 900 × 1200       |
| Cover LinkedIn    | `3:1`  | 1584 × 396       |
| Foto editorial    | `2:3`  | 800 × 1200       |

---

## 2. Remoção de Fundo (Remove.bg API)

```js
// Instalação
// npm install form-data node-fetch

import FormData from 'form-data';
import fetch from 'node-fetch';
import { readFileSync, writeFileSync } from 'fs';

async function removerFundo(caminhoEntrada, caminhoSaida) {
  const form = new FormData();
  form.append('image_file', readFileSync(caminhoEntrada), {
    filename: 'image.jpg',
    contentType: 'image/jpeg',
  });
  form.append('size', 'auto');

  const response = await fetch('https://api.remove.bg/v1.0/removebg', {
    method: 'POST',
    headers: {
      'X-Api-Key': process.env.REMOVEBG_API_KEY,
      ...form.getHeaders(),
    },
    body: form,
  });

  if (!response.ok) throw new Error(`Erro: ${response.status}`);
  writeFileSync(caminhoSaida, await response.buffer());
  console.log(`✅ Fundo removido: ${caminhoSaida}`);
}

await removerFundo('./produto.jpg', './produto-sem-fundo.png');
```

---

## 3. Upscaling com IA (Real-ESRGAN via Replicate)

```js
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

async function upscaleImagem(urlImagem, escala = 4) {
  const output = await replicate.run(
    'nightmareai/real-esrgan:42fed1c4974146d4d2414e2be2c5277c7fcf05fcc3a73abf41610695738c1d7b',
    {
      input: {
        image: urlImagem,
        scale: escala,        // 2x ou 4x
        face_enhance: false,  // true para retratos
      }
    }
  );

  console.log('✅ URL da imagem upscalada:', output);
  return output;
}
```

---

## 4. Alt-Text Automático com Google Vision AI

```js
import vision from '@google-cloud/vision';

const client = new vision.ImageAnnotatorClient();

async function gerarAltText(caminhoImagem) {
  const [result] = await client.labelDetection(caminhoImagem);
  const labels   = result.labelAnnotations.slice(0, 5);

  const [resultWeb] = await client.webDetection(caminhoImagem);
  const descricao   = resultWeb.webDetection.bestGuessLabels?.[0]?.label;

  const altText = descricao || labels.map(l => l.description).join(', ');
  console.log(`Alt text sugerido: "${altText}"`);
  return altText;
}
```

---

## 5. Cloudinary — Transformações Automáticas na URL

```js
// Sem código backend! Apenas construção de URL:

const BASE = 'https://res.cloudinary.com/SEU_CLOUD_NAME/image/upload';

// Transformações via URL
const urlOtimizada = `${BASE}/f_auto,q_auto,w_1200/${publicId}.jpg`;
//                              ↑ formato auto  ↑ qualidade auto  ↑ largura

// Recorte inteligente com foco no rosto
const urlRetrato = `${BASE}/f_webp,q_80,w_400,h_400,c_fill,g_face/${publicId}`;

// Texto na imagem (watermark)
const urlMarca = `${BASE}/l_text:Arial_30:Espaço Therapy,co_white,o_50,g_south_east,x_10,y_10/${publicId}`;
```

### Parâmetros Úteis

| Parâmetro | Descrição                    | Exemplo        |
|-----------|------------------------------|----------------|
| `f_auto`  | Formato automático (WebP etc)| `f_auto`       |
| `q_auto`  | Qualidade automática         | `q_auto:good`  |
| `w_`      | Largura em pixels            | `w_800`        |
| `c_fill`  | Recortar preenchendo         | `c_fill`       |
| `g_face`  | Gravidade: rosto             | `g_face`       |
| `e_blur`  | Efeito blur                  | `e_blur:300`   |
| `e_grayscale` | Preto e branco           | `e_grayscale`  |

---

## 6. Geração de Imagens em Lote para Projetos Web

```js
// Script para gerar imagens placeholder de alta qualidade
// para todas as seções de um site

const secoes = [
  { nome: 'hero',      prompt: 'Serene therapy office, natural light, plants, warm tones, professional photography', ratio: '16:9' },
  { nome: 'about',     prompt: 'Therapist professional portrait, soft studio lighting, warm smile, clean background', ratio: '3:4' },
  { nome: 'services',  prompt: 'Mindfulness session, person meditating, peaceful room, candle, bokeh background',    ratio: '1:1' },
  { nome: 'contact',   prompt: 'Welcoming reception desk, warm lighting, plants, cozy atmosphere, editorial photo',  ratio: '3:2' },
];

// Para cada seção, invocar generate_image com o prompt e ratio definidos
// As imagens serão salvas como artifacts e podem ser copiadas para o projeto
```

---

## 7. Detecção de Faces e Moderação de Conteúdo

```js
import vision from '@google-cloud/vision';
const client = new vision.ImageAnnotatorClient();

// Detectar rostos (para garantir privacidade antes de publicar)
async function detectarRostos(caminhoImagem) {
  const [result] = await client.faceDetection(caminhoImagem);
  const rostos   = result.faceAnnotations;

  console.log(`${rostos.length} rosto(s) detectado(s)`);
  return rostos.length > 0;
}

// Moderação de conteúdo (SafeSearch)
async function verificarConteudo(caminhoImagem) {
  const [result]    = await client.safeSearchDetection(caminhoImagem);
  const safeSearch  = result.safeSearchAnnotation;

  return {
    adulto:    safeSearch.adult,
    violencia: safeSearch.violence,
    seguro:    safeSearch.adult === 'VERY_UNLIKELY' && safeSearch.violence === 'VERY_UNLIKELY',
  };
}
```

---

## 8. Workflow Recomendado para Projetos de Clientes

```
1. CAPTURA
   └── Fotografar em RAW → manter originais intocados

2. SELEÇÃO & EDIÇÃO
   └── Editar em Lightroom/Capture One → exportar JPEG alta qualidade

3. NOMENCLATURA
   └── Usar skill image-naming-standards para renomear o lote

4. OTIMIZAÇÃO
   └── Usar skill image-optimization: converter para WebP, gerar thumbs

5. AI ENHANCEMENT (opcional)
   ├── Upscaling com Real-ESRGAN se necessário
   ├── Remoção de fundo para produtos
   └── Geração de alt-text automático para acessibilidade

6. PUBLICAÇÃO
   └── Upload para CDN (Cloudinary) ou pasta do projeto web
```

---

## 9. Regras e Boas Práticas

> [!IMPORTANT]
> - **Sempre verificar direitos de imagem** antes de usar IA com fotos de terceiros
> - **Não usar IA para gerar rostos de pessoas reais** sem consentimento
> - **Manter backups dos originais** antes de qualquer processamento automático
> - **Validar alt-text gerado por IA** — revisar sempre antes de publicar
> - **Informar clientes** quando imagens geradas por IA forem usadas em projetos

> [!TIP]
> Para projetos de terapia/wellness: prefira fotos reais e autênticas.
> Use IA principalmente para backgrounds, texturas, mockups e assets de UI —
> não para substituir fotografia profissional de pessoas reais.
