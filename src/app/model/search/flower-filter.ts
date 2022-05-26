import {FlowerColorEnum} from 'src/app/model/enum/flower-color-enum';
import {AppConstants} from 'src/app/utils/app-constants';

export class FlowerFilter {
  title: string;
  bouquet: boolean;
  color: FlowerColorEnum;
  priceFrom: number = 0;
  priceTo: number = AppConstants.MAX_FLOWER_PRICE;
}
