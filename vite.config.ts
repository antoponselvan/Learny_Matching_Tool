import path from 'path'
import { defineConfig } from 'vite'
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// typing for Vitest config
const vitestConfig: VitestUserConfigInterface = {
  test: {
    // includeSource: ["src/**/*.{js,jsx}"]
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/testing/setup/setup.ts'],
  },
};

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  test: vitestConfig.test
})
