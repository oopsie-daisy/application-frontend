import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {ValidationResult} from 'src/app/shared/classes/validation-result';

@Directive({
  selector: '[appMinSearchSymbolsValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinSearchSymbolsValidatorDirective, multi: true}]
})
export class MinSearchSymbolsValidatorDirective implements Validator {

  @Input()
  appMinSearchSymbolsValidator: number;

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control || !control.value) {
      return null;
    }

    if (control.value.trim().length < this.appMinSearchSymbolsValidator) {
      return {minSearchSymbols: new ValidationResult('Paieška galima tik įvedus mažiausiai ' + this.appMinSearchSymbolsValidator + ' simbolius.')}
    }
    return null;
  }

}
