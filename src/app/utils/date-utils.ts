import * as moment from 'moment';

export class DateUtils {

  public static formatDateToIsoString(date: moment.Moment): string {
    return date?.toISOString()?.split('T')[0];
  }

}
