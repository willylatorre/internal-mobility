import { externalCall } from './request'
import format from 'date-fns/format'

export default class FlightsApi {
  constructor() {
    this.baseURL = 'https://api.skypicker.com'
  }

  async retrieveFlightsInfo({ currentOfficeCode, offices, date }) {
    let officeInfo = {}
    const flyFrom = currentOfficeCode
    const dateFrom = format(date, 'dd/MM/yyyy')

    await Promise.all(
      offices.map(async office => {
        let flightInfo = {}

        try {
          let result = await this.retrieveFlight({
            flyFrom,
            to: office.code,
            dateFrom
          })

          flightInfo = result.data[0] // Let's just get the first one
        } catch (e) {
          console.error(e)
        } finally {
          officeInfo[office.id] = flightInfo
        }
      })
    )
    return officeInfo
  }

  retrieveFlight({ flyFrom, to, dateFrom }) {
    const url = `${this.baseURL}/flights?dateFrom=${dateFrom}` // we skip encoding the date as the api doesn't handle well 05/06/2020 endoded to 05%2F06%2F2020
    const params = {
      flyFrom,
      to,
      one_for_city: 1, //cheapest possible for the city
      one_per_date: 1, // cheapest possible for that date
      max_stopovers: 0, // no stops
      partner: 'picky',
      v: 3
    }
    return externalCall({ url, params })
  }
}
