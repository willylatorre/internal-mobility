import { externalCall } from './request'

export default class WeatherApi {
  constructor() {
    this.baseURL = 'https://dataservice.accuweather.com'
    this.apiKey = process.env.VUE_APP_ACCUWEATHER_API_KEY
  }

  async retrieveOfficesWeatherInfo(offices) {
    let weatherInfo = {}

    await Promise.all(
      offices.map(async office => {
        let weatherInfo = {}
        try {
          let weather = await this.retrieveWeather(office.code)
          weatherInfo = weather[0]
        } catch (e) {
          console.error(e)
        } finally {
          weatherInfo[office.id] = weatherInfo
        }
        return
      })
    )
    return weatherInfo
  }

  retrieveWeather(location) {
    const url = `${this.baseURL}/currentconditions/v1/${location}`
    const params = { apikey: this.apiKey }

    return externalCall({ url, params })
  }
}
