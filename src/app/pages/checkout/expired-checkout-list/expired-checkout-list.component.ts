import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { CheckoutModelDto } from '../../../dto/checkout/checkout-model-dto';
import { CheckoutService } from '../../../service/checkout.service';

@Component({
  selector: 'app-expired-checkout-list',
  templateUrl: './expired-checkout-list.component.html',
  styleUrls: ['./expired-checkout-list.component.css']
})
export class ExpiredCheckoutListComponent implements OnInit,OnDestroy {

  checkouts? : CheckoutModelDto[] = []
  checkoutsSubs? : Subscription

  constructor(private title : Title, private checkoutService : CheckoutService) {
    this.title.setTitle('Expired Checkout List');
  }

  ngOnInit(): void {
    this.checkoutsSubs = this.checkoutService.getAllExpired().subscribe(result=>{
      this.checkouts = result.data
    })
  }

  ngOnDestroy(): void {
    this.checkoutsSubs?.unsubscribe()
  }
}
