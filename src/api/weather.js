import { externalCall } from './request'

export default class WeatherApi {
  constructor() {
    this.baseURL = 'https://api.openweathermap.org/data/2.5'
    this.apiKey = process.env.VUE_APP_OPENWEATHER_KEY
  }

  async retrieveOfficesWeatherInfo(offices) {
    let url = `${this.baseURL}/group`

    let params = {
      id: offices.map(o => o.code).join(','),
      units: 'metric',
      appid: this.apiKey
    }

    let weatherInfo = {}
    try {
      let { list } = await externalCall({ url, params })

      let resultsMap = list.reduce((_map, _item) => {
        _map[_item.id] = _item
        return _map
      }, {})

      weatherInfo = offices.reduce((info, office) => {
        info[office.id] = resultsMap[office.code]
        return info
      }, {})

      // list.forEach(result => {
      //   let _office = offices.find(o => o.code === result.id)
      //   weatherInfo[_office.id] = result
      // })
    } catch (err) {
      console.error(err)
    }

    return weatherInfo
  }
}
