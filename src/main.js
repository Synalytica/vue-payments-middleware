import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { StripePlugin } from "@vue-stripe/vue-stripe";

Vue.config.productionTip = false;

StripePlugin.setAppInfo({
  name: "My App",
  version: "1.0.0",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
