import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PurchaseProcessComponent} from 'src/app/lazy-modules/purchase/purchase-process/purchase-process.component';

const routes: Routes = [
  {path: '', component: PurchaseProcessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
