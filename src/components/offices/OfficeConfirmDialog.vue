<script>
import { defineComponent, computed } from '@vue/composition-api'
import { useOffices } from '@/components/offices/useOffices'
import { useEmployeeForm } from '@/components/core/useEmployeeForm'
import format from 'date-fns/format'

export default defineComponent({
  setup() {
    const { currentOffice, destinationOffice } = useOffices()
    const { employeeId, date } = useEmployeeForm()

    const formattedDate = computed(() => format(date.value, 'dd/MM/yyyy'))

    return {
      currentOffice,
      destinationOffice,
      employeeId,
      formattedDate
    }
  }
})
</script>

<template>
  <el-dialog title="Confirm the details" visible width="30%">
    <div class="grid grid-cols-2 gap-2">
      <span> Employee </span>
      <span class="text-right"> {{ employeeId || 123 }} </span>

      <span> Current Office </span>
      <span class="text-right">
        {{ currentOffice ? currentOffice.city : 'London' }}
      </span>

      <span> Destination Office </span>
      <span class="text-right">
        {{ destinationOffice ? destinationOffice.city : 'Amsterdam' }}
      </span>

      <span> Relocation Date </span>
      <span class="text-right"> {{ formattedDate }} </span>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('close')">Cancel</el-button>
      <el-button type="primary" @click="$emit('confirm')">Confirm</el-button>
    </span>
  </el-dialog>
</template>