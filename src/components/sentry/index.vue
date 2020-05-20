<template>
  <div>Sentry Test, please open devtool</div>
</template>
<script>
import * as Sentry from '@sentry/browser'

export default {
  created () {
    setTimeout(() => {
      // eslint-disable-next-line
      console.log(func())
    }, 2000)

    try {
      // eslint-disable-next-line
      aFunctionThatMightFail()
    } catch (err) {
      Sentry.captureException(err)
    }

    try {
      // eslint-disable-next-line
      anotherFunctionThatMightFail()
    } catch (err) {
      console.error('err', err)
    }
  }
}
</script>
