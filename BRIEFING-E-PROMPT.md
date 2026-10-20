# Loja do Vini · Briefing e prompt da landing page

## 1. Briefing

**Marca:** Loja do Vini
**CEO:** Vinícius Farias
**Linha:** iPhones · iPads · MacBooks · Apple Watch (e AirPods, nas fotos enviadas)
**O que faz:** venda de aparelhos Apple novos e seminovos, com opção de entrega no mesmo dia em Belo Horizonte e região.
**Onde:** loja física no Buritis, Belo Horizonte.
**Contatos (lidos nas sacolas das fotos enviadas):** WhatsApp (31) 99324-3003 · Instagram @lojado.vini
**Fonte de dados:** chamadas enviadas pelo cliente + metadados de lojadovini.com.br (o site é uma SPA e só expõe título e descrição: "produtos Apple em Belo Horizonte", "garantia nos produtos", "suporte humanizado", "acessórios originais").

### Chamadas obrigatórias
- Há 6 anos, entregando a melhor experiência de compra Apple
- Loja física · Buritis, BH
- Faça seu pedido e receba no mesmo dia
- Suporte premium
- Frase do CEO: "A sua experiência em adquirir um dispositivo Apple (iPhone, iPad, Apple Watch, MacBook) é realizada com excelência aqui."

### Público
Quem quer um Apple em BH e região, compara preço com segurança e não quer esperar dias pela entrega. Inclui quem compra o primeiro Apple (seminovo) e quem troca pelo lançamento.

### As três objeções
1. **"Seminovo é confiável?"** → garantia nos produtos, loja física, suporte premium depois da compra.
2. **"Vai demorar para chegar?"** → pedido feito, entrega no mesmo dia em BH e região.
3. **"Essa loja existe mesmo?"** → loja física no Buritis, 6 anos, rosto do CEO, dezenas de clientes reais com a sacola na mão.

### Vibe Spec (landing-page-pro, Fase 1)
| Pergunta | Resposta |
|---|---|
| Âncora no mundo real | A mesa de entrega de uma Apple Store: tampo claro, caixa branca lacrada, sacola com a marca. |
| Alvo emocional (3 s) | "Aqui é sério, aqui é rápido, aqui é gente." Calma e confiança. |
| Colisão de influências | Página de produto da Apple × álbum de fotos de clientes no Instagram. |
| Princípio de evitação | Nunca parecer camelô de celular: sem neon, sem caixa-alta gritando, sem preço em balão. |

- **Paleta:** branco → cinza-claro (#FFFFFF → #ECEEF2) no fundo; azul do logo #0069AD em títulos, textos e botões; azul profundo #0A3D62 para leitura longa.
- **Tipografia:** Outfit (títulos, geométrica como o logotipo) + Manrope (texto). Tracking negativo nos títulos grandes, neutro no corpo.
- **Densidade:** arejada; um assunto por seção, muito respiro.
- **Princípio de layout:** produto sobre branco, cartões quadrados com cantos de 28 px, material translúcido na navegação (apple-design §12).
- **Elemento memorável:** o palco de vídeos em "coverflow": o unboxing da vez em destaque no centro, tocando sozinho e sem som, os outros ao lado.

### Referência
Layout da landing Crazy Cell (header com CTA em pílula, hero dividido, grade de produtos, faixa de clientes, bloco do CEO, CTA final), refeito mais clean: sem grid de circuito, sem faixas azuis chapadas, sem caixa-alta.

## 2. Prompt da landing page

> Crie uma landing page de luxo, one-page, em HTML + CSS + JS puro (sem frameworks), para a **Loja do Vini**, revenda de produtos Apple novos e seminovos em Belo Horizonte (loja física no Buritis), CEO Vinícius Farias.
>
> **Visual:** fundo branco em gradiente para cinza-claro (#FFFFFF → #ECEEF2). Títulos, textos e botões na cor do logo (#0069AD), com azul profundo #0A3D62 para parágrafos longos. Fontes Outfit (títulos) e Manrope (texto). Cartões brancos com cantos de 28 px, sombras suaves e difusas, navegação translúcida com blur. Estética de página de produto Apple: muito branco, produto em destaque, zero ruído. Nada de roxo, neon, caixa-alta ou ícones Lucide.
>
> **Seções, na ordem:**
> 1. **Header** translúcido fixo: logo clicável (volta ao topo), links âncora e botão "Fazer meu pedido" (WhatsApp).
> 2. **Hero:** sobrelinha "iPhones · iPads · MacBooks · Apple Watch"; título "Seu próximo Apple pode chegar hoje."; subtítulo "Venda de aparelhos Apple novos e seminovos, com opção de entrega no mesmo dia em Belo Horizonte e região."; botões "Fazer meu pedido" e "Ver aparelhos"; as quatro chamadas (6 anos, loja física Buritis, receba no mesmo dia, suporte premium); à direita, palco com o iPhone Pro e mini cartões flutuantes.
> 3. **Aparelhos:** um quadrado de cantos arredondados para cada produto (iPhone Pro, iPhone dobrável, MacBook, iPad, Apple Watch, AirPods) com o nome embaixo; cada um abre o WhatsApp já com o produto na mensagem.
> 4. **Loja:** foto do Vinícius com as sacolas; título "Estamos prontos para lhe atender. O seu próximo aparelho está aqui."; texto sobre a loja física, os 6 anos e o atendimento.
> 5. **Lançamentos:** mosaico com as fotos de MacBook (Neo, Air, Pro) e o título "A Apple lançou. A Loja do Vini já tem."
> 6. **Clientes:** uma foto grande e duas menores ao lado + texto "Cliente satisfeito é cliente que compra aqui."; abaixo, carrossel fluido e infinito com as demais fotos de clientes (só o nome do aparelho, sem @ dos clientes).
> 7. **Vídeos:** carrossel coverflow; o vídeo da vez grande no centro, tocando sozinho e mudo, avançando ao terminar; os outros menores nas laterais; arrastar, setas e teclado.
> 8. **Como funciona:** 3 passos (escolha, chame no WhatsApp, receba no mesmo dia ou visite a loja).
> 9. **CEO:** foto de estúdio, nome, cargo e a frase "A sua experiência em adquirir um dispositivo Apple (iPhone, iPad, Apple Watch, MacBook) é realizada com excelência aqui."
> 10. **Dúvidas:** respostas às três objeções (seminovo, prazo, loja física).
> 11. **CTA final** e **rodapé** com contatos e aviso de marcas registradas.
>
> **Imagens:** remover legendas e textos sobrepostos, bordas e molduras; sem borrões, sem distorção, sem alterar rostos. WebP com srcset, width/height declarados, lazy-load abaixo da dobra.
>
> **Regras:** nenhum travessão como pontuação; CTAs específicos; mobile primeiro (320 a 1440 px, sem rolagem horizontal); WCAG AA; prefers-reduced-motion; SEO técnico completo (canonical, OG, JSON-LD, sitemap, robots) com SITE_URL centralizada para deploy na Vercel.
