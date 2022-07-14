import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssetModelDto } from '../../../dto/asset/asset-model-dto';
import { InsertCheckoutDtoReq } from '../../../dto/checkout/insert-checkout-dto-req';
import { EmployeeModelDto } from '../../../dto/employee/employee-model-dto';
import { AssetService } from '../../../service/asset.service';
import { CheckoutService } from '../../../service/checkout.service';
import { EmployeeService } from '../../../service/employee.service';

@Component({
  selector: 'app-checkout-save',
  templateUrl: './checkout-save.component.html',
  styleUrls: ['./checkout-save.component.css']
})
export class CheckoutSaveComponent implements OnInit,OnDestroy {
  
  assetSubs? : Subscription
  employeeSubs? : Subscription
  checkoutSubs? : Subscription
  assets? : AssetModelDto[] = []
  employees? : EmployeeModelDto[] = []

  insertCheckoutDtoReq : InsertCheckoutDtoReq = new InsertCheckoutDtoReq()

  constructor(private title : Title, private assetService : AssetService, private employeeService : EmployeeService,
              private checkoutService : CheckoutService, private router : Router) {
    this.title.setTitle('Save Checkout');
  }

  ngOnInit(): void {
    this.assetSubs = this.assetService.getAll().subscribe(result=>{
      this.assets = result.data
    })
    this.employeeSubs = this.employeeService.getAll().subscribe(result=>{
      this.employees = result.data
    })
  }

  save(valid : boolean) : void {
    if(valid){
      this.checkoutSubs = this.checkoutService.insert(this.insertCheckoutDtoReq).subscribe(result=>{
        if(result.data.id) this.router.navigateByUrl('/checkout/list')
      })
    }
  }

  ngOnDestroy(): void {
    this.assetSubs?.unsubscribe()
    this.employeeSubs?.unsubscribe()
    this.checkoutSubs?.unsubscribe()
  }

}
