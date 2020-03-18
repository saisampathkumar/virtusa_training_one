import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  datalist: string[];
  namedata: string;
  descriptiondata: string;
  clickdata: string;
  constructor(private ps: ProductsServiceService) {
  }

  getnamedata($event) {
    this.namedata = $event;
  }

  getdescriptiondata($event) {
    this.descriptiondata = $event;
  }

  getclickdata($event) {
    this.clickdata = $event;
  }

  adddata() {
    if (this.descriptiondata != null && this.namedata != null) {
      this.datalist.push(this.namedata + ', ' + this.descriptiondata);
    }
  }



  ngOnInit(): void {
    this.datalist = this.ps.getProductList();
  }

}
