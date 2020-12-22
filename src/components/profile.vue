<template>
  <div class="p-grid p-d-flex p-jc-center">
    <div class="p-row p-d-flex p-jc-center">
      <img alt="user header" :src="profile.image" style="width: 70%">
    </div>
    <div class="p-grid">
      <div class="p-col">
    <div class="p-row p-d-flex p-jc-center card p-mt-3">
      <div class="p-inputgroup p-mr-2">
        <span class="p-float-label">
          <InputText id="name" class="p-input p-inputtext-sm" v-model="profile.firstName"/>
          <label for="name">Имя</label>
        </span>
        <Button icon="pi pi-pencil"/>
      </div>
      <div class="p-inputgroup">
        <span class="p-float-label">
          <InputText id="lastName" class="p-input p-inputtext-sm" v-model="profile.lastName"/>
          <label for="lastName">Фамилия</label>
        </span>
        <Button icon="pi pi-pencil"/>
      </div>
    </div>
    <div class="p-row p-d-flex p-jc-center card p-mt-3">
      <div class="p-inputgroup p-mr-2">
        <span class="p-float-label">
          <InputText id="email" class="p-input p-inputtext-sm" v-model="profile.email"/>
          <label for="email">Email</label>
        </span>
        <Button icon="pi pi-pencil"/>
      </div>
      <div class="p-inputgroup">
        <span class="p-float-label">
          <InputText id="password" class="p-input p-inputtext-sm" type="password" v-model="profile.password"/>
          <label for="password">Пароль</label>
        </span>
        <Button icon="pi pi-pencil"/>
      </div>
    </div>
        <div class="p-row p-mt-3">
          <div class="p-inputgroup">
            <span class="p-float-label">
            <InputText id="company" class="p-input p-inputtext-sm" v-model="profile.company"/>
              <label for="company">Компания</label>
            </span>
            <Button icon="pi pi-pencil"/>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'profile',
  components: {
    Button,
    InputText
  },
  computed: {
    ...mapState(['profile'])
  },
  methods: {
    // ...mapActions([''])
  }
}
</script>

<style scoped>

</style>
