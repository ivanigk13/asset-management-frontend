import { NgModule } from "@angular/core";
import { EmployeeSaveComponent } from './employee-save/employee-save.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRouter } from "./employee.router";
import { FormsModule } from "@angular/forms";
import { ComponentModule } from "../../components/component.module";
import { CommonModule } from "@angular/common";
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';

@NgModule({
  declarations: [
    EmployeeSaveComponent,
    EmployeeListComponent,
    EmployeeUpdateComponent
  ],
  imports : [
    EmployeeRouter,
    FormsModule,
    ComponentModule,
    CommonModule
  ]
})

export class EmployeeModule {}