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
4. URLs diretas dos produtos na DKT Store e parceiros. Infinity e o canal geral abrem a página inicial da DKT Store; o card dos lenços abre a coleção de lenços, ainda sem SKU final validado.
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

O KV de `material-cliente` foi aplicado à versão local: banner oficial no desktop, composição adaptada no celular com lettering extraído do PSD, paleta e recortes nas seções, fonte Bold Eater local. Os originais foram preservados. Os derivados ficam em `dist/assets/kv` e a aplicação visual em `dist/kv.css`.

**Pendência para os próximos relatórios:** o PSD referencia **Blinka Serif**, mas seu arquivo não veio em `material-cliente/FONTS`. O banner mantém a tipografia original por meio do lettering exportado; texto serifado editável usa Georgia provisoriamente. The Youth foi enviada, mas não aparece nas referências de fontes do PSD. O recebimento do KV não confirma aprovação final da marca.

Rodada de composição: topo contínuo com menu flutuante, KV recomposto em elementos, transições orgânicas, menos caixas e hierarquia com serifada provisória + Bold Eater. Conteúdo de produto e briefing preservados.

## Reestruturação completa em 08/10/2026

A versão atual usa `index.html`, `site.css`, `script.js` e `content.js` novos. `style.css`, `kv.css` e `motion.js` pertencem às rodadas anteriores e não são carregados pela LP ou pelas internas. Os títulos da LP usam Bold Eater em caixa alta, sem misturar tamanhos de fontes na mesma frase. As internas do blog usam títulos editoriais serifados.

### Banners substituíveis

Os três banners são imagens e mantêm exatamente a mesma proporção: **desktop 16:9** (recomendado 1920 × 1080) e **celular 4:5** (1080 × 1350). Substitua `desktop` e `mobile` em cada item de `content.js`; ajuste também `alt`, `caption`, `cta` e `href`. As artes provisórias de Infinity e lenços são SVGs autocontidos em `dist/assets/banners/`. O primeiro banner desktop é o KV fornecido, convertido em WebP. Cliente e equipe podem substituir as artes sem modificar a estrutura. Não há rotação automática.

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
