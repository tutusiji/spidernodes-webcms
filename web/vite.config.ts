import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import * as path from 'path'
import { fileURLToPath } from "url";
import path from "path";
// 获取当前文件的路径
const __filename = fileURLToPath(import.meta.url);

// 获取当前文件的目录路径
const __dirname = path.dirname(__filename);

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import VueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/demo/formEngine/',
  base: "/",
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: "auto-imports.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    tailwindcss,
    autoprefixer,
  ],
  resolve: {
    // 设置别名
    alias: {
      "@": path.resolve(__dirname, "src"),
      Assets: path.resolve(__dirname, "src/assets"),
      Components: path.resolve(__dirname, "src/components"),
      Utils: path.resolve(__dirname, "src/utils"), // 工具类方法（新创建的）
    },
  },
});
