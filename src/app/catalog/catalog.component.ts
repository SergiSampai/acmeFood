import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  stores:any =[];

  constructor(private service:DataService) { }

  ngOnInit() {
    this.service.getCatalog(this.stores.id)
    .subscribe(response =>{
      this.stores = response;
    })
  }

}
