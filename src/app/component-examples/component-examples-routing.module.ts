import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComponentExamplesComponent} from 'src/app/component-examples/component-examples/component-examples.component';

const routes: Routes = [
  {path: '', component: ComponentExamplesComponent}
  // if there was some other component in this module that you would route to via /component-examples/{id},
  // you'd add another path like this:
  // {
  //   path: UrlConstants.ID, component: ComponentExamplesViewComponent
  // }
  // basically, to the 'path' part you assign the part of url that comes after /component-examples, since
  // the /component-examples path led to this module
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentExamplesRoutingModule {

}
