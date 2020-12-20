<template>
  <div class="p-d-flex p-jc-center divBg" >
    <div class="p-grid p-align-center">
      <div class="p-col">
    <div class="p-row p-text-center">
     <h1>Авторизация</h1>
    </div>
    <div class="p-row p-jc-center">
      <login class="p-shadow-5 p-m-2 p-p-2" style="width: 300px; background: white; border-radius: 15px"/>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import login from '../components/login.vue'
export default {
  name: 'loginPage',
  components: {
    login
  }
}
</script>

<style lang="stylus">

</style>
