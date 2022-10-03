import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ApiResponse } from '../model/apiResponse';
import { Store } from '../model/store';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  baseUrl: String = 'http://localhost:8080';

  getStores(): Observable<ApiResponse<Store>> {
    return this.http.get<ApiResponse<Store>>(this.baseUrl + '/stores');
  }

  getCatalog(storeId:String): Observable<ApiResponse<Store>> {
    return this.http.get<ApiResponse<Store>>(this.baseUrl + '/stores/catalog/?id=' + storeId);
  }
}
