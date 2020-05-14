<script>
import { defineComponent } from '@vue/composition-api'
import EmployeeNumberInput from '@/components/core/EmployeeNumberInput'
import EmployeeRelocationDate from '@/components/core/EmployeeRelocationDate'
import EmployeeCurrentLocationSelect from '@/components/core/EmployeeCurrentLocationSelect'

export default defineComponent({
  name: 'Home',
  setup() {},
  components: {
    EmployeeNumberInput,
    EmployeeRelocationDate,
    EmployeeCurrentLocationSelect
  }
})
</script>

<template>
  <div class="home grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div class="flex justify-center">

      <img
        class="rounded max-w-image"
        src="@/assets/img/move.jpg"
        alt="moving"
      />
    </div>

    <div>
      <h1 class="font-medium text-xl mb-2">
        Welcome to <span class="highlight">neyda</span>'s Internal Mobility
        Program (IMP)
      </h1>

      <p>
        You have requested recently a temporary relocation to one of our other
        offices. Please do follow the instructions and if you have any doubs, do
        not hesitate to contact your manager.
      </p>

      <div class="my-6">
        <EmployeeNumberInput />
        <EmployeeRelocationDate />
        <EmployeeCurrentLocationSelect />
      </div>
    </div>
  </div>
</template>
