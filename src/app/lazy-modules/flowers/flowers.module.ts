import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FlowersRoutingModule} from 'src/app/lazy-modules/flowers/flowers-routing.module';
import {FlowersListComponent} from 'src/app/lazy-modules/flowers/components/flowers-list/flowers-list.component';
import {FlowersViewComponent} from 'src/app/lazy-modules/flowers/components/flowers-view/flowers-view.component';


@NgModule({
  declarations: [
    FlowersListComponent,
    FlowersViewComponent
  ],
  imports: [
    CommonModule,
    FlowersRoutingModule
  ]
})
export class FlowersModule { }
