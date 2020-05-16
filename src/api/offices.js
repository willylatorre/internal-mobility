import mockOffices from './__mocks__/mockOffices'
import Office from '../models/Office'

export default class LocationsApi {
  constructor(request) {
    this.baseURL = '/v1/offices' // Let's suppose that neyda's office endpoint is something like https://api.neyda.com/api/v1/offices
    this.request = request
  }

  all() {
    // We should retrieve the offices from our server
    // const offices = await this.request.call({ url: this.baseURL })
    return mockOffices.map(office => new Office(office))
  }
}
