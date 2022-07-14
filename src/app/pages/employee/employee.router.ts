import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeSaveComponent } from "./employee-save/employee-save.component";
import { EmployeeUpdateComponent } from "./employee-update/employee-update.component";

const routes : Routes = [
    {
        path : 'list',
        component : EmployeeListComponent
    },
    {
        path : 'new',
        component : EmployeeSaveComponent
    },
    {
        path : ':id',
        component : EmployeeUpdateComponent
    }
]

@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class EmployeeRouter {}