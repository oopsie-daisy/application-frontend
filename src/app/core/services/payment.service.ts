import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PurchaseView} from 'src/app/model/view/purchase-view';
import {Observable} from 'rxjs';
import {CitiesEnumUtils} from 'src/app/model/enum/cities-enum';
import {ApiConstants} from 'src/app/utils/api-constants';
import {DeliveryOptionEnumUtils} from 'src/app/model/enum/delivery-option-enum';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private citiesTranslations = CitiesEnumUtils.getCityTranslations();
  private deliverOptionDescriptions = DeliveryOptionEnumUtils.getDeliveryOptionDescriptions();

  constructor(private http: HttpClient) {
  }

  public placeOrder(model: PurchaseView): Observable<void> {
    this.correctPurchaseData(model);

    return this.http.post<void>(ApiConstants.PAYMENTS + '/complete', model);
  }

  private correctPurchaseData(model: PurchaseView): void {
    model.item = model.itemView.uuid;
    model.customerAddress = model.customerAddress + ", " + this.citiesTranslations[model.city];
    model.amountToPay = model.quantity * model.itemView.price + this.deliverOptionDescriptions[model.deliveryOption].price;
  }
}
