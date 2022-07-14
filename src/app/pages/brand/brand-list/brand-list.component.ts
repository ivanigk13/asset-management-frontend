import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BrandModelDto } from '../../../dto/brand/brand-model-dto';
import { BrandService } from '../../../service/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit,OnDestroy {

  brandSubsGetAll? : Subscription
  brandSubsDelete? : Subscription
  idDeleted! : number
  brands? : BrandModelDto[] = []

  constructor(private title : Title, private brandService : BrandService, private router : Router) {
    this.title.setTitle('Brand List');
  }

  ngOnInit(): void {
    this.fill()
  }

  fill() : void {
    this.brandSubsGetAll = this.brandService.getAll().subscribe(result=>{
      this.brands = result.data
    })
  }

  update(id : number) : void {
    this.router.navigateByUrl('/brand/'+id)
  }

  delete(id : number) : void {
    this.idDeleted = id
  }

  doDelete() : void {
    this.brandSubsDelete = this.brandService.delete(this.idDeleted).subscribe(result=>{
      if(result.msg) this.fill()
    })
  }

  ngOnDestroy(): void {
    this.brandSubsGetAll?.unsubscribe()
    this.brandSubsDelete?.unsubscribe()
  }
}
