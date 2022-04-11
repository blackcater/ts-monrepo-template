import { defineConfig } from "vitest/config"
import viteTSPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [viteTSPaths()],
  test: {
    includeSource: ["packages/*/src/**/*.ts"],
    exclude: ["**/docs/**", "**/examples/**"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
})
