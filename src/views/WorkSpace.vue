<template>
  <div class="p-grid">
    <div class="p-col">
      <div class="p-row p-d-flex p-jc-center p-mt-3">
        <TabMenu class="p-d-inline-flex" :model="menu"/>
      </div>
      <div class="p-grid p-d-flex p-jc-center p-mt-3" style="width: 100%">
<!--        <div class="p-col p-d-inline-flex">-->
        <Comment
          v-for="comm in comments"
          :key="comm.id"
          :comment="comm"
          class="p-d-flex p-d-flex p-jc-center p-mb-3" style="width: 100%" />
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import TabMenu from 'primevue/tabmenu'
import Comment from '../components/comment.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'WorkSpace',
  components: {
    TabMenu,
    Comment
  },
  data () {
    return {
      menu: [
        {
          label: 'Новые комментарии',
          icon: 'pi pi-inbox',
          command: () => { this.getByType('unmoderated') }
        },
        {
          label: 'Одобренные',
          icon: 'pi pi-check-square',
          command: () => { this.getByType('published') }
        },
        {
          label: 'Заблокированные',
          icon: 'pi pi-ban',
          command: () => { this.getByType('deleted') }
        }
      ]
    }
  },
  computed: {
    ...mapState(['comments'])
  },
  methods: {
    ...mapActions(['msgByType', 'getAllMsg']),
    getByType (type) {
      this.msgByType(type)
    }
  },
  beforeMount () {
    this.getAllMsg()
  }
}
</script>

<style scoped>

</style>
