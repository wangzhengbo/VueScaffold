<template>
  <div>
    <el-button @click="onClick">点击我</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    onClick () {
      this.$alert('你好')
    }
  }
}
</script>
