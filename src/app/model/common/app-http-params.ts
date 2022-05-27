import {HttpParams} from '@angular/common/http';

export class AppHttpParams extends HttpParams {
  constructor(
    public options: {
      params?: { [param: string]: string | string[]; };
      responseLabel?: string;
      responseParams?: object;
      notifySuccess?: boolean;
      notifyError?: boolean;
      disableSpinner?: boolean;
    }
  ) {
    super({fromObject: options.params});
  }
}
