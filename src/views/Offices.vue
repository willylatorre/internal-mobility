<script>
import { defineComponent, computed, ref } from '@vue/composition-api'
import { useOffices } from '@/components/offices/useOffices'
import OfficeCard from '@/components/offices/OfficeCard'
import CTABar from '@/components/common/CTABar'

export default defineComponent({
  name: 'Home',
  setup(props, ctx) {
    const { otherOffices, destinationOffice } = useOffices()

    const nextStep = () => {
      // retrieveAdditionalData(date.value)
      ctx.root.$router.push('casa')
    }

    const selectOffice = office => {
      destinationOffice.value = office
    }

    const loading = ref(false)
    const disabled = computed(
      () => !(destinationOffice.value && destinationOffice.value.id)
    )

    return {
      selectOffice,
      destinationOffice,
      otherOffices,
      loading,
      disabled,
      nextStep
    }
  },
  components: {
    OfficeCard,
    CTABar
  }
})
</script>

<template>
  <div>
    <h1 class="text-black font-medium text-xl lg:text-2xl">
      <span class="text-green font-medium"> Neyda</span>'s Offices
    </h1>
    <p class="text-darkGrey">
      Please select the desired destination for your relocation
    </p>
    <div class="home grid grid-cols-1 lg:grid-cols-3 gap-4 my-4 mb-8">
      <office-card
        v-for="office in otherOffices"
        :key="office.id"
        :office="office"
        :active="office.id === destinationOffice.id"
        @select="selectOffice(office)"
      >
      </office-card>
    </div>
    <CTABar :loading="loading" :disabled="disabled" @next="nextStep">
      <template #left>
        Selected office:
        <span class="text-black font-medium">
          {{ destinationOffice.city | '- ' }}
        </span>
      </template>

      <template #button>
        Continue to the next step
        <i class="el-icon-arrow-right el-icon-right ml-2"></i>
      </template>
    </CTABar>
  </div>
</template>
