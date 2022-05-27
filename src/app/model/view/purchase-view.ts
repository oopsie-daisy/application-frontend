import {DeliveryOptionEnum} from 'src/app/model/enum/delivery-option-enum';
import {CitiesEnum} from 'src/app/model/enum/cities-enum';
import {PaymentProvidersEnum} from 'src/app/model/enum/payment-providers-enum';
import {AppConstants} from 'src/app/utils/app-constants';
import {FlowerListView} from 'src/app/model/view/flower-list-view';

export class PurchaseView {
  customerName: string;
  customerEmail: string;
  deliveryOption: DeliveryOptionEnum;
  city: CitiesEnum;
  customerAddress: string;
  paymentProvider: PaymentProvidersEnum;
  senderIban = AppConstants.SENDER_IBAN;
  itemView: FlowerListView;
  quantity: number = 1;
  item: string;
  amountToPay: number;
}
