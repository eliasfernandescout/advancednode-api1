import { MissingParamError } from '../errors/missing-param-error'
import { badRequuest } from '../helpers/http-helper'
import { Controller } from '../contracts/controller'
import { HttpRequest, HttpResponse } from '../contracts/http'
export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequuest(new MissingParamError(field))
      }
    }
  }
}
