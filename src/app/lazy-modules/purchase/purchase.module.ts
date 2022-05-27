import {NgModule} from '@angular/core';
import {PurchaseRoutingModule} from 'src/app/lazy-modules/purchase/purchase-routing.module';
import {PurchaseProcessComponent} from 'src/app/lazy-modules/purchase/purchase-process/purchase-process.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {PurchaseStepOneComponent} from 'src/app/lazy-modules/purchase/purchase-step-one/purchase-step-one.component';
import {PurchaseStepTwoComponent} from 'src/app/lazy-modules/purchase/purchase-step-two/purchase-step-two.component';
import {PurchaseStepThreeComponent} from 'src/app/lazy-modules/purchase/purchase-step-three/purchase-step-three.component';


@NgModule({
  declarations: [
    PurchaseProcessComponent,
    PurchaseStepOneComponent,
    PurchaseStepTwoComponent,
    PurchaseStepThreeComponent
  ],
  imports: [
    SharedModule,
    PurchaseRoutingModule
  ]
})
export class PurchaseModule { }
