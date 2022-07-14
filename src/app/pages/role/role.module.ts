import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ComponentModule } from "../../components/component.module";
import { RoleListComponent } from './role-list/role-list.component';
import { RoleSaveComponent } from './role-save/role-save.component';
import { RoleRouter } from "./role.router";
import { RoleUpdateComponent } from './role-update/role-update.component';
import { StoreModule } from "@ngrx/store";
import { roleReducer } from "../../state/role/role.reducer";
import { EffectsModule } from "@ngrx/effects";
import { RoleEffect } from "../../state/role/role.effect";

@NgModule({
  declarations: [
    RoleListComponent,
    RoleSaveComponent,
    RoleUpdateComponent
  ],
  imports: [
    RoleRouter,
    FormsModule,
    ComponentModule,
    CommonModule,
    StoreModule.forFeature('role', roleReducer),
    EffectsModule.forFeature([RoleEffect])
  ]
})

export class RoleModule {}