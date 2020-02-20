import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() count_array: number[];
  @Input() count_display_number: number = 0;

  constructor() { }
  itemsData: any[] = [{
    number: 0,
    name: "Apple",
    price: 2,
    imageUrl: "./assets/RedApple.jpeg",
  }, {
    number: 0,
    price: 6,
    name: "Mango",
    imageUrl: "./assets/Mango.jpg",
  }, {
    price: 2,
    number: 4,
    name: "Orange",
    imageUrl: "./assets/Orange.jpg",
  }, {
    number: 0,
    price: 8,
    name: "Pine Apple",
    imageUrl: "./assets/PineApple.jpeg",
  }, {
    number: 0,
    price: 10,
    name: "Water Mellon",
    imageUrl: "./assets/WaterMelon.jpg",
  }];

  isdisplayed: Boolean = false;
  total_price:number=0;;
  count_display() {
    this.isdisplayed = !this.isdisplayed;
    this.count_display_number = 0;
    this.total_price = 0;
    for (var i = 0; i < this.count_array.length; i++) {
      this.count_display_number += this.count_array[i];
      this.total_price = this.total_price + this.count_array[i] * this.itemsData[i].price;
      this.itemsData[i].number = this.count_array[i];
    }

  }

  isChanged: boolean = false;
  theme:string = "Black"
  click_change() {
    this.isChanged = !this.isChanged;
    this.send_array_count();
    this.theme = this.theme == "Black" ? this.theme="White" : this.theme="Black";
  }

  @Output() changer_event = new EventEmitter<boolean>();
  send_array_count() {
    this.changer_event.emit(this.isChanged);
  }
  
  ngOnInit(): void {
    this.count_array = [0, 0, 0, 0, 0];
  }

}
