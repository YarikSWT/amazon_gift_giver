<template>
  <div>
    <div class="w-screen md:h-full sm:f-full body container">
      <div class="w-full h-full">
        <div class="content w-full">
          <div class="py-5">
            <div class="d-flex flex-wrap">
              <div class="half px-lg-5">
                <img
                  class="border w-100 shadow mb-3 lg:block md:hidden sm:hidden xs:hidden"
                  src="~/assets/img/Order_ID.png"
                  alt=""
                />
                <div>
                  <h4
                    class="font-weight-bolder order-description animated wow zoomIn mb-2"
                  >
                    How do I find my order id?
                  </h4>

                  <p
                    class="lead-landing order-description2 font-weight-bold mb-6 animated wow zoomIn"
                    style="visibility: visible; animation-name: zoomIn;"
                  >
                    Check in your
                    <a
                      href="https://www.amazon.com/gp/css/order-history/ref=pd_hud_ysc_orders"
                      target="_blank"
                      >Amazon Account Order History</a
                    >, in your email or in the receipt you got with your
                    product.
                  </p>
                </div>
              </div>
              <div class="half px-lg-4">
                <div class="order-form rounded pt-4 px-3 pb-2 border shadow">
                  <h6 class="text-center font-extrabold px-lg-5 px-md-0 mb-3">
                    To help us locate your order please fill the form below
                  </h6>

                  <el-form id="orderIdForm" ref="form" :model="form">
                    <el-form-item>
                      <el-input
                        v-model="orderId"
                        class="form-input"
                        type="text"
                        placeholder="Enter Order Id (Example: 112-9019047-2847266)"
                      ></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button
                        type="success"
                        class="mt-2 btn w-100 uppercase order-button btn-green mt-1"
                        @click="onSubmit"
                      >
                        Search for the order
                      </el-button>
                    </el-form-item>
                  </el-form>
                  <p class="text-sm-left mt-4">
                    *We don't share your personal info with anyone. Check out
                    our Privacy Policy for more information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const _ = require('lodash')
//  your spreadsheet has to be PUBLIC and SHARED with everybody to be accessed this way
//  https://sheets.googleapis.com/v4/spreadsheets/{SPREASHEET_ID}/values/{SHEET_TAB_NAME}!{CELLS}?key={GOOGLE_API_KEY}
const url =
  'https://sheets.googleapis.com/v4/spreadsheets/1Y0Rqp81RNf_adLKYQQ_BFPxH53eUBu9F434qU2wM3Ls/values/Orders!A1:D1000?key=AIzaSyAR_9cz7QcQOhmSzAWjS4mW9oggzjje8dU'

export default {
  name: 'OrderId',
  data() {
    return {
      form: {
        orderId: '',
      },
    }
  },
  computed: {
    orderId: {
      get() {
        return this.$store.state.inputs.orderId
      },
      set(newValue) {
        this.form.orderId = newValue
        this.$store.commit('setInput', { field: 'orderId', data: newValue })
      },
    },
  },
  methods: {
    async onSubmit() {
      console.log('submit!')
      const loadOrders = await this.getTableData()
      const orderId = this.$store.state.inputs.orderId
      const check = loadOrders.orders.find((el) => {
        return el.OrderId === orderId
      }, orderId)
      const fb = await this.$fireDb
        .ref('/Feed')
        .once('value')
        .then(async (snapshot) => {
          let filled = false
          const bar = await new Promise((resolve, reject) => {
            let index = 0
            snapshot.forEach((doc) => {
              if (
                doc.val().orderId === orderId &&
                doc.val().last_filled_step === 5
              ) {
                filled = true
                resolve(filled)
              }
              index += 1
              if (index === snapshot.numChildren()) resolve(filled)
            })
          })
          return {
            filled: bar,
          }
        })
      if (!check) {
        this.$message.error('Wrong Order ID')
      } else if (fb.filled) {
        this.$message.error(
          'It seems that this Order ID has already claimed a Gift'
        )
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

.half {
  width: 50%;
}

.guide img {
  width: 100%;
}

.guide.sm {
  margin-top: 50px;
}

.order-form {
  background-color: #eff1f4 !important;
}

.order-form h6 {
  text-transform: uppercase;
  font-weight: 900;
  font-size: 15px;
  color: rgb(105, 105, 110);
  line-height: 19px;
}

p {
  color: #657380;
}

.form-input .el-input-inner {
  background: #fff;
  color: #657380;
  border-radius: 2px;
  font-size: 15px;
  font-weight: 700;
  padding: 16px;
  width: 100%;
  height: 57px;
  outline: 0;
  border: 2px solid #e8ebed;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.btn-green {
  background-color: #56b68b;
  font-size: 2.25rem;
  padding: 0.5rem 1rem;
  font-size: 15px !important;
  padding: 11px 18px !important;
  -webkit-box-shadow: 0 4px 0 #487d65 !important;
  box-shadow: 0 4px 0 #487d65 !important;
}

.order-button {
  font-size: 17px !important;
  font-weight: 800 !important;
}

.btn {
  display: inline-block;
  color: white;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 0.9rem;
  line-height: 1.6;
  border-radius: 0.25rem;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
}

.order-description {
  font-size: 34px;
  line-height: 38px;
  color: #767473;
}

@media (min-width: 320px) and (max-width: 760px) {
  .half {
    width: 100%;
  }
  h4 {
    font-size: 25px !important;
    line-height: 28px !important;
  }
}
</style>
