import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-input-form',
  templateUrl: './products-input-form.component.html',
  styleUrls: ['./products-input-form.component.css']
})
export class ProductsInputFormComponent implements OnInit {
  constructor() { }
  productname: string;
  productdescription: string;

@Output() nameevent = new EventEmitter();

@Output() descriptionevent = new EventEmitter();
  ngOnInit(): void {
  }

nameupdate() {
    this.nameevent.emit(this.productname);
    console.log(this.productname);
  }
descriptionupdate() {
  this.descriptionevent.emit(this.productdescription);
}
}
