<template>
  <div class="p-grid">
    <div class="p-col">
      <div class="p-row">
        <div class="p-field">
          <label for="username">Логин</label>
          <InputText id="username" type="text" v-model="user.login" class="loginField"/>
        </div>
      </div>
      <div class="p-row">
        <div class="p-field">
          <label for="password">Пароль</label>
          <Password id="password" type="password" v-model="user.password" class="loginField"/>
        </div>
      </div>
      <div class="p-row">
        <div class="p-grid">
          <div class="p-col">
            <div class="p-field-checkbox">
              <Checkbox id="binary" v-model="checked" :binary="true" class="btnLogin"/>
              <label for="binary">Запомнить</label>
            </div>
          </div>
          <div class="p-col">
            <a href="#" >Забыл пароль?</a>
          </div>
        </div>
      </div>
      <div class="p-row p-d-flex p-jc-sm-end">
        <Button class="p-mr-2" @click="signIn" style="border-radius: 7px">Войти</Button>
        <Button style="border-radius: 7px" @Click="reg">Регистрация</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Checkbox from 'primevue/checkbox'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'login',
  components: {
    Button,
    InputText,
    Password,
    Checkbox
  },
  data () {
    return {
      user: {
        login: '',
        password: ''
      },
      checked: false
    }
  },
  computed: {
    ...mapState(['profile'])
  },
  methods: {
    ...mapActions(['login']),
    signIn () {
      this.login(this.user)
      if (this.profile) {
        this.$router.replace('/')
      }
    },
    reg () {
      this.$router.replace('/registration')
    }
  }
}
</script>

<style lang="stylus">
  .btnLogin
    background #384683
  .loginField
    width 100%
    color #384683
</style>
