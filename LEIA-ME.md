# Loja do Vini · landing page (HTML estático) + SEO técnico

## Estrutura
```
index.html            página única (CSS e JS embutidos, SEO, Open Graph, JSON-LD)
404.html              página 404 personalizada (noindex)
assets/produtos/      6 fotos de produto tratadas (WebP 480 e 960)
assets/loja/          fotos da loja e lançamentos
assets/clientes/      fotos de clientes (sem legendas e sem @)
assets/videos/        17 vídeos de unboxing (MP4 480x600, sem áudio) + capas WebP
assets/marca/         logo transparente e retrato do CEO
favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png, site.webmanifest
robots.txt, sitemap.xml
site.config.mjs       SITE_URL e WHATSAPP (os dois pontos únicos de troca)
scripts/build.mjs     build sem dependências: gera /dist trocando URL e WhatsApp
vercel.json, package.json, .gitignore
BRIEFING-E-PROMPT.md  briefing, Vibe Spec e prompt da página
```
Teste local: `npm run build` e abra `dist/index.html` com um servidor (ex.: `npx serve dist`).

## Como a URL funciona
O placeholder `https://TROCAR-PELO-LINK-DO-VERCEL.vercel.app` aparece em index.html, robots.txt e sitemap.xml.
No deploy da Vercel, `scripts/build.mjs` troca tudo automaticamente pela variável `VERCEL_PROJECT_PRODUCTION_URL`
(o link de produção, nunca o de preview). Fora da Vercel, usa `SITE_URL` de `site.config.mjs` (linha 10).

## O que ficou para preencher
| Item | Arquivo e linha | O que fazer |
|---|---|---|
| URL do site | `site.config.mjs`, linha 10 | Opcional na Vercel (automático). Com domínio próprio, troque pelo domínio (sem barra no final). |

## Resultado do checklist

### Parte 1: qualidade
1. **Rolagem horizontal:** testado em 320, 375, 768 e 1440 px; `scrollWidth` igual à largura da tela em todos. `box-sizing: border-box`, `max-width: 100%` em mídias, `overflow-x: clip` no body, nenhum `100vw`.
2. **Favicon:** favicon.svg (vetorizado do símbolo da marca), favicon.ico (16/32/48), apple-touch-icon.png (180), icon-192.png e icon-512.png via site.webmanifest, theme-color. Todos na raiz.
3. **Meta descrição:** 130 caracteres, única. Title com 43 caracteres.
4. **404:** `404.html` com a mesma identidade, botões para a home e para o pedido no WhatsApp, `noindex`. A Vercel serve esse arquivo automaticamente.
5. **Imagens:** todas em WebP com srcset/sizes, width e height declarados, `loading="lazy"` abaixo da dobra; imagem do hero com `fetchpriority="high"` e preload. Vídeos com `preload="none"` (só o vídeo da vez carrega).
6. **Botões:** nenhum `href="#"` vazio; estados hover, focus-visible e active; área mínima de 44x44 px; âncoras levam às seções certas.
7. **Logo clicável:** header e rodapé levam ao topo.
8. **Mobile:** viewport correto, texto a partir de 16px, menu recolhível, botão flutuante de WhatsApp, `100dvh` na 404, `prefers-reduced-motion` e `prefers-reduced-transparency` respeitados.
9. **Travessões:** nenhum `—` ou `–` em textos, metas, alt ou JSON-LD.
10. **Links:** internos, âncoras, imagens e vídeos conferidos; todo `target="_blank"` com `rel="noopener noreferrer"`; WhatsApp no formato `wa.me/55DDDNUMERO`.
11. **Títulos:** escala fluida com `clamp()`, line-height ajustado ao tamanho, tracking negativo nos grandes, `text-wrap: balance`; azul #0069AD sobre branco com contraste 5,6:1 (AA).
12. **Velocidade:** sem frameworks nem dependências; JS pequeno e no fim do body; 2 famílias de fonte (Outfit e Manrope) com `display=swap` e preconnect; cache longo em `/assets` via vercel.json.

### Parte 2: SEO técnico
1. Title e description baseados só no conteúdo da marca.
2. Canonical absoluta, vinda de SITE_URL.
3. robots.txt liberando tudo e apontando o sitemap absoluto.
4. sitemap.xml só com a home (é a única rota pública).
5. Open Graph completo (pt_BR) e Twitter `summary_large_image`, com `/og-image.jpg` (1200x630) já criado na raiz.
6. Configuração Vercel sem URL de preview ou domínio fictício no build de produção.
7. Nenhum `noindex` na home, nenhum X-Robots-Tag em vercel.json, canonical = og:url = sitemap.
8. `lang="pt-BR"`.
9. Um único `<h1>`; h2 por seção e h3 nos passos.
10. `alt` descritivo em todas as fotos de conteúdo; cópias decorativas do carrossel com `alt=""` e `aria-hidden`.
11. Favicon preparado (item 2 acima).
12. JSON-LD `Store` com nome, descrição, telefone, Instagram, endereço completo com CEP, horário de funcionamento, link do mapa, área atendida e CEO.
13. Não há outras rotas.

## Checklist

**a. Publicar na Vercel via GitHub**
1. Crie um repositório no GitHub e envie esta pasta inteira.
2. Na Vercel: *Add New → Project → Import* o repositório.
3. Framework Preset: **Other**. A Vercel lê o `vercel.json` (build `npm run build`, saída `dist`). Clique em *Deploy*.

**b. Link de produção**
1. Depois do deploy, o link `seu-projeto.vercel.app` aparece em *Domains*.
2. A troca da URL é **automática** em cada deploy de produção.
3. Abra `seu-projeto.vercel.app/robots.txt` e `/sitemap.xml` e confira se o link certo aparece.
4. Links de preview da Vercel ficam com noindex por padrão. Isso é normal: confira sempre no link de produção.

**c. Google Search Console**
1. Em search.google.com/search-console, adicione uma propriedade do tipo **Prefixo do URL** com o link de produção.
2. Verifique pela tag HTML (cole a meta tag no `<head>` do index.html, faça novo deploy e clique em Verificar).
3. Em *Sitemaps*, envie `sitemap.xml`.
4. Em *Inspeção de URL*, cole a home e clique em *Solicitar indexação*.
5. A indexação depende da avaliação do Google; pode levar de dias a semanas.

**d. Se conectar um domínio próprio**
1. Na Vercel: *Settings → Domains*, adicione o domínio e configure o DNS indicado.
2. Defina o domínio como principal e marque o `.vercel.app` para **redirecionar (308)** para ele.
3. Troque `SITE_URL` em `site.config.mjs` pelo domínio novo e faça novo deploy (a variável automática continua apontando para o .vercel.app em alguns casos, então o valor fixo garante o domínio certo).
4. No Search Console, adicione o domínio como nova propriedade, envie o sitemap de novo e solicite a indexação.

## Tratamento de mídia
- Legendas, @ de clientes, preços e textos sobrepostos removidos por recorte (sem borrar) ou, quando estavam sobre parede ou tela, por clonagem de textura.
- Textos de tela removidos do Apple Watch, do iPhone dobrável e a letra da haste dos AirPods; molduras arredondadas eliminadas.
- Rostos não foram retocados: apenas recorte, leve contraste e nitidez global.
- Textos impressos em objetos reais (sacolas com a marca, caixas Apple, estampas de roupas) foram mantidos.
- Fora da página: a foto do iPhone 16 Pro Max (preço e textos da tela) e o vídeo V_DEOOS_3 (repost com moldura e textos espalhados).
