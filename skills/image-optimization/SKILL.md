---
name: image-optimization
description: >-
  Otimização, conversão, compressão e redimensionamento de imagens para web e
  projetos locais. Use quando precisar converter formatos (JPEG, PNG, WebP, AVIF),
  comprimir imagens sem perda de qualidade visível, gerar thumbnails, processar
  lotes de arquivos de imagem, ou integrar otimização de imagens em pipelines de
  build (Vite, Next.js, etc.).
---

# Image Optimization — Guia Completo

## Contexto

Este skill cobre otimização de imagens para web, apps e uso profissional.
Ferramentas cobertas: **Sharp** (Node.js), **ImageMagick** (CLI), **ffmpeg**,
**Squoosh CLI**, e helpers para Vite / Next.js.

---

## 1. Formato Ideal por Caso de Uso

| Caso de Uso                      | Formato Recomendado | Alternativa |
|----------------------------------|---------------------|-------------|
| Fotografias gerais (web)         | **WebP**            | AVIF        |
| Ícones / logos com transparência | **WebP** / **PNG**  | SVG         |
| Animações                        | **WebP animado**    | GIF         |
| Impressão / arquivo profissional | **TIFF** / **PNG**  | JPEG 100%   |
| Redes sociais                    | **JPEG** 85-90%     | WebP        |
| Thumbnails e previews            | **WebP** 70-80%     | JPEG        |

---

## 2. Sharp (Node.js) — Biblioteca Principal

### Instalação
```bash
npm install sharp
```

### Conversão e compressão básica
```js
import sharp from 'sharp';

await sharp('entrada.jpg')
  .webp({ quality: 82 })
  .toFile('saida.webp');
```

### Redimensionar mantendo proporção
```js
await sharp('foto.jpg')
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile('foto-1200.webp');
```

### Gerar múltiplos tamanhos (responsivo)
```js
const tamanhos = [400, 800, 1200, 1920];

for (const largura of tamanhos) {
  await sharp('original.jpg')
    .resize({ width: largura, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`imagem-${largura}w.webp`);
}
```

### Processar lote de imagens (pasta inteira)
```js
import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';

const pastaEntrada = './imagens-originais';
const pastaSaida   = './imagens-otimizadas';

const arquivos = (await readdir(pastaEntrada))
  .filter(f => /\.(jpe?g|png|tiff?)$/i.test(f));

for (const arquivo of arquivos) {
  const entrada = path.join(pastaEntrada, arquivo);
  const saida   = path.join(pastaSaida, path.parse(arquivo).name + '.webp');

  await sharp(entrada)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(saida);

  console.log(`✅ ${arquivo} → ${path.basename(saida)}`);
}
```

---

## 3. Script de Otimização via CLI (PowerShell + Sharp)

Para projetos sem Node configurado, use via npx:

```powershell
# Converter uma imagem
npx sharp-cli --input foto.jpg --output foto.webp --webp-quality 82

# Converter pasta inteira
Get-ChildItem .\fotos -Filter "*.jpg" | ForEach-Object {
  $saida = ".\fotos-webp\" + $_.BaseName + ".webp"
  npx sharp-cli --input $_.FullName --output $saida --webp-quality 82
}
```

---

## 4. ImageMagick (CLI) — Operações Avançadas

```bash
# Converter e comprimir
magick input.jpg -quality 82 output.webp

# Redimensionar para largura máxima (mantendo proporção)
magick input.jpg -resize 1920x\> -quality 82 output.webp

# Converter lote inteiro
magick mogrify -format webp -quality 82 -path ./saida *.jpg

# Remover metadados EXIF (privacidade)
magick input.jpg -strip output.jpg

# Adicionar marca d'água
magick input.jpg watermark.png -gravity SouthEast -composite output.jpg
```

---

## 5. Integração com Vite (vite-plugin-imagemin)

```bash
npm install -D vite-plugin-imagemin
```

```js
// vite.config.js
import imagemin from 'vite-plugin-imagemin';

export default {
  plugins: [
    imagemin({
      gifsicle: { optimizationLevel: 7 },
      webp: { quality: 82 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9] },
    })
  ]
};
```

---

## 6. Metas de Qualidade e Tamanho

| Tipo                    | Tamanho Máximo Recomendado | Qualidade WebP |
|-------------------------|---------------------------|----------------|
| Hero / Banner           | < 200 KB                  | 80-85%         |
| Foto de produto / card  | < 80 KB                   | 78-82%         |
| Thumbnail               | < 30 KB                   | 70-75%         |
| Foto para redes sociais | < 500 KB                  | 85-90%         |
| Imagem de fundo         | < 150 KB                  | 75-80%         |

---

## 7. Metadados e EXIF

```js
// Ler metadados com Sharp
const metadata = await sharp('foto.jpg').metadata();
console.log(metadata); // { width, height, format, size, exif, ... }

// Remover todos os metadados
await sharp('foto.jpg')
  .withMetadata(false)  // remove EXIF
  .webp({ quality: 82 })
  .toFile('foto-sem-exif.webp');

// Preservar apenas dados de cor (sem GPS/dados pessoais)
await sharp('foto.jpg')
  .withMetadata({ icc: true })
  .webp({ quality: 82 })
  .toFile('foto-segura.webp');
```

---

## 8. Regras Obrigatórias

> [!IMPORTANT]
> - **Nunca sobrescrever o original**: sempre salvar em pasta separada ou com sufixo.
> - **Sempre usar `withoutEnlargement: true`** ao redimensionar para evitar upscaling.
> - **Verificar dimensões mínimas** antes de gerar thumbnails (evitar artefatos).
> - **Manter originais em alta resolução** para reprocessamento futuro.
> - **Remover EXIF de GPS** de fotos antes de publicar na web (privacidade).
