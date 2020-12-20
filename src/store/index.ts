import { createStore, mapMutations, mapState } from 'vuex'

export default createStore({
  state: {
    profile: {},
    theProfile: {
      firstName: 'Santa',
      lastName: 'Claus',
      status: 'moderator',
      age: '997',
      country: 'Laplandy',
      company: 'New Year Inc.',
      image: 'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
    }
  },
  mutations: {
    mutateProfile (state) {
      state.profile = state.theProfile
    },
    logout (state) {
      state.profile = {}
    }
  },
  actions: {
    login ({ state, commit }) {
      if (state.profile !== state.theProfile) {
        commit('mutateProfile')
      } else {
        commit('logout')
      }
    },
    logout ({ state, commit }) {
      commit('logout')
    }
  },
  modules: {
  }
})
