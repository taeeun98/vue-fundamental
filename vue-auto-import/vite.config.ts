import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
      eslintrc: {
        enabled: false, // ESLint 설정 파일 자동 생성 비활성화
        filepath: "./.eslintrc-auto-import.json", // ESLint 설정 파일 경로
        globalsPropValue: true, // 글로벌 변수의 속성 값으로 "true"를 설정
      },
      dts: "./auto-imports.d.ts",
    }),

    // 컴포넌트 자동 등록 플러그인 설정
    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dirs: ["src/components/", "src/layout"],
    }),
  ],
});
