import { ref, provide, inject } from '@vue/composition-api'
import addDays from 'date-fns/addDays'

const symb = Symbol.for('neyda.form')

const createFormInstance = () => {
  const employeeId = ref(null)
  const earliestDate = addDays(new Date(), 7)
  const date = ref(earliestDate)

  return {
    employeeId,
    earliestDate,
    date
  }
}

export function provideEmployeeForm() {
  const instance = createFormInstance()
  return provide(symb, instance)
}

export const createInstance = createFormInstance

export function useEmployeeForm() {
  const form = inject(symb)

  return form || createFormInstance()
}
