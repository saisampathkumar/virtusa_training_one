import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrls: ['./comp6.component.css']
})
export class Comp6Component implements OnInit {

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
