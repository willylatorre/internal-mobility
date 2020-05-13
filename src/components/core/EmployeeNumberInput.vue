<script>
import { defineComponent } from '@vue/composition-api'
import { useEmployeeForm } from '@/components/core/useEmployeeForm'
import TitleHintStep from '@/components/common/TitleHintStep'
export default defineComponent({
  name: 'EmployeeNumberInput',
  components: {
    TitleHintStep
  },
  setup() {
    console.log('HEYY');
    
    const { employeeId } = useEmployeeForm()
      console.log(employeeId);
      
    return {
      employeeId
    }
  }
})
</script>

<template>
  <title-hint-step>
    <template #title>
      1. Employee's number
    </template>

    <template #hint>
      Please, provide your unique employee number to which the request will be
      assigned.
    </template>

    <el-input v-model.number="employeeId" placeholder="Your employee number" />
  </title-hint-step>
</template>
