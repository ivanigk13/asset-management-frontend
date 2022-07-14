import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CheckinListComponent } from "./checkin-list/checkin-list.component";

const routes : Routes = [
    {
        path:'list',
        component: CheckinListComponent
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

export class CheckinRouter {}