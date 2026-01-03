import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Vite config for building BlazeUI as a reusable React component library
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "BlazeUI",
      fileName: (format) => `blaze-ui.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      // Do not bundle React with the library
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: [
        {
          format: "es",
          entryFileNames: "blaze-ui.es.js",
          preserveModules: false,
        },
        {
          format: "umd",
          name: "BlazeUI",
          entryFileNames: "blaze-ui.umd.js",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      ],
    },
  },
});


