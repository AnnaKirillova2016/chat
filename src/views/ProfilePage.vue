<template>
  <div class="p-grid p-d-flex p-jc-center p-mt-3" style="width: 100%" >
    <div class="p-row">
      <profile class="p-ml-6" style="width: 80%"/>
    </div>
  </div>
</template>

<script>
import Profile from '../components/profile.vue'
export default {
  name: 'ProfilePage',
  components: {
    Profile
  }
}
</script>

<style scoped>

</style>
