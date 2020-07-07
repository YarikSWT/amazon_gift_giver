<template>
  <div :key="key" class="index" :class="{ faces: step == 0 }">
    <header class="">
      <el-progress
        v-if="step != 0"
        :text-inside="true"
        :stroke-width="26"
        :percentage="progress"
      ></el-progress>
    </header>
    <div class="container">
      <Main v-if="step === 0" @nextStep="main"></Main>
      <OrderId v-else-if="step === 1" @nextStep="orderid"></OrderId>
      <Gifts v-else-if="step === 2" @nextStep="gifts"></Gifts>
      <FinalForm
        v-else-if="step === 3"
        :first-form="firstForm"
        :order-id="orderId"
        @nextStep="finish"
      ></FinalForm>
    </div>
  </div>
</template>

<script>
import Main from '~/components/Main.vue'
import OrderId from '~/components/OrderId.vue'
import Gifts from '~/components/Gifts.vue'
import FinalForm from '~/components/FinalForm.vue'

export default {
  components: { Main, OrderId, Gifts, FinalForm },
  data() {
    return {
      step: 0,
      key: 0,
      firstForm: {},
      orderId: '',
    }
  },
  methods: {
    main(form) {
      this.step += 1
      this.progress = 33
      this.firstForm = form
    },
    orderid(orderid) {
      this.step += 1
      this.progress = 75
      this.orderId = orderid
    },
    gifts(giftId) {
      this.step += 1
      this.progress = 90
      this.giftId = giftId
    },
    finish() {
      this.step = 0
      this.key += 1
      this.firstForm = {}
      this.orderId = ''
    },
  },
}
</script>

<style>
header {
  width: 60%;
  margin: 2% 0;
}

.index {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.faces {
  background-image: url('../assets/img/faces.jpg');
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

h1 {
  margin-bottom: 30px;
}

@media (min-width: 320px) and (max-width: 480px) {
  h1 {
    margin-top: 40px;
    font-size: 1.5rem;
  }
}
</style>
