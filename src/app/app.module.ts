import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from 'src/app/app.component';
import {SharedModule} from "src/app/shared/shared.module";
import {CoreModule} from "src/app/core/core.module";
import {AppRoutingModule} from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        CoreModule,
        SharedModule,
        AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
