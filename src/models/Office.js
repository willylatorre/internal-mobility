import { mapWeather } from '@/mappers/weatherMapper'
import { mapFlights } from '@/mappers/flightMapper'

export default class Office {
  constructor({
    id,
    city,
    weatherCode,
    flightCode,
    address,
    employees,
    meetingRooms,
    image,
    teams
  } = {}) {
    this.id = id
    this.address = address
    this.city = city
    this.image = image
    this.weatherCode = weatherCode
    this.flightCode = flightCode
    this.employees = employees
    this.meetingRooms = meetingRooms
    this.teams = teams
    this.weather = {}
    this.flights = {}
  }

  setWeatherInfo(weatherInfo) {
    this.weather = mapWeather(weatherInfo)
  }

  setFlightsInfo(flightsInfo) {
    this.flights = mapFlights(flightsInfo)
  }

  hasFlights() {
    return !!Object.keys(this.flights).length
  }
}
