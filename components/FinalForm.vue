<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Fullname">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Email address">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="State">
        <el-input v-model="form.state"></el-input>
      </el-form-item>
      <el-form-item label="Address">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="Phone for mail service">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">GET A GIFT</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    orderId: {},
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        state: '',
        address: '',
        phone: '',
      },
    }
  },
  methods: {
    onSubmit() {
      this.$alert('Thank you, NAME!', 'Congratulations!', {
        confirmButtonText: 'OK',
        callback: (action) => {
          this.$message({
            type: 'info',
            message: `action: ${action}`,
          })
        },
      })
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
    },
  },
}
</script>

<style lang=""></style>
