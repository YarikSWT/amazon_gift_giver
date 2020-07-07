<template>
  <div class="main">
    <el-row :gutter="$mq !== 'sm' ? 100 : 0" style="width: 100%;">
      <el-col :span="$mq !== 'sm' ? 12 : 24">
        <div class="main__text">
          <h2>Thank you for supporting us!</h2>
          <h3>
            Share your honest experience about our Product and get a FREE Gift.
            NO credit card required, NO shipping charges, NO hidden fees.
          </h3>
        </div>
      </el-col>
      <el-col :span="$mq !== 'sm' ? 12 : 24">
        <div class="form">
          <h4>Fill out the form</h4>
          <h5 style="font-weight: 200;">to receive a FREE product</h5>
          <el-form
            ref="form"
            :model="form"
            label-width="120px"
            label-position="top"
            style="width: 100%; margin-top: 30px;"
          >
            <el-form-item>
              <el-input v-model="form.name" placeholder="Fullname"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="form.email"
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
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      this.$emit('nextStep', this.form)
    },
  },
}
</script>

<style>
.main {
  margin: 0 !important;
}

.main__text {
  color: white;
}

.main__text h1 {
  line-height: 1.2;
  font-size: 48px;
  font-weight: 500;
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

@media (min-width: 320px) and (max-width: 480px) {
  .main__text {
    margin: 60px 0;
  }

  .form {
    margin-right: 0;
    width: 100%;
  }
}
</style>
