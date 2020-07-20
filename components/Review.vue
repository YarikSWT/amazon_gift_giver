<template>
  <section name="review">
    <div class="container">
      <div class="content">
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-lg-4">
            <img src="~/assets/img/FEEDBACK.png" alt="" class="w-100" />
          </div>
        </div>
      </div>
      <div class="content text-center my-3 thanks">
        <h1 class="font-weight-bolder mt-0">We’d love your Feedback...</h1>
        <p>
          We’d love to know how was your experience with our Product, please
          share it with us.
        </p>
      </div>
      <div class="row">
        <div class="col-12">
          <el-form>
            <el-form-item>
              <el-input
                v-model="review"
                type="textarea"
                style="min-height: 200px; height: 200px;"
                :rows="6"
                :autosize="{ minRows: 2, maxRows: 4 }"
                placeholder="Please input"
              >
              </el-input>
            </el-form-item>
            <el-form-item>
              <div class="d-flex justify-content-center">
                <el-button
                  type="success"
                  class="btn btn-green order-btn w-50"
                  :disabled="form.review.length === 0"
                  @click="onSubmit"
                >
                  Save & Next
                </el-button>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Revie',
  data() {
    return {
      form: {
        review: '',
      },
    }
  },
  computed: {
    review: {
      get() {
        return this.$store.state.inputs.review
      },
      set(newValue) {
        this.form.review = newValue
        this.$store.commit('setInput', { field: 'review', data: newValue })
      },
    },
  },
  methods: {
    onSubmit() {
      this.$emit('nextStep', this.review)
    },
  },
}
</script>

<style>
@media (min-width: 320px) and (max-width: 760px) {
}
</style>
