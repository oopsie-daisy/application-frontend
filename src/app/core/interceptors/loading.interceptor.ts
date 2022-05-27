import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoadingService} from 'src/app/core/services/loading.service';
import {AppHttpParams} from 'src/app/model/common/app-http-params';
import {finalize} from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.params instanceof AppHttpParams && request.params.options.disableSpinner) {
      console.log("here")
      return next.handle(request);
    }

    setTimeout(() => this.loadingService.addRequest());
    return next.handle(request).pipe(finalize(() => this.loadingService.removeRequest()));
  }
}
