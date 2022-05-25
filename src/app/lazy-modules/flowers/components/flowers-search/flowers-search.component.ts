import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FlowerFilter} from 'src/app/model/search/flower-filter';
import {AppConstants} from 'src/app/utils/app-constants';
import {FlowerColorEnum, FlowerColorEnumUtils} from 'src/app/model/enum/flower-color-enum';
import {Options} from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-flowers-search',
  templateUrl: './flowers-search.component.html',
  styleUrls: ['./flowers-search.component.scss']
})
export class FlowersSearchComponent implements OnInit {

  AppConstants = AppConstants;
  FlowerColors = FlowerColorEnum;
  FlowerColorTranslations = FlowerColorEnumUtils.getTranslatedNames();

  @Input()
  query = new FlowerFilter();

  @Output()
  search = new EventEmitter<FlowerFilter>();

  @Output()
  queryChange = new EventEmitter<FlowerFilter>();

  filterOpen: boolean = false;
  sliderOptions: Options;

  ngOnInit(): void {
    this.sliderOptions = {
      hidePointerLabels: true,
      hideLimitLabels: true,
      floor: 0,
      ceil: AppConstants.MAX_FLOWER_PRICE
    };
  }

  submitForm(): void {
    this.search.emit(this.query);
    this.filterOpen = false;
  }

  resetForm(): void {
    this.query = new FlowerFilter();
    this.query.priceTo = this.sliderOptions.ceil;
    this.queryChange.emit(this.query);
    this.search.emit(this.query);
  }

  changePriceFrom(value: number): void {
    if (value !== this.query.priceFrom) {
      this.query.priceFrom = value;
    }
  }

  changePriceTo(value: number): void {
    if (value !== this.query.priceTo) {
      this.query.priceTo = value;
    }
  }

}
