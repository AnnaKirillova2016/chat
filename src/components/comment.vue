<template>
  <div class="p-row p-d-flex" style="width: 100%">
  <Panel style="width: 90%">
    <template #header>
      <div class="p-grid p-d-flex" style="width: 100%">
         <div class="p-col p-jc-start" style="font-size: small">
          {{comment.user.first_name}} {{comment.user.last_name}}
         </div>
         <div class="p-col p-text-right">
          {{comment.timestamp}}
         </div>
      </div>
    </template>

    <div class="p-grid p-d-flex">
      <div class="p-row p-d-flex" style="width: 100%">
        {{comment.text}}
      </div>
      <div class="p-row p-d-flex p-jc-end" style="width: 100%">
        <SplitButton class="p-button-success"
                     label="Одобрить"
                     icon="pi pi-check"
                     :model="menuItems"
                     style="width: 20%; height: 80%"
                     @click="acceptComm"
                      />
      </div>
    </div>
  </Panel>
  </div>
</template>

<script>
import Panel from 'primevue/panel'
import SplitButton from 'primevue/splitbutton'
import { mapActions } from 'vuex'
export default {
  name: 'comment',
  props: ['comment'],
  components: {
    Panel,
    SplitButton
    // Menu
  },
  data () {
    return {
      menuItems: [
        {
          label: 'Заблокировать',
          icon: 'pi pi-ban',
          command: () => {
            this.blockMsg()
          }
        },
        {
          label: 'Удалить',
          icon: 'pi pi-trash',
          command: () => this.delMsg()
        }
      ]
    }
  },
  methods: {
    ...mapActions(['acceptMsg', 'del', 'block']),
    acceptComm () {
      this.acceptMsg(this.comment.id)
    },
    delMsg () {
      this.block(this.comment.id)
    },
    blockMsg () {
      this.del(this.comment.id)
    }
  }
}
</script>

<style lang="stylus">
  .p-panel-icons
    width 25px
</style>
