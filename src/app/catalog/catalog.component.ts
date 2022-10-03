import { DataService } from './../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  stores:any =[];
  dataService: any;

  constructor(private route:ActivatedRoute, private service:DataService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getMenu();
    }
  }

  getMenu() {
    this.dataService.getCatalog(this.id).subcribe(data=>{
      this.data=data;

    })
  }

}
