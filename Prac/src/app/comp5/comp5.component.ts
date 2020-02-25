import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit {
  input2: string;

  @Output() childOutputEvent = new EventEmitter();
  emittingOutput() {
    this.childOutputEvent.emit(this.input2);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
