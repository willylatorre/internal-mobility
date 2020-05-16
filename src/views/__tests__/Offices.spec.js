import Offices from '../Offices.vue'
import Vue from 'vue'
import { mount } from '@vue/test-utils'

describe('Offices view tests', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Offices, createComponentMocks())
  })

  it('It mounts correctly', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('It selects the destination office', async () => {
    wrapper.find('[data-test=office-card]').trigger('click')
    await Vue.nextTick()
    expect(wrapper.vm.destinationOffice).not.toBe(null)
    expect(wrapper.vm.destinationOffice.id).not.toBe(null)
  })

  it('It disables continue button until an office is selected', async () => {
    expect(wrapper.find('[data-test=cta-button]').attributes()).toHaveProperty(
      'disabled'
    )
    wrapper.find('[data-test=office-card]').trigger('click')
    await Vue.nextTick()
    expect(
      wrapper.find('[data-test=cta-button]').attributes()
    ).not.toHaveProperty('disabled')
  })

  it('It prompts the user with a confirmation popup is selected', async () => {
    wrapper.find('[data-test=office-card]').trigger('click')
    await Vue.nextTick()
    wrapper.find('[data-test=cta-button]').trigger('click')
    await Vue.nextTick()

    expect(wrapper.find('[data-test=offices-dialog]').isVisible()).toBe(true)
  })
})
