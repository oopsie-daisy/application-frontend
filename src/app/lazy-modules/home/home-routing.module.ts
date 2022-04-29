import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UrlConstants} from 'src/app/utils/url-constants';

const routes: Routes = [
  {
    path: '', redirectTo: UrlConstants.URL_SEPARATOR + UrlConstants.COMPONENT_EXAMPLES, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
