import {Component, Input, OnInit} from '@angular/core';
import {StepFormComponent} from 'src/app/model/common/step-form-component';
import {PurchaseView} from 'src/app/model/view/purchase-view';
import {DeliveryOptionEnum, DeliveryOptionEnumUtils} from 'src/app/model/enum/delivery-option-enum';
import {CitiesEnumUtils} from 'src/app/model/enum/cities-enum';

@Component({
  selector: 'app-purchase-step-two',
  templateUrl: './purchase-step-two.component.html',
  styleUrls: ['./purchase-step-two.component.scss']
})
export class PurchaseStepTwoComponent extends StepFormComponent implements OnInit {

  DeliveryOptionEnum = DeliveryOptionEnum;
  deliverOptionDescriptions = DeliveryOptionEnumUtils.getDeliveryOptionDescriptions();
  citiesInOrder = CitiesEnumUtils.getCitiesInOrder();
  citiesTranslations = CitiesEnumUtils.getCityTranslations();

  @Input()
  model: PurchaseView;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
