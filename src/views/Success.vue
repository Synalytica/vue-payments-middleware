<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h1>Payment successful!</h1>
        <p>Amount: {{ amount }}</p>
    </div>
</template>
  
<script>
import { StripePlugin } from "@vue-stripe/vue-stripe";

export default {
    data() {
        return {
            amount: "",
            transactionId: "",
        };
    },
    async mounted() {
        // retrieve the payment amount and session ID from local storage
        this.amount = localStorage.getItem("paymentAmount");
        const sessionId = localStorage.getItem("sessionId");

        // retrieve the payment information from Stripe
        const stripe = StripePlugin.getStripe();
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        this.transactionId = session.payment_intent;

        // clear the payment amount and session ID from local storage
        localStorage.removeItem("paymentAmount");
        localStorage.removeItem("sessionId");
    },
};
</script>
  