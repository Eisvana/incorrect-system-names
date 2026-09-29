import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/incorrect-system-names/',
  plugins: [vue()],
  resolve: {
    tsconfigPaths: true,
  },
});
