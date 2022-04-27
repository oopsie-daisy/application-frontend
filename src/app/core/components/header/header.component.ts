import {Component} from '@angular/core';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {UrlConstants} from 'src/app/utils/url-constants';

class ExtNavItem {
  constructor(public url: string, public label: string, public iconClass: IconProp) {
  }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  UrlConstants = UrlConstants;

  navLinks: ExtNavItem[] = [];

  constructor() {
    this.buildNavLinks();
  }

  private buildNavLinks(): void {
    this.navLinks = [];
    const flowersNav = this.buildNavItem('Gėlės', ['fas', 'bahai'], UrlConstants.FLOWERS);
    this.navLinks.push(flowersNav);
    const plantsNav = this.buildNavItem('Augalai', ['fas', 'leaf'], UrlConstants.PLANTS);
    this.navLinks.push(plantsNav);
    const giftsNav = this.buildNavItem('Dovanos', ['fas', 'gift'], UrlConstants.GIFTS);
    this.navLinks.push(giftsNav);
    const decorationsNav = this.buildNavItem('Dekoracijos', ['fas', 'swatchbook'], UrlConstants.DECORATIONS);
    this.navLinks.push(decorationsNav);
    const aboutNav = this.buildNavItem('Apie', ['fas', 'info-circle'], UrlConstants.ABOUT);
    this.navLinks.push(aboutNav);
  }

  private buildNavItem(label: string, icon: IconProp, ...paths: string[]): ExtNavItem {
    return new ExtNavItem(UrlConstants.buildUrl(...paths), label, icon);
  }

}
