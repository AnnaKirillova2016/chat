<template>
  <div >

    <nav-menu/>

    <homePage/>
  </div>
</template>
<script>
import homePage from '@/views/Home.vue'
import navMenu from '@/components/navMenu'
export default {
  components: {
    homePage,
    navMenu
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
  /*margin-top 60px*/
 /* .bg
    background url("./assets/bg.jpg")
    background-size:100%;*/
</style>
