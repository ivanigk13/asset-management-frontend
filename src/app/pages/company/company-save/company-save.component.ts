import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InsertCompanyDtoReq } from '../../../dto/company/insert-company-dto-req';
import { CompanyService } from '../../../service/company.service';

@Component({
  selector: 'app-company-save',
  templateUrl: './company-save.component.html',
  styleUrls: ['./company-save.component.css']
})
export class CompanySaveComponent implements OnInit,OnDestroy {

  companySubsInsert? : Subscription
  insertCompanyDtoReq : InsertCompanyDtoReq = new InsertCompanyDtoReq()

  constructor(private title : Title, private companyService : CompanyService, private router : Router) {
    this.title.setTitle('Save Company');
  }

  ngOnInit(): void {
  }

  save(valid : boolean) : void {
    if(valid){
      this.companySubsInsert = this.companyService.insert(this.insertCompanyDtoReq).subscribe(result=>{
        if(result.data.id) this.router.navigateByUrl('/company/list')
      })
    }
  }
  
  ngOnDestroy(): void {
    this.companySubsInsert?.unsubscribe()
  }
}
