import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionApi from '@vue/composition-api'
import FullWidthWrapper from '@/components/common/FullWidthWrapper'
import { Button, Select, Option, Input, DatePicker } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// Styles
import 'element-ui/lib/theme-chalk/index.css'
import './assets/scss/tailwind.css'
import './assets/scss/app.scss'

Vue.use(VueCompositionApi)

// Custom components
locale.use(lang)
Vue.use(Button)
Vue.use(Select)
Vue.use(Input)
Vue.use(DatePicker)
Vue.use(Option)
Vue.component('fw-wrapper', FullWidthWrapper) // Wrapper component to keep things centered

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
