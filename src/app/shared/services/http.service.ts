import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ComboItem } from '../models/combo-item.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public send<Model>(route: string, model: Model): Observable<Model> {
    return this.httpClient.post<Model>(environment.baseApiUrl + route, model);
  }

  public getAuthTest<Model>(route: string): Observable<Model> {
    return this.httpClient.get<Model>(environment.baseApiUrl + route);
  }

  public get<Model>(route: string, id: number): Observable<Model> {
    return this.httpClient.get<Model>(environment.baseApiUrl + route + '/' + id);
  }

  public delete(route: string, id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(environment.baseApiUrl + route + '/' + id);
  }

  public list<Model>(route: string, query: object): Observable<Array<Model>> {
    return this.httpClient.post<Array<Model>>(environment.baseApiUrl + route + '/list', query);
  }

  public update<Model>(route: string, model: Model): Observable<Model> {
    return this.httpClient.put<Model>(environment.baseApiUrl + route, model);
  }

  public combo(route: string, filter: object): Observable<Array<ComboItem>> {
    return this.httpClient.post<Array<ComboItem>>(environment.baseApiUrl + route + '/combo', filter);
  }
}
