<template>
  <p>I'm made with Flow!</p>
</template>

<script>
/* @flow */

// https://alligator.io/vuejs/components-flow/

const randomThing: string = 'Boop!'

export default {
  created () {
    console.log(randomThing * 10)
  }
}
</script>
