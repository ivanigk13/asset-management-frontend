import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ComponentModule } from "../components/component.module";
import { HomeRouter } from "./home.router";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports:[
    HomeRouter,
    FormsModule,
    ComponentModule
  ]
})

export class HomeModule {}