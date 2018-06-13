<template>
  <div>
    <label v-if="label" :value="value" @input="onInput" @click="onLabelClick">{{ label }}</label>
    <input ref="input">
  </div>
</template>
<script>
export default {
  name: 'Input',
  props: {
    label: {
      type: String,
      require: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput () {
      this.$emit('input', this.value)
    },
    onLabelClick () {
      this.$refs.input.focus()
    }
  }
}
</script>
