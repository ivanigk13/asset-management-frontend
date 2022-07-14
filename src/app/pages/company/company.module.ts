import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ComponentModule } from "../../components/component.module";
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanySaveComponent } from './company-save/company-save.component';
import { CompanyRouter } from "./company.router";
import { CompanyUpdateComponent } from './company-update/company-update.component';

@NgModule({
  declarations: [
    CompanyListComponent,
    CompanySaveComponent,
    CompanyUpdateComponent
  ],
  imports : [
    CompanyRouter,
    FormsModule,
    ComponentModule,
    CommonModule
  ]
})

export class CompanyModule {}