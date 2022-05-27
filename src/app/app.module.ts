import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from 'src/app/app.component';
import {SharedModule} from "src/app/shared/shared.module";
import {CoreModule} from "src/app/core/core.module";
import {AppRoutingModule} from 'src/app/app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoadingInterceptor} from 'src/app/core/interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        CoreModule,
        SharedModule,
        AppRoutingModule,
        HttpClientModule,
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
