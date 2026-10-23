# Prudence Íntima

Primeira versão para revisão do relançamento. Landing page estática responsiva com três banners, apresentação do Infinity, benefícios, tutorial, UGC, comparativo, lenços, FAQ, artigos internos e seção de compra extensível.

## Prévia

Execute `python3 -m http.server 4173 --directory dist` e abra http://localhost:4173.

## Atualizações

- `dist/content.js`: banners, imagens, vídeo demonstrativo e vídeos UGC, parceiros e URLs de compra.
- `dist/articles.js`: textos das internas do blog.
- `dist/assets/`: imagens oficiais obtidas da pasta do briefing. Preserve os originais.
- `dist/index.html`: textos e estrutura.
- `dist/site.css`: identidade e responsividade da LP reconstruída.

Para adicionar parceiros, inclua objetos em `retailers` com `name`, `description` e `url` (URL direta do produto, quando disponível). Vídeos UGC recebem `src`, `poster` e `title` no array `videos.creators`. Atribua a URL do tutorial em `videos.tutorial`.

## Pendências para aprovação final

1. Fotos e vídeos do shooting de 28/10, incluindo demonstrativo e UGC.
2. Aprovação da identidade, uso dos logotipos oficiais e dos textos pela marca.
3. Imagens e informações finais dos lenços biodegradáveis.
4. URLs diretas dos produtos na DKT Store e parceiros. Infinity e o canal geral abrem a página inicial da DKT Store; o card dos lenços abre a página do produto (Lenço Umedecido Prudence Íntima com 20 unidades), que estava esgotado em 08/10/2026. O Infinity ainda não está cadastrado na DKT Store.
5. Validação institucional de privacidade, SAC e redes sociais.
6. Revisão técnica do conteúdo de produto e do manual. As instruções resumidas são baseadas na embalagem oficial fornecida, sem importar especificações do Softcup.

## Datas

O prazo da mensagem do usuário (01/11/2026, concluída e aprovada) prevalece sobre o prazo antigo do PDF (05/10). Shooting: 28/10/2026. Sugestão de sequência: aprovar estrutura e textos antes do shooting; integrar mídias em 29/10; revisar e ajustar até 31/10. A aprovação final depende da marca.

## Fonte

Briefing: `/Users/livia/Downloads/BRIEFING_SITE_PRUDENCE_INTIMA.pdf`.
Imagens Infinity: pasta Drive `1HsyawXzqoXipC5OySy9DuC5wEfUD1j0W`.

## GitHub Pages

O workflow `.github/workflows/pages.yml` publica apenas `dist`, preservando os caminhos relativos de imagens, fontes e artigos. No GitHub, em Settings → Pages → Build and deployment → Source, selecione **GitHub Actions**. Após enviar o commit pelo GitHub Desktop (Push origin), acompanhe a execução em Actions. O endereço confirmado aparece em Settings → Pages após a publicação.

GitHub Pages em repositórios privados depende do plano GitHub. Não altere a visibilidade do repositório para público sem aprovação.

## Passagem de projeto em 07/10/2026

O KV ainda não foi aprovado pelo cliente. A direção visual é exploratória, baseada nos materiais disponíveis, e deve ser adaptada ao KV aprovado.

A rodada de 07/10 refinou espaçamentos, hierarquia de títulos, legendas, composições e enquadramentos. Os conteúdos permanecem visíveis antes das animações de entrada. A publicação observada ainda apresentava uma versão anterior à cópia local; esta rodada não foi publicada.

Relatório para cobertura de férias: `entregas/Passagem de projeto Prudence Intima 2026-10-07.docx`.

- Repositório: https://github.com/liviapalmakoko/LP-Prudence-I-ntima
- Visualização: https://liviapalmakoko.github.io/LP-Prudence-I-ntima/
- Publicações: https://github.com/liviapalmakoko/LP-Prudence-I-ntima/actions

## Aplicação do KV recebido em 07/10/2026

O KV de `material-cliente` foi aplicado à versão local: banner oficial no desktop, composição adaptada no celular com lettering extraído do PSD, paleta e recortes nas seções, fonte Bold Eater local. Os originais foram preservados. Os derivados ficam em `dist/assets/kv`; a aplicação visual atual está em `dist/site.css` (o antigo `kv.css` não é mais carregado).

**Pendência para os próximos relatórios:** o PSD referencia **Blinka Serif**, mas seu arquivo não veio em `material-cliente/FONTS`. O banner mantém a tipografia original por meio do lettering exportado; texto serifado editável usa Georgia provisoriamente. The Youth foi enviada, mas não aparece nas referências de fontes do PSD. O recebimento do KV não confirma aprovação final da marca.

Rodada de composição: topo contínuo com menu flutuante, KV recomposto em elementos, transições orgânicas, menos caixas e hierarquia com serifada provisória + Bold Eater. Conteúdo de produto e briefing preservados.

## Reestruturação completa em 08/10/2026

A versão atual usa `index.html`, `site.css`, `script.js` e `content.js` novos. `style.css`, `kv.css` e `motion.js` pertencem às rodadas anteriores e foram movidos para `arquivo-fora-do-site/`. Os títulos da LP usam Bold Eater em caixa alta, sem misturar tamanhos de fontes na mesma frase. As internas do blog usam títulos editoriais serifados.

### Banners substituíveis

Os três banners são imagens e mantêm exatamente a mesma proporção: **desktop 16:9** (recomendado 1920 × 1080) e **celular 4:5** (1080 × 1350). Substitua `desktop` e `mobile` em cada item de `content.js`; ajuste também `alt`, `caption`, `cta` e `href`. As artes de Infinity e lenços são colagens com os recortes do KV, exportadas em WebP. A fonte editável está em `fontes-banners/banners.html` e é exportada com `fontes-banners/exportar.sh` (precisa de servidor na raiz: `python3 -m http.server 4174`). A foto dos lenços veio da página do produto na DKT Store (embalagem promocional “Leve 20 Pague 16”) e deve ser trocada pela foto oficial. Os títulos usam só Bold Eater até a Blinka Serif chegar. O primeiro banner desktop é o KV fornecido, convertido em WebP. Cliente e equipe podem substituir as artes sem modificar a estrutura. Não há rotação automática.

### Vídeos

O demonstrativo tem player reservado em 16:9. Creators têm três players reservados em 9:16. Adicione `src` e, opcionalmente, `poster` nos objetos `videos.tutorial` e `videos.creators` em `content.js`; os avisos de vídeo em breve dão lugar ao player, mantendo o espaço. Controles nativos, sem reprodução automática. Confirmar a proporção dos vídeos finais antes da integração.

### Conteúdo e briefing

O briefing confirma a apresentação de disco e lenços, com protagonismo do disco. A apresentação dos lenços ficou no terceiro banner e no ponto de compra, sem seção promocional própria. Blog tem artigo de destaque, categorias, tempo de leitura e internas próprias. Comparativo único: Infinity, absorvente externo descartável e absorvente interno descartável. O copo/coletor saiu porque os materiais fornecidos não sustentam superioridade do Infinity sobre ele. A argumentação enfatiza a reutilização frente a produtos descartáveis, com as instruções e limites preservados. Referência geral dos absorventes: https://www.nhs.uk/conditions/periods/#period-products. Dados do Infinity seguem a embalagem recebida.

**Pendências:** Blinka Serif não enviada; banner oficial preserva o lettering original, artes provisórias usam Georgia nas partes serifadas. Faltam vídeo demonstrativo, vídeos de creators, arte/foto final dos lenços, URLs finais de SKUs, revisão institucional e aprovação da marca. A nova versão está apenas local.

### Fotos dos cards de compra

As imagens ficam contidas na coluna de produto, sem sobreposição com o texto. Foto dos lenços obtida do site oficial: https://useprudence.com.br/produtos/prudence-lenco/ (arquivo original: https://useprudence.com.br/wp-content/uploads/2023/09/LENCO-UMEDECIDO-PRUDENCE-INTIMA.png). O espaço transparente foi recortado, preservando a embalagem. Esta é a embalagem atual do site; confirmar com o cliente se corresponde à nova versão biodegradável do briefing.

### Capas ilustradas do blog

Geradas com a ferramenta integrada de imagens e salvas em `dist/assets/blog/`: `ciclo.png`, `rotina.png`, `reutilizavel.png`. Prompts: colagem editorial de papel rasgado, textura analógica e paleta azul, creme, vinho, rosa, lilás e amarelo do KV, sem texto ou logotipo; ciclo com fita rosa, formas circulares e folhas; autocuidado com mãos, diário aberto e flor; reutilização com fitas em círculo contínuo e folhas azuis. Artes ilustrativas, sem representar a embalagem ou certificar atributos do produto.

### Recortes do KV pela LP

Elementos originais extraídos das camadas do PSD em `dist/assets/kv/elements/`, aplicados nas aberturas de benefícios, tutorial, creators, comparação, FAQ e compra. Gravura amarela, papel estampado rosa, fragmento de escultura, listras, tecido e papel lilás. Decorativos com alt vazio/aria-hidden, sem bloquear interação; composição reduzida no celular e separada dos textos.

Refino da colagem: recortes agora ancorados e parcialmente cortados pelas bordas das seções, com papel e escultura sobrepostos na transição dos creators. Retirada a distribuição de adesivos isolados ao lado dos títulos e o espaço extra dos cabeçalhos no celular.

### Movimento na LP

Entradas únicas ao rolar, em sequência nos cards; recortes e disco com oscilação suave; símbolos de vídeo com pulsação discreta; capas com aproximação no hover e botões com resposta ao toque. Animações contínuas pausam fora da tela. Conteúdo permanece visível sem animação e a preferência `prefers-reduced-motion` desativa movimentos. Validação: sintaxe do JS, animações ativas no navegador, sem erros de console ou rolagem horizontal da página.

Produto interativo: o disco inclina nos eixos X/Y conforme o cursor dentro da composição e gira em um arco de 70 graus conforme a rolagem. A imagem mantém seu ângulo original como base. Não é visualização 360° de todos os lados: para isso é necessário modelo 3D ou sequência fotográfica do cliente. Atualizações agrupadas via requestAnimationFrame; movimento desativado com prefers-reduced-motion.

Refino das interações: disco com rotação plana (sem perspectiva ou inclinação 3D), somando angulação pelo cursor à rolagem. Ícones dos benefícios oscilam no hover; reutilização gira. Títulos mudam de cor e links respondem ao hover. CTAs inseridos após benefícios, tutorial e comparação, direcionando aos cards de compra. Verificados no navegador: três CTAs presentes, sem erros de console ou overflow da página.

## Otimização técnica em 08/10/2026

Sem alteração de layout (conferido por comparação de capturas de tela antes/depois, desktop e celular).

- Imagens pesadas convertidas para WebP: capas do blog (`assets/blog/*.webp`) e imagens das internas (`disco`, `caixa`, `case`). `caixa` foi reduzida para 1600 px de largura, já que aparece com 320 px de altura. Os PNGs originais deixaram de ser referenciados.
- Fonte Bold Eater servida em WOFF2 (`assets/fonts/BoldEater.woff2`).
- Compartilhamento: tags Open Graph/Twitter, `canonical` e favicon na LP; Open Graph nas internas. Imagem de compartilhamento: `assets/og-image.jpg` (1200 × 630, recorte do KV). **As URLs absolutas usam o endereço do GitHub Pages; atualize `canonical`, `og:url` e `og:image` em `index.html` e `conteudos.html` quando houver domínio definitivo.**
- Carrossel: deslizar para os lados no celular troca o banner.
- `.gitignore` exclui `material-cliente/` e `entregas/`.

## Rodada de layout baseada no KV — 08/10/2026 (branch `layout-kv`)

Regras visuais da rodada, todas em um bloco no fim de `dist/site.css`:

- **Rasgos:** `assets/kv/paper-tear-{a,b}.svg` (e versões `-sm` para celular) substituem o serrilhado antigo, com borda clara de fibra como no KV. Também cobrem o fim do banner e as bordas da seção de creators.
- **Recortes:** menos elementos e maiores, cortados pelas bordas e escondidos sob o papel vizinho, nunca sobre texto. O papel azul (`element-6`) entrou atrás do produto. No celular, a flor dos creators fica oculta e a folha do FAQ aparece só no rodapé.
- **Cor:** decidimos **não** pintar as seções do meio, para não carregar. A cor entra pelos recortes.
- **Vídeos:** moldura de papel, leve giro e fita colorida. A moldura continua quando o vídeo real entra.
- **Ícones:** traço grosso sobre um recorte de papel creme. Eles se desenham ao aparecer e depois seguem em movimento lento contínuo enquanto estão na tela (disco amassa, ponteiro gira, brilho percorre o infinito, estojo balança). O hover acelera o gesto. Com movimento reduzido, ficam estáticos.
- **Compra:** cards em papel recortado com fita, e o produto sai pela borda.
- **Carrossel em box:** os banners ficam num quadro com cantos arredondados (34px no desktop e 24px no celular) e sombra leve, e os controles ficam abaixo. Assim fica claro que é banner, e qualquer arte 16:9 / 4:5 encaixa.
- **Favicon:** “(P)” feito com os traços do logo oficial, em pink sobre vinho (`assets/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`).

Pendente: a serifada do KV (Blinka Serif) foi solicitada ao cliente em 08/10. A dupla serifada fina + Bold Eater nos títulos aguarda o arquivo.

Referência aprovada pelo cliente: https://historias.useprudence.com.br/

## Arquivos fora do site

`arquivo-fora-do-site/` guarda o que saiu de `dist` em 08/10/2026 por não ser usado por nenhuma página: PNGs originais substituídos por WebP, derivados do KV sem uso, `BoldEater.otf` e o CSS/JS das rodadas anteriores. A pasta fica no repositório, mas não é publicada. Ao reaproveitar um arquivo, copie-o de volta para `dist/assets` com o mesmo caminho.

## Feedback da reunião de 08/10 aplicado em 23/10/2026

A versão local incorpora uma abertura floral com o conceito “Todo ciclo tem seu ritual”, paleta em pele, rosa suave e vinho, títulos editoriais serifados e recortes florais em benefícios, tutorial, creators e compra. Os banners 2 e 3 foram reexportados com essa direção; o primeiro mantém o KV oficial recebido. Ajustes concentrados em `dist/ritual.css`, carregado após `site.css`, com fonte editável dos banners em `fontes-banners/banners.html`.

O floral original está em `dist/assets/botanical/orquidea-ritual.webp`, gerado com a ferramenta integrada ImageGen e otimizado em WebP com transparência. Prompt: “Create a premium botanical photographic cutout for an adult feminine menstrual wellness brand website. Single sculptural open pale blush pink orchid with two smaller petals and a gently curved burgundy stem, restrained elegant sensual botanical shapes, delicate realistic veining, warm skin-like peach and dusty rose tones with deep wine accents. Editorial macro studio photography, soft side lighting, sophisticated natural texture, not illustration, no paper shapes, no text, no logos, no objects, no human anatomy. Entire flower fully visible isolated on genuinely transparent background. Tall balanced composition suitable to anchor the edges of an editorial web page. Output asset only.”

Validação em Chrome: 1440, 390 e 320 px, sem overflow horizontal da página, imagens quebradas ou erros JS. Menu móvel e troca de banner verificados. Arquivos de referência da apresentação interna não foram importados.

Pendências: Blinka Serif e comprovação de licença web, fotos e vídeos finais, links de produto e aprovação da marca. Georgia é provisória. A animação anatômica sugerida não foi criada: depende de referência técnica validada para o Infinity; o player demonstrativo continua preparado para receber o vídeo. Datas históricas acima devem ser reconfirmadas; a transcrição fala em entrega de 20 a 25 de outubro e lançamento em novembro, condicionado à disponibilidade comercial. Alterações desta rodada não publicadas.

### Revisão após feedback de repetição floral — 23/10/2026

Esta revisão substitui a direção da rodada anterior: a abertura editorial extra foi removida e o conceito de ritual passou para a apresentação do Infinity. A orquídea aparece uma única vez na LP, como fundo da composição do produto; foi retirada das demais seções e dos banners 2/3. O azul e o rosa do KV voltam como pontos de contraste. Títulos combinam Georgia provisória com Bold Eater. Removidos fitas, giros e rasgos repetidos nas áreas de benefícios, tutorial, creators e compra. Capas do blog recuperam a cor original para dialogar com o KV.

Os players sem mídia foram compactados. `mountVideo` aplica `.has-video` ao receber um arquivo, recuperando as proporções de vídeo originais; creators recuperam a altura 9:16 quando houver mídia configurada. Menu, CTA fixo e três banners preservados. Validação no Chrome em 1440, 390 e 320 px: imagens carregadas, sem overflow horizontal da página ou erros JS, menu e carrossel funcionais. Versão local, sem publicação.

Para concluir: arquivo Blinka Serif e licença web, fotos finais dos produtos (especialmente a embalagem correta dos lenços), vídeo demonstrativo e vídeos de creators, links finais de compra por produto e validação dos textos/instruções pela marca. A animação de inserção/retirada depende de referência técnica aprovada para o Infinity.

### Blinka e conferência do Drive — 23/10/2026

Blinka Serif recebida em OTF e aplicada localmente em `dist/assets/fonts/BlinkaSerif.otf`, títulos/apoios editoriais da LP e fonte editável dos banners 2/3. Banners reexportados; layout conferido em 1440, 390 e 320 px. A comprovação de licença web ainda não foi encontrada; o arquivo da fonte não equivale à licença.

Pasta conferida pelo navegador: https://drive.google.com/drive/folders/1nTgrljMSSIvceidq5BfyknEut45g0DjJ . O conector não listou filhos; o navegador permitiu a leitura pública.

- FONTS: Blinka Serif, Bold Eater e The Youth; nenhum documento de licença listado.
- KV: PSD principal e desdobramentos TELA 1, TELA 2, TELA 3 (PSD) e TELA 4, incluindo PNGs das telas 1/2/4. Prévias apresentam ilustrações, ritual e flores; não são fotos do shooting.
- PRODUTO: três mockups do Infinity (disco, estojo e embalagem), com os mesmos nomes dos arquivos já disponíveis localmente.
- REFS: 12 imagens WebP com flores em macro, líquidos, texturas e uma composição com romã. Tratadas como referências visuais, sem comprovação de direitos para publicação. Não incorporadas à LP nesta conferência.
- MATERIAL: nenhum arquivo visível na consulta pública.

Não foram encontrados vídeos finais nem fotos dos lenços nas pastas examinadas. Permanecem pendentes esses materiais, links finais dos produtos, licença web e validação dos textos/instruções. Alterações apenas locais.

### Novas imagens a partir da direção de REFS — 23/10/2026

Três imagens originais geradas com ImageGen foram aplicadas às capas do blog: `ciclo-botanico.webp` (antúrio em vinho), `rotina-sensorial.webp` (água e linho) e `reutilizavel-floral.webp` (pétala em curva sobre azul). Todas em `dist/assets/blog/`, com versões anteriores preservadas. Prompts completos e procedência em `fontes-banners/prompts-imagens.md`. Referências do Drive orientaram a direção pela observação visual; não foram usadas como arquivos de entrada nem copiadas para o site. Artes ilustrativas de atmosfera, sem representar produto ou instruções de uso. Recortes conferidos em desktop e celular, sem imagens quebradas, erros JS ou overflow horizontal da página. Alterações locais.

Preferência da Lívia após visualizar as novas imagens: manter as três capas ilustradas anteriores no blog. Referências e textos alternativos restaurados em `dist/index.html`; os três WebP novos continuam preservados para avaliação de outros usos, sem aplicação automática em outra seção.

### Ajustes pontuais após revisão visual — 23/10/2026

- Textos dos banners retos, sem rotação das etiquetas nem itálico artificial; Blinka mantida.
- Benefícios com novos SVGs lineares finos e estáticos.
- Tutorial novamente em 16:9, passos alinhados pelo topo e aviso centralizado, sem play enquanto não houver mídia.
- Comparativo com três PNGs transparentes derivados dos arquivos já presentes: mockup oficial Infinity e imagens genéricas de absorventes externo/interno.
- Rasgos do comparativo usam máscaras com as cores das seções vizinhas, eliminando o bege antigo.
- Orquídea removida da apresentação do Infinity a pedido da Lívia; produto isolado dentro do arco.

### Presença floral ampliada — 23/10/2026

Após feedback de que a direção estava pouco florida, florais transparentes passam a compor os três banners, a abertura do tutorial, o FAQ e a compra. Antúrio em vinho, orquídea rosa e pétala curva variam de escala/posição. O produto continua isolado na apresentação e as capas ilustradas do blog foram preservadas. Novo recorte do antúrio em `dist/assets/botanical/anturio-campanha.webp`, editado com ImageGen a partir da arte gerada; prompt em `fontes-banners/prompts-imagens.md`. Banners 2/3 reexportados. A primeira arte oficial permanece como base, com floral sobreposto via CSS somente no slide 1. Revisão responsiva em 1440, 390 e 320 px sem overflow horizontal da página, imagens quebradas ou erros JS.

### Colagem orientada pelo primeiro banner — 23/10/2026

A composição passa a seguir o primeiro banner como referência principal: papéis azul/lilás/rosa em camadas, listras, gravura e escultura extraídos do KV, com flores inteiras combinadas aos elementos. Regras em `dist/collage.css`. Novas orquídea e flor de copo-de-leite completas substituem os florais com cortes abruptos; prompts e arquivos registrados em `fontes-banners/prompts-imagens.md`. Flores mantidas inteiras dentro da área disponível, com `object-fit:contain`, sem rotação que as corte nas bordas. Textos permanecem retos, benefícios lineares e comparativo fotográfico preservados. Blog continua com as capas ilustradas escolhidas pela Lívia. Conferência visual de página inteira em desktop e celular e validação em 1440/390/320 px sem imagens quebradas, erros JS ou overflow horizontal da página. Banners 2/3 reexportados.

### Refinos por captura — 23/10/2026

Listras da apresentação substituídas pela escultura do KV. No tutorial, flor e papel separados e listras levadas à margem inferior. Creators com escultura ancorada ao papel no rodapé, liberando o cabeçalho. Fechamento do comparativo em um eixo de leitura (chamada, explicação, ressalva, CTA). FAQ com flor maior e papel azul menor. Cabeçalho de compra alinhado aos cards e flor na margem oposta. Layout validado em 1440/390/320 px; sem erros JS, imagens quebradas ou overflow horizontal da página.

### Recomposição da compra — 23/10/2026

Título e floral passam a formar uma coluna editorial ao lado dos dois produtos no desktop. Cards verticais com embalagens maiores, informações e botões alinhados. No celular, cards horizontais preservam a leitura e os alvos de toque. Retirado recorte solto na borda e reduzida a altura do cabeçalho/canais de compra. Conferência visual em desktop e celular sem overflow horizontal, imagens quebradas ou erros JS.

### Consolidação da revisão — 23/10/2026

A versão final desta rodada mantém compra lado a lado no desktop, comparativo em colunas sobre fundo vinho, FAQ original com acordeão em uma coluna e interrogação Blinka com contorno creme. Títulos e CTAs de fechamento centralizados, espaçamentos refinados, florais/reposicionamento dos banners e movimento leve com suporte a movimento reduzido. As notas anteriores registram etapas intermediárias e não descrevem necessariamente o estado atual. Blinka já aplicada; licença web permanece pendente.

Conferência final: Chrome em 1440/390/320 px, sem overflow da página, imagens quebradas ou erros JS; menu e carrossel verificados. Relatório de encaminhamento salvo localmente em `entregas/relatorio-atualizacao-23-10-2026.txt` (pasta não versionada).
