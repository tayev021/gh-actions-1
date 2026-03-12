/// <reference types="vitest/config" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reportsDirectory: './.tests/unit/coverage',
    },
  },
});
