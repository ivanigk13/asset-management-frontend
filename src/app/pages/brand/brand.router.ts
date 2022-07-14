import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrandListComponent } from "./brand-list/brand-list.component";
import { BrandSaveComponent } from "./brand-save/brand-save.component";
import { BrandUpdateComponent } from "./brand-update/brand-update.component";

const routes : Routes = [
    {
        path : 'list',
        component : BrandListComponent
    },
    {
        path : 'new',
        component : BrandSaveComponent
    },
    {
        path : ':id',
        component : BrandUpdateComponent
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

export class BrandRouter {}