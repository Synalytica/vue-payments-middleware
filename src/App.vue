<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { StripePlugin } from "@vue-stripe/vue-stripe";

export default {
  created() {
    StripePlugin.setOptions({
      publishableKey: process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY,
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
