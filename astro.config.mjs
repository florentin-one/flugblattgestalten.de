// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    imageService: { build: "compile", runtime: "cloudflare-binding" }
  })
});
