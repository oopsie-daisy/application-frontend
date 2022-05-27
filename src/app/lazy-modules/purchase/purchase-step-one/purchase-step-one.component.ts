import {Component, Input, OnInit} from '@angular/core';
import {StepFormComponent} from 'src/app/model/common/step-form-component';
import {PurchaseView} from 'src/app/model/view/purchase-view';

@Component({
  selector: 'app-purchase-step-one',
  templateUrl: './purchase-step-one.component.html',
  styleUrls: ['./purchase-step-one.component.scss']
})
export class PurchaseStepOneComponent extends StepFormComponent implements OnInit {

  @Input()
  model: PurchaseView;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
