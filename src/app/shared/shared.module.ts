import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ButtonComponent} from 'src/app/shared/components/button/button.component';
import {TextInputComponent} from 'src/app/shared/components/text-input/text-input.component';
import {FormsModule} from "@angular/forms";
import {FormGroupComponent} from 'src/app/shared/components/form-group/form-group.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {IntegerInputComponent} from 'src/app/shared/components/integer-input/integer-input.component';
import {AutonumericModule} from "@angularfy/autonumeric";
import {SelectComponent} from 'src/app/shared/components/select/select.component';
import {MatSelectModule} from "@angular/material/select";
import {SelectOptionDirective} from 'src/app/shared/directives/select-option.directive';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
import {StopPropagationDirective} from 'src/app/shared/directives/stop-propagation.directive';
import {InvalidFormScrollDirective} from 'src/app/shared/directives/invalid-form-scroll.directive';
import {CheckboxRequiredValidatorDirective} from 'src/app/shared/directives/checkbox-required-validator.directive';
import {CheckboxComponent} from 'src/app/shared/components/checkbox/checkbox.component';
import {RadioGroupComponent} from 'src/app/shared/components/radio-group/radio-group.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {DateInputComponent} from 'src/app/shared/components/date-input/date-input.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DateRangeInputComponent} from 'src/app/shared/components/date-range-input/date-range-input.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    ButtonComponent,
    TextInputComponent,
    FormGroupComponent,
    IntegerInputComponent,
    SelectComponent,
    SelectOptionDirective,
    StopPropagationDirective,
    InvalidFormScrollDirective,
    CheckboxRequiredValidatorDirective,
    CheckboxComponent,
    RadioGroupComponent,
    DateInputComponent,
    DateRangeInputComponent
  ],
    imports: [
        NgbModule,
        CommonModule,
        RouterModule,
        FormsModule,
        MatFormFieldModule,
        AutonumericModule.forRoot(),
        MatSelectModule,
        FontAwesomeModule,
        NgxMatSelectSearchModule,
        MatRadioModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatInputModule,
        MatButtonModule,
    ],
  exports: [
    NgbModule,
    CommonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    FontAwesomeModule,
    MatRadioModule,
    MatDatepickerModule,
    ButtonComponent,
    TextInputComponent,
    FormGroupComponent,
    IntegerInputComponent,
    SelectComponent,
    SelectOptionDirective,
    StopPropagationDirective,
    InvalidFormScrollDirective,
    CheckboxRequiredValidatorDirective,
    CheckboxComponent,
    RadioGroupComponent,
    DateInputComponent,
    DateRangeInputComponent,
    MatSelectModule,
  ]
})
export class SharedModule {
}
