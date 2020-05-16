import { createInstance } from '../useOffices'
import App from '@/App'
import { mount } from '@vue/test-utils'
import mockOffices from '@/api/__mocks__/mockOffices'

describe('UseOffices tests', () => {
  let instance
  beforeAll(() => {
    // We need vue-composition to have been initialized
    mount(App, createComponentMocks(true))
  })

  beforeEach(() => {
    instance = createInstance()
  })

  it('It generates an instance', () => {
    expect(instance).toHaveProperty('offices')
    expect(instance).toHaveProperty('currentOffice')
    expect(instance).toHaveProperty('destinationOffice')
    expect(instance).toHaveProperty('otherOffices')
    expect(instance).toHaveProperty('retrieveAdditionalData')
  })

  it('It retrieves correctly the offices', () => {
    expect(instance.offices.value).toHaveLength(mockOffices.length)
  })

  it('It returns the other offices when one selected', () => {
    let offices = mockOffices
    expect(instance.offices.value).toHaveLength(offices.length)

    instance.currentOffice.value = instance.offices.value[0] // London

    expect(instance.otherOffices.value).toHaveLength(offices.length - 1)
    expect(instance.otherOffices.value).not.toContainEqual(
      expect.objectContaining({ id: instance.offices.value[0].id })
    )
  })
})
