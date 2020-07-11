<template>
  <div class="container" :class="$mq">
    <div class="col-md-8 col-md-offset-2 ml-auto mr-auto">
      <div class="section-header text-center">
        <h3 class="bio-heading py-5">
          Please enter your address details so that we could send you the gift.
        </h3>
      </div>
    </div>
    <div class="">
      <el-form
        ref="ruleForm"
        :rules="rules"
        class="rounded pt-4 px-3 pb-2 mx-auto border shadow order-form ruleForm"
        :model="form"
        label-width="120px"
        label-position="top"
      >
        <el-form-item label="Fullname" prop="name" status-icon>
          <el-input v-model="fullname" placeholder="Elon Mask"></el-input>
        </el-form-item>
        <el-form-item label="Email address" prop="email">
          <el-input v-model="email" placeholder="elon@mask.com"></el-input>
        </el-form-item>
        <el-form-item label="Street Address 1" prop="address1">
          <el-input
            v-model="address1"
            placeholder="Cambridge St., 29, 2"
          ></el-input>
        </el-form-item>
        <el-form-item label="Street Address 2" prop="address2">
          <el-input
            v-model="address2"
            placeholder="Cambridge St., 29, 2"
          ></el-input>
        </el-form-item>
        <el-form-item label="City" prop="city">
          <el-input v-model="city" placeholder="Chicago"></el-input>
        </el-form-item>
        <el-form-item label="Zip" prop="zip">
          <el-input v-model="zip" placeholder="433512"></el-input>
        </el-form-item>
        <el-form-item label="State" prop="state">
          <el-input v-model="state" placeholder="California"></el-input>
        </el-form-item>
        <el-form-item label="Phone for mail service" prop="phone">
          <el-input
            v-model="phone"
            placeholder="+08382229999"
            @blur="checkProgress"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            style="margin-top: 30px; width: 100%;"
            type="success"
            @click="onSubmit"
            >GET A GIFT</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orderId: {},
    firstForm: {},
  },
  data() {
    const validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback()
        return
      } else if (
        !value.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im)
      ) {
        callback(new Error('Phone is wrong formated'))
      }
      callback()
    }
    return {
      form: {
        name: '',
        email: '',
        state: '',
        address1: '',
        address2: '',
        city: '',
        zip: '',
        phone: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Please input your Fullname!',
            trigger: 'change',
          },
        ],
        email: [
          {
            required: true,
            message: 'Please input your email!',
            trigger: 'change',
          },
        ],
        state: [
          {
            required: true,
            message: 'Please input your State!',
            trigger: 'change',
          },
        ],
        city: [
          {
            required: true,
            message: 'Please input your City!',
            trigger: 'change',
          },
        ],
        zip: [
          {
            required: true,
            message: 'Please input your City!',
            trigger: 'change',
          },
        ],
        address1: [
          {
            required: true,
            message: 'Please input your Address!',
            trigger: 'change',
          },
        ],
        address2: [
          {
            required: true,
            message: 'Please input your Address!',
            trigger: 'change',
          },
        ],
        phone: [{ validator: validatePhone, trigger: 'change' }],
      },
    }
  },
  computed: {
    fullname: {
      get() {
        return this.$store.state.inputs.fullname
      },
      set(newValue) {
        this.form.name = newValue
        this.$store.commit('setInput', { field: 'fullname', data: newValue })
      },
    },
    email: {
      get() {
        return this.$store.state.inputs.email
      },
      set(newValue) {
        this.form.email = newValue
        this.$store.commit('setInput', { field: 'email', data: newValue })
      },
    },
    address1: {
      get() {
        return this.$store.state.inputs.address1
      },
      set(newValue) {
        this.form.address1 = newValue
        this.$store.commit('setInput', { field: 'address1', data: newValue })
      },
    },
    address2: {
      get() {
        return this.$store.state.inputs.address2
      },
      set(newValue) {
        this.form.address2 = newValue
        this.$store.commit('setInput', { field: 'address2', data: newValue })
      },
    },
    state: {
      get() {
        return this.$store.state.inputs.state
      },
      set(newValue) {
        this.form.state = newValue
        this.$store.commit('setInput', { field: 'state', data: newValue })
      },
    },
    city: {
      get() {
        return this.$store.state.inputs.city
      },
      set(newValue) {
        this.form.city = newValue
        this.$store.commit('setInput', { field: 'city', data: newValue })
      },
    },
    zip: {
      get() {
        return this.$store.state.inputs.zip
      },
      set(newValue) {
        this.form.zip = newValue
        this.$store.commit('setInput', { field: 'zip', data: newValue })
      },
    },
    phone: {
      get() {
        return this.$store.state.inputs.phone
      },
      set(newValue) {
        this.form.phone = newValue
        this.$store.commit('setInput', { field: 'phone', data: newValue })
      },
    },
  },
  mounted() {
    this.form.name = this.$store.state.inputs.fullname
    this.form.email = this.$store.state.inputs.email
  },
  methods: {
    checkProgress() {
      console.log('kek')
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('endProgress')
        }
        console.log('kok')
      })
    },
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log('submit!')
          this.$emit('nextStep')
          this.$fireDb.ref('/Feed').push({
            name: this.form.name,
            orderId: this.$store.state.inputs.orderId,
            state: this.form.state,
            address: this.form.address,
            phone: this.form.phone,
            time: new Date().getTime(),
          })

          this.$alert('Thank you, NAME!', 'Congratulations!', {
            confirmButtonText: 'OK',
            callback: (action) => {},
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
}
</script>

<style>
.el-form-item__label {
  margin-bottom: 0;
  padding: 0 !important;
}
.finalForm {
  /* width: 600px; */
}

.finalForm.sm {
  width: 100%;
  padding: 0 25px;
}

.ruleForm {
  width: 60%;
}

@media (min-width: 320px) and (max-width: 760px) {
  .ruleForm {
    width: 100%;
  }
}
</style>
