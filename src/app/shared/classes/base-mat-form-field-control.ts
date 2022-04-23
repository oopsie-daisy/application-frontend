import {ControlValueAccessor, NgControl, NgForm} from '@angular/forms';
import {MatFormFieldControl} from '@angular/material/form-field';
import {Subject} from 'rxjs';
import {ChangeDetectorRef, Directive, ElementRef, HostBinding, Injector, Input} from '@angular/core';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

@Directive()
export abstract class BaseMatFormFieldControl<T> implements ControlValueAccessor, MatFormFieldControl<T> {
  abstract id: string;
  abstract controlType: string;

  protected _value: T;
  protected _required: boolean;
  protected _disabled: boolean;
  protected _placeholder: string;
  protected _forceFloatingLabel: boolean;

  @HostBinding('attr.aria-describedby')
  userAriaDescribedBy = '';

  @HostBinding('class.floating')
  shouldLabelFloat = false;

  empty = true;
  focused = false;
  stateChanges = new Subject<void>();

  readonly ngControl: NgControl;
  readonly parentForm: NgForm | null;
  readonly elementRef: ElementRef;
  readonly changeDetectorRef: ChangeDetectorRef;

  protected constructor(public injector: Injector) {
    this.ngControl = this.injector.get(NgControl);
    this.elementRef = this.injector.get(ElementRef);
    this.parentForm = this.injector.get(NgForm, null);
    this.changeDetectorRef = this.injector.get(ChangeDetectorRef);

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  onChange(newVal: T): void {
  }

  onTouched(_?: any): void {
  }

  writeValue(obj: T): void {
    this.value = obj;
    this.changeDetectorRef.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.stateChanges.next();
  }

  onFocusIn(): void {
    if (!this.focused) {
      this.focused = true;
      this.stateChanges.next();
      this.setFloatingLabel();
    }
  }

  onFocusOut(): void {
    if (this.focused) {
      this.focused = false;
      this.onTouched();
      this.stateChanges.next();
      this.setFloatingLabel();
    }
  }

  get value(): T {
    return this._value;
  }

  set value(value: T) {
    if (this.isValueEmpty(value)) {
      return;
    }

    this._value = value;
    this.onChange(value);
    this.setEmptyValue();
    this.setFloatingLabel();
    this.stateChanges.next();
  }

  @Input()
  get required(): boolean {
    return this._required;
  }

  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }

  set placeholder(placeholder) {
    this._placeholder = placeholder;
    this.stateChanges.next();
  }

  get errorState(): boolean {
    return !!this.ngControl?.errors && (this.parentForm?.submitted || !!this.ngControl.touched);
  }

  onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).id !== this.id) {
      this.elementRef.nativeElement.querySelector('.primary-control')?.focus();
    }
  }

  setEmptyValue(): void {
    this.empty = !this.value;
  }

  setFloatingLabel(): void {
    this.shouldLabelFloat = this.forceFloatingLabel || this.focused || !this.empty;
  }

  setDescribedByIds(ids: string[]): void {
    this.userAriaDescribedBy = ids.join(' ');
  }

  isValueEmpty(value: T): boolean {
    return (this._value === null || this._value === undefined) && (value === null || value === undefined);
  }

  @Input()
  get forceFloatingLabel(): boolean {
    return this._forceFloatingLabel;
  }

  set forceFloatingLabel(forceFloatingLabel) {
    this._forceFloatingLabel = coerceBooleanProperty(forceFloatingLabel);
    this.setFloatingLabel();
    this.stateChanges.next();
  }

}
