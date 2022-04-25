import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  keyPressed: boolean;

  @Input()
  btnType = 'button';

  @Input()
  btnClass = 'd-block';

  @Input()
  disabled: boolean;

  @Output()
  btnClick: EventEmitter<void> = new EventEmitter();

  onKeyPress(): void {
    this.keyPressed = true;
  }

  onKeyUp(event: Event): void {
    this.keyPressed = false;
    // KeyboardEvent or Main mouse button was pressed, usually the left button or the un-initialized state
    if (!this.disabled && (event instanceof KeyboardEvent || (event as MouseEvent).button === 0)) {
      this.btnClick.emit();
    }
  }

  onMouseLeave(): void {
    this.keyPressed = false;
  }

}
