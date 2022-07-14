import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InsertBrandDtoReq } from '../../../dto/brand/insert-brand-dto-req';
import { BrandService } from '../../../service/brand.service';

@Component({
  selector: 'app-brand-save',
  templateUrl: './brand-save.component.html',
  styleUrls: ['./brand-save.component.css']
})
export class BrandSaveComponent implements OnInit,OnDestroy {

  brandSubsInsert? : Subscription
  insertBrandDtoReq : InsertBrandDtoReq = new InsertBrandDtoReq()

  constructor(private title : Title, private brandService : BrandService, private router : Router) {
    this.title.setTitle('Save Brand');
  }

  ngOnInit(): void {
  }

  save(valid : boolean) : void {
    if(valid){
      this.brandSubsInsert = this.brandService.insert(this.insertBrandDtoReq).subscribe(result=>{
        if(result.data.id) this.router.navigateByUrl('/brand/list')
      })
    }
  }
  
  ngOnDestroy(): void {
    this.brandSubsInsert?.unsubscribe()
  }
}
