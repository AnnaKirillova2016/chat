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
          <InputText :disabled="editFirstName" id="name" class="p-input p-inputtext-sm" v-model="profile.firstName"/>
          <label for="name">Имя</label>
        </span>
        <Button v-if="editFirstName===true" icon="pi pi-pencil" @click="editFirstName=!editFirstName"/>
        <Button v-if="editFirstName===false" icon="pi pi-check" class="p-button-success" @click="editFirstName=!editFirstName"/>
      </div>
      <div class="p-inputgroup">
        <span class="p-float-label">
          <InputText :disabled="editLastName" id="lastName" class="p-input p-inputtext-sm" v-model="profile.lastName"/>
          <label for="lastName">Фамилия</label>
        </span>
        <Button v-if="editLastName===true" icon="pi pi-pencil" @click="editLastName=!editLastName"/>
        <Button v-if="editLastName===false" icon="pi pi-check" class="p-button-success" @click="editLastName=!editLastName"/>
      </div>
    </div>
    <div class="p-row p-d-flex p-jc-center card p-mt-3">
      <div class="p-inputgroup p-mr-2">
        <span class="p-float-label">
          <InputText :disabled="editEmail" id="email" class="p-input p-inputtext-sm" v-model="profile.email"/>
          <label for="email">Email</label>
        </span>
        <Button v-if="editEmail===true" icon="pi pi-pencil" @click="editEmail=!editEmail"/>
        <Button v-if="editEmail===false" icon="pi pi-check" class="p-button-success" @click="editEmail=!editEmail"/>
      </div>
      <div class="p-inputgroup">
        <span class="p-float-label">
          <InputText :disabled="editPassword" id="password" class="p-input p-inputtext-sm" type="password" v-model="profile.password"/>
          <label for="password">Пароль</label>
        </span>
        <Button v-if="editPassword===true" icon="pi pi-pencil" @click="editPassword=!editPassword"/>
        <Button v-if="editPassword===false" icon="pi pi-check" class="p-button-success" @click="editPassword=!editPassword"/>
      </div>
    </div>
        <div class="p-row p-mt-3">
          <div class="p-inputgroup">
            <span class="p-float-label">
            <InputText :disabled="editCompany" id="company" class="p-input p-inputtext-sm" v-model="profile.company"/>
              <label for="company">Компания</label>
            </span>
            <Button v-if="editCompany===true" icon="pi pi-pencil" @click="editCompany=!editCompany"/>
            <Button v-if="editCompany===false" icon="pi pi-check" class="p-button-success" @click="editCompany=!editCompany"/>
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
  data () {
    return {
      editFirstName: true,
      editLastName: true,
      editEmail: true,
      editCompany: true,
      editPassword: true
    }
  },
  computed: {
    ...mapState(['profile'])
  },
  methods: {
    ...mapActions(['updateProfile', 'changePS']),
    update () {
      this.updateProfile()
    },
    changePassword () {
      this.changePS()
    }
  },
  watch: {
    editFirstName: function (val) {
      if (val === true) {
        this.update()
      }
    },
    editLastName: function (val) {
      if (val === true) {
        this.update()
      }
    },
    editEmail: function (val) {
      if (val === true) {
        this.update()
      }
    },
    editCompany: function (val) {
      if (val === true) {
        this.update()
      }
    },
    editPassword: function (val) {
      if (val === true) {
        this.changePassword()
      }
    }
  }
}
</script>

<style scoped>

</style>
