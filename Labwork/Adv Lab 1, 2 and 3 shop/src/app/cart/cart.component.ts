import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemCount = 0;
  subscription: Subscription;
  constructor(private cartSvc: CartService) { }

  getCart() {
    return this.cartSvc.userCart;
  }
  ngOnInit() {
    this.subscription = this.cartSvc.cartSubject.subscribe(cart =>
      this.itemCount = cart.length);
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
