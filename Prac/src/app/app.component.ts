import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prac';
  constructor() {
    console.log("In constructor")
  }
  ngOnInit(){
    console.log("In NgOnInt")
  }
  ngOnChanges(){
    console.log("In NgOnChanges")
  }
  ngOnDestroy(){
    console.log("In NgOnDestroy")
  }
}
