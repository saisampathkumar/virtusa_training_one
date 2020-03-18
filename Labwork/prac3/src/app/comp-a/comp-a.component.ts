import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss']
})
export class CompAComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  the_num: number;
  constructor(private ds: DataService) { }

  ngOnInit() {
  }

  setData() {
    this.ds.pushData(this.the_num);
  }

}
