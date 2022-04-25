import {NgModule} from '@angular/core';

import {ComponentExamplesRoutingModule} from 'src/app/component-examples/component-examples-routing.module';
import {ComponentExamplesComponent} from 'src/app/component-examples/component-examples/component-examples.component';
import {SharedModule} from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ComponentExamplesComponent
  ],
  imports: [
    ComponentExamplesRoutingModule,
    SharedModule
  ]
})
export class ComponentExamplesModule { }
