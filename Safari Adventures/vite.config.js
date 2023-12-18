import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Include your project source directory
      allow: [
        'C:./src',
        'C:./node_modules',
        'C:/Users/dell/Desktop/Safari Adventures/Safari Adventures/node_modules/slick-carousel/slick/**',
        './node_modules/vite/dist/client/**',
        'C:/Users/dell/Desktop/Safari Adventures/node_modules/slick-carousel/slick/fonts/slick.woff',
        'C:/Users/dell/Desktop/Safari Adventures/node_modules/slick-carousel/slick/fonts/slick.ttf',
      ],
    },
  },
})
