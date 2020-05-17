import Office from '../Office'
import mockOffices from '@/api/__mocks__/mockOffices'
import * as FlightMapper from '@/mappers/flightMapper'
import * as WeatherMapper from '@/mappers/weatherMapper'

const originalMapFlights = FlightMapper.mapFlights
const originalMapWeather = WeatherMapper.mapWeather
FlightMapper.mapFlights = jest.fn()
WeatherMapper.mapWeather = jest.fn()

describe('Office tests', () => {
  let office
  let mockOffice

  beforeEach(() => {
    mockOffice = mockOffices[0]
    office = new Office(mockOffice)
    FlightMapper.mapFlights.mockImplementation(originalMapFlights)
    WeatherMapper.mapWeather.mockImplementation(originalMapWeather)
  })

  it('It maps all the objects by default', () => {
    expect(office.id).toEqual(mockOffice.id)
  })

  it('It calls the flightMapper', () => {
    FlightMapper.mapFlights.mockImplementation(() => 1)
    office.setFlightsInfo(1)
    expect(office.flights).toBe(1)
  })

  it('It calls the weatherMapper', () => {
    WeatherMapper.mapWeather.mockImplementation(() => 1)
    office.setWeatherInfo(1)
    expect(office.weather).toBe(1)
  })
})
