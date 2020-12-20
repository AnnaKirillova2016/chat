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
              <div class="p-mb-2">тип: {{profile.status}}</div>
              <div class="p-mb-2">Возраст: {{profile.age}}</div>
              <div class="p-mb-2">Страна: {{profile.country}}</div>
              <div class="p-mb-2">Компания: {{profile.company}}</div>
            </div>
          </template>
          <template #footer>
            <Button icon="pi pi-pencil" label="Edit" style="background: #384683"/>
  <!--          <Button icon="pi pi-sign-out" label="Exit" class="p-button-danger" style="margin-left: .5em" />-->
          </template>
        </Card>
      </div>
      <div class="p-col">
<!--        <ScrollPanel style="width: 100%; height: 68%">-->
          <div class="p-grid p-jc-center">
         <div class="p-col-9">
          <div class="p-row p-mb-3">
            <div class="p-shadow-3" style="background: white">
              <h2 class="p-my-3 p-text-center">Статистика за месяц</h2>
              <Chart type="pie" :data="chartData"/>
            </div>
          </div>
          <div class="p-row">
            <div class="p-shadow-3" style="background: white">
              <h2 class="p-my-3 p-text-center">Статистика за год</h2>
              <Chart type="line" :data="lineStylesData" />
            </div>
          </div>
         </div>
        </div>
<!--        </ScrollPanel>-->
      </div>
    </div>
</template>

<script lang="ts">
import Button from 'primevue/button'
import Card from 'primevue/card'
import Chart from 'primevue/chart'
import { mapState } from 'vuex'
// import ScrollPanel from 'primevue/scrollpanel'
// import login from '@/components/login.vue'
export default {
  components: {
    Card,
    Button,
    Chart
  },
  data () {
    return {
      chartData: {
        labels: ['Одобрено', 'Новых', 'Отказано'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              '#42A5F5',
              '#ddec35',
              '#9868bb'
            ],
            hoverBackgroundColor: [
              '#64B5F6',
              'rgb(239,255,56)',
              'rgba(152,104,187,0.65)'
            ]
          }
        ]
      },
      lineStylesData: {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        datasets: [
          {
            label: 'Одобрено',
            data: [65, 59, 80, 81, 56, 55, 40, 70, 55, 90, 69, 45],
            fill: false,
            borderColor: '#25b800'
          },
          {
            label: 'Отказано',
            data: [28, 48, 40, 19, 86, 27, 90, 45, 30, 35, 60, 50, 20],
            fill: false,
            borderDash: [5, 5],
            borderColor: '#bb0003'
          }
        ]
      }
    }
  },
  computed: {
    ...mapState(['profile'])
  }
}
</script>
<style lang="stylus">
  body
    background-size 0px
</style>
