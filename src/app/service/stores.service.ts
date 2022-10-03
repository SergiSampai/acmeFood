import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  private url = 'http://localhost:8080/all';
  constructor(private httpClient: HttpClient) { }

  getStores(){
    return this.httpClient.get(this.url);
  }
}
