import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UrlConstants} from 'src/app/utils/url-constants';
import {PageNotFoundComponent} from 'src/app/core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: UrlConstants.HOME,
    loadChildren: () => import('src/app/lazy-modules/flowers/flowers.module').then(m => m.FlowersModule)
  },
  {
    path: UrlConstants.COMPONENT_EXAMPLES,
    loadChildren: () => import('src/app/component-examples/component-examples.module').then(m => m.ComponentExamplesModule)
  },
  {
    path: UrlConstants.FLOWERS,
    loadChildren: () => import('src/app/lazy-modules/flowers/flowers.module').then(m => m.FlowersModule)
  },
  {
    path: UrlConstants.PURCHASE,
    loadChildren: () => import('src/app/lazy-modules/purchase/purchase.module').then(m => m.PurchaseModule)
  },
  {
    path: '', redirectTo: UrlConstants.HOME, pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
