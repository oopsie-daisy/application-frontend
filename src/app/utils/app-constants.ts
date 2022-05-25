export class AppConstants {

  // Date
  public static readonly DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';
  public static readonly DEFAULT_DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';
  public static readonly DEFAULT_TIME_FORMAT = 'HH:mm';
  public static readonly LOCALE_DATE_FORMAT = 'LL';

  // Minimum three symbol search
  public static readonly MINIMUM_SEARCH_SYMBOLS = 3;

  // Maximum price for one flower item
  public static readonly MAX_FLOWER_PRICE = 300;

  // Misc
  public static readonly CURRENCY_EUR_SIGN = '€';

  public static compareById(o1: any, o2: any): boolean {
    return o1?.id === o2?.id;
  }

  public static compareByCode(o1: any, o2: any): boolean {
    return o1?.code === o2?.code;
  }

}
