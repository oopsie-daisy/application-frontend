import {Component, OnInit} from '@angular/core';
import {FlowerService} from 'src/app/core/services/flower.service';
import {FlowerFilter} from 'src/app/model/search/flower-filter';
import {FlowerListView} from 'src/app/model/view/flower-list-view';
import {UrlConstants} from 'src/app/utils/url-constants';
import {FlowerColorEnum, FlowerColorEnumUtils} from 'src/app/model/enum/flower-color-enum';

@Component({
  selector: 'app-flowers-list',
  templateUrl: './flowers-list.component.html',
  styleUrls: ['./flowers-list.component.scss']
})
export class FlowersListComponent implements OnInit {

  UrlConstants = UrlConstants;
  FlowerColorEnum = FlowerColorEnum;
  ColorNames = FlowerColorEnumUtils.getTranslatedNames();

  flowerFilter = new FlowerFilter();
  list: FlowerListView[];

  constructor(private flowerService: FlowerService) {
  }

  ngOnInit(): void {
    this.filterFlowers();
  }

  filterFlowers(): void {
    this.flowerService.search(this.flowerFilter).subscribe(value => {
      this.list = value;
      this.list.forEach(flower => {
        let base64Data = flower.image;
        flower.image = 'data:image/jpeg;base64,' + base64Data;
      })
    });
  }

}
