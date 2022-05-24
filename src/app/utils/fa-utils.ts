import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

import {
  faCheck,
  faCircle,
  faTimes,
  faBahai,
  faLeaf,
  faGift,
  faSwatchbook,
  faInfoCircle,
  faUser,
  faSearch,
  faShoppingCart,
  faLocationDot,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';

import {
  faInstagram,
  faWhatsapp,
  faFacebook
} from '@fortawesome/free-brands-svg-icons'

export class FaUtils {
  public static getAppIcons(): IconDefinition[] {
    return [
      faCircle,
      faCheck,
      faTimes,
      faCheckCircle,
      faTimesCircle,
      faBahai,
      faLeaf,
      faGift,
      faSwatchbook,
      faInfoCircle,
      faUser,
      faSearch,
      faShoppingCart,
      faLocationDot,
      faInstagram,
      faWhatsapp,
      faFacebook,
      faChevronRight
    ];
  }
}
