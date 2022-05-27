import {Directive, Input, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Directive()
export abstract class StepFormComponent {

  @ViewChild('form')
  form: NgForm;

  @Input()
  stepIndex: number;

}
