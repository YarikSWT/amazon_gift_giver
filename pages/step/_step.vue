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
import OrderId from '~/components/OrderId.vue'
import Review from '~/components/Review.vue'
import AmazonReview from '~/components/AmazonReview.vue'
import Gifts from '~/components/Gifts.vue'
import FinalForm from '~/components/FinalForm.vue'
import store from '@/store'

export default {
  name: 'Steps',
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
    feedKey() {
      return this.$store.state.inputs.feedKey
    },
  },
  methods: {
    orderid(orderid) {
      console.log('o_id', orderid)
      this.updateRecord({ orderId: orderid }, 1)
      this.$router.push('/step/2')
      this.progress = 75
      this.orderId = orderid
      window.scrollTo(0, 0)
    },
    review(review) {
      console.log('rev', review)
      this.updateRecord({ review }, 2)
      this.$router.push('/step/3')
    },
    amazonReview(review) {
      this.updateRecord({}, 3)
      this.$router.push('/step/4')
    },
    gifts(giftId) {
      console.log('g_id', giftId)
      this.updateRecord({ giftId }, 4)
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
    },
    updateRecord(data, step) {
      this.$fireDb.ref(`/Feed/${this.feedKey}`).update({
        ...data,
        last_filled_step: step,
      })
    },
  },
  beforeRouteEnter(to, from, next) {
    if (store().state.inputs.feedKey === '') {
      next('/')
    } else next()
  },
}
</script>
