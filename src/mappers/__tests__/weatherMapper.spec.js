import { mapWeather } from '../weatherMapper'
import mockWeather from '@/api/__mocks__/mockWeather'

describe('Weather Mapper test', () => {
  let mappedWeather = {}
  beforeEach(() => {
    mappedWeather = mapWeather(mockWeather)
  })
  it('It generates an object with the required keys', () => {
    expect(mappedWeather).toHaveProperty('icon')
    expect(mappedWeather).toHaveProperty('temperature')
  })

  it('It maps correctly the icon', () => {
    expect(mappedWeather.icon).toBe(
      'http://openweathermap.org/img/wn/04d@2x.png'
    )
  })

  it('It maps correctly the temperature', () => {
    expect(mappedWeather.temperature).toBe(18)
  })
})
