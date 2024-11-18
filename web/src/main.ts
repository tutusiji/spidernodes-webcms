// import './assets/style.css'
import "./assets/tailwind.css";
import "vue-global-api";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router";
import App from "./App.vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(createPinia());
app.use(router);

app.mount("#app");
