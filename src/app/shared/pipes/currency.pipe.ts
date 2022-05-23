import {Pipe, PipeTransform} from '@angular/core';
import {AppConstants} from 'src/app/utils/app-constants';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number): string {
    if (isNaN(value) || typeof value !== 'number') {
      return '-';
    }

    return value.toFixed(2).replace('.', ',') + ' ' + AppConstants.CURRENCY_EUR_SIGN;
  }

}
