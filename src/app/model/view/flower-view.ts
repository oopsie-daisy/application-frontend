import {FlowerColorEnum} from 'src/app/model/enum/flower-color-enum';

export class FlowerView {
  uuid: string;
  title: string;
  bouquet: boolean;
  baseColor: FlowerColorEnum;
  price: number;
  image: Blob[] | string;
}
