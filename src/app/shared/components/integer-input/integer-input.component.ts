import {ChangeDetectionStrategy, Component, HostBinding, Injector, Input, OnDestroy} from '@angular/core';
import {BaseMatFormFieldControl} from 'src/app/shared/classes/base-mat-form-field-control';
import {AutonumericOptions} from '@angularfy/autonumeric/lib/autonumeric.model';
import {MatFormFieldControl} from '@angular/material/form-field';

const MIN_DEFAULT_VALUE = '0';
const MAX_DEFAULT_VALUE = '2147483647';
const MIN_DEFAULT_NEGATIVE_VALUE = '-2147483648';

@Component({
  selector: 'app-integer-input',
  templateUrl: './integer-input.component.html',
  styleUrls: ['./integer-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: MatFormFieldControl, useExisting: IntegerInputComponent}]
})
export class IntegerInputComponent extends BaseMatFormFieldControl<number> implements OnDestroy {
  static nextId = 0;

  @HostBinding()
  id = `integer-input-${IntegerInputComponent.nextId++}`;
  controlType = 'integer-input';

  numericOptions: AutonumericOptions = {
    decimalPlaces: 0,
    minimumValue: MIN_DEFAULT_VALUE,
    maximumValue: MAX_DEFAULT_VALUE,
    decimalCharacter: ',',
    decimalCharacterAlternative: '.',
    digitGroupSeparator: '',
    modifyValueOnWheel: false,
    onInvalidPaste: 'clamp',
    showWarnings: false,
  };

  _minNumber: string;
  _maxNumber: string = MAX_DEFAULT_VALUE;

  constructor(public injector: Injector) {
    super(injector);
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }

  @Input()
  set max(maxNumber: string) {
    this._maxNumber = maxNumber;
    this.numericOptions.maximumValue = maxNumber || MAX_DEFAULT_VALUE;
  };

  @Input()
  set min(minNumber: string) {
    this._minNumber = minNumber;
    this.numericOptions.minimumValue = minNumber || MIN_DEFAULT_VALUE;
  };

  @Input()
  set allowNegative(allowNegative: boolean) {
    if (allowNegative && !this._minNumber) {
      this.numericOptions.minimumValue = MIN_DEFAULT_NEGATIVE_VALUE;
    }
  }

}
