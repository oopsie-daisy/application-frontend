import {Component, OnInit} from '@angular/core';
import {UrlConstants} from 'src/app/utils/url-constants';
import {ApiConstants} from 'src/app/utils/api-constants';
import {FlowerListView} from 'src/app/model/view/flower-list-view';
import {FlowerService} from 'src/app/core/services/flower.service';
import {ActivatedRoute} from '@angular/router';
import {FlowerColorEnumUtils} from 'src/app/model/enum/flower-color-enum';

@Component({
  selector: 'app-flowers-view',
  templateUrl: './flowers-view.component.html',
  styleUrls: ['./flowers-view.component.scss']
})
export class FlowersViewComponent implements OnInit {

  UrlConstants = UrlConstants;
  ApiConstants = ApiConstants;
  ColorNames = FlowerColorEnumUtils.getTranslatedNames();

  model: FlowerListView;

  coverImage: string;
  quantity = 1;

  constructor(private flowerService: FlowerService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.flowerService.findByUuid(this.activatedRoute.snapshot.params.id).subscribe(view => {
      this.model = view;
      let base64Data = this.model.image;
      this.coverImage = 'data:image/jpeg;base64,' + base64Data;
    });
  }

  startOrder(): void {
  //  functionality will be added later
  }

  increaseQuantity(num: number): void {
    this.quantity = num;
  }

}
