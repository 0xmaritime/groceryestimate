import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Content-Security-Policy': "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval' 'unsafe-hashes'; connect-src *; media-src *; img-src * data: blob:;"
    }
  }
});
