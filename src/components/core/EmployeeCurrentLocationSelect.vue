<script>
import { defineComponent, computed } from '@vue/composition-api'
import { useOffices } from '@/components/offices/useOffices'
import TitleHintStep from '@/components/common/TitleHintStep'

export default defineComponent({
  name: 'EmployeeCurrentLocationSelect',
  components: {
    TitleHintStep
  },
  setup() {

    const { currentOffice, offices } = useOffices()

    const locationOptions = computed(() =>
      offices.value.map(loc => ({
        label: loc.city,
        value: loc
      }))
    )

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
