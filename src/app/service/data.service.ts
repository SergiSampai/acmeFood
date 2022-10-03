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

  getCatalog(id: any){
    return this.http.get('http://localhost:8080/stores/catalog/'+ id)
  }

  searchStores(name:any){
    return this.http.get('http://localhost:8080/stores/searchName/' + name)
  }
}
