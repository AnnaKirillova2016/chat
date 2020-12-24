import { createStore, mapMutations, mapState } from 'vuex'
import Axios from 'axios'

/* interface User {
  id: number,
  first_name: string,
  last_name: string
}
interface Page {
  id: number,
  url: string
}
interface Comment {
  id: number,
  page: Page,
  user: User,
  timestamp: string,
  text: string,
  status: string,
  inportant: boolean
} */

export default createStore({

  state: {
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
    async acceptMsg (commId) {
      await Axios
        .post('http://localhost:9000/comments/publish', {
          id: commId
        })
    },
    async block (commId) {
      await Axios
        .delete('http://localhost:9000/comments/delete/?id=' + commId)
    },
    del (commId) {
      console.log(commId)
    },
    regUser (newUser) {
      console.log(newUser)
    },
    async msgByType ({ state }, type) {
      await Axios
        .get('http://localhost:9000/comments?companyid=0&status=' + type)
        .then(response => {
          state.comments = response.data.comments
          // console.log(response)
        })
    },
    async getAllMsg ({ state }) {
      await Axios
        .get('http://localhost:9000/pagecomments/?companyid=0&url=/test')
        .then(response => {
          state.comments = response.data.comments
          // console.log(response)
        })
    }
  },
  modules: {
  }
})
