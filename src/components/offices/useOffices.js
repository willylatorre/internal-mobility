import { ref, provide, inject, computed } from '@vue/composition-api'
import api from '@/api'
import Office from '@/models/Office'

const symb = Symbol.for('neyda.offices')

const createOfficesInstance = () => {
  const offices = ref([])
  const currentOffice = ref(null)
  const destinationOffice = ref(new Office())

  const otherOffices = computed(() => {
    if (!currentOffice.value) {
      return offices.value
    }

    return offices.value.filter(office => office.id !== currentOffice.value.id)
  })

  const retrieveOffices = async () => {
    let _offices = await api.offices().all()
    offices.value = _offices
  }

  const retrieveAdditionalData = async date => {
    const [weatherInfo, flightsInfo] = await Promise.all([
      api.weather().retrieveOfficesWeatherInfo(
        otherOffices.value.map(office => ({
          id: office.id,
          code: office.weatherCode
        }))
      ),
      api.flights().retrieveFlightsInfo({
        currentOfficeCode: currentOffice.value.flightCode,
        date,
        offices: otherOffices.value.map(office => ({
          id: office.id,
          code: office.flightCode
        }))
      })
    ])

    otherOffices.value.forEach(office => {
      office.setWeatherInfo(weatherInfo[office.id])
      office.setFlightsInfo(flightsInfo[office.id])
    })
  }

  retrieveOffices()

  return {
    offices,
    currentOffice,
    destinationOffice,
    otherOffices,
    retrieveAdditionalData
  }
}

export function provideOffices() {
  const instance = createOfficesInstance()
  return provide(symb, instance)
}

export function useOffices() {
  const form = inject(symb)

  return form || provideOffices()
}
