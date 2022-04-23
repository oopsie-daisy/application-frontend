import {AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, HostBinding, Injector, Input, OnDestroy, Output, QueryList, TemplateRef} from '@angular/core';
import {BaseMatFormFieldControl} from 'src/app/shared/classes/base-mat-form-field-control';
import {MatFormFieldControl} from '@angular/material/form-field';
import {Subject, Subscription} from 'rxjs';
import {debounceTime, filter} from 'rxjs/operators';
import {SelectOptionDirective} from 'src/app/shared/directives/select-option.directive';
import {AppConstants} from 'src/app/utils/app-constants';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: MatFormFieldControl, useExisting: SelectComponent}]
})
export class SelectComponent extends BaseMatFormFieldControl<any> implements OnDestroy, AfterContentInit {
  static nextId = 0;

  @HostBinding()
  id = `select-${SelectComponent.nextId++}`;
  controlType = 'select';

  @ContentChildren(SelectOptionDirective)
  _selectOptions: QueryList<SelectOptionDirective>;

  @Input()
  showEmptyValue = true;

  @Input()
  multiple: boolean;

  @Input()
  searchable: boolean;

  @Input()
  searchWithoutInput = true;

  @Input()
  compareFn = (o1, o2): boolean => o1 === o2;

  @Output()
  search: EventEmitter<string> = new EventEmitter();

  _searchChanged = new Subject<string>();

  selectedTemplates: TemplateRef<any>[];

  private _optionsSubscription: Subscription;
  private _selectOptionsSubscription: Subscription;

  constructor(public injector: Injector) {
    super(injector);
    this._optionsSubscription = this._searchChanged.pipe(filter(searchQuery => (!searchQuery && this.searchWithoutInput) || !!searchQuery?.length), debounceTime(200)).subscribe(
      searchQuery => this.search.emit(searchQuery)
    );
  }

  ngAfterContentInit(): void {
    this._selectOptionsSubscription = this._selectOptions.changes.subscribe(() => this.updateSelectedValue());
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
    this._searchChanged.complete();
    this._optionsSubscription.unsubscribe();
    this._selectOptionsSubscription.unsubscribe();
  }

  updateSelectedValue(): void {
    if (this.multiple) {
      this.selectedTemplates = this._value ? this._selectOptions.filter(option => this._value.find(value => this.compareFn(value, option.value))).map(option => option.templateRef) : [];
    } else {
      this.selectedTemplates = [this._selectOptions.find(option => this.compareFn(option.value, this._value))?.templateRef];
    }
    this.changeDetectorRef.detectChanges();
  }

  setEmptyValue(): void {
    this.empty = (this.value === null || this.value === undefined);
  }

  get value(): any {
    return super.value;
  }

  set value(value: any) {
    if (this.multiple && !value?.length) {
      value = undefined;
    }

    // Test if old and new value is not set
    if (!this._value && !value && this._value !== false && this._value !== 0 && value !== false && value !== 0) {
      return;
    }

    this._value = value;
    this.stateChanges.next();
    this.onChange(value);
    this.setEmptyValue();
    this.setFloatingLabel();
    this.updateSelectedValue();
  }

  @Input()
  set compareById(compareById: boolean) {
    this.compareFn = AppConstants.compareById;
  }

  @Input()
  set compareByCode(compareByCode: boolean) {
    this.compareFn = AppConstants.compareByCode;
  }

}
