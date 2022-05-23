import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  @HostBinding()
  class = 'breadcrumb__items';

  @Input()
  first = false;

}
