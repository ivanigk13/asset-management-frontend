import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from '../../components/component.module';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetSaveComponent } from './asset-save/asset-save.component';
import { AssetRouter } from './asset.router';
import { ExpiredAssetListComponent } from './expired-asset-list/expired-asset-list.component';
import { AssetUpdateComponent } from './asset-update/asset-update.component';

@NgModule({
    declarations : [
        AssetListComponent,
        AssetSaveComponent,
        ExpiredAssetListComponent,
        AssetUpdateComponent
    ],
    imports : [
        AssetRouter,
        FormsModule,
        ComponentModule,
        CommonModule
    ]
})

export class AssetModule {}