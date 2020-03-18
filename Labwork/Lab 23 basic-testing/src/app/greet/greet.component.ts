import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../simple.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
  username: string;
  numberA = 0;
  numberB = 0;
  addResult = 0;
  constructor(private service: SimpleService) { }

  ngOnInit(): void {
  }

  getGreeting(): string {
    return this.service.sayHello(this.username);
  }

  add() {
    this.service.addNummbers(this.numberA, this.numberB).subscribe((result) => this.addResult = result);
  }
}
