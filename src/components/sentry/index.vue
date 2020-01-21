<template>
  <div>Sentry Test, please open devtool</div>
</template>
<script>
export default {
  created () {
    setTimeout(() => {
      // eslint-disable-next-line
      console.log(func())
    }, 2000)
  }
}
</script>
