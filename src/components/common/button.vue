<template>
  <span :class="classList" class="ui-button" @click="onClick">
    <slot />
  </span>
</template>
<script>
const SIZE_SMALL = 'small'
const SIZE_MEDIUM = 'medium'
const SIZE_BIG = 'big'

export default {
  name: 'Button',
  props: {
    size: {
      type: String,
      required: true,
      validator (value) {
        return [SIZE_SMALL, SIZE_MEDIUM, SIZE_BIG].indexOf(value) >= 0
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList () {
      return [`size-${this.size}`, `${this.disabled ? 'disabled' : ''}`]
    }
  },
  methods: {
    onClick () {
      if (!this.disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>
<style lang="less" scoped>
  @background-color: seagreen;

  .ui-button {
    display: inline-block;
    text-align: center;
    color: #fff;

    &.disabled {
      background-color: gray;
    }

    &:not(.disabled) {
      background-color: @background-color;
      cursor: pointer;

      &:active {
        background-color: darken(@background-color, 8%);
      }
    }

    &.size-small {
      padding: 5px 10px;
      font-size: 14px;
      border-radius: 3px;
    }

    &.size-medium {
      padding: 10px 20px;
      font-size: 18px;
      border-radius: 5px;
    }

    &.size-big {
      padding: 15px 30px;
      font-size: 22px;
      border-radius: 7px;
    }
  }
</style>
