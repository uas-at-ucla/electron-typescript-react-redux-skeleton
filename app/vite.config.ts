import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import html from 'vite-plugin-html'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    html(),
    checker({
      typescript: true,
      eslint: {
        files: ['./src'],
        extensions: ['.ts', '.tsx'],
      },
    })
  ],
  base: './' // Load static assets correctly in production
})
