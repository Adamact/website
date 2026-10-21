import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        "index.html", "pricing.html", "about.html", "security.html", "privacy.html", "produkt.html", "ordlista-fakturahantering.html",
        "news/index.html",
        "integrationer/fortnox.html",
        "404.html",
      ],
    },
  },
});
