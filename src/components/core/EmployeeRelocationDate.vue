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
    const { date, earliestDate } = useEmployeeForm()

    const pickerOptions = {
      disabledDate(time) {
        return time.getTime() <= earliestDate
      }
    }

    return {
      date,
      pickerOptions
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
      Select the desired relocation date. Keep in mind that the earliest date
      should must be 1 week from now at least.
    </template>

    <el-date-picker
      v-model="date"
      type="date"
      placeholder="Pick a date"
      :picker-options="pickerOptions"
    />
  </title-hint-step>
</template>
