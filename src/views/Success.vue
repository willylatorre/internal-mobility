<script>
import { defineComponent } from '@vue/composition-api'
import { useOffices } from '@/components/offices/useOffices'

import CheckAnimation from '@/components/common/CheckAnimation'

export default defineComponent({
  name: 'Success',
  setup() {
    const { destinationOffice } = useOffices()
    return {
      destinationOffice
    }
  },
  components: {
    CheckAnimation
  }
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full">
    <CheckAnimation />

    <h1 class="text-xl lg:text-2xl font-medium text-black my-4">
      Your request has been sucessfully proccessed
    </h1>
    <p class=" max-w-block my-2">
      Thank you very much for your request. Here at
      <span class="highlight"> neyda </span> we encourage traveling to our other
      offices. We do believe that it's the best way to gasp our culture and
      learn from the other teams.
    </p>
    <p class=" max-w-block my-2">
      Your request hass been proccessed and you will be contacted in the
      following days by our People's Team :)
    </p>

    <div class="border border-borderGrey my-4 p-4">
      <h3 class="font-medium text-darkGrey mb-3">
        Here are some useful facts about
        <strong>{{ destinationOffice.city }}</strong>
      </h3>

      <div class="flex items-center py-2 hover:text-green">
        <img
          src="@/assets/img/flights.svg"
          alt="flight"
          class="mr-2"
          style="height:20px;width:20px;"
        />

        <template v-if="destinationOffice.hasFlights()">
          <a :href="destinationOffice.flights.link" target="_new" rel="noopener"
            >Flight there in {{ destinationOffice.flights.duration }} starting
            at
            {{ destinationOffice.flights.price }}
          </a>
        </template>
        <template v-else>
          <span>No flights available </span>
        </template>
      </div>

      <div class="flex items-center py-2 flex-wrap ">
        <img
          :src="destinationOffice.weather.icon"
          width="20"
          height="20"
          :alt="destinationOffice.weather.iconDescription"
        />
        <span class="ml-2 ">
          Current temperature is {{ destinationOffice.weather.temperature }}º
        </span>
      </div>
    </div>
  </div>
</template>
