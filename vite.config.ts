import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        "index.html", "pricing.html", "about.html", "security.html", "privacy.html",
        "blog/index.html",
        "blog/vanliga-utmaningar-fakturahantering.html",
        "blog/bygg-transport-fakturor.html",
        "blog/fakturaformat.html",
        "blog/manuell-vs-automatiserad-fakturahantering.html",
        "blog/ocr-faktura.html",
        "blog/verifiera-leverantorsfakturor.html",
        "blog/what-is-invoice-processing.html",
        "blog/upptacka-feldebitering.html",
        "blog/kontroll-fakturor-byggprojekt.html",
        "blog/automatiserad-fakturakontroll.html",
        "blog/checklista-fakturakontroll.html",
        "blog/fakturaflode.html",
        "blog/excel-vs-automatiserad-fakturahantering.html",
        "blog/fakturaattest.html",
        "blog/vanliga-fel-transportfakturor.html",
        "blog/roi-fakturaautomation.html",
        "news/index.html",
        "404.html",
      ],
    },
  },
});
