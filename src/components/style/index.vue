<template>
  <div>
    <nonScopedStyleComponent1 />
    <nonScopedStyleComponent2 />
    <scopedStyleComponent1 />
    <scopedStyleComponent2 />
  </div>
</template>
<script>
import nonScopedStyleComponent1 from './nonScopedStyle/component1'
import nonScopedStyleComponent2 from './nonScopedStyle/component2'
import scopedStyleComponent1 from './scopedStyle/component1'
import scopedStyleComponent2 from './scopedStyle/component2'

export default {
  components: {
    nonScopedStyleComponent1,
    nonScopedStyleComponent2,
    scopedStyleComponent1,
    scopedStyleComponent2
  }
}
</script>
