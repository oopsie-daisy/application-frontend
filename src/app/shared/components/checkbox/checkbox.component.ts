import {ChangeDetectionStrategy, Component, HostBinding, Injector, Input, OnDestroy, Optional} from '@angular/core';
import {BaseMatFormFieldControl} from 'src/app/shared/classes/base-mat-form-field-control';
import {MatFormFieldControl} from '@angular/material/form-field';
import {FormGroupComponent} from 'src/app/shared/components/form-group/form-group.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: MatFormFieldControl, useExisting: CheckboxComponent}]
})
export class CheckboxComponent extends BaseMatFormFieldControl<boolean> implements OnDestroy {
  static nextId = 0;

  @HostBinding()
  id = `checkbox-${CheckboxComponent.nextId++}`;
  controlType = 'checkbox';

  @Input()
  inline: boolean;

  @Input()
  withoutFormGroup: boolean;

  @Input()
  hasDescription: boolean;

  constructor(public injector: Injector,
              @Optional() private formGroupComponent: FormGroupComponent) {
    super(injector);
    this.setFloatingLabel();
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }

  setFloatingLabel(): void {
    this.shouldLabelFloat = true;
  }

  get value(): boolean {
    return super.value;
  }

  set value(value: boolean) {
    super.value = value;

    if (this.formGroupComponent?.primaryControl && this !== this.formGroupComponent.primaryControl) {
      const primaryCheckbox = this.formGroupComponent.primaryControl as CheckboxComponent;
      if (this.focused) {
        primaryCheckbox.onTouched();
      }
      primaryCheckbox.ngControl.control.updateValueAndValidity();
      primaryCheckbox.stateChanges.next();
      setTimeout(() => {
        this.formGroupComponent.checkForErrors();
        this.changeDetectorRef.detectChanges();
      });
    }
  }

}
