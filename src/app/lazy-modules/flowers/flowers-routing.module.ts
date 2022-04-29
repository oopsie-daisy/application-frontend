import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlowersListComponent} from 'src/app/lazy-modules/flowers/components/flowers-list/flowers-list.component';
import {UrlConstants} from 'src/app/utils/url-constants';
import {FlowersViewComponent} from 'src/app/lazy-modules/flowers/components/flowers-view/flowers-view.component';

const routes: Routes = [
  {path: '', component: FlowersListComponent},
  {path: UrlConstants.ID, component: FlowersViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowersRoutingModule { }
