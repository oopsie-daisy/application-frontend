export enum DeliveryOptionEnum {
  COURIER = 'COURIER',
  EXPRESS_DELIVERY = 'EXPRESS_DELIVERY'
}

export class DeliveryOptionEnumUtils {
  public static getDeliveryOptionDescriptions(): {[option: string]: {title: string, comment: string, price: number}} {
    return {
      'COURIER': {title: 'Kurjeris', comment: 'Jūsų užsakymas bus pristatytas nurodytu adresu per 1-2 d.d.', price: 2.9},
      'EXPRESS_DELIVERY': {title: 'Skubus pristatymas', comment: 'Jūsų užsakymas bus pristatytas nurodytu adresu per kelias valandas', price: 5}
    }
  }
}
