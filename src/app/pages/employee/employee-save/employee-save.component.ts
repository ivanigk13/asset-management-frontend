import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CompanyModelDto } from '../../../dto/company/company-model-dto';
import { InsertEmployeeDtoReq } from '../../../dto/employee/insert-employee-dto-req';
import { UserModelDto } from '../../../dto/user/user-model-dto';
import { CompanyService } from '../../../service/company.service';
import { EmployeeService } from '../../../service/employee.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-employee-save',
  templateUrl: './employee-save.component.html',
  styleUrls: ['./employee-save.component.css']
})
export class EmployeeSaveComponent implements OnInit,OnDestroy {

  userSubsUnemployee? : Subscription
  employeeSubsGetAll? : Subscription
  employeeSubsInsert? : Subscription
  users? : UserModelDto[] = []
  companies? : CompanyModelDto[] = []

  insertEmployeeDtoReq : InsertEmployeeDtoReq = new InsertEmployeeDtoReq()

  constructor(private title : Title, private userService : UserService,
              private companyService : CompanyService, private employeeService : EmployeeService, 
              private router : Router) {
    this.title.setTitle('Save Employee');
  }

  ngOnInit(): void {
    this.userSubsUnemployee = this.userService.getUnemployee().subscribe(result=>{
      this.users = result.data
    })
    this.employeeSubsGetAll = this.companyService.getAll().subscribe(result=>{
      this.companies = result.data
    })
  }

  save(valid : boolean) : void {
    if(valid){
      this.employeeSubsInsert = this.employeeService.insert(this.insertEmployeeDtoReq).subscribe(result=>{
        if(result.data.id) this.router.navigateByUrl('/employee/list')
      })
    }
  }

  ngOnDestroy(): void {
    this.userSubsUnemployee?.unsubscribe()
    this.employeeSubsGetAll?.unsubscribe()
    this.employeeSubsInsert?.unsubscribe()
  }
}
