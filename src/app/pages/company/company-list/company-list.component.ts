import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CompanyModelDto }  from '../../../dto/company/company-model-dto';
import { CompanyService }   from '../../../service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit,OnDestroy {

  companySubsGetAll? : Subscription
  companySubsDelete? : Subscription
  idDeleted! : number
  companies? : CompanyModelDto[] = []

  constructor(private title : Title, private companyService : CompanyService, private router : Router) {
    this.title.setTitle('Company List');
  }

  ngOnInit(): void {
    this.fill()
  }

  fill() : void {
    this.companySubsGetAll = this.companyService.getAll().subscribe(result=>{
      this.companies = result.data
    })
  }

  update(id : number) : void {
    this.router.navigateByUrl('/company/'+id)
  }

  delete(id : number) : void {
    this.idDeleted = id
  }

  doDelete() : void {
    this.companySubsDelete = this.companyService.delete(this.idDeleted).subscribe(result=>{
      if(result.msg) this.fill()
    })
  }

  ngOnDestroy(): void {
    this.companySubsGetAll?.unsubscribe()
    this.companySubsDelete?.unsubscribe()
  }
}
