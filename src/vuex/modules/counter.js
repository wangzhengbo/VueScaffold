const state = {
  count: 0
}

// getters
const getters = {
  doubleCount: state => state.count * 2
}

// actions
const actions = {
  increaseCount ({ commit }, count) {
    commit('increaseCount', count)
  },
  asyncIncreaseCount ({ commit }, count) {
    setTimeout(() => {
      commit('increaseCount', count)
    }, 2000)
  },
  decreaseCount ({ commit }, count) {
    commit('decreaseCount', count)
  },
  asyncDecreaseCount ({ commit }, count) {
    setTimeout(() => {
      commit('decreaseCount', count)
    }, 2000)
  }
}

const mutations = {
  increaseCount (state, count) {
    state.count += count
  },
  decreaseCount (state, count) {
    state.count -= count
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
