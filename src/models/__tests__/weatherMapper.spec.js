import { mapWeather, mapWeatherIcon } from '../weatherMapper'
import mockWeather from '@/api/__mock__/mockWeather'

describe('Weather Mapper test', () => {
  describe('WeatherMap tests', () => {
    let mappedWeather = {}
    beforeEach(() => {
      mappedWeather = mapWeather(mockWeather[0])
    })
    it('It generates an object with the required keys', () => {
      expect(mappedWeather).toHaveProperty('icon')
      expect(mappedWeather).toHaveProperty('temperature')
      expect(mappedWeather).toHaveProperty('link')
    })

    it('It maps correctly the icon', () => {
      expect(mappedWeather.icon).toBe('el-icon-partly-cloudy')
    })

    it('It maps correctly the temperature', () => {
      expect(mappedWeather.temperature).toBe(13.2)
    })

    it('It maps correctly the link', () => {
      expect(mappedWeather.link).toBe(
        'http://www.accuweather.com/en/gb/london/ec4a-2/current-weather/328328?lang=en-us'
      )
    })
  })

  describe('WeatherIconMap test', () => {
    it('It maps correctly the icon', () => {
      expect(mapWeatherIcon(1)).toBe('el-icon-sunny')
      expect(mapWeatherIcon(17)).toBe('el-icon-lightning')

      expect(mapWeatherIcon(35, true)).toBe('el-icon-sunny')
      expect(mapWeatherIcon(35, false)).toBe('el-icon-moon')
    })
  })
})
