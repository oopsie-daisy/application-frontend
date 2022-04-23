import {AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, HostBinding, Injector, Input, OnDestroy, QueryList, ViewChild} from '@angular/core';
import {BaseMatFormFieldControl} from 'src/app/shared/classes/base-mat-form-field-control';
import {MatFormFieldControl} from '@angular/material/form-field';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {Subscription} from 'rxjs';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: MatFormFieldControl, useExisting: RadioGroupComponent}]
})
export class RadioGroupComponent extends BaseMatFormFieldControl<any> implements OnDestroy, AfterContentInit {
  static nextId = 0;

  @HostBinding()
  id = `radio-group-${RadioGroupComponent.nextId++}`;
  controlType = 'radio-group';

  @ViewChild(MatRadioGroup, {static: true})
  group: MatRadioGroup;

  @ContentChildren(MatRadioButton)
  controls: QueryList<MatRadioButton>;

  @Input()
  inline: boolean;

  private _controlChanges: Subscription;

  constructor(public injector: Injector) {
    super(injector);
    this.setFloatingLabel();
  }

  ngAfterContentInit(): void {
    this._controlChanges = this.controls.changes.subscribe(change => setTimeout(() => this.initControls(change.toArray())));
    this.initControls(this.controls.toArray());
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
    this._controlChanges.unsubscribe();
  }

  initControls(controls: MatRadioButton[]): void {
    controls.forEach(control => {
      control.radioGroup = this.group;
      control.disabled = this.disabled;
      control.ngOnInit();
    });
  }

  updateControls(): void {
    this.controls?.forEach(control => control.checked = control.value === this.value);
  }

  setFloatingLabel(): void {
    this.shouldLabelFloat = true;
  }

  onContainerClick(event: MouseEvent): void {
  }

  get value(): any {
    return super.value;
  }

  set value(value: any) {
    if (!this._value && !value && this._value !== false && this._value !== 0 && value !== false && value !== 0) {
      return;
    }

    this._value = value;
    this.stateChanges.next();
    this.onChange(value);
    this.setEmptyValue();
    this.updateControls();
  }

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.controls?.forEach(control => control.disabled = value);
    this.stateChanges.next();
    this.changeDetectorRef.detectChanges();
  }

}

