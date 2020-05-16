import { mapFlights } from '../flightMapper'
import mockFlights from '@/api/__mock__/mockFlights'

describe('Flight Mapper test', () => {
  let mappedFlight = {}

  beforeEach(() => {
    mappedFlight = mapFlights(mockFlights.data[0])
  })

  it('It generates an object with the required keys', () => {
    expect(mappedFlight).toHaveProperty('duration')
    expect(mappedFlight).toHaveProperty('price')
    expect(mappedFlight).toHaveProperty('link')
  })

  it('It maps correctly the duration', () => {
    expect(mappedFlight.duration).toBe('1h 15m')
  })

  it('It maps correctly the price', () => {
    expect(mappedFlight.price).toContain(40)
  })

  it('It maps correctly the link', () => {
    expect(mappedFlight.link).toBe(
      'https://www.kiwi.com/deep?from=AMS&to=LGW&departure=23-07-2020&flightsId=10e822f548220000f48cae7a_0&price=40&passengers=1&affilid=picky&lang=en&currency=EUR&booking_token=AzD50ezuHE9DQ9DUybAWnMa7uFfWdZ50s3ZVmcSyelvrG8slzQuyRVNmkv_ASFkIMPbEnby2eDTdzm91wVz_iPnDnLMULZzqXATX6zW7-nvmPJzqTkzflFFr7Y6B94Ie0mGGY2Iy_ioid699MQPYAhMXQ9tnswc0Hj9EUVNgxjYbbVcXATwE1SHKn9Rx_brSxjptlbc2enAQ6axkXWpdV3uWn_KMnbGyMVwdVsGAFbrRedN0g1F0uRrQdiBPB5ENcFFHX5pOeVUH6S0mLpeOzVIALCq7LVTw7snzpmeVy3N9Xf90gUIQOlANd2xBBQWHF6ML1dPNwJ8DLnT3IcuP2FSgsKdKcLpTo-FTIa338pNf1mCH5iY2pJuAYW8vN4kBw8H-s4YI8Pp3NI59q-9tJXpwoGGcb1c8xva54nOa-0qx41Ktx30itPXZuYJ25OmQ641B6zHn7G5eTfsj-s9ZbEA78thEz2eCQIXDUconyaKN59yfaFZhWy2g2VA5JoPRbq4Rm8i0u472P8cytPoTO91EfJaKZT0s3s2Q2F7w-4PJApA5X1FBRE84FTMy2oVKJUtsQ0DjAqYFKlFQO2j3lHw=='
    )
  })
})
