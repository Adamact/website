import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: ["index.html", "pricing.html", "about.html"],
    },
  },
});
