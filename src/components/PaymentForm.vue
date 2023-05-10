<template>
  <div>
    <label for="amount">Amount:</label>
    <input type="number" id="amount" v-model="amount" />
    <button @click="submitPayment">Pay</button>
    <StripeCheckout ref="checkout" />
  </div>
</template>

<script>
import { StripePlugin, StripeCheckout } from "@vue-stripe/vue-stripe";

export default {
  data() {
    return {
      amount: "",
    };
  },
  methods: {
    async submitPayment() {
      // create a Stripe checkout session
      const stripe = StripePlugin.getStripe();
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Payment",
              },
              unit_amount: parseInt(this.amount * 100),
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${process.env.VUE_APP_BASE_URL}/success`,
        cancel_url: `${process.env.VUE_APP_BASE_URL}/cancel`,
      });

      // store the payment amount and session ID in local storage
      localStorage.setItem("paymentAmount", this.amount);
      localStorage.setItem("sessionId", session.id);

      // redirect to Stripe checkout
      const checkout = this.$refs.checkout;
      await checkout.redirectToCheckout({ sessionId: session.id });
    },
  },
  components: {
    StripeCheckout,
  },
  created() {
    StripePlugin.setOptions({
      publishableKey: process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY,
    });
  },
};
</script>
