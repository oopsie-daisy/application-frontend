import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'uppercaseFirstLetter'
})
export class UppercaseFirstLetterPipe implements PipeTransform {

  transform(value: string): string {
    return value[0].toUpperCase() + value.substring(1);
  }

}
