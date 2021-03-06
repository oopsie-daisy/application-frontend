import {DeliveryOptionEnum} from 'src/app/model/enum/delivery-option-enum';
import {CitiesEnum} from 'src/app/model/enum/cities-enum';
import {PaymentProvidersEnum} from 'src/app/model/enum/payment-providers-enum';
import {AppConstants} from 'src/app/utils/app-constants';
import {FlowerView} from 'src/app/model/view/flower-view';

export class PurchaseView {
  customerName: string;
  customerEmail: string;
  deliveryOption: DeliveryOptionEnum;
  city: CitiesEnum;
  customerAddress: string;
  paymentProvider: PaymentProvidersEnum;
  senderIban = AppConstants.SENDER_IBAN;
  itemView: FlowerView;
  quantity: number = 1;
  item: string;
  amountToPay: number;
}
