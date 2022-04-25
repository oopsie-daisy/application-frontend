import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComponentExamplesComponent} from 'src/app/component-examples/component-examples/component-examples.component';
import {UrlConstants} from 'src/app/utils/url-constants';

const routes: Routes = [
  {
    path: UrlConstants.COMPONENT_EXAMPLES, component: ComponentExamplesComponent,
    loadChildren: () => import('src/app/component-examples/component-examples.module').then(m => m.ComponentExamplesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
