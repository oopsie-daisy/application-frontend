import {FlowerColorEnum} from 'src/app/model/enum/flower-color-enum';

export class FlowerFilter {
  title: string;
  bouquet: boolean;
  color: FlowerColorEnum;
  priceFrom: number;
  priceTo: number;
}
