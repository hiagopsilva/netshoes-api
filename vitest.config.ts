import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    coverage: {
      exclude: [
        'src/env',
        'src/lib',
        'src/server.ts',
        'src/app.ts',
        'src/job/fetch-data.ts',
      ],
    },
  },
})
