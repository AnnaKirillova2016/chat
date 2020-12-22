<template>
    <div class="p-grid">

      <div class="p-col">

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

      </div>
    </div>
</template>

<script lang="ts">
// import Card from 'primevue/card'
import Chart from 'primevue/chart'
import { mapState } from 'vuex'
// import PanelMenu from 'primevue/panelmenu'

export default {
  components: {
    // Card,
    Chart
  //  PanelMenu
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
      },
      sMenu: [
        {
          label: 'Статистика',
          icon: 'pi pi-chart-bar'
        },
        {
          label: 'Комментарии',
          icon: 'pi pi-comments'
        },
        {
          label: 'Спам',
          icon: 'pi pi-trash'
        },
        {
          label: 'Настройки',
          icon: 'pi pi-id-card'
        },
        {
          label: 'Выход',
          icon: 'pi pi-sign-out'
        }
      ]
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

  .fontPersent
    font-size 100%
</style>
