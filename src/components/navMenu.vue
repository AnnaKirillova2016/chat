<template>
<!--<div class="bg">-->
  <div class="p-grid bg">
    <div class="p-col-3"/>
    <div class="p-col" >
      <div class="p-row p-d-flex p-jc-sm-end">
        <Button icon="pi pi-user" label="Профиль" class="p-button-help p-button-outlined p-mr-2" style="background: white; color: #384683"/>
        <Button icon="pi pi-comments" label="Редактор комментариев" class="p-button-help p-button-outlined p-mr-2" style="background: white; color: #384683"/>
        <Button icon="pi pi-sign-out" label="Выход" class="p-button-help p-button-outlined p-mr-2" style="background: white; color: #384683"/>
      </div>
    </div>
  <!--<router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/login">Авторизация</router-link>
  <router-view/>-->
  </div>
<!--</div>-->
</template>

<script>
import Button from 'primevue/button'
export default {
  name: 'navMenu',
  data () {
    return {

    }
  },
  components: {
    Button
  },
  methods: {

  }
}
</script>

<style lang="stylus">
  .bg
    /*background url("https://image.shutterstock.com/image-vector/abstract-purple-pink-cold-streamer-600w-1662426379.jpg")*/
    /*background-size:auto*/
    background #384683
</style>
