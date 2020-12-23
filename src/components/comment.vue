<template>
  <div class="p-row p-d-flex" style="width: 100%">
  <Panel style="width: 90%">
   <!-- <template #icons>
      <button class="p-panel-header-icon p-link  p-button-success"
              @click="acceptBtn" style="color: green">
        <span class="pi pi-check"></span>
      </button>
      <button class="p-panel-header-icon p-link  p-button-danger"
              @click="declineBtn" style="color: red;%">
        <span class="pi pi-ban"></span>
      </button>
       &lt;!&ndash; <button class="p-panel-header-icon p-link"
                @click="toggle">
          <span class="pi pi-cog"></span>
        </button>
        <Menu ref="commMenu" :model="menuItems" :popup="true" />&ndash;&gt;
    </template>-->
    <template #header>
      <div class="p-grid p-d-flex" style="width: 100%">
         <div class="p-col p-jc-start p-ml-3" style="font-size: small">
          {{comment.user}}
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
