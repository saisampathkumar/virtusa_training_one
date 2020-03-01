import { Component, OnInit, ViewChild } from '@angular/core';
import { CatalogComponent } from '../catalog/catalog.component';
import { MainBodyComponent } from '../main-body/main-body.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @ViewChild(MainBodyComponent, {static: false})
  // mainBody: MainBodyComponent;
  catalogComponent: CatalogComponent;

  constructor() { }

  ngOnInit() {
  }

}
