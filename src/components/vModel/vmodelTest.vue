<template>
  <div>
    Hello:
    <input :value="value" @input="$emit('input', arguments[0].target.value)">
    <!-- <input :value="value" @input="$emit('input', arguments[0])"> -->
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String
    }
  }
}
</script>
