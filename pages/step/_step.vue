<template>
  <div class="container">
    <OrderId v-if="step === 1" @nextStep="orderid"></OrderId>
    <Review v-else-if="step === 2" @nextStep="review"></Review>
    <AmazonReview
      v-else-if="step === 3"
      @nextStep="amazonReview"
    ></AmazonReview>
    <Gifts v-else-if="step === 4" @nextStep="gifts"></Gifts>
    <FinalForm
      v-else-if="step === 5"
      :first-form="firstForm"
      :order-id="orderId"
      @nextStep="finish"
      @endProgress="endProgress"
    ></FinalForm>
  </div>
</template>

<script>
// import { mapMutations, mapGetters } from 'vuex'
import OrderId from '~/components/OrderId.vue'
import Review from '~/components/Review.vue'
import AmazonReview from '~/components/AmazonReview.vue'
import Gifts from '~/components/Gifts.vue'
import FinalForm from '~/components/FinalForm.vue'

import store from '@/store'

export default {
  components: { OrderId, Review, AmazonReview, Gifts, FinalForm },
  data() {
    return {
      test: '',
      progress: 0,
      firstForm: {},
      orderId: '',
    }
  },
  computed: {
    step() {
      return parseInt(this.$route.params.step)
    },
    value: {
      get() {
        return this.$store.state.input
      },
      set(newValue) {
        this.$store.commit('input', newValue)
      },
    },
  },
  methods: {
    orderid(orderid) {
      this.$router.push('/step/2')
      this.progress = 75
      this.orderId = orderid
      window.scrollTo(0, 0)
    },
    review(review) {
      this.$router.push('/step/3')
    },
    amazonReview(review) {
      this.$router.push('/step/4')
    },
    gifts(giftId) {
      this.$router.push('/step/5')
      this.progress = 90
      this.giftId = giftId
      window.scrollTo(0, 0)
    },
    finish() {
      this.$router.push('/step/6')
      this.key += 1
      this.firstForm = {}
      this.orderId = ''
    },
    endProgress() {
      console.log('the end')
      //   this.progress = 100
    },
  },
  beforeRouteEnter(to, from, next) {
    const step = parseInt(to.params.step)
    console.log('step', step)
    // next()
    // if (step < 1 || step > 4) {
    //   next('/')
    // } else next()
    if (step > 1) {
      console.log(store().state)
      if (store().state.inputs.orderId.length === 0) next('/step/1')
      else next()
    } else next()
  },
}
</script>
