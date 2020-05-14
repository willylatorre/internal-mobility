<script>
import { defineComponent } from '@vue/composition-api'
import { useEmployeeForm } from '@/components/core/useEmployeeForm'
import TitleHintStep from '@/components/common/TitleHintStep'
import Office from '@/models/Office'

export default defineComponent({
  name: 'EmployeeCurrentLocationSelect',
  components: {
    TitleHintStep
  },
  setup() {
    const { currentOffice } = useEmployeeForm()

    // TODO retrieve from api
    const availableLocations = [
      new Office({ id: 1, city: 'London' }),
      new Office({ id: 2, city: 'Amsterdam' }),
      new Office({ id: 3, city: 'Madrid' })
    ]

    const locationOptions = availableLocations.map(loc => ({
      label: loc.city,
      value: loc
    }))

    return {
      currentOffice,
      locationOptions
    }
  }
})
</script>

<template>
  <title-hint-step>
    <template #title>
      3. Current Office
    </template>

    <template #hint>
      What is your current office location
    </template>

    <el-select
      class="max-w-input"
      v-model="currentOffice"
      value-key="id"
      placeholder="Your current office"
    >
      <el-option
        v-for="location in locationOptions"
        :key="location.value.id"
        :label="location.label"
        :value="location.value"
      >
      </el-option>
    </el-select>
  </title-hint-step>
</template>
