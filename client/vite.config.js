import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // any request to /api/* from the React dev server
      // gets forwarded to the Express server on port 5000
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true
      }
    }
  }
});
