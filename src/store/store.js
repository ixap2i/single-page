import { createStore, mapMutations } from 'vuex'
import createPersistedState from "vuex-persistedstate";
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
      plugins: [createPersistedState()],
    }
  },
  methods: {
    ...mapMutations(['embedObj'], [REQUESTED]),
  }
})
