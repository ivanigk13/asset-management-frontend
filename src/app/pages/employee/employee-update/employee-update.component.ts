import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CompanyModelDto } from '../../../dto/company/company-model-dto';
import { UpdateEmployeeDtoReq } from '../../../dto/employee/update-employee-dto-req';
import { CompanyService } from '../../../service/company.service';
import { EmployeeService } from '../../../service/employee.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit,OnDestroy {

  companySubsGetAll? : Subscription
  employeeSubsGetById? : Subscription
  employeeSubsUpdate? : Subscription

  companies? : CompanyModelDto[] = []
  updateEmployeeDtoReq : UpdateEmployeeDtoReq = new UpdateEmployeeDtoReq()

  constructor(private title : Title, private userService : UserService, 
    private companyService : CompanyService, private employeeService : EmployeeService, 
    private router : Router, private activedRoute : ActivatedRoute) {
    this.title.setTitle('Update Employee')
  }

  ngOnInit(): void {
    this.companySubsGetAll = this.companyService.getAll().subscribe(result=>{
      this.companies = result.data
    })
    this.employeeSubsGetById = this.activedRoute.params.subscribe(result=>{
      this.employeeService.getById((result as any).id).subscribe(result=>{
        this.updateEmployeeDtoReq.id = result.data.id
        this.updateEmployeeDtoReq.employeeName = result.data.employeeName
        this.updateEmployeeDtoReq.version = result.data.version
      })
    })
  }

  update(valid : boolean) {
    if(valid){
      this.employeeSubsUpdate = this.employeeService.update(this.updateEmployeeDtoReq).subscribe(result=>{
        if(result.data.version) this.router.navigateByUrl('/employee/list')
      })
    }
  }

  ngOnDestroy(): void {
    this.companySubsGetAll?.unsubscribe()
    this.employeeSubsGetById?.unsubscribe()
    this.employeeSubsUpdate?.unsubscribe()
  }
}
