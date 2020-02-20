import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor() { }

  @Input() quantity: number[] = [0, 0, 0, 0, 0];
  quan: number = 0;
  itemsData: any[] = [{
    number: 1,
    price: 2,
    name: "Apple",
    imageUrl: "./assets/RedApple.jpeg",
  }, {
    number: 2,
    price: 6,
    name: "Mango",
    imageUrl: "./assets/Mango.jpg",
  }, {
    number: 3,
    price: 4,
    name: "Orange",
    imageUrl: "./assets/Orange.jpg",
  }, {
    price: 8,
    number: 4,
    name: "Pine Apple",
    imageUrl: "./assets/PineApple.jpeg",
  }, {
    price: 10,
    number: 5,
    name: "Water Melon",
    imageUrl: "./assets/WaterMelon.jpg",
  }];


  display_prod_id: number = 0;
  display_details(id: number) {
    this.display_prod_id = id;
  }

  increase_count(n: number) {
    this.quantity[n - 1]++;
    this.isChecked[n] = true;
    this.Send_array_data();
    this.send_array_count()
  }
  decrease_count(n: number) {
    if (this.quantity[n - 1] > 0) {
      this.quantity[n - 1]--;
      this.Send_array_data();
      this.send_array_count()
    }
    // else if(this.quantity[n-1]==1){
    //   this.quantity[n - 1]--;
    //   this.isChecked[n-1] = false;
    //   this.Send_array_data();
    //   this.send_array_count();
    // }
  }
  @Output() array_data_event = new EventEmitter<number[]>();
  Send_array_data() {
    this.array_data_event.emit(this.quantity);
    // Storing data locally
    localStorage.setItem(
      'quantity_array',
      JSON.stringify(this.quantity)
    );
  }
  @Output() array_count_event = new EventEmitter<number>();
  send_array_count() {
    this.quan = 0;
    for (var i = 0; i < this.quantity.length; i++) {
      this.quan += this.quantity[i];
    }
    this.array_count_event.emit(this.quan);
  }
  
  getData() {
    if (localStorage.getItem('quantity_array') == null) {
      this.quantity = [0, 0, 0, 0, 0];
    }
    else {
      this.quantity = JSON.parse(localStorage.getItem('quantity_array'));
    }
    this.Send_array_data();
    this.send_array_count();
  }

  @Input() changer: boolean;
  isChecked:boolean[] = [false,false,false,false,false];
  check_checked(id:number){
    if(this.isChecked[id] == false && this.quantity[id-1]==0){
      this.isChecked[id] = true;
      this.quantity[id-1] = 1;
      this.Send_array_data();
      this.send_array_count();
    }else if(this.isChecked[id] == true && this.quantity[id-1]>0){
      this.isChecked[id] = false;
      this.quantity[id-1] = 0;
      this.Send_array_data();
      this.send_array_count();
    }

  }
  ngOnInit(): void {
    this.display_prod_id = 0;
    this.getData();
  }

}
