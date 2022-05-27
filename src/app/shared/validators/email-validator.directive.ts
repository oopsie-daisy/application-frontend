import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {ValidationResult} from 'src/app/shared/classes/validation-result';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective  implements Validator {

  // Pattern that tests basic email structure:
  // {any-alphanumeric-string}(.{any-alphanumeric-string} - optional, repeat any amount of times)@{any-alphanumeric-string}(.{any-alphanumeric-string} - repeat any amount of times)
  // valid emails: test@insoft.lt, test.test@insoft.lt, test@insoft.co.uk
  // invalid emails: test@insoft, test@@insoft.lt
  private static readonly EMAIL_PATTERN = '^[A-Za-z0-9!#$%&\'*+-/=?^_`{|}~]+@[A-Za-z0-9!#$%&\'*+-/=?^_`{|}~]+\\.[A-Za-z0-9!#$%&\'*+-/=?^_`{|}~]+$';

  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value && !RegExp(EmailValidatorDirective.EMAIL_PATTERN).test(c.value)) {
      return {email: new ValidationResult('Reikšmė turi atitikti el. pašto adreso struktūrą')}
    }

    return null;
  }
}
