import { createStore, mapMutations, mapState } from 'vuex'
import Axios from 'axios'

export default createStore({

  state: {
    host: 'http://localhost:9000',
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
    newComments: [],
    acceptedComments: [],
    blockComments: []

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
    async msgByType ({ state }, type) {
      await Axios
        .get(state.host + '/comments?companyid=0&status=' + type)
        .then(response => {
          state.comments = response.data.comments
          // console.log(response)
        })
      this.getAllMsg()
    },
    async getAllMsg ({ state }) {
      await Axios
        .get(state.host + '/comments?companyid=0&status=unmoderated')
        .then(response => {
          state.newComments = response.data.comments
          // console.log(response)
        })
      await Axios
        .get(state.host + '/comments?companyid=0&status=published')
        .then(response => {
          state.acceptedComments = response.data.comments
          // console.log(response)
        })
      await Axios
        .get(state.host + '/comments?companyid=0&status=deleted')
        .then(response => {
          state.blockComments = response.data.comments
          // console.log(response)
        })
    }
  },
  modules: {
  }
})
