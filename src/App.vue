<template>
  <div class="p-grid p-d-flex">
  <div class="p-col-3 p-d-flex" style="padding: 0rem; height: 100vh" v-if="profile === theProfile">
      <nav-menu/>
  </div>
    <div class="p-col">
      <router-view/>
    </div>
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
      this.$router.replace('/Satistic')
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
