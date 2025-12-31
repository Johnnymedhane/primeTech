import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

export default defineConfig(({ mode }) => {
  const isGithub = mode === 'github'

  return {
    plugins: [react(), eslint()],
    base: isGithub ? '/primeTech/' : '/', // asset paths only
  }
})
