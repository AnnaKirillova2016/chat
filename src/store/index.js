import { createStore, mapMutations, mapState } from 'vuex'
import Axios from 'axios'

export default createStore({

  state: {
    host: 'http://localhost:9000',
    currList: 'unmoderated',
    profile: null,
    theProfile: {
      email: 'email@example.com',
      firstName: 'Santa',
      lastName: 'Claus',
      status: 'moderator',
      age: '997',
      country: 'Laplandy',
      company: 'New Year Inc.',
      image: 'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
    },
    comments: []
  },
  mutations: {
    mutateProfile (state) {
      state.profile = state.theProfile
    },
    logout (state) {
      state.theProfile = state.profile
      state.profile = null
    }

  },
  actions: {
    login ({ state, commit }, data) {
      if (data.login === 'test' & data.password === 'testtest') {
        commit('mutateProfile')
      } else {
        commit('logout')
      }
    },
    logout ({ state, commit }) {
      commit('logout')
    },
    changePS ({ state, commit }) {
      console.log(state.profile)
    },
    updateProfile ({ state, commit }) {
      console.log('updated')
    },
    async acceptMsg ({ state, commit }, commId) {
      await Axios
        .get(state.host + '/comments/publish/?id=' + commId)
      this.msgByType(state.currList)
    },
    async block ({ state, commit }, commId) {
      console.log(commId)
      await Axios
        .get(state.host + '/comments/delete/?id=' + commId)
        .then(response => {
          console.log(response.data)
        })
    },
    del ({ commit }, commId) {
      console.log(commId)
    },
    regUser ({ commit }, newUser) {
      console.log(newUser)
    },
    async msgByType ({ state, commit }, type) {
      state.currList = type
      await Axios
        .get(state.host + '/comments?companyid=0&status=' + type)
        .then(response => {
          state.comments = response.data.comments
          // console.log(response)
        })
    },
    async getAllMsg ({ state }) {
      await Axios
        .get(state.host + '/comments?companyid=0&status=unmoderated')
        .then(response => {
          state.comments = response.data.comments
          // console.log(response)
        })
    }
  },
  modules: {
  }
})
