import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AssetStatusListComponent } from "./asset-status-list/asset-status-list.component";
import { AssetStatusSaveComponent } from "./asset-status-save/asset-status-save.component";
import { AssetStatusUpdateComponent } from "./asset-status-update/asset-status-update.component";

const routes : Routes = [
    {
        path : 'list',
        component : AssetStatusListComponent
    },
    {
        path : 'new',
        component : AssetStatusSaveComponent
    },
    {
        path : ':id',
        component : AssetStatusUpdateComponent
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

export class AssetStatusRouter {}