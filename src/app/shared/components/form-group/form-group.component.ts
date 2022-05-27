import {AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, Input, OnDestroy, Optional, QueryList, ViewChild} from '@angular/core';
import {MatFormField, MatFormFieldAppearance, MatFormFieldControl} from '@angular/material/form-field';
import {takeUntil} from 'rxjs/operators';
import {BehaviorSubject, Subject} from 'rxjs';
import {NgForm} from '@angular/forms';
import {ValidationResult} from 'src/app/shared/classes/validation-result';
import {BaseMatFormFieldControl} from 'src/app/shared/classes/base-mat-form-field-control';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupComponent implements AfterContentInit, OnDestroy {

  @Input()
  appearance: MatFormFieldAppearance = 'outline';

  @Input()
  hideRequiredMarker = false;

  @ViewChild(MatFormField, {static: true})
  matFormField?: MatFormField;

  @ContentChildren(MatFormFieldControl)
  controls?: QueryList<MatFormFieldControl<any>>;
  primaryControl?: MatFormFieldControl<any>;

  unsubscribe: Subject<void> = new Subject<void>();

  errorKey: string;
  error: BehaviorSubject<string> = new BehaviorSubject(undefined);
  errorParams: object;

  constructor(@Optional() private parentForm: NgForm) {
  }

  ngAfterContentInit(): void {
    if (!this.controls || !this.controls.first) {
      return;
    }

    this.primaryControl = this.controls.first;
    this.matFormField._control = this.primaryControl;

    if (this.primaryControl.ngControl) {
      this.primaryControl.stateChanges.pipe(takeUntil(this.unsubscribe)).subscribe(() => {
        if (this.primaryControl.ngControl.touched && !this.primaryControl.ngControl.valid) {
          this.checkForErrors();
        }
      });

      if (this.parentForm) {
        this.parentForm.ngSubmit.pipe(takeUntil(this.unsubscribe)).subscribe(() => {
          if (this.primaryControl instanceof BaseMatFormFieldControl) {
            this.primaryControl.stateChanges.next();
          }
          this.checkForErrors();
        });
      }
    }

    // if (this.primaryControl instanceof CheckboxComponent || this.primaryControl instanceof RadioGroupComponent) {
    //   this.hideRequiredMarker = true;
    // }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  checkForErrors(): void {
    if (!this.primaryControl.ngControl.errors && this.error.getValue()) {
      this.errorKey = undefined;
      this.error.next(undefined);
      this.errorParams = null;
    }

    if (this.primaryControl.ngControl.errors && this.errorKey !== Object.keys(this.primaryControl.ngControl.errors)[0]) {
      const errorObject = Object.values(this.primaryControl.ngControl.errors)[0];
      if (errorObject instanceof ValidationResult) {
        this.error.next(errorObject.errorLabel);
        this.errorKey = errorObject.errorLabel;
        this.errorParams = errorObject.errorLabelParam;
        return;
      }
      this.errorKey = Object.keys(this.primaryControl.ngControl.errors)[0];
      if (this.errorKey === 'required') {
        this.errorKey = 'Reikšmė privalo būti įvesta'
      }
      this.error.next(this.errorKey);
    }
  }

}
