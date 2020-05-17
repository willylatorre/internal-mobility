<script>
import { defineComponent, computed, ref } from '@vue/composition-api'
import { useEmployeeForm } from '@/components/core/useEmployeeForm'
import { useOffices } from '@/components/offices/useOffices'

import EmployeeNumberInput from '@/components/core/EmployeeNumberInput'
import EmployeeRelocationDate from '@/components/core/EmployeeRelocationDate'
import EmployeeCurrentLocationSelect from '@/components/core/EmployeeCurrentLocationSelect'
import CTABar from '@/components/common/CTABar'

export default defineComponent({
  name: 'Home',
  setup(props, ctx) {
    const { retrieveAdditionalData, currentOffice } = useOffices()
    const { date, employeeId } = useEmployeeForm()


    const loading = ref(false)

    const allFieldsFilled = computed(
      () => !!(currentOffice.value && date.value && employeeId.value)
    )

    const nextStep = async () => {
      loading.value = true
      await retrieveAdditionalData(date.value)
      loading.value = false
      ctx.root.$router.push('offices')
    }

    return {
      loading,
      currentOffice,
      allFieldsFilled,
      nextStep
    }
  },
  components: {
    CTABar,
    EmployeeNumberInput,
    EmployeeRelocationDate,
    EmployeeCurrentLocationSelect
  }
})
</script>

<template>
  <div class="home grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 pb-8">
    <div class="flex justify-center items-start p-4">
      <img
        class="rounded max-w-image max-h-imageSmall lg:max-h-image"
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

      <CTABar :loading="loading" :disabled="!allFieldsFilled" @next="nextStep">
        <template #button>
          Continue to the next step
          <i class="el-icon-arrow-right el-icon-right ml-2"></i>
        </template>
      </CTABar>
    </div>
  </div>
</template>
