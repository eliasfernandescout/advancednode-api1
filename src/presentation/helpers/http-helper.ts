import { HttpResponse } from '../contracts/http'

export const badRequuest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}
