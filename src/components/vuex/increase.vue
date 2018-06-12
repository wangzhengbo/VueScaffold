<template>
  <div>
    <h1>Vuex Increase Demo</h1>
    <router-link to="/vuex/decrease">Vuex Decrease Demo</router-link>
    <div>
      Count: {{ count }}
    </div>
    <div>
      $store.state.counter.count: {{ $store.state.counter.count }}
    </div>
    <button @click="increase(1)">加1</button>
    <button @click="increase(2)">加2</button>
    <button @click="asyncIncrease(1)">异步加1</button>
    <button @click="asyncIncrease(2)">异步加2</button>
    <div>
      mapGetters: double count -> {{ doubleCount }}
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      count (state) {
        return state.counter.count
      }
    }),
    ...mapGetters(['doubleCount'])
  },
  methods: {
    increase (count) {
      this.$store.dispatch('increaseCount', count)
    },
    asyncIncrease (count) {
      this.$store.dispatch('asyncIncreaseCount', count)
    }
  }
}
</script>
