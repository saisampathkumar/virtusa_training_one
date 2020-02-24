import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  productsList: string[] = ['iPhone, The iPhone is a smartphones designed by Apple',
   'iPad, iPad is a tablet computers designed by Apple',
   'Alienware, Alienware is an American computer hardware subsidiary of Dell.',
   'Samsung Galaxy, Samsung Galaxy is a mobile computing devices designed by Samsung Electronics.'
  ];
  constructor() { }

  getProductList() {
    return this.productsList;
  }
}

