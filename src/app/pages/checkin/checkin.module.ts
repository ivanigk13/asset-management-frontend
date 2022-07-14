import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ComponentModule } from "../../components/component.module";
import { CheckinListComponent } from './checkin-list/checkin-list.component';
import { CheckinRouter } from "./checkin.router";

@NgModule({
  declarations: [
    CheckinListComponent
  ],
  imports:[
    CheckinRouter,
    FormsModule,
    ComponentModule,
    CommonModule
  ]
})

export class CheckinModule {}