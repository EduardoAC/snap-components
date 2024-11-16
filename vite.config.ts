import { defineConfig } from "vite";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "SnapComponents", // UMD global variable if needed
      formats: ["es", "cjs"], // Suitable for both web and mobile projects
      fileName: (format) => `snap-components.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-native"], // Mark peer dependencies
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-native": "ReactNative",
        },
      },
    },
  },
});
