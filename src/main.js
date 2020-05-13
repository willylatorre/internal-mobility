import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionApi from '@vue/composition-api'
import FullWidthWrapper from '@/components/common/FullWidthWrapper'
import { Button, Select, Input } from 'element-ui'

// Styles
import 'element-ui/lib/theme-chalk/index.css'
import './assets/scss/tailwind.css'
import './assets/scss/app.scss'

Vue.use(VueCompositionApi)

// Custom components
Vue.use(Button)
Vue.use(Select)
Vue.use(Input)
Vue.component('fw-wrapper', FullWidthWrapper) // Wrapper component to keep things centered

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
