<template>
  <div class="ui-component">
    <ui-button size="big" @click="onClick('big')">size: big</ui-button>
    <ui-button size="medium" @click="onClick('medium')">size: medium</ui-button>
    <ui-button size="small" @click="onClick('small')">size: small</ui-button>
    <ui-button size="big" disabled @click="onClick('big')">size: big disabled</ui-button>
    <ui-button size="medium" disabled @click="onClick('medium')">size: medium disabled</ui-button>
    <ui-button size="small" disabled @click="onClick('small')">size: small disabled</ui-button>

    <div class="container">
      Input Without Label: {{ value1 }}
      <ui-input v-model="value1" />
    </div>

    <div class="container">
      Input Without Label: {{ value2 }}
      <ui-input v-model="value2" label="名称" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value1: '',
      value2: ''
    }
  },
  methods: {
    onClick (size) {
      alert(size)
    }
  }
}
</script>
<style lang="less" scoped>
  .ui-component {
    > .container {
      margin: 30px 0;
    }
  }
</style>
