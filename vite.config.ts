// 
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/Web-Ui-Testing-App-Frontend/",   // IMPORTANT
  plugins: [vue()],
  server: {
    port: 5173
  }
});