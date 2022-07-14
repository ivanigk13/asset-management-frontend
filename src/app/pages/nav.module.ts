import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ComponentModule } from "../components/component.module";
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ComponentModule,
  ],
  exports: [
    RouterModule
  ]
})

export class NavModule {}