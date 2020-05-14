import { ref, provide, inject } from '@vue/composition-api'

const symb = Symbol.for('neyda.form')

const createFormInstance = () => {
  const employeeId = ref(null)
  const date = ref(new Date())
  const currentOffice = ref(null)
  const destinationOffice = ref(null)

  return {
    employeeId,
    date,
    currentOffice,
    destinationOffice
  }
}

export function provideEmployeeForm() {
  const instance = createFormInstance()
  return provide(symb, instance)
}

export function useEmployeeForm() {
  const form = inject(symb)

  return form || provideEmployeeForm()
}
