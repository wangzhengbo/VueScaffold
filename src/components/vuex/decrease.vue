<template>
  <div>
    <h1>Vuex Decrease Demo</h1>
    <router-link to="/vuex/increase">Vuex Increase Demo</router-link>
    <div>
      Count: {{ count }}
    </div>
    <div>
      $store.state.counter.count: {{ $store.state.counter.count }}
    </div>
    <button @click="decrease(1)">减1</button>
    <button @click="decrease(2)">减2</button>
    <button @click="asyncDecrease(1)">异步减1</button>
    <button @click="asyncDecrease(2)">异步减2</button>
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
    decrease (count) {
      this.$store.dispatch('decreaseCount', count)
    },
    asyncDecrease (count) {
      this.$store.dispatch('asyncDecreaseCount', count)
    }
  }
}
</script>
