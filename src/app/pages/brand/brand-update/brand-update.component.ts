import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UpdateBrandDtoReq } from '../../../dto/brand/update-brand-dto-req';
import { BrandService } from '../../../service/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit,OnDestroy {

  brandSubsUpdate? : Subscription
  brandSubsGetById? : Subscription
  updateBrandDtoReq : UpdateBrandDtoReq = new UpdateBrandDtoReq()

  constructor(private title : Title, private brandService : BrandService, private router : Router,
              private activedRoute : ActivatedRoute) {
    this.title.setTitle('Update Brand')
  }

  ngOnInit(): void {
    this.brandSubsGetById = this.activedRoute.params.subscribe(result=>{
      this.brandService.getById((result as any).id).subscribe(result=>{
        this.updateBrandDtoReq.id = result.data.id
        this.updateBrandDtoReq.brandName = result.data.brandName
        this.updateBrandDtoReq.version = result.data.version
      })
    })
  }

  update(valid : boolean) {
    if(valid){
      this.brandSubsUpdate = this.brandService.update(this.updateBrandDtoReq).subscribe(result=>{
        if(result.data.version) this.router.navigateByUrl('/brand/list')
      })
    }
  }
  
  ngOnDestroy(): void {
    this.brandSubsUpdate?.unsubscribe()
    this.brandSubsGetById?.unsubscribe()
  }
}
