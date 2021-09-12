import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import html from 'vite-plugin-html'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    html(),
    eslintPlugin({'cache': false}) // TODO Cache feature needs to be fixed in vite-plugin-eslint (https://github.com/gxmari007/vite-plugin-eslint/issues/11)
  ],
  base: './' // Load static assets correctly in production
})
