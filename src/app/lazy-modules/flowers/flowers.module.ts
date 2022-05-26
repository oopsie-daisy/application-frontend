import {NgModule} from '@angular/core';

import {FlowersRoutingModule} from 'src/app/lazy-modules/flowers/flowers-routing.module';
import {FlowersListComponent} from 'src/app/lazy-modules/flowers/components/flowers-list/flowers-list.component';
import {FlowersViewComponent} from 'src/app/lazy-modules/flowers/components/flowers-view/flowers-view.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {FlowersSearchComponent} from 'src/app/lazy-modules/flowers/components/flowers-search/flowers-search.component';


@NgModule({
  declarations: [
    FlowersListComponent,
    FlowersViewComponent,
    FlowersSearchComponent
  ],
  imports: [
    FlowersRoutingModule,
    SharedModule
  ]
})
export class FlowersModule { }
