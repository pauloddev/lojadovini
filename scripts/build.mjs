// Build estático sem dependências: copia o site para /dist, troca o
// placeholder da URL pela URL de produção e aplica o número de WhatsApp.
// Ordem da URL: VERCEL_PROJECT_PRODUCTION_URL (automática na Vercel) -> SITE_URL (site.config.mjs)
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { SITE_URL, WHATSAPP } from "../site.config.mjs";

const PLACEHOLDER = "https://TROCAR-PELO-LINK-DO-VERCEL.vercel.app";
const WA_ORIGINAL = "5531993243003";
const WA_TEL_ORIGINAL = "(31) 99324-3003";
const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const url = (prod ? `https://${prod}` : SITE_URL).replace(/\/+$/, "");
const wa = String(WHATSAPP).replace(/\D/g, "");
const waTel = wa.length === 13 ? `(${wa.slice(2, 4)}) ${wa.slice(4, 9)}-${wa.slice(9)}` : WA_TEL_ORIGINAL;

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");
cpSync("assets", "dist/assets", { recursive: true });

// favicons e imagem de compartilhamento: copiados se existirem
for (const f of ["favicon.ico", "favicon.svg", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "site.webmanifest", "og-image.jpg"]) {
  if (existsSync(f)) cpSync(f, `dist/${f}`);
  else console.warn(`[seo] Aviso: ${f} ainda não existe na raiz do projeto.`);
}

for (const f of ["index.html", "404.html", "robots.txt", "sitemap.xml"]) {
  let txt = readFileSync(f, "utf8").split(PLACEHOLDER).join(url);
  if (f.endsWith(".html")) {
    txt = txt.split(`wa.me/${WA_ORIGINAL}`).join(`wa.me/${wa}`);
    txt = txt.split(WA_TEL_ORIGINAL).join(waTel);
    txt = txt.split(`"+55 31 99324-3003"`).join(`"+${wa.slice(0, 2)} ${waTel.replace(/[()]/g, "")}"`);
  }
  writeFileSync(`dist/${f}`, txt);
}
if (url === PLACEHOLDER) console.warn("[seo] Aviso: SITE_URL ainda é o placeholder. Configure site.config.mjs ou faça o deploy na Vercel.");
console.log(`[seo] Build pronto em /dist com SITE_URL = ${url} e WhatsApp = ${wa}`);
