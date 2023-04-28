// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true
  },
  plugins: [react(), 
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'coverage/'],
      extension: [ '.js', '.ts', '.tsx' ],
      requireEnv: true,
    }),
],
  server: {
    watch: {
      ignored: ['**/coverage/**'],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom', 
    coverage: {
      reporter: ['text'],
      all: true,      
   }
  }
})
