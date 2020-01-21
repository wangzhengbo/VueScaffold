<template>
  <div>
    Value: {{ value }}
    <br>
    <vmodel-test v-model="value" />
  </div>
</template>
<script>
import VmodelTest from './vmodelTest'
export default {
  components: {
    VmodelTest
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>
