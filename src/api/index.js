import Request from './request'
import OfficesApi from './offices'
import WeatherApi from './weather'
import FlightsApi from './flights'

class ApiClient {
  constructor() {
    this.request = new Request()
  }

  offices() {
    return new OfficesApi(this.request)
  }

  weather() {
    return new WeatherApi()
  }

  flights() {
    return new FlightsApi()
  }
}

export default new ApiClient()
