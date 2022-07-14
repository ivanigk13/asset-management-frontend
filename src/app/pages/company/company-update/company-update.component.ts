import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UpdateCompanyDtoReq } from '../../../dto/company/update-company-dto-req';
import { CompanyService } from '../../../service/company.service';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit,OnDestroy {

  companySubsGetById? : Subscription
  companySubsUpdate? : Subscription
  updateCompanyDtoReq : UpdateCompanyDtoReq = new UpdateCompanyDtoReq()

  constructor(private title : Title, private companyService : CompanyService, private router : Router,
              private activedRoute : ActivatedRoute) {
    this.title.setTitle('Update Company')
  }

  ngOnInit(): void {
    this.companySubsGetById = this.activedRoute.params.subscribe(result=>{
      this.companyService.getById((result as any).id).subscribe(result=>{
        this.updateCompanyDtoReq.id = result.data.id
        this.updateCompanyDtoReq.companyName = result.data.companyName
        this.updateCompanyDtoReq.companyAddress = result.data.companyAddress
        this.updateCompanyDtoReq.version = result.data.version
      })
    })
  }

  update(valid : boolean) {
    if(valid){
      this.companySubsUpdate = this.companyService.update(this.updateCompanyDtoReq).subscribe(result=>{
        if(result.data.version) this.router.navigateByUrl('/company/list')
      })
    }
  }

  ngOnDestroy(): void {
    this.companySubsGetById?.unsubscribe()
    this.companySubsUpdate?.unsubscribe()
  }
}
