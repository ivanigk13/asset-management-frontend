import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AssetListComponent } from "./asset-list/asset-list.component";
import { AssetSaveComponent } from "./asset-save/asset-save.component";
import { AssetUpdateComponent } from "./asset-update/asset-update.component";
import { ExpiredAssetListComponent } from "./expired-asset-list/expired-asset-list.component";

const routes : Routes = [
    {
        path : 'list',
        component : AssetListComponent
    },
    {
        path : 'expired',
        component : ExpiredAssetListComponent
    },
    {
        path : 'new',
        component : AssetSaveComponent
    },
    {
        path : ':id',
        component : AssetUpdateComponent
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

export class AssetRouter {}