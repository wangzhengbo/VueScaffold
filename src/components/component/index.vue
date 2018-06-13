<template>
  <div>
    <ui-button size="big" @click="onClick('big')">size: big</ui-button>
    <ui-button size="medium" @click="onClick('medium')">size: medium</ui-button>
    <ui-button size="small" @click="onClick('small')">size: small</ui-button>
    <ui-button size="big" disabled @click="onClick('big')">size: big disabled</ui-button>
    <ui-button size="medium" disabled @click="onClick('medium')">size: medium disabled</ui-button>
    <ui-button size="small" disabled @click="onClick('small')">size: small disabled</ui-button>
  </div>
</template>
<script>
export default {
  methods: {
    onClick (size) {
      alert(size)
    }
  }
}
</script>
