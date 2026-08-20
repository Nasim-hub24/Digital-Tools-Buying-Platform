import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Digital-Tools-Buying-Platform/',
  server: {
    port: 5173,
    open: false
  }
});
