import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompanyListComponent } from "./company-list/company-list.component";
import { CompanySaveComponent } from "./company-save/company-save.component";
import { CompanyUpdateComponent } from "./company-update/company-update.component";

const routes : Routes = [
    {
        path:'list',
        component: CompanyListComponent
    },
    {
        path:'new',
        component: CompanySaveComponent
    },
    {
        path:':id',
        component: CompanyUpdateComponent
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

export class CompanyRouter {}