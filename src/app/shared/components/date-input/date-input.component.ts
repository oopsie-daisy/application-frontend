import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, Injector, Input, OnDestroy, ViewChild} from '@angular/core';
import {BaseMatFormFieldControl} from 'src/app/shared/classes/base-mat-form-field-control';
import {MatFormFieldControl} from '@angular/material/form-field';
import {MatDatepicker} from '@angular/material/datepicker';
import * as moment from 'moment';
import {MAT_DATE_FORMATS} from '@angular/material/core';
import {DateUtils} from 'src/app/utils/date-utils';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: MatFormFieldControl, useExisting: DateInputComponent},
    {
      provide: MAT_DATE_FORMATS, useValue: {
        parse: {
          dateInput: ['l', 'LL']
        },
        display: {
          dateInput: 'l',
          monthYearLabel: 'MMMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'YYYY MMMM'
        }
      }
    }
  ]
})
export class DateInputComponent extends BaseMatFormFieldControl<string> implements OnDestroy {
  static nextId = 0;

  @HostBinding()
  id = `date-input-${DateInputComponent.nextId++}`;
  controlType = 'date-input';

  @ViewChild('input', {static: true})
  input: ElementRef;

  @Input()
  min = '1900-01-01';

  @Input()
  max: string;

  @ViewChild(MatDatepicker, {static: true})
  datepicker: MatDatepicker<moment.Moment>

  _momentValue: moment.Moment;

  constructor(public injector: Injector) {
    super(injector);
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }

  onFocusOut(): void {
    super.onFocusOut();
    if (!this.value) {
      this.input.nativeElement.value = '';
    }
  }

  set momentValue(value: moment.Moment) {
    this._momentValue = value;

    if ((this.min && value?.isBefore(this.min)) || (this.max && value?.isAfter(this.max))) {
      super.value = undefined;
    } else {
      super.value = DateUtils.formatDateToIsoString(value);
    }
  }

  get momentValue(): moment.Moment {
    return this._momentValue;
  }

  get value(): string {
    return super.value;
  }

  set value(value: string) {
    super.value = value;
    this._momentValue = value ? moment.utc(value) : undefined;
  }

}
