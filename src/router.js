import Vue from "vue";
import Router from "vue-router";
import PaymentForm from "@/components/PaymentForm.vue";
import Success from "@/views/Success.vue";
import Cancel from "@/views/Cancel.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "PaymentForm",
      component: PaymentForm,
    },
    {
      path: "/success",
      name: "Success",
      component: Success,
    },
    {
      path: "/cancel",
      name: "Cancel",
      component: Cancel,
    },
  ],
});
