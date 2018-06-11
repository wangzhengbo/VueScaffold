<template>
  <div ref="test" class="jquery">
    我的高度是{{ width }}px, 宽度是{{ height }}px，都是通过jquery获取到的。
  </div>
</template>
<script>
import getJQuery from '@/util'

export default {
  data () {
    return {
      width: '',
      height: ''
    }
  },
  created () {
    setTimeout(async () => {
      const jquery = await getJQuery()
      this.width = jquery(this.$refs.test).width()
    }, 3000)
  },
  mounted () {
    getJQuery().then(jquery => {
      this.height = jquery(this.$refs.test).height()
    })
  }
}
</script>
<style lang="less">
  .jquery {
    width: 300px;
    height: 100px;
    border: 2px solid red;
  }
</style>
