<template>
  <div class="finalForm" :v-if="$mq">
    <h1>Fill the form</h1>
    <el-form
      ref="ruleForm"
      :rules="rules"
      :model="form"
      label-width="120px"
      label-position="top"
    >
      <el-form-item label="Fullname" prop="name" status-icon>
        <el-input v-model="form.name" placeholder="Elon Mask"></el-input>
      </el-form-item>
      <el-form-item label="Email address" prop="email">
        <el-input v-model="form.email" placeholder="elon@mask.com"></el-input>
      </el-form-item>
      <el-form-item label="State" prop="state">
        <el-input v-model="form.state" placeholder="California"></el-input>
      </el-form-item>
      <el-form-item label="Address" prop="address">
        <el-input
          v-model="form.address"
          placeholder="Cambridge St., 29, 2"
        ></el-input>
      </el-form-item>
      <el-form-item label="Phone for mail service" prop="phone">
        <el-input
          v-model="form.phone"
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
</template>

<script>
export default {
  props: {
    orderId: {},
    firstForm: {},
  },
  data() {
    const validatePhone = (rule, value, callback) => {
      if (
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
        address: '',
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
        address: [
          {
            required: true,
            message: 'Please input your Address!',
            trigger: 'change',
          },
        ],
        phone: [
          {
            required: true,
            message: 'Please input your Phone!',
            trigger: 'change',
          },
          { validator: validatePhone, trigger: 'blur' },
        ],
      },
    }
  },
  mounted() {
    this.form.name = this.firstForm.name
    this.form.email = this.firstForm.email
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
            orderId: this.orderId,
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
  width: 600px;
}

.finalForm.sm {
  width: 100%;
  padding: 0 25px;
}
</style>
