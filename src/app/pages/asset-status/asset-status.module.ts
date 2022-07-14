import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ComponentModule } from "../../components/component.module";
import { AssetStatusListComponent } from './asset-status-list/asset-status-list.component';
import { AssetStatusSaveComponent } from './asset-status-save/asset-status-save.component';
import { AssetStatusRouter } from "./asset-status.router";
import { AssetStatusUpdateComponent } from './asset-status-update/asset-status-update.component';

@NgModule({
  declarations: [
    AssetStatusListComponent,
    AssetStatusSaveComponent,
    AssetStatusUpdateComponent
  ],
  imports : [
    AssetStatusRouter,
    FormsModule,
    ComponentModule,
    CommonModule
  ]
})

export class AssetStatusModule {}