<template>
  <section class="container">
    <div class="main">
      <el-row
        :type="$mq !== 'sm' ? 'flex' : ''"
        justify="center"
        :gutter="$mq !== 'sm' ? 100 : 0"
        style="width: 100%;"
      >
        <el-col
          :span="$mq !== 'sm' ? 12 : 24"
          style="
            justify-content: center;
            display: flex;
            align-items: center;
            flex-direction: column;
          "
        >
          <div class="main__text">
            <h2>Thank you for supporting us!</h2>
            <h3>
              Share your honest experience about our Product and get a FREE
              Gift. NO credit card required, NO shipping charges, NO hidden
              fees.
            </h3>
          </div>
        </el-col>
        <el-col :span="$mq !== 'sm' ? 12 : 24">
          <div class="form">
            <h4>Fill out the form</h4>
            <h5 style="font-weight: 200;">to receive a FREE product</h5>
            <el-form
              ref="ruleForm"
              :model="form"
              label-width="120px"
              label-position="top"
              :rules="rules"
              style="width: 100%; margin-top: 30px;"
            >
              <el-form-item prop="name">
                <el-input v-model="fullname" placeholder="Fullname"></el-input>
              </el-form-item>
              <el-form-item prop="email">
                <el-input
                  v-model="email"
                  placeholder="Email Address"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="success" style="width: 100%;" @click="onSubmit"
                  >CLAIM A GIFT</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    const validateEmail = (rule, value, callback) => {
      const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
      if (!value.match(re)) {
        callback(new Error('Email is wrong formated'))
      }
      callback()
    }
    return {
      form: {
        name: '',
        email: '',
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
          { validator: validateEmail, trigger: 'change' },
        ],
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
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('nextStep', this.form)
        } else {
          console.log('error submit!!')
          return false
        }
      })
      //   console.log('submit!')
    },
  },
}
</script>

<style>
.main {
  margin: 0 !important;
}

.main__text {
  color: white !important;
}

.main__text h2 {
  line-height: 1.2;
  font-size: 48px;
  font-weight: 500;
  color: white;
}

.main__text h3 {
  line-height: 1.5;
  padding-top: 20px;
  font-size: 24px;
  font-weight: 300;
}

.form {
  /* margin-left: 5%; */
  background-color: rgba(15, 15, 15, 0.45);
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  border-radius: 5px;
  padding-top: 40px;
  padding-left: 40px;
  padding-bottom: 40px;
  border-top-width: 2;
  border-right-width: 2;
  border-bottom-width: 2;
  border-left-width: 2;
  border-top-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  width: 33vw;
  max-width: 400px;
  padding-right: 40px;
  color: white;
}

@media (min-width: 320px) and (max-width: 760px) {
  .main__text {
    margin: 60px 0;
  }

  .main__text h3 {
    font-size: 18px;
  }

  .form {
    margin-right: 0;
    width: 100%;
  }
}
</style>
