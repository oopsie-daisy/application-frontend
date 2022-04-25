import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

import {
  faCheck,
  faCircle,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

import {
  faCheckCircle,
  faTimesCircle
} from '@fortawesome/free-regular-svg-icons'

export class FaUtils {
  public static getAppIcons(): IconDefinition[] {
    return [
      faCircle,
      faCheck,
      faTimes,
      faCheckCircle,
      faTimesCircle
    ];
  }
}
