import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {UrlConstants} from 'src/app/utils/url-constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  UrlConstants = UrlConstants;

  year = moment().year();

  constructor() { }

  ngOnInit(): void {
  }

}
