<template>
  <div>
  <div v-if="profile === theProfile">
      <nav-menu/>
  </div>
  <router-view/>
  </div>
</template>
<script>
import navMenu from '@/components/navMenu'
import { mapState } from 'vuex'

export default {
  components: {
    navMenu
  },
  computed: {
    ...mapState(['profile', 'theProfile'])
  },
  beforeMount () {
    if (this.profile !== this.theProfile) {
      this.$router.replace('/login')
    } else {
      this.$router.replace('/home')
    }
  }
}
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  /*text-align center*/
  color #2c3e50
  .divBg
    background-image url(./assets/bg.jpg)
    background-size 100%
    height 97vh
  /*margin-top 60px*/
 /* .bg
    background url("./assets/bg.jpg")
    background-size:100%;*/
</style>
