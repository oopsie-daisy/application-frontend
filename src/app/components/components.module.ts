import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComponentsRoutingModule} from './components-routing.module';
import {SharedModule} from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule
  ]
})
export class ComponentsModule { }
