# SEO para Busca com IA (AI SEO)

## Descrição

Habilidade para otimizar o conteúdo do site Tecnovin para ser descoberto, extraído e citado por sistemas de IA — Google AI Overviews, ChatGPT, Perplexity, Claude, Gemini e Copilot. Complementar (não substitui) o SEO tradicional.

## Por Que Isso Importa para o Tecnovin

- AI Overviews aparecem em ~45% das buscas do Google
- Compradores B2B já usam ChatGPT/Perplexity para pesquisar fornecedores de ingredientes
- O projeto já possui um componente de interação com IA (ManusDialog) — sinal de que a marca dialoga com esse ecossistema
- Conteúdo otimizado é citado até 3x mais que conteúdo não otimizado

## Contexto: SEO Tradicional vs. AI SEO

| SEO Tradicional            | AI SEO                                                     |
| -------------------------- | ---------------------------------------------------------- |
| Objetivo: ranquear         | Objetivo: ser **citado**                                   |
| Precisa estar na página 1  | Página bem estruturada pode ser citada mesmo na página 2–3 |
| Google lê a página inteira | IA extrai **trechos** (passages)                           |
| Keywords e backlinks       | Estrutura, autoridade, dados citáveis                      |

**Posição do Google:** boas práticas de SEO tradicional continuam valendo para AI Overviews. Não criar conteúdo separado "para IA" (risco de política de spam de conteúdo em escala). Escrever para pessoas, organizar com clareza.

**Motores não-Google (ChatGPT, Perplexity, Claude):** recompensam estrutura extraível — blocos de resposta, FAQs, tabelas comparativas.

**Estratégia para o Tecnovin:** escrever para pessoas + organizar para clareza = satisfaz ambos.

## Os Três Pilares

### Pilar 1: Estrutura — Tornar o Conteúdo Extraível

IAs extraem trechos, não páginas. Cada afirmação-chave deve funcionar isoladamente.

**Padrões de bloco para o blog Tecnovin:**

- **Blocos de definição** — "O que é concentrado de suco?" → resposta direta de 40–60 palavras no primeiro parágrafo
- **Blocos passo a passo** — "Da fruta ao ingrediente: processo" → listas numeradas
- **Tabelas comparativas** — "Uva, maçã, laranja e mais: um mapa de possibilidades" → tabela com frutas e aplicações
- **Blocos de FAQ** — perguntas em linguagem natural sobre concentrados, formatos de fornecimento, aplicações

**Regras estruturais:**

- Iniciar cada seção com a resposta direta (não enterrar a conclusão)
- Headings H2/H3 que espelham como as pessoas perguntam ("Como é feito o concentrado de suco de uva?")
- Tabelas > prosa para comparações
- Listas numeradas > parágrafos para processos
- Um parágrafo = uma ideia clara

### Pilar 2: Autoridade — Tornar o Conteúdo Citável

Pesquisa Princeton GEO (KDD 2024) — métodos que mais aumentam visibilidade em IA:

| Método                    | Aumento de visibilidade | Aplicação no Tecnovin                                                                        |
| ------------------------- | :---------------------: | -------------------------------------------------------------------------------------------- |
| Citar fontes              |          +40%           | Referenciar Jornal do Comércio, Prefeitura de Bento Gonçalves (já prática do GUIA editorial) |
| Adicionar estatísticas    |          +37%           | Dados com data e fonte (ex.: produção do RS, dados setoriais com fonte)                      |
| Citações de especialistas |          +30%           | Artigos assinados pela liderança/time técnico                                                |
| Tom autoritativo          |          +25%           | Linguagem de quem domina o processo produtivo                                                |
| Clareza                   |          +20%           | Explicar termos técnicos (Brix, pH, acidez)                                                  |
| Termos técnicos           |          +18%           | Vocabulário do setor de ingredientes                                                         |
| ~~Keyword stuffing~~      |        **-10%**         | **Prejudica — nunca usar**                                                                   |

**Melhor combinação:** fluidez + estatísticas.

**Sinais de autoridade para o Tecnovin:**

- Autoria nomeada nos artigos do blog (liderança, time técnico)
- Datas de publicação e "última atualização" visíveis
- Fontes externas citadas com links (coerência total com o GUIA editorial)
- Prêmio Exportação RS 2018 e patrocínio Tecnovitis 2023 como sinais de reconhecimento

**Sinergia com o GUIA editorial:** as regras editoriais do projeto (citar fontes, datar registros, atribuir autoria) são **exatamente** os fatores que aumentam citabilidade em IA. Seguir o GUIA já é otimizar para IA.

### Pilar 3: Presença — Estar Onde a IA Procura

IAs citam fontes terceiras mais que o próprio site:

- Wikipedia, publicações setoriais, sites de notícia
- Para o Tecnovin: presença em notícias do setor (Jornal do Comércio, GauchaZH, Correio do Povo — já citados no GUIA), Tecnovitis, associações do setor de sucos

**Ações:**

- Manter informações públicas consistentes (nome da empresa, localização, portfólio)
- Garantir que fontes públicas que citam a empresa estejam corretas
- Blog como memória documental linkável

## Acesso de Bots de IA (robots.txt)

Cada plataforma tem seu próprio crawler. Bloquear = não ser citado.

| Bot                                | Plataforma            | Efeito de bloquear                  |
| ---------------------------------- | --------------------- | ----------------------------------- |
| `OAI-SearchBot`                    | ChatGPT (busca)       | Sem citação em respostas do ChatGPT |
| `PerplexityBot`                    | Perplexity            | Sem indexação para buscas           |
| `Claude-SearchBot` / `Claude-User` | Claude                | Sem visibilidade em buscas          |
| `Google-Extended`                  | Gemini / AI Overviews | Não afeta Google Search tradicional |
| `Bingbot`                          | Copilot               | Sem citação no Copilot              |

**Decisão de negócio (Arquiteto + empresa):** permitir bots de **busca** (citação) enquanto se avalia bots de **treinamento** (GPTBot, ClaudeBot, CCBot). Documentar a decisão no robots.txt.

## Arquivos Legíveis por Máquina

**`/llms.txt`** (em `client/public/llms.txt`) — arquivo experimental de contexto para sistemas de IA:

```markdown
# Tecnovin

> Concentrados de suco de uva, maçã, laranja, limão, acerola e abacaxi para a indústria de alimentos e bebidas. Localizada no Vale dos Vinhedos, Bento Gonçalves, Rio Grande do Sul, Brasil.

## Páginas principais

- [Home](https://www.tecnovin.com.br/): Apresentação institucional e portfólio
- [Blog](https://www.tecnovin.com.br/blog): Notícias, artigos e memória institucional
```

⚠️ `llms.txt` é uma proposta experimental — não é fator de ranqueamento comprovado. Adicionar como complemento, nunca prioritário sobre crawlability, HTML semântico e conteúdo útil.

## Schema para IA

Dados estruturados ajudam IAs a entender o conteúdo (+30-40% de visibilidade em motores não-Google):

- `Organization` / `LocalBusiness` — reconhecimento de entidade
- `BlogPosting` — autor, data, tópico dos artigos
- `FAQPage` — extração direta de perguntas e respostas
- `BreadcrumbList` — hierarquia do site

Ver **seo-schema** para implementação.

## Tipos de Conteúdo Mais Citados (para o Blog)

| Tipo              | Por que a IA cita                    | Aplicação no blog Tecnovin                                   |
| ----------------- | ------------------------------------ | ------------------------------------------------------------ |
| Guias definitivos | Abrangentes, autoritativos           | "Da fruta ao ingrediente: onde a natureza encontra precisão" |
| Dados e pesquisas | Estatísticas únicas citáveis         | Dados do setor de sucos do RS com fonte                      |
| Comparativos      | Estruturados, alta intenção          | Tabelas de aplicações por fruta                              |
| Como fazer        | Estrutura passo a passo              | Processo produtivo de concentrados                           |
| Análise/opinião   | Perspectiva de especialista, citável | Artigos assinados pela liderança                             |

**Formatos que NÃO performam:** posts genéricos sem estrutura, conteúdo sem data ou autoria, conteúdo bloqueado/gated.

## Monitoramento

### Verificação Manual Mensal (sem custo)

1. Escolher 10–20 consultas importantes (ex.: "concentrado de suco de uva fornecedor", "ingredientes para indústria de bebidas RS")
2. Testar no ChatGPT, Perplexity e Google
3. Registrar: Tecnovin foi citada? Quem foi citado? Qual página?
4. Planilha de acompanhamento mês a mês

### Search Console

- Não existe relatório específico de IA — usar relatórios padrão (Desempenho, Cobertura, Core Web Vitals)
- Tráfego de referência de fontes de IA no analytics

## O Que NÃO Fazer

1. **Escrever conteúdo separado "para IA"** — risco de política de spam do Google
2. **Fragmentar páginas em pedaços para IA** — usar estrutura normal de parágrafos e headings
3. **Keyword stuffing** — reduz visibilidade em IA em 10%
4. **Bloquear bots de busca de IA** — impede citação
5. **Esconder conteúdo atrás de JS que não renderiza** — agentes de IA veem página em branco
6. **Ignorar fundamentos E-E-A-T** — autoria, experiência, fontes transparentes
7. **Publicar sem data ou autoria** — conteúdo sem frescor perde para conteúdo datado

## Integração com Outras Skills

- **editorial-conteudo**: As regras editoriais do projeto JÁ são boas práticas de AI SEO (fontes, datas, autoria)
- **seo-schema**: Dados estruturados aumentam citabilidade
- **seo-onpage**: Fundamentos técnicos são pré-requisito
- **performance-web**: Conteúdo que renderiza rápido é acessível a agentes de IA
- **acessibilidade-wcag**: Árvore de acessibilidade semântica é usada por agentes de IA para navegar

## Regras Rigorosas

- NUNCA criar conteúdo separado "para IA" — otimizar o mesmo conteúdo para pessoas
- SEMPRE manter coerência total com o GUIA editorial
- NUNCA fazer keyword stuffing (prejudica IA E SEO tradicional)
- SEMPRE incluir data e autoria em conteúdo editorial
- NUNCA bloquear bots de busca de IA sem decisão documentada do Arquiteto + empresa
- SEMPRE priorizar conteúdo útil para pessoas sobre "otimização para algoritmo"
