import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  totalRequests = 0;
  showSpinner$ = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  addRequest(): void {
    this.totalRequests++;
    if (this.totalRequests > 0) {
      this.showSpinner$.next(true);
    }
  }

  removeRequest(): void {
    this.totalRequests--;
    if (this.totalRequests <= 0) {
      this.showSpinner$.next(false);
    }
  }
}
