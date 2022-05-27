import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FlowerFilter} from 'src/app/model/search/flower-filter';
import {Observable} from 'rxjs';
import {FlowerListView} from 'src/app/model/view/flower-list-view';
import {ApiConstants} from 'src/app/utils/api-constants';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {

  constructor(private http: HttpClient) {
  }

  public search(search: FlowerFilter): Observable<FlowerListView[]> {
    const params = new HttpParams({fromObject: JSON.parse(JSON.stringify(search))})
    return this.http.get<FlowerListView[]>(ApiConstants.FLOWERS, {params});
  }

  public findByUuid(uuid: string): Observable<FlowerListView> {
    return this.http.get<FlowerListView>(ApiConstants.FLOWERS + '/' + uuid);
  }

  public getAvailableQuantity(uuid: string): Observable<number> {
    return this.http.get<number>(ApiConstants.FLOWERS + '/' + uuid + '/quantity');
  }
}
