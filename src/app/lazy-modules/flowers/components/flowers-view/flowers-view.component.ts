import {Component, OnInit} from '@angular/core';
import {UrlConstants} from 'src/app/utils/url-constants';
import {ApiConstants} from 'src/app/utils/api-constants';
import {FlowerView} from 'src/app/model/view/flower-view';
import {FlowerService} from 'src/app/core/services/flower.service';
import {ActivatedRoute, Router} from '@angular/router';
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

  model: FlowerView;

  coverImage: string;
  selectedQuantity = 1;
  availableQuantity: number;

  constructor(private flowerService: FlowerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.flowerService.findByUuid(this.activatedRoute.snapshot.params.id).subscribe(view => {
      this.model = view;
      let base64Data = this.model.image;
      this.coverImage = 'data:image/jpeg;base64,' + base64Data;

      this.flowerService.getAvailableQuantity(this.model.uuid).subscribe(value => {
        this.availableQuantity = value
      });
    });
  }

  startOrder(): void {
    this.router.navigate([UrlConstants.buildUrl(UrlConstants.PURCHASE)], {queryParams: {flowerUuid: this.model.uuid }})
  }

  changeQuantity(num: number): void {
    this.selectedQuantity = num;
  }

}
