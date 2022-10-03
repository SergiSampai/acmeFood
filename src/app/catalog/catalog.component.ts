
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  id: any;
  data: any;



  constructor(
    private route:ActivatedRoute,
    private dataService:DataService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getMenu();
  }

  getMenu(){
    this.dataService.getCatalog(this.id).subscribe(data=>{
      this.data=data;
      console.log(this.data);
    })
  }

}
