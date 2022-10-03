import { StoresService } from './../service/stores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  stores:any =[];

  constructor(private service:StoresService) { }

  ngOnInit() {
    this.service.getStores()
    .subscribe(response =>{
      this.stores = response;
    })
  }

}
