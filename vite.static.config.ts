// Temporary config used only to export a static, uploadable copy of the site.
// The project's real build still uses vite.config.ts.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      maxRedirects: 5,
      crawlLinks: false,
      autoSubfolderIndex: true,
      failOnError: true,
    },
    pages: [{ path: "/" }, { path: "/press" }, { path: "/sports" }, { path: "/biography" }, { path: "/contact" }],
  },
});
