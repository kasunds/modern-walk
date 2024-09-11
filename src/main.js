import './assets/main.css'
import Axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })
const app = createApp(App)
app.config.globalProperties.$http = Axios
app.use(router)
app.use(vuetify)

app.mount('#app')
