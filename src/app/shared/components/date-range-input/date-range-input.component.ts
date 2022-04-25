import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, Injector, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {BaseMatFormFieldControl} from 'src/app/shared/classes/base-mat-form-field-control';
import {MatDateRangePicker} from '@angular/material/datepicker';
import * as moment from 'moment';
import {MatFormFieldControl} from '@angular/material/form-field';
import {MAT_DATE_FORMATS} from '@angular/material/core';
import {DateUtils} from 'src/app/utils/date-utils';
import {AppConstants} from 'src/app/utils/app-constants';

@Component({
  selector: 'app-date-range-input',
  templateUrl: './date-range-input.component.html',
  styleUrls: ['./date-range-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: MatFormFieldControl, useExisting: DateRangeInputComponent},
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
export class DateRangeInputComponent extends BaseMatFormFieldControl<string[]> implements OnDestroy {
  static nextId = 0;

  @HostBinding()
  id = `date-range-input-${DateRangeInputComponent.nextId++}`;
  controlType = 'date-range-input';

  @ViewChild('startInput', {static: true})
  startInput: ElementRef;

  @ViewChild('endInput', {static: true})
  endInput: ElementRef;

  @ViewChild(MatDateRangePicker, {static: true})
  datepicker: MatDateRangePicker<moment.Moment>;

  @Input()
  min = '1900-01-01';

  @Input()
  max: string;

  @Input()
  startDatePlaceholder = 'Data nuo';

  @Input()
  endDatePlaceholder = 'Data iki';

  @Output()
  startDateChange = new EventEmitter<string>();

  @Output()
  endDateChange = new EventEmitter<string>();

  _startMomentValue: moment.Moment;
  _endMomentValue: moment.Moment;

  private _startDate: string;
  private _endDate: string;

  constructor(public injector: Injector) {
    super(injector);
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }

  onFocusOut(): void {
    setTimeout(() => {
      if (this.isElementInput(document.activeElement)) {
        return;
      }

      super.onFocusOut();
      this.updateValue(this._startMomentValue, this._endMomentValue);
      if (!this.value) {
        this.startInput.nativeElement.value = '';
        this.endInput.nativeElement.value = '';
        this.startMomentValue = undefined;
        this.endMomentValue = undefined;
      }
    });
  }

  onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).id !== this.id && !this.isElementInput(event.target as Element)) {
      this.elementRef.nativeElement.querySelector('.primary-control').focus();
    }
  }

  emitValueChange(start: string, end: string): void {
    this.startDateChange.emit(start);
    this.endDateChange.emit(end);
  }

  isElementInput(element: Element): boolean {
    return element && element.classList.contains('mat-start-date') || element.classList.contains('mat-end-date')
  }

  isDateInvalid(date: moment.Moment): boolean {
    return (this.min && date.isBefore(this.min)) || (this.max && date.clone().subtract(1, 'day').isAfter(moment(this.max)));
  }

  getStartValue(): string {
    return this._value ? this._value[0] : undefined;
  }

  getEndValue(): string {
    return this._value ? this._value[1] : undefined;
  }

  updateValue(start: moment.Moment, end: moment.Moment): void {
    if (!start || !end || start.isAfter(end) || this.isDateInvalid(start) || this.isDateInvalid(end)) {
      super.value = undefined;
      this.emitValueChange(undefined, undefined);
      return;
    }

    const startDate = DateUtils.formatDateToIsoString(start);
    const endDate = DateUtils.formatDateToIsoString(end);
    super.value = [startDate, endDate];
    this.emitValueChange(startDate, endDate);
  }

  set startMomentValue(value: moment.Moment) {
    this._startMomentValue = value;

    // If date is typed by hand, we check if the user has finished typing the whole date before setting it
    if (value && typeof (value as any)._i === 'string' && !moment((value as any)._i, AppConstants.DEFAULT_DATE_FORMAT, true).isValid()) {
      return;
    }
    this.updateValue(this._startMomentValue, this._endMomentValue);
  }

  get startMomentValue(): moment.Moment {
    return this._startMomentValue;
  }

  set endMomentValue(value: moment.Moment) {
    this._endMomentValue = value;

    // If date is typed by hand, we check if the user has finished typing the whole date before setting it
    if (value && typeof (value as any)._i === 'string' && !moment((value as any)._i, AppConstants.DEFAULT_DATE_FORMAT, true).isValid()) {
      return;
    }
    this.updateValue(this._startMomentValue, this._endMomentValue);
  }

  get endMomentValue(): moment.Moment {
    return this._endMomentValue;
  }

  get value(): string[] {
    return this.getStartValue() && this.getEndValue() ? super.value : undefined;
  }

  set value(value: string[]) {
    if (!value && this._startDate && this._endDate) {
      return;
    }

    super.value = value;
    const startValue = this.getStartValue();
    const endValue = this.getEndValue();

    this._startMomentValue = startValue ? moment.utc(value[0]) : undefined;
    this._endMomentValue = endValue ? moment.utc(value[1]) : undefined;
  }

  @Input()
  set startDate(startDate: string) {
    if (!startDate && this._startDate && !this.focused) {
      this.value = null;
      this.stateChanges.next();
    }

    this._startDate = startDate;
    if (this._startDate && this._endDate) {
      // We use timeout because after component initialization ngModel does not override the value
      setTimeout(() => {
        this.value = [this._startDate, this._endDate];
        this.changeDetectorRef.detectChanges();
      });
    }
  }

  @Input()
  set endDate(endDate: string) {
    if (!endDate && this._endDate && !this.focused) {
      this.value = null;
      this.stateChanges.next();
    }

    this._endDate = endDate;
    if (this._startDate && this._endDate) {
      // We use timeout because after component initialization ngModel does not override the value
      setTimeout(() => {
        this.value = [this._startDate, this._endDate];
        this.changeDetectorRef.detectChanges();
      });

    }
  }

}
