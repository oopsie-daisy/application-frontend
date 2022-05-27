export enum CitiesEnum {
  VILNIUS = 'VILNIUS',
  KAUNAS = 'KAUNAS',
  KLAIPEDA = 'KLAIPEDA',
  SIAULIAI = 'SIAULIAI',
  PANEVEZYS = 'PANEVEZYS'
}

export class CitiesEnumUtils {
  public static getCitiesInOrder(): CitiesEnum[] {
    return [
      CitiesEnum.VILNIUS,
      CitiesEnum.KAUNAS,
      CitiesEnum.KLAIPEDA,
      CitiesEnum.SIAULIAI,
      CitiesEnum.PANEVEZYS
    ]
  }
  public static getCityTranslations(): {[name: string]: [translation: string]} {
    return {
      'VILNIUS': ['Vilnius'],
      'KAUNAS': ['Kaunas'],
      'KLAIPEDA': ['Klaipėda'],
      'SIAULIAI': ['Šiauliai'],
      'PANEVEZYS': ['Panevėžys'],
    }
  }
}
