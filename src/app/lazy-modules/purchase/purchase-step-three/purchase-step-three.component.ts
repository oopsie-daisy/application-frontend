import {Component, Input, OnInit} from '@angular/core';
import {StepFormComponent} from 'src/app/model/common/step-form-component';
import {PurchaseView} from 'src/app/model/view/purchase-view';
import {PaymentProvidersEnum, PaymentProvidersEnumUtils} from 'src/app/model/enum/payment-providers-enum';

@Component({
  selector: 'app-purchase-step-three',
  templateUrl: './purchase-step-three.component.html',
  styleUrls: ['./purchase-step-three.component.scss']
})
export class PurchaseStepThreeComponent extends StepFormComponent implements OnInit {

  PaymentProvidersEnum = PaymentProvidersEnum;
  paymentProvidersInfo = PaymentProvidersEnumUtils.getPaymentProvidersInfo();

  @Input()
  model: PurchaseView;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
