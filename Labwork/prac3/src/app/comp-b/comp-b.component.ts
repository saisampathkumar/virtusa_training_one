import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss']
})
export class CompBComponent implements OnInit {

  data: number[];
  constructor(private ds: DataService) { }

  ngOnInit() {
    console.log(this.ds.getData() + 'from comp B' );
    this.data = this.ds.getData();
  }

}
