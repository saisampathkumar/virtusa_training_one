import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShoppingCart';
  count_array: number[];
  count_number: number;
  changer: boolean;

  receive_count_array($event) {
    this.count_array = $event;
  }
  receive_count_number($event) {
    this.count_number = $event;
  }
  receive_changer($event) {
    this.changer = $event;
  }
}
