<template>
  <div>
    Redirecting...
  </div>
</template>

<script>
export default {
  layout: 'another',
  name: 'Redirect',
  mounted() {
    console.log(
      'phone',
      this.getQueryVariable('phone', this.$route.query.whatsup)
    )
    // https://amazon-gifter.herokuapp.com/?whatsup=phone=79191646801&text=Здравствуйте,%20Подскажите%20цену%20цветов
    window.location.href =
      'https://api.whatsapp.com/send?' + this.$route.query.whatsup // phone=79191646801&text=Здравствуйте,%20Подскажите%20цену%20цветов
  },
  methods: {
    getQueryVariable(variable, query) {
      const vars = query.split('&')
      for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=')
        if (decodeURIComponent(pair[0]) === variable) {
          return decodeURIComponent(pair[1])
        }
      }
      console.log('Query variable %s not found', variable)
    },
  },
}
</script>
