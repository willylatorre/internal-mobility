import { createInstance } from '../useEmployeeForm'
import App from '@/App'
import { mount } from '@vue/test-utils'
import addDays from 'date-fns/addDays'

describe('UseEmployeeForm tests', () => {
  beforeAll(() => {
    // We need vue-composition to have been initialized
    mount(App, createComponentMocks(true))
  })

  it('It generates an instance', () => {
    let a = createInstance()
    expect(a).toHaveProperty('employeeId')
  })

  it('It has the earliest date a week from now', () => {
    let a = createInstance()
    let aWeekFromNow = addDays(new Date(), 7)
    expect(a.date.value).toEqual(aWeekFromNow)
  })
})
