import { MissingParamError } from '../errors/missing-param-error'
import { badRequuest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequuest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequuest(new MissingParamError('email'))
    }
  }
}
