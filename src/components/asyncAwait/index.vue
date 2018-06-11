<template>
  <div>
    {{ message }}
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  async mounted () {
    await this.sleep(2000)
    this.message = '2秒后将看到此信息'

    await this.sleep(4000)
    this.message = '再过4秒后将看到此信息'
  },
  methods: {
    sleep (milliseconds) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, milliseconds)
      })
    }
  }
}
</script>
