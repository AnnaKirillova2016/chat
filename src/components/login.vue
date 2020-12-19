<template>
  <div>
      <div class="p-fluid">
        <div class="p-mt-2 p-formgroup-inline">
          <div class="p-field">
            <label for="username">Логин</label>
            <InputText id="username" type="text" v-model="value"/>
          </div>
        </div>
        <div class="p-mb-2 p-formgroup-inline">
          <div class="p-field">
            <label for="password">Пароль</label>
            <Password id="password" type="password" v-model="value"/>
          </div>
        </div>
        <div class="p-mb-2 p-formgroup-inline">
          <div class="p-field-checkbox">
            <Checkbox id="binary" v-model="checked" :binary="false" />
            <label for="binary">Запомнить</label>
          </div>
          <a href="#" >Забыл пароль?</a>
        </div>
      </div>
    <div>

      <Button class="p-button-outlined p-mr-2" >Войти</Button>
      <Button class="p-button-outlined" >Регистрация</Button>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Checkbox from 'primevue/checkbox'

export default {
  name: 'login',
  components: {
    Button,
    InputText,
    Password,
    Checkbox

  }
}
</script>

<style lang="stylus">
/*button*/
/*  color:red*/
/*  background : aqua*/
</style>
