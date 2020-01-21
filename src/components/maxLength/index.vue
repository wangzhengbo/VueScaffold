<template>
  <div>
    value: {{ test }}
    <br>
    use v-model: <input v-model="test" v-maxlength:test="maxLength">
    <br>
    use :valud and @input: <input :value="test" v-maxlength:test="maxLength" @input="onInput(arguments[0])">
    {{ left }} Left.
    <br>
    <input>
  </div>
</template>
<script>
import Vue from 'vue'
import Maxlength from 'vue_input_maxlength'
Vue.use(Maxlength)

export default {
  data () {
    return {
      maxLength: 10,
      test: ''
    }
  },
  computed: {
    length () {
      const r = /[^\x00-\xff]/g // eslint-disable-line
      return this.test.replace(r, 'mm').length
    },
    left () {
      return this.maxLength - this.length
    }
  },
  methods: {
    onInput (e) {
      // console.log('e', e)
      console.log('onInput', e.target.value)
      this.test = e.target.value
      // this.test = e
    }
  }
}
</script>
