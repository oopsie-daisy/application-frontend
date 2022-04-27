import {Component} from '@angular/core';
import {Observable, of} from 'rxjs';

const SELECT_OBJECTS = [
  {label: 'Rožės', value: '1'},
  {label: 'Tulpės', value: '2'},
  {label: 'Gvazdikai', value: '3'},
]

@Component({
  selector: 'app-component-examples',
  templateUrl: './component-examples.component.html',
  styleUrls: ['./component-examples.component.scss']
})
export class ComponentExamplesComponent {

  text?: string;
  number?: number;
  selectValue: string;
  multiSelectValue: string[];
  searchSelectOptions$ = this.searchForSelect();
  check: boolean;
  check2: boolean;
  radioValue: string;
  date: string;
  rangeStart: string;
  rangeEnd: string;

  selectSearched(searchQuery: string): void {
    this.searchSelectOptions$ = this.searchForSelect(searchQuery);
  }

  searchForSelect(query?: string): Observable<any[]> {
    if (!query) {
      return of(SELECT_OBJECTS);
    }

    return of(SELECT_OBJECTS.filter(object => object.label.toLocaleLowerCase().startsWith(query.toLocaleLowerCase())));
  }

}
