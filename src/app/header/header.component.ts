import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
  }

  getStores(){
      console.log(document.getElementById("search")?.innerHTML.valueOf())
  }

}
