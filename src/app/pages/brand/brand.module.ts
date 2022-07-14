import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ComponentModule } from "../../components/component.module";
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandSaveComponent } from './brand-save/brand-save.component';
import { BrandRouter } from "./brand.router";
import { BrandUpdateComponent } from './brand-update/brand-update.component';

@NgModule({
  declarations: [
    BrandListComponent,
    BrandSaveComponent,
    BrandUpdateComponent
  ],
  imports : [
    BrandRouter,
    FormsModule,
    ComponentModule,
    CommonModule
  ]
})

export class BrandModule {}