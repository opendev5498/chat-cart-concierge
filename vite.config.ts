import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // For GitHub Pages: use "/" for user/organization pages (username.github.io)
  // or "/chat-cart-concierge/" for project pages (username.github.io/repo-name)
  // You can override this with VITE_BASE_PATH environment variable
  base: process.env.VITE_BASE_PATH || (mode === "production" ? "/chat-cart-concierge/" : "/"),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
