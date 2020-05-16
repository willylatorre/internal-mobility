import VueRouter from 'vue-router'
import { _routes } from '@/router'
import FullWidthWrapper from '@/components/common/FullWidthWrapper.vue'
import App from '@/App.vue'
import VueCompositionApi from '@vue/composition-api'

import { createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui'

// A helper for creating Vue component mocks
const createComponentMocks = (noParent = false) => {
  const localVue = createLocalVue()
  localVue.use(VueCompositionApi)
  localVue.use(VueRouter)
  localVue.use(ElementUI)

  localVue.component('fw-wrapper', FullWidthWrapper)

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: _routes
  })

  let options = { localVue, router }

  if (!noParent) {
    options.parentComponent = App
  }

  return options
}

global.createComponentMocks = createComponentMocks
