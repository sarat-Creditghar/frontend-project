import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
  proxy: {
    "/api": {
      target: "https://3feb5512b1d2.ngrok-free.app",
      changeOrigin: true,
      secure: false,
    },
  },
}
});