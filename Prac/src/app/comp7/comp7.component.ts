import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp7',
  templateUrl: './comp7.component.html',
  styleUrls: ['./comp7.component.css']
})
export class Comp7Component implements OnInit {
  input1: string;
  input2: string;
  output = new Date();

  formOutput(v: object) {
    console.log(v);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
