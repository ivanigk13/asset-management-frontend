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
  selector: 'app-checkout-uncheckin',
  templateUrl: './checkout-uncheckin.component.html',
  styleUrls: ['./checkout-uncheckin.component.css']
})
export class CheckoutUncheckinComponent implements OnInit,OnDestroy {

  uncheckinSubs? : Subscription
  statusSubs? : Subscription
  insertSubs? : Subscription
  checkoutId! : number
  checkouts? : CheckoutModelDto[] = []
  assetStatuses? : AssetStatusModelDto[] = []

  insertCheckinDtoReq : InsertCheckinDtoReq = new InsertCheckinDtoReq()

  constructor(private title : Title, private checkoutService : CheckoutService, 
              private assetStatusService : AssetStatusService, private checkinService : CheckinService,
              private router : Router) {
    this.title.setTitle('Un-Checkin List');
  }

  ngOnInit(): void {
    this.uncheckinSubs = this.checkoutService.getUncheckin().subscribe(result=>{
      this.checkouts = result.data
    })
    this.statusSubs = this.assetStatusService.getAll().subscribe(result=>{
      this.assetStatuses = result.data
    })
  }

  insert(id : number) : void {
    this.checkoutId = id
  }

  save(valid:boolean): void{
    if(valid){
      this.insertCheckinDtoReq.checkoutId = this.checkoutId
      this.insertSubs = this.checkinService.insert(this.insertCheckinDtoReq).subscribe(result=>{
        if(result.data.id) this.router.navigateByUrl('/checkin/list')
      })
    }
  }

  ngOnDestroy(): void {
    this.uncheckinSubs?.unsubscribe()
    this.statusSubs?.unsubscribe() 
    this.insertSubs?.unsubscribe()
  }
}
