---
name: image-naming-standards
description: >-
  Padrões profissionais de nomenclatura de arquivos de imagem para fotografia,
  web, e-commerce e projetos editoriais. Use quando precisar renomear lotes de
  fotos, definir convenções de nomenclatura para um projeto, criar scripts de
  renomeação automatizada, ou padronizar arquivos de imagem para SEO, entrega a
  clientes ou organização de portfólio.
---

# Image Naming Standards — Padrões de Nomenclatura de Imagens

## Filosofia Geral

Um bom nome de arquivo deve ser:
- **Autoexplicativo**: lido sem precisar abrir o arquivo
- **Ordenável**: classificação alfabética = ordem lógica
- **Portável**: sem espaços, acentos ou caracteres especiais
- **Rastreável**: inclui identificadores para busca rápida

---

## 1. Estrutura Universal de Nomenclatura

```
[CLIENTE/PROJETO]_[CATEGORIA]_[DATA]_[SEQUÊNCIA]_[VARIANTE].[ext]
```

### Componentes

| Campo          | Formato              | Exemplo              | Obrigatório |
|----------------|----------------------|----------------------|-------------|
| Cliente/Projeto| `kebab-case`         | `espaco-therapy`     | ✅ Sim       |
| Categoria      | Código curto         | `ext` / `int` / `ret`| Recomendado |
| Data           | `YYYYMMDD`           | `20260916`           | ✅ Sim       |
| Sequência      | `001` a `999+`       | `042`                | ✅ Sim       |
| Variante       | sufixo descritivo    | `hero` / `thumb`     | Opcional    |

### Exemplos Completos

```
espaco-therapy_ext_20260916_001.jpg          # foto externa, sem variante
espaco-therapy_int_20260916_023_hero.webp    # foto interna, versão hero
produto_abc123_20260901_001_thumb.webp       # thumbnail de produto
editorial_capa_20260801_001_bw.jpg           # foto editorial, P&B
```

---

## 2. Códigos de Categoria

### Fotografia de Lugares / Imóveis

| Código | Significado           |
|--------|-----------------------|
| `ext`  | Exterior / fachada    |
| `int`  | Interior              |
| `det`  | Detalhe               |
| `aer`  | Aérea / drone         |
| `pan`  | Panorâmica            |
| `amb`  | Ambiente / atmosfera  |

### Fotografia de Pessoas / Retratos

| Código | Significado           |
|--------|-----------------------|
| `ret`  | Retrato               |
| `grp`  | Grupo                 |
| `act`  | Ação / movimento      |
| `prf`  | Perfil lateral        |
| `hed`  | Headshot              |

### E-commerce / Produto

| Código | Significado           |
|--------|-----------------------|
| `prd`  | Produto principal     |
| `ctx`  | Produto em contexto   |
| `emp`  | Embalagem             |
| `det`  | Detalhe do produto    |
| `clr`  | Variação de cor       |

### Web e Marketing

| Código | Significado           |
|--------|-----------------------|
| `hero` | Imagem principal hero |
| `ban`  | Banner                |
| `bg`   | Background            |
| `ico`  | Ícone / avatar        |
| `og`   | Open Graph (social)   |

---

## 3. Sufixos de Variante / Versão

```
_orig    → arquivo original, não editado
_ed      → editado / pós-produção
_bw      → preto e branco
_crop    → recortado
_sq      → quadrado (square, para Instagram)
_v2      → segunda versão do mesmo ângulo
_thumb   → thumbnail (versão pequena)
_hero    → versão para hero section
_sm      → small (< 600px)
_md      → medium (600–1200px)
_lg      → large (> 1200px)
```

---

## 4. Scripts de Renomeação

### PowerShell — Renomear lote com data e sequência

```powershell
# Configuração
$projeto  = "espaco-therapy"
$categoria = "int"
$data     = Get-Date -Format "yyyyMMdd"
$pasta    = "C:\Fotos\Sessao"
$contador = 1

Get-ChildItem "$pasta\*.jpg", "$pasta\*.jpeg", "$pasta\*.png" |
Sort-Object Name |
ForEach-Object {
    $seq    = "{0:D3}" -f $contador
    $nova   = "${projeto}_${categoria}_${data}_${seq}$($_.Extension.ToLower())"
    Rename-Item $_.FullName -NewName $nova
    Write-Host "✅ $($_.Name) → $nova"
    $contador++
}
```

### PowerShell — Renomear usando data do EXIF

```powershell
# Requer ExifTool instalado: https://exiftool.org/
$pasta = "C:\Fotos\Sessao"

Get-ChildItem "$pasta\*.jpg" | ForEach-Object {
    $exif    = exiftool -DateTimeOriginal -d "%Y%m%d" -p '$DateTimeOriginal' $_.FullName
    $data    = $exif.Trim()
    $base    = "espaco-therapy_ext_${data}"
    # Continua com o padrão completo...
    Write-Host "Data EXIF: $data para $($_.Name)"
}
```

### Node.js — Script completo com ExifReader + renomeação

```js
import { readdir, rename } from 'fs/promises';
import path from 'path';

const config = {
  projeto:   'espaco-therapy',
  categoria: 'int',
  pasta:     './fotos-sessao',
  inicio:    1,
};

const arquivos = (await readdir(config.pasta))
  .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
  .sort();

let contador = config.inicio;
const data = new Date().toISOString().slice(0, 10).replace(/-/g, '');

for (const arquivo of arquivos) {
  const ext  = path.extname(arquivo).toLowerCase();
  const seq  = String(contador).padStart(3, '0');
  const novo = `${config.projeto}_${config.categoria}_${data}_${seq}${ext}`;

  await rename(
    path.join(config.pasta, arquivo),
    path.join(config.pasta, novo)
  );

  console.log(`✅ ${arquivo} → ${novo}`);
  contador++;
}
```

---

## 5. Organização de Pastas

```
📁 projeto-cliente/
├── 📁 originais/          ← RAW / arquivos intocados
│   ├── DSC_0001.ARW
│   └── DSC_0002.ARW
├── 📁 editados/           ← TIFF / PSD / JPEG alta qualidade
│   ├── espaco-therapy_int_20260916_001.jpg
│   └── espaco-therapy_int_20260916_002.jpg
├── 📁 web/                ← WebP otimizados para publicação
│   ├── espaco-therapy_int_20260916_001.webp
│   └── espaco-therapy_int_20260916_001_thumb.webp
└── 📁 entrega-cliente/    ← Seleção final para o cliente
    └── espaco-therapy_int_20260916_001.jpg
```

---

## 6. Padrões de SEO para Imagens na Web

```
# ❌ Ruim
DSC_00123.jpg
IMG_20260916_093012.jpg
foto 01 - espaço terapia.jpg

# ✅ Bom (SEO + organização)
espaco-therapy-sala-atendimento-interior-001.webp
espaco-therapy-fachada-externa-noite-001.webp
clinica-terapia-recepcao-ambiente-001.webp
```

> [!TIP]
> Para SEO, use hífens (não underscores) e palavras-chave relevantes.
> O Google trata hífens como separadores de palavras.

---

## 7. Regras Obrigatórias

> [!IMPORTANT]
> - **Nunca usar espaços**: substituir por hífen `-` (web) ou underscore `_` (arquivo)
> - **Nunca usar acentos ou cedilhas**: `ã`, `ç`, `é` causam problemas em servidores
> - **Sempre usar letras minúsculas**: evitar problemas de case-sensitivity em Linux/Mac
> - **Data no formato ISO**: `YYYYMMDD` garante ordenação cronológica correta
> - **Sequência com zeros à esquerda**: `001` em vez de `1` para manter ordenação correta até `999+`
> - **Nunca sobrescrever originais**: manter pasta `originais/` intocada como backup
