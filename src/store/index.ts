import { createStore, mapMutations, mapState } from 'vuex'

export default createStore({
  state: {
    profile: {},
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
    comments: [
      {
        user: 'Killer666',
        timestamp: '12:23 02.01.2022',
        text: 'тест1',
        id: '1',
        isNew: true
      },
      {
        user: 'Nagibator9000',
        timestamp: '12:23 04.01.2022',
        text: 'text in english',
        id: '2',
        isNew: false
      },
      {
        user: 'Кондратий Колосяд',
        timestamp: '12:47 02.01.2022',
        text: 'дайте два',
        id: '3',
        isNew: false
      },
      {
        user: 'Федот',
        timestamp: '12:23 19.01.2022',
        text: 'Ищу с перламутровыми пугавицами',
        id: '4',
        isNew: true
      }
    ]
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
    },
    changePS ({ state, commit }) {
      console.log(state.profile)
    },
    updateProfile ({ state, commit }) {
      console.log('updated')
    },
    acceptMsg (commId) {
      console.log(commId)
    },
    block (commId) {
      console.log(commId)
    },
    del (commId) {
      console.log(commId)
    },
    regUser (newUser) {
      console.log(newUser)
    }
  },
  modules: {
  }
})
