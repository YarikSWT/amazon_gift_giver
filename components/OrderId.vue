<template>
  <section class="container">
    <div class="">
      <h1>Enter your OrderId</h1>
      <el-form
        ref="form"
        :model="form"
        label-width="120px"
        label-position="top"
      >
        <el-form-item label="OrderId">
          <el-input v-model="form.orderId" placeholder="Order ID"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">CHECK</el-button>
        </el-form-item>
      </el-form>
      <div class="guide" :class="$mq">
        <img src="~/assets/img/orderid-1.jpg" alt="" />
        <img src="~/assets/img/orderid-2.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
const _ = require('lodash')
//  your spreadsheet has to be PUBLIC and SHARED with everybody to be accessed this way
//  https://sheets.googleapis.com/v4/spreadsheets/{SPREASHEET_ID}/values/{SHEET_TAB_NAME}!{CELLS}?key={GOOGLE_API_KEY}
const url =
  'https://sheets.googleapis.com/v4/spreadsheets/1Y0Rqp81RNf_adLKYQQ_BFPxH53eUBu9F434qU2wM3Ls/values/Orders!A1:D1000?key=AIzaSyAR_9cz7QcQOhmSzAWjS4mW9oggzjje8dU'

export default {
  data() {
    return {
      form: {
        orderId: '',
      },
    }
  },
  methods: {
    async onSubmit() {
      console.log('submit!')
      const loadOrders = await this.getTableData()
      const orderId = this.form.orderId
      console.log(loadOrders)
      const check = loadOrders.orders.find((el) => {
        return el.OrderId === orderId
      }, orderId)
      if (!check) {
        this.$message.error('Wrong Order Id')
      } else {
        this.$emit('nextStep', orderId)
      }
    },
    async getTableData() {
      const response = await this.$axios.get(url)
      const rows = response.data.values
      const properties = rows.shift()
      const orders = []
      for (const i in rows) {
        orders.push(_.zipObject(properties, rows[i]))
      }
      return { orders }
    },
  },
}
</script>

<style>
.guide {
  margin-top: 150px;
  /* display: flex; */
  /* flex-direction: column; */
}

.guide img {
  width: 100%;
}

.guide.sm {
  margin-top: 50px;
}
</style>
