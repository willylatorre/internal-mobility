export const mockCall = jest.fn().mockResolvedValue({})
export const mockReject = jest.fn().mockRejectedValue({})

const mock = jest.fn().mockImplementation(() => {
  return {
    call: mockCall,
    reject: mockReject
  }
})

export default mock

export const externalCall = jest.fn().mockResolvedValue({})
