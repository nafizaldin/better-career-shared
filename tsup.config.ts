import { defineConfig } from "tsup";

// Dual build: ESM (.mjs) for Vite/Nuxt, CommonJS (.js) for NestJS.
// Bundled per entry so the ESM output has no extension-less relative imports.
export default defineConfig({
  entry: {
    "dto/index": "src/dto/index.ts",
    "schema/index": "src/schema/index.ts",
    "utils/index": "src/utils/index.ts",
    "sanitize/index": "src/sanitize/index.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  target: "es2020",
});
