import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit, OnChanges, OnDestroy  {

  input1: string;
  constructor() {
    console.log('In constructor');
  }
  ngOnInit() {
    console.log('In NgOnInt');
  }
  ngOnChanges(x: any) {
    console.log('In NgOnChanges');
    console.log(x);
  }
  ngOnDestroy() {
    console.log('Component Destroyed');
  }

  logging() {
    console.log(this.input1);
    return this.input1;
  }

  alerting() {
    alert(this.input1);
  }
}
