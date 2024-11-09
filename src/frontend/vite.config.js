import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL, 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"), 
      },
    },
  },
});