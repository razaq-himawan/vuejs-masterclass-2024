// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import VueRouter from "file:///C:/Users/Rojaksen/Projects/vuejs-masterclass-2024/node_modules/unplugin-vue-router/dist/vite.js";
import AutoImport from "file:///C:/Users/Rojaksen/Projects/vuejs-masterclass-2024/node_modules/unplugin-auto-import/dist/vite.js";
import { VueRouterAutoImports } from "file:///C:/Users/Rojaksen/Projects/vuejs-masterclass-2024/node_modules/unplugin-vue-router/dist/index.js";
import Components from "file:///C:/Users/Rojaksen/Projects/vuejs-masterclass-2024/node_modules/unplugin-vue-components/dist/vite.js";
import autoprefixer from "file:///C:/Users/Rojaksen/Projects/vuejs-masterclass-2024/node_modules/autoprefixer/lib/autoprefixer.js";
import tailwind from "file:///C:/Users/Rojaksen/Projects/vuejs-masterclass-2024/node_modules/tailwindcss/lib/index.js";
import { defineConfig } from "file:///C:/Users/Rojaksen/Projects/vuejs-masterclass-2024/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Rojaksen/Projects/vuejs-masterclass-2024/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Rojaksen/Projects/vuejs-masterclass-2024/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    VueRouter(),
    Components({}),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/,
        // .vue
        /\.md$/
        // .md
      ],
      imports: [
        // presets
        "vue",
        VueRouterAutoImports,
        {
          pinia: ["defineStore", "storeToRefs", "acceptHMRUpdate"]
        }
      ],
      dts: true,
      viteOptimizeDeps: true,
      dirs: ["src/stores"]
    }),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (element) => element.startsWith("iconify-icon")
        }
      }
    })
  ],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxSb2pha3NlblxcXFxQcm9qZWN0c1xcXFx2dWVqcy1tYXN0ZXJjbGFzcy0yMDI0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxSb2pha3NlblxcXFxQcm9qZWN0c1xcXFx2dWVqcy1tYXN0ZXJjbGFzcy0yMDI0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9Sb2pha3Nlbi9Qcm9qZWN0cy92dWVqcy1tYXN0ZXJjbGFzcy0yMDI0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgeyBWdWVSb3V0ZXJBdXRvSW1wb3J0cyB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXInXG5cbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5cbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xuaW1wb3J0IHRhaWx3aW5kIGZyb20gJ3RhaWx3aW5kY3NzJ1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5cbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIFZ1ZVJvdXRlcigpLFxuICAgIENvbXBvbmVudHMoe30pLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW5jbHVkZTogW1xuICAgICAgICAvXFwuW3RqXXN4PyQvLCAvLyAudHMsIC50c3gsIC5qcywgLmpzeFxuICAgICAgICAvXFwudnVlJC8sXG4gICAgICAgIC9cXC52dWVcXD92dWUvLCAvLyAudnVlXG4gICAgICAgIC9cXC5tZCQvLCAvLyAubWRcbiAgICAgIF0sXG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIC8vIHByZXNldHNcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgIFZ1ZVJvdXRlckF1dG9JbXBvcnRzLFxuICAgICAgICB7XG4gICAgICAgICAgcGluaWE6IFsnZGVmaW5lU3RvcmUnLCAnc3RvcmVUb1JlZnMnLCAnYWNjZXB0SE1SVXBkYXRlJ10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgZHRzOiB0cnVlLFxuICAgICAgdml0ZU9wdGltaXplRGVwczogdHJ1ZSxcbiAgICAgIGRpcnM6IFsnc3JjL3N0b3JlcyddLFxuICAgIH0pLFxuICAgIHZ1ZSh7XG4gICAgICB0ZW1wbGF0ZToge1xuICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgICBpc0N1c3RvbUVsZW1lbnQ6IChlbGVtZW50KSA9PiBlbGVtZW50LnN0YXJ0c1dpdGgoJ2ljb25pZnktaWNvbicpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW3RhaWx3aW5kKCksIGF1dG9wcmVmaXhlcigpXSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErVSxTQUFTLGVBQWUsV0FBVztBQUNsWCxPQUFPLGVBQWU7QUFDdEIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyw0QkFBNEI7QUFFckMsT0FBTyxnQkFBZ0I7QUFFdkIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxjQUFjO0FBRXJCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQVhtTSxJQUFNLDJDQUEyQztBQWNwUSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixXQUFXLENBQUMsQ0FBQztBQUFBLElBQ2IsV0FBVztBQUFBLE1BQ1QsU0FBUztBQUFBLFFBQ1A7QUFBQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUE7QUFBQSxRQUNBO0FBQUE7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUE7QUFBQSxRQUVQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU8sQ0FBQyxlQUFlLGVBQWUsaUJBQWlCO0FBQUEsUUFDekQ7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxrQkFBa0I7QUFBQSxNQUNsQixNQUFNLENBQUMsWUFBWTtBQUFBLElBQ3JCLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNGLFVBQVU7QUFBQSxRQUNSLGlCQUFpQjtBQUFBLFVBQ2YsaUJBQWlCLENBQUMsWUFBWSxRQUFRLFdBQVcsY0FBYztBQUFBLFFBQ2pFO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
