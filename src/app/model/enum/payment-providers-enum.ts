export enum PaymentProvidersEnum {
  SWEDBANK = 'SWEDBANK',
  DANSKEBANK = 'DANSKEBANK',
  SEB = 'SEB',
  LUMINOR = 'LUMINOR',
}

export class PaymentProvidersEnumUtils {
  public static getPaymentProvidersInfo(): {[option: string]: {name: string}} {
    return {
      'SWEDBANK': {name: 'SWEDBANK'},
      'DANSKEBANK': {name: 'DANSKEBANK'},
      'SEB': {name: 'SEB'},
      'LUMINOR': {name: 'LUMINOR'},
    }
  }
}
