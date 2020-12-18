<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view/>
    <Calendar v-model="value"/>
  </div>
</template>
<script>
import Calendar from 'primevue/calendar'
export default {
  data () {
    return {
      value: null
    }
  },
  components: {
    Calendar
  }
}
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
