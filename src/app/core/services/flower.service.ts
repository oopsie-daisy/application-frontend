import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FlowerFilter} from 'src/app/model/search/flower-filter';
import {Observable} from 'rxjs';
import {FlowerListView} from 'src/app/model/view/flower-list-view';
import {ApiConstants} from 'src/app/utils/api-constants';
import {AppHttpParams} from 'src/app/model/common/app-http-params';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {

  constructor(private http: HttpClient) {
  }

  public search(search: FlowerFilter): Observable<FlowerListView[]> {
    const params = new AppHttpParams({params: JSON.parse(JSON.stringify(search))})
    // const params = new HttpParams({fromObject: JSON.parse(JSON.stringify(search))})
    return this.http.get<FlowerListView[]>(ApiConstants.FLOWERS, {params});
  }

  public findByUuid(uuid: string): Observable<FlowerListView> {
    const params = new AppHttpParams({})
    return this.http.get<FlowerListView>(ApiConstants.FLOWERS + '/' + uuid, {params});
  }

  public getAvailableQuantity(uuid: string): Observable<number> {
    const params = new AppHttpParams({})
    return this.http.get<number>(ApiConstants.FLOWERS + '/' + uuid + '/quantity', {params});
  }
}
