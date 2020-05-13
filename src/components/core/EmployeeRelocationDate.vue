<script>
import { defineComponent } from '@vue/composition-api'
import { useEmployeeForm } from '@/components/core/useEmployeeForm'
import TitleHintStep from '@/components/common/TitleHintStep'
export default defineComponent({
  name: 'EmployeeRelocationDate',
  components: {
    TitleHintStep
  },
  setup() {
    const { date } = useEmployeeForm()

    return {
      date
    }
  }
})
</script>

<template>
  <title-hint-step>
    <template #title>
      2. Relocation's date
    </template>

    <template #hint>
      Select the desired relocation date.
    </template>

    <el-date-picker v-model="date" type="date" placeholder="Pick a date" />
  </title-hint-step>
</template>
