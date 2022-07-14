import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AssetTypeListComponent } from "./asset-type-list/asset-type-list.component";
import { AssetTypeSaveComponent } from "./asset-type-save/asset-type-save.component";
import { AssetTypeUpdateComponent } from "./asset-type-update/asset-type-update.component";

const routes : Routes = [
    {
        path : 'list',
        component : AssetTypeListComponent
    },
    {
        path : 'new',
        component : AssetTypeSaveComponent
    },
    {
        path : ':id',
        component : AssetTypeUpdateComponent
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

export class AssetTypeRouter {}