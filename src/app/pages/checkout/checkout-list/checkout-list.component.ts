import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssetStatusModelDto } from '../../../dto/asset-status/asset-status-model-dto';
import { InsertCheckinDtoReq } from '../../../dto/checkin/insert-checkin-dto-req';
import { CheckoutModelDto } from '../../../dto/checkout/checkout-model-dto';
import { AssetStatusService } from '../../../service/asset-status.service';
import { CheckinService } from '../../../service/checkin.service';
import { CheckoutService } from '../../../service/checkout.service';

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.css']
})
export class CheckoutListComponent implements OnInit,OnDestroy {

  checkoutSubs? : Subscription
  checkoutId! : number
  checkouts? : CheckoutModelDto[] = []

  insertCheckinDtoReq : InsertCheckinDtoReq = new InsertCheckinDtoReq()

  constructor(private title : Title, private checkoutService : CheckoutService, 
              private checkinService : CheckinService, private router : Router) {
    this.title.setTitle('Checkout List');
  }

  ngOnInit(): void {
    this.checkoutSubs = this.checkoutService.getAll().subscribe(result=>{
      this.checkouts = result.data
    })
  }

  insert(id : number) : void {
    this.checkoutId = id
  }

  ngOnDestroy(): void {
    this.checkoutSubs?.unsubscribe()
  }
}
