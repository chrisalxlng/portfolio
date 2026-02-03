// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.christopherlang.dev",
  integrations: [],
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
    routing: {
      redirectToDefaultLocale: false,
      prefixDefaultLocale: true,
    },
  }
});
