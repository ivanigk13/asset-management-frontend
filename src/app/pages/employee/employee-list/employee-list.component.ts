import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeModelDto } from '../../../dto/employee/employee-model-dto';
import { EmployeeService } from '../../../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit,OnDestroy {

  employeeSubsGetAll? : Subscription
  employeeSubsDelete? : Subscription
  idDeleted! : number
  employees? : EmployeeModelDto[] = []

  constructor(private title : Title, private employeeService : EmployeeService, private router : Router) {
    this.title.setTitle('Employee List');
  }

  ngOnInit(): void {
    this.fill()
  }

  fill() : void {
    this.employeeSubsGetAll = this.employeeService.getAll().subscribe(result=>{
      this.employees = result.data
    })
  }

  update(id : number) : void {
    this.router.navigateByUrl('/employee/'+id)
  }

  delete(id : number) : void {
    this.idDeleted = id
  }

  doDelete() : void {
    this.employeeSubsDelete = this.employeeService.delete(this.idDeleted).subscribe(result=>{
      if(result.msg) this.fill()
    })
  }

  ngOnDestroy(): void {
    this.employeeSubsDelete?.unsubscribe()
    this.employeeSubsGetAll?.unsubscribe()
  }
}
