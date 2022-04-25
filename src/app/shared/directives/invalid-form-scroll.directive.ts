import {Directive, ElementRef, HostListener} from '@angular/core';
import {ScrollUtils} from 'src/app/utils/scroll-utils';

@Directive({
  selector: '[appInvalidFormScroll]'
})
export class InvalidFormScrollDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('ngSubmit')
  onSubmit(): void {
    ScrollUtils.scrollToElement(this.el.nativeElement.querySelector('.mat-form-field.ng-invalid'));
  }

}
