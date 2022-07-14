import { NgModule } from "@angular/core";
import { AssetTypeSaveComponent } from './asset-type-save/asset-type-save.component';
import { AssetTypeListComponent } from './asset-type-list/asset-type-list.component';
import { AssetTypeRouter } from "./asset-type.router";
import { FormsModule } from "@angular/forms";
import { ComponentModule } from "../../components/component.module";
import { CommonModule } from "@angular/common";
import { AssetTypeUpdateComponent } from './asset-type-update/asset-type-update.component';

@NgModule({
  declarations: [
    AssetTypeSaveComponent,
    AssetTypeListComponent,
    AssetTypeUpdateComponent
  ],
  imports : [
    AssetTypeRouter,
    FormsModule,
    ComponentModule,
    CommonModule
  ]
})

export class AssetTypeModule {}