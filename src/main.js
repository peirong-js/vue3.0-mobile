import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'lib-flexible/flexible.js'
import '@/assets/scss/index.scss'
import 'normalize.css'

createApp(App).use(store).use(router).mount('#app')
