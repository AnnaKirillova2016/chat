<template>
  <div class="p-d-flex p-jc-center divBg" >
    <div class="p-grid p-align-center">
      <div class="p-col">
        <div class="p-row p-text-center">
          <h1>Регистрация</h1>
        </div>
        <div class="p-row p-jc-center">
          <registration class="p-shadow-5 p-m-2 p-p-2" style="width: 315px; background: white; border-radius: 15px"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import registration from '../components/registration.vue'
export default {
  name: 'RegPage',
  components: {
    registration
  }
}
</script>

<style scoped>

</style>
