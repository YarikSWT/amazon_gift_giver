<template>
  <div class="">
    <!-- {{ $route.path }}
    {{ $route.path.includes('step') }} -->
    <header v-if="$route.path.includes('step')" class="container">
      <el-progress
        :text-inside="true"
        :stroke-width="26"
        :percentage="progress"
      ></el-progress>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
    }
  },
  created() {
    this.$nuxt.$on('setProgress', (newValue) => {
      this.progress = newValue
    })
  },
}
</script>
<style>
header {
  /* width: 60%; */
  margin: 2% 0;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.btn-green {
  background-color: #56b68b;
  font-size: 2.25rem;
  padding: 0.5rem 1rem;
  font-size: 15px !important;
  padding: 11px 18px !important;
  -webkit-box-shadow: 0 4px 0 #487d65 !important;
  box-shadow: 0 4px 0 #487d65 !important;
  text-transform: uppercase;
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

.el-textarea__inner {
  min-height: 200px !important;
  height: 200px !important;
}

.el-textarea {
  min-height: 200px !important;
  height: 200px !important;
}
</style>
