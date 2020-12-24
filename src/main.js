import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import 'primevue/resources/themes/md-light-deeppurple/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ToastService)
app.use(PrimeVue, {
  locale: {
    weak: 'Слабый',
    medium: 'Средний',
    strong: 'Сильный'
  }
})
app.mount('#app')
// createApp(App).use(store).use(store).use(router).use(PrimeVue).mount('#app')
