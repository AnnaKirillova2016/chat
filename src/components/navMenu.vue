<template>
    <div style="padding: 0rem">
      <Card style="height: 100%; background: rgba(146,135,187,0.84); border-radius: 0px">
        <template #content style="height: 70%">
          <div class="p-d-flex p-flex-column">
            <div class="p-grid">
              <div class="p-col-3 p-d-flex p-as-start">
                <img style="width: 100%; border-radius: 50%" alt="user header" :src="profile.image">
              </div>
              <div class="p-col" style="color: white">
                <div class="p-mb-2 fontPersent">{{profile.lastName}} {{profile.firstName}}</div>
                <div class="p-mb-2 fontPersent">email: {{profile.email}}</div>
                <div class="p-mb-2 fontPersent">Компания: {{profile.company}}</div>
              </div>
            </div>
          </div>
          <PanelMenu :model="sMenu" style="height: 70px; width: 100%"/>
        </template>
      </Card>
    </div>
</template>

<script>
import Card from 'primevue/card'
import { mapActions, mapState } from 'vuex'
import PanelMenu from 'primevue/panelmenu'
export default {
  name: 'navMenu',
  data () {
    return {
      sMenu: [
        {
          label: 'Статистика',
          icon: 'pi pi-chart-bar',
          command: () => this.statistic()
        },
        {
          label: 'Комментарии',
          icon: 'pi pi-comments',
          command: () => this.comments()
        },
        {
          label: 'Настройки',
          icon: 'pi pi-id-card',
          command: () => this.settings()
        },
        {
          label: 'Выход',
          icon: 'pi pi-sign-out',
          command: () => this.exit()
        }
      ]
    }
  },
  components: {
    Card,
    PanelMenu
  },
  computed: {
    ...mapState(['profile'])
  },
  methods: {
    ...mapActions(['logout']),
    exit () {
      this.logout()
      this.$router.replace('/')
    },
    statistic () {
      this.$router.replace('/Satistic')
    },
    comments () {
      this.$router.replace('/workspace')
    },
    settings () {
      this.$router.replace('/profile')
    }
  }
}
</script>

<style lang="stylus">
  .bg
    /*background url("https://image.shutterstock.com/image-vector/abstract-purple-pink-cold-streamer-600w-1662426379.jpg")*/
    /*background-size:auto*/
    background #384683
</style>
