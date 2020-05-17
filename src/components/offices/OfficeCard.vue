<script>
import Office from '@/models/Office'
export default {
  name: 'OfficeCard',
  props: {
    office: {
      type: Office,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imageStyle() {
      let img = require(`@/assets/img/offices/${this.office.image}`)
      return {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
    }
  }
}
</script>

<template>
  <div
    data-test="office-card"
    class=" shadow-md hover:shadow-lg border office-card rounded overflow-hidden"
    :class="{ 'border-borderGrey': !active, 'border-green': active }"
    @click="$emit('select')"
  >
    <div style="grid-area:image" :style="imageStyle"></div>

    <div style="grid-area:address" class="text-sm text-grey pl-4 pt-4">
      {{ office.address }}
    </div>

    <div style="grid-area:city" class="text-2xl font-medium text-black pl-4">
      {{ office.city }}
    </div>

    <div style="grid-area:weather" class="p-4">
      <a
        :href="office.weather.link"
        target="_new"
        rel="noopener"
        class="flex items-center"
      >
        <i :class="`${office.weather.icon} el-icon ml-2 text-darkGrey`"></i>
        <span class="ml-2 text-xl font-medium text-darkGrey">
          {{ office.weather.temperature || '- ' }}º
        </span>
      </a>
    </div>

    <div
      class="flex justify-around items-center text-sm text-darkGrey px-4"
      style="grid-area:facilities"
    >
      <div alt="meeting rooms">
        <i class="el-icon-s-custom el-icon-right ml-2"></i>
        {{ office.employees }} employees
      </div>
      <div alt="meeting rooms">
        <i class="el-icon-s-marketing el-icon-right ml-2"></i>
        {{ office.meetingRooms }} meeting rooms
      </div>
    </div>

    <div class="flex flex-wrap px-4 py-2" style="grid-area:tags">
      <el-tag
        size="mini"
        class="m-1 text-xs"
        v-for="team in office.teams"
        :key="team"
        >{{ team }}</el-tag
      >
    </div>

    <div
      class="flex items-center px-4 py-2 border-t border-borderGrey text-sm"
      style="grid-area:flights"
    >
      <img
        src="@/assets/img/flights.svg"
        alt="flight"
        class="mr-2"
        style="height:20px;width:20px;"
      />

      <template v-if="office.hasFlights()">
        <a
          :href="office.flights.link"
          target="_new"
          rel="noopener"
          class="text-grey hover:text-green"
          >Flight there in {{ office.flights.duration }} starting at
          {{ office.flights.price }}
        </a>
      </template>
      <template v-else>
        <span class="text-grey ">No flights available </span>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.office-card {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 170px 32px 40px 30px 80px 40px;
  grid-template-areas:
    'image image'
    'address  weather'
    'city  weather'
    'facilities facilities'
    'tags tags'
    'flights flights';

  background: white;
  will-change: transform;
  cursor: pointer;
  transition: transform 0.1s ease-in;

  &:hover {
    transform: scale(1.01);
  }
}
</style>
