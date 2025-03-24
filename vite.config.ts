import { defineConfig } from "vite";
import svgr from 'vite-plugin-svgr'
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr({include: "**/*.svg?react"})],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
