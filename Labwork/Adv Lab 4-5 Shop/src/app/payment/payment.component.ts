import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  showProgress = false;
  paymentForm: any;
  constructor(private cartSvc: CartService) { }

  ngOnInit() {
  }

  makePayment() {
    this.showProgress = true;
    this.cartSvc.makePayment(this.paymentForm.value).subscribe(
      _ => this.showProgress = false,
      _ => this.showProgress = false
    );
  }
}
