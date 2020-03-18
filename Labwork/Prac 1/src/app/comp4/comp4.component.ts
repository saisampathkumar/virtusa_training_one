import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  input3: string;

  constructor() { }

  ngOnInit(): void {
  }

  receiveOutput($event) {
    this.input3 =  $event;
  }
}
