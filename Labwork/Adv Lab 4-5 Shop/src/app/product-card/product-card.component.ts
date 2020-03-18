import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { PopupMenuComponent } from '../popup-menu/popup-menu.component';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @ViewChild(PopupMenuComponent, {static: false}) menu: PopupMenuComponent;

  constructor(private cartSvc: CartService) { }


  ngOnInit() {
  }
  openMenu(e: MouseEvent) {
    this.menu.open(e);
  }
  share(target: string) {
    console.log('sharing %s with: %s', this.product.name, target);
  }
  clickNow() {
    console.log(this.product.description);
  }
  addtoCart() {
    this.cartSvc.addToCart({
      product: this.product,
      quantity: 1
    });
    return false;
  }
}
