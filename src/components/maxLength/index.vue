<template>
  <div>
    <input v-model="test" v-maxlength:test="10">
    {{ 10 - test.length }} Left.
  </div>
</template>
<script>
import Vue from 'vue'
import Maxlength from 'vue_input_maxlength'
Vue.use(Maxlength)

export default {
  data () {
    return {
      test: ''
    }
  }
}
</script>
