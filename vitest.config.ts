import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "#internal-core": fileURLToPath(
        new URL("./packages/core/src/index.ts", import.meta.url),
      ),
      "@seller-sdk/ozon": fileURLToPath(
        new URL("./packages/ozon/src/index.ts", import.meta.url),
      ),
      "seller-sdk": fileURLToPath(
        new URL("./packages/seller-sdk/src/index.ts", import.meta.url),
      ),
    },
  },
  test: {
    coverage: {
      enabled: false,
    },
    include: ["test/**/*.test.ts"],
    mockReset: true,
    restoreMocks: true,
  },
});
