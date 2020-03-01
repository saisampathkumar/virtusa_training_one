import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private homeComponent: HomeComponent) { }

  ngOnInit() {
  }

  applySearch(txt: string) {
    // this.homeComponent.mainBody.catalogComponent.applySearch(txt);
    // console.log(txt);
    this.homeComponent.catalogComponent.applySearch(txt);
    console.log(txt);
  }
}
