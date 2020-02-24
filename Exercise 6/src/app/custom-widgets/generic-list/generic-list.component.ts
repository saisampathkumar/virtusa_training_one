import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css']
})
export class GenericListComponent implements OnInit {
  constructor() {
   }
  @Input() data: string[];

  @Output() clickdataevent = new EventEmitter();
  ngOnInit(): void {
  }
  onClick(clickdata: string) {
    this.clickdataevent.emit(clickdata);
  }

}
