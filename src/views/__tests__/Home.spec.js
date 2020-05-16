import Home from '../Home.vue'
import Vue from 'vue'
import { mount } from '@vue/test-utils'

describe('Home view tests', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Home, createComponentMocks())
  })

  it('It mounts correctly', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('It disables continue button until all data is filled', async () => {
    expect(wrapper.vm.allFieldsFilled).toBe(false)
    expect(wrapper.find('[data-test=cta-button]').attributes()).toHaveProperty(
      'disabled'
    )
    wrapper.find('[data-test=employee-input]').setValue('123')
    expect(wrapper.vm.allFieldsFilled).toBe(false)

    // I am not simulating user interaction with the Select as element-ui has not a very good way of handling it
    // https://github.com/ElemeFE/element/blob/dev/test/unit/specs/select.spec.js
    wrapper.vm.currentOffice = 'London' // anything
    expect(wrapper.vm.allFieldsFilled).toBe(true)
    await Vue.nextTick()
    expect(
      wrapper.find('[data-test=cta-button]').attributes()
    ).not.toHaveProperty('disabled')
  })
})
