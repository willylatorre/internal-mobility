<script>
import { defineComponent, computed, ref, onMounted } from '@vue/composition-api'
import { useOffices } from '@/components/offices/useOffices'
import { useEmployeeForm } from '@/components/core/useEmployeeForm'
import format from 'date-fns/format'

export default defineComponent({
  setup() {
    const { currentOffice, destinationOffice } = useOffices()
    const { employeeId, date } = useEmployeeForm()

    const formattedDate = computed(() => format(date.value, 'dd/MM/yyyy'))

    const dialogWidth = ref('50%')

    onMounted(() => {
      dialogWidth.value = window.innerWidth > 1024 ? '30%' : '80%'
    })

    return {
      currentOffice,
      dialogWidth,
      destinationOffice,
      employeeId,
      formattedDate
    }
  }
})
</script>

<template>
  <el-dialog
    data-test="offices-dialog"
    title="Confirm the details"
    visible
    :width="dialogWidth"
  >
    <div>
      <div class="flex justify-between">
        <span> Employee </span>
        <span> {{ employeeId || 123 }} </span>
      </div>

      <div class="flex justify-between">
        <span> Current Office </span>
        <span>
          {{ currentOffice ? currentOffice.city : 'London' }}
        </span>
      </div>
      <div class="flex justify-between">
        <span> Destination Office </span>
        <span>
          {{ destinationOffice ? destinationOffice.city : 'Amsterdam' }}
        </span>
      </div>
      <div class="flex justify-between">
        <span> Relocation Date </span>
        <span> {{ formattedDate }} </span>
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('close')">Cancel</el-button>
      <el-button type="primary" @click="$emit('confirm')">Confirm</el-button>
    </span>
  </el-dialog>
</template>
