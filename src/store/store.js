import { createStore, mapMutations, mapActions } from 'vuex'
import { REQUESTED } from './mutation-types.js'


export const store = createStore({
  modules: {
    embedObj: {
      namespaced: true,
      state () {
        return {
          requested: false,
          embedObj: {}
        }
      },
      mutations: {
        [REQUESTED] (state, val) {
          state.requested = true
          state.embedObj = val
        }
      },
    }
  },
  methods: {
    ...mapMutations(['embedObj'], [REQUESTED]),
  }
})
