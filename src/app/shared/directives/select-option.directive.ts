import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appSelectOption]'
})
export class SelectOptionDirective {

  @Input('appSelectOption') value: any;

  constructor(public templateRef: TemplateRef<any>) {
  }

}
