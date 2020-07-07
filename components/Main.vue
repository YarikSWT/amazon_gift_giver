<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Fullname">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Email address">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">CLAIM A GIFT</el-button>
      </el-form-item>
    </el-form>
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

<style lang=""></style>
