# Prudence Íntima

Primeira versão para revisão do relançamento. Landing page estática responsiva com três banners, apresentação do Infinity, benefícios, tutorial, UGC, comparativo, lenços, FAQ, artigos internos e seção de compra extensível.

## Prévia

Execute `python3 -m http.server 4173 --directory dist` e abra http://localhost:4173.

## Atualizações

- `dist/content.js`: banners, imagens, vídeo demonstrativo e vídeos UGC, parceiros e URLs de compra.
- `dist/articles.js`: textos das internas do blog.
- `dist/assets/`: imagens oficiais obtidas da pasta do briefing. Preserve os originais.
- `dist/index.html`: textos e estrutura.
- `dist/style.css`: identidade e responsividade.

Para adicionar parceiros, inclua objetos em `retailers` com `name`, `description` e `url` (URL direta do produto, quando disponível). Vídeos UGC recebem `src`, `poster` e `title` no array `videos.creators`. Atribua a URL do tutorial em `videos.tutorial`.

## Pendências para aprovação final

1. Fotos e vídeos do shooting de 28/10, incluindo demonstrativo e UGC.
2. Aprovação da identidade, uso dos logotipos oficiais e dos textos pela marca.
3. Imagens e informações finais dos lenços biodegradáveis.
4. URLs diretas dos produtos na DKT Store e parceiros. Nesta versão os botões abrem a página inicial da loja.
5. Validação institucional de privacidade, SAC e redes sociais.
6. Revisão técnica do conteúdo de produto e do manual. As instruções resumidas são baseadas na embalagem oficial fornecida, sem importar especificações do Softcup.

## Datas

O prazo da mensagem do usuário (01/11/2026, concluída e aprovada) prevalece sobre o prazo antigo do PDF (05/10). Shooting: 28/10/2026. Sugestão de sequência: aprovar estrutura e textos antes do shooting; integrar mídias em 29/10; revisar e ajustar até 31/10. A aprovação final depende da marca.

## Fonte

Briefing: `/Users/livia/Downloads/BRIEFING_SITE_PRUDENCE_INTIMA.pdf`.
Imagens Infinity: pasta Drive `1HsyawXzqoXipC5OySy9DuC5wEfUD1j0W`.
