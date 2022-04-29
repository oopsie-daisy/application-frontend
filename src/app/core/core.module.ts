import {NgModule, Optional, SkipSelf} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule} from '@angular/material-moment-adapter';
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {FontAwesomeModule, FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {FaUtils} from "src/app/utils/fa-utils";
import {HeaderComponent} from 'src/app/core/components/header/header.component';
import {FooterComponent} from 'src/app/core/components/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    MatMomentDateModule,
    FontAwesomeModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'lt'},
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule, faIconLibrary: FaIconLibrary) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
    faIconLibrary.addIcons(...FaUtils.getAppIcons());
  }
}

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string): void {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
