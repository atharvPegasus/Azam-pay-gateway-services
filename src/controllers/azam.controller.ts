import { inject } from '@loopback/context';
import { api, Request, RestBindings, ResponseObject } from '@loopback/rest';
import { checkoutApiDef } from '../api-specs/checkout';
import { tokenDef } from '../api-specs/token';

@api(checkoutApiDef)
export class CheckoutController {
  constructor () { }

  async checkoutComponentFunction(
    @inject(RestBindings.Http.REQUEST)
    request: Request
  ): Promise<any> {
    const { body }: any = request;
    let response: any = {};
    body?.isSuccess ?
      response = {
        success: true,
        responseCode: 200,
        message: 'This is a successfull transaction',
        data: {
          ReferenceID: 'REFERENCE_ID'
        }
      } :
      response = {
        success: false,
        responseCode: 500,
        message: 'Internal server error',
        data: {}
      };
    return response;
  }
}

@api(tokenDef)
export class TokenController {
  constructor () { }

  async tokenComponentFunction(
    @inject(RestBindings.Http.REQUEST)
    request: Request
  ): Promise<any> {
    const { body }: any = request;
    let response: any = {};
    body?.isSuccess ?
      response = {
        success: true,
        responseCode: 200,
        message: 'Token successfully generated',
        data: {
          Authorization: 'ENCRYPTED_TOKEN'
        }
      } :
      response = {
        success: false,
        responseCode: 500,
        message: 'Internal server error',
        data: {}
      };
    return response;
  }
}
