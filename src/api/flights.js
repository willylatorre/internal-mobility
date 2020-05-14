import { externalCall } from './request'
import format from 'date-fns/format'

export default class FlightsApi {
  constructor() {
    this.baseURL = 'https://api.skypicker.com'
  }

  async retrieveFlightsInfo({ currentOfficeCode, offices, date }) {
    let officeInfo = {}
    await Promise.all(
      offices.map(async office => {
        let flightInfo = {}
        try {
          let result = await this.retrieveFlight({
            flyFrom: currentOfficeCode,
            to: office.code,
            dateFrom: format(date, 'dd/MM/yyyy')
          })
          flightInfo = result.data[0] // Let's just get the first one
        } catch (e) {
          console.error(e)
        }
        officeInfo[office.id] = flightInfo
        return
      })
    )
    return officeInfo
  }

  retrieveFlight({ flyFrom, to, dateFrom }) {
    const url = `${this.baseURL}/flights?dateFrom=${dateFrom}` // we skip encoding as the api doesn't handle well 05/06/2020 endoded to 05%2F06%2F2020
    const params = {
      flyFrom,
      to,
      one_for_city: 1,
      one_per_date: 1,
      partner: 'picky',
      v: 3
    }
    return externalCall({ url, params })
  }
}
