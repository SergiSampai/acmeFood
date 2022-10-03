import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  stores:any =[];

  constructor(private service:DataService) { }

  ngOnInit() {
    this.service.getStores()
    .subscribe(response =>{
      this.stores = response;
    })
  }

}
