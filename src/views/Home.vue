<template>
  <div class="p-grid p-mt-2">
    <div class="p-col-3">
      <Card>
        <template #header>
          <img alt="user header" :src="profile.image">
        </template>
        <template #title>
          {{profile.firstName}} {{profile.lastName}}
        </template>
        <template #content>
          <div class="p-d-flex p-flex-column">
            <div class="p-mb-2">status: {{profile.status}}</div>
            <div class="p-mb-2">age: {{profile.age}}</div>
            <div class="p-mb-2">Country: {{profile.country}}</div>
            <div class="p-mb-2">Company: {{profile.company}}</div>
          </div>
        </template>
        <template #footer>
          <Button icon="pi pi-pencil" label="Edit" style="background: #384683"/>
<!--          <Button icon="pi pi-sign-out" label="Exit" class="p-button-danger" style="margin-left: .5em" />-->
        </template>
      </Card>
    </div>
    <div class="p-col">

    </div>
  </div>
</template>

<script lang="ts">
import Button from 'primevue/button'
import Card from 'primevue/card'
// import login from '@/components/login.vue'
export default {
  components: {
    Card,
    Button
  },
  data () {
    return {
      profile: {
        firstName: 'Santa',
        lastName: 'Claus',
        status: 'moderator',
        age: '997',
        country: 'Laplandy',
        company: 'New Year Inc.',
        image: 'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png'

      }
    }
  }
}
</script>
<style lang="stylus">
  /*body
    background-image url(./src/assets/bg.jpg)*/
</style>
