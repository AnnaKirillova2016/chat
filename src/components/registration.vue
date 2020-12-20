<template>
  <div class="p-grid" style="background-color: white; ">
    <div class="p-row">
      <div class="p-col">
        <span class="p-float-label p-mb-2">
        <InputText id="email" type="text" v-model="newUser.email" class="myField"/>
        <label for="email">e-mail</label>
        </span>
        <span class="p-float-label p-mb-2">
        <Password id="password" type="password" v-model="newUser.password" class="myField"/>
        <label for="password">Пароль</label>
        </span>
        <span class="p-float-label p-mb-2">
        <InputText id="firstName" type="text" v-model="newUser.firstName" class="myField" />
        <label for="firstName">Имя</label>
        </span>
        <span class="p-float-label p-mb-2">
        <InputText id="lastName" type="text" v-model="newUser.lastName" class="myField" />
        <label for="lastName">Фамилия</label>
        </span>
        <div class="p-row p-flex-row p-jc-end">
          <Button label="Зарегистрироваться" class="p-mr-2" style="background: #384683"/>
          <Button @Click="notReg" label="Отмена" style="background: #384683"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Password from 'primevue/password'
export default {
  name: 'registration',
  components: {
    InputText,
    Button,
    Password
  },
  data () {
    return {
      newUser: {
        email: '',
        firstName: '',
        lastName: '',
        image: '',
        password: ''
      }
    }
  },
  methods: {
    notReg () {
      this.$router.replace('/')
    }
  }
}

</script>

<style lang="stylus">
  .myField
    width 100%
</style>
