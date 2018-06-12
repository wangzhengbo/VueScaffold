<template>
  <div class="less">
    <span>1</span>
    <span>2</span>
    <span>3</span>
  </div>
</template>
<style lang="less" scoped>
  @background-color: blue;
  @border-width: 2px;

  .less {
    background-color: @background-color;
    border: @border-width + 10px solid yellow;

    > span {
      font-size: 130px;
      color: #0f0;

      &:first-child {
        color: lighten(#0f0, 40%);
      }

      &:last-child {
        color: red;
      }
    }
  }
</style>
