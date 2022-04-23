import {ChangeDetectionStrategy, Component, HostBinding, Injector, Input, OnDestroy} from '@angular/core';
import {MatFormFieldControl} from '@angular/material/form-field';
import {BaseMatFormFieldControl} from 'src/app/shared/classes/base-mat-form-field-control';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: MatFormFieldControl, useExisting: TextInputComponent}]
})
export class TextInputComponent extends BaseMatFormFieldControl<string> implements OnDestroy {
  static nextId = 0;

  @HostBinding()
  id = `text-input-${TextInputComponent.nextId++}`;
  controlType = 'text-input';

  @Input()
  max = 255;

  @Input()
  type = 'text';

  constructor(public injector: Injector) {
    super(injector);
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }

}
