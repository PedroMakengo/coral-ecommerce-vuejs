// Components
import App from "./App.vue";

import { createApp } from "vue";
import VueSplide from "@splidejs/vue-splide";

import "./styles/global.scss";
// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

registerPlugins(app);

app.use(VueSplide);
app.mount("#app");
