export enum FlowerColorEnum {
  RED = 'RED',
  YELLOW = 'YELLOW',
  PINK = 'PINK',
  ORANGE = 'ORANGE',
  WHITE = 'WHITE',
}

export class FlowerColorEnumUtils {
  public static getTranslatedNames(): {[name: string]: [translation: string]} {
    return {
      'RED': ['raudona'],
      'YELLOW': ['geltona'],
      'PINK': ['rožinė'],
      'ORANGE': ['oranžinė'],
      'WHITE': ['balta'],
    }
  }
}
