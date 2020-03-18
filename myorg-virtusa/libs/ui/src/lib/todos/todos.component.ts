import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@myorg-virtusa/data';

@Component({
  selector: 'myorg-virtusa-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {}

  ngOnInit() {}
}