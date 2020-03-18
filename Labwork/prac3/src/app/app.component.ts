import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: number[];
  title = 'Prac3';
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.data = this.ds.getData();
  }
}
