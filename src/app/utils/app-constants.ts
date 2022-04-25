export class AppConstants {

  // Date
  public static readonly DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';
  public static readonly DEFAULT_DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';
  public static readonly DEFAULT_TIME_FORMAT = 'HH:mm';
  public static readonly LOCALE_DATE_FORMAT = 'LL';

  public static compareById(o1: any, o2: any): boolean {
    return o1?.id === o2?.id;
  }

  public static compareByCode(o1: any, o2: any): boolean {
    return o1?.code === o2?.code;
  }

}
