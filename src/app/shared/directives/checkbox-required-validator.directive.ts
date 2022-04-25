import {Directive} from '@angular/core';
import {FormGroupComponent} from 'src/app/shared/components/form-group/form-group.component';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {ValidationResult} from 'src/app/shared/classes/validation-result';

@Directive({
  selector: '[appCheckboxRequiredValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: CheckboxRequiredValidatorDirective, multi: true}]
})
export class CheckboxRequiredValidatorDirective implements Validator {

  constructor(private formGroup: FormGroupComponent) {
  }

  validate(abstractControl: AbstractControl): ValidationErrors | null {
    if (!this.formGroup || !this.formGroup.primaryControl) {
      return null;
    }

    if (this.formGroup.primaryControl.ngControl.control === abstractControl && this.formGroup.controls.filter(control => control.value === true).length === 0) {
      return {required: new ValidationResult('Reikšmė privalo būti įvesta.')};
    }

    return null;
  }

}
