import { createStore, mapMutations } from 'vuex'
import { REQUESTED } from './mutation-types.js'

export const store = createStore({
  modules: {
    embedObj: {
      namespaced: true,
      state () {
        return {
          requested: false
        }
      },
      mutations: {
        [REQUESTED] (state) {
          state.requested = true
        }
      }
    }
  },
  methods: {
    ...mapMutations(['embedObj'], [REQUESTED])
  }
})
