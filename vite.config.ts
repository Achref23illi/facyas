import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore ESLint warnings during build
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return
        warn(warning)
      }
    }
  },
  esbuild: {
    // Ignore TypeScript and ESLint errors during build
    logOverride: { 
      'this-is-undefined-in-esm': 'silent',
      'direct-eval': 'silent'
    },
    // Skip type checking during build for faster deployment
    target: 'es2020'
  },
  // Disable type checking during build
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }
})
