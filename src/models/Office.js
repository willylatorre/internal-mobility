export default class Office {
  constructor({
    id,
    city,
    weatherCode,
    flightCode,
    address,
    employees,
    meetingRooms,
    tags
  }) {
    this.id = id
    this.address = address
    this.city = city
    this.weatherCode = weatherCode
    this.flightCode = flightCode
    this.employees = employees
    this.meetingRooms = meetingRooms
    this.tags = tags
  }

  setWeatherInfo(weatherInfo) {
    this.weather = weatherInfo
  }

  setFlightsInfo(flightsInfo) {
    this.flights = flightsInfo
  }
}
