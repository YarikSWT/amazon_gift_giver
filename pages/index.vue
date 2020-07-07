<template>
  <div :key="key" class="main">
    <el-steps
      :space="200"
      :active="step"
      finish-status="success"
      style="width: 400px;"
    >
      <el-step title="Name"></el-step>
      <el-step title="OrderId"></el-step>
      <el-step title="Gift"></el-step>
      <el-step title="Conact Info"></el-step>
    </el-steps>
    <div class="container">
      <Main v-if="step === 0" @nextStep="main"></Main>
      <OrderId v-else-if="step === 1" @nextStep="step += 1"></OrderId>
      <Gifts v-else-if="step === 2" @nextStep="step += 1"></Gifts>
      <FinalForm
        v-else-if="step === 3"
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
      this.firstForm = form
    },
    orderid(orderid) {
      this.step += 1
      this.orderId = orderid
    },
    gifts(giftId) {
      this.step += 1
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
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>
