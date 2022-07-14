import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from 'src/app/components/component.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserSaveComponent } from './user-save/user-save.component';
import { UserRouter } from './user.router';
import { UserUpdateComponent } from './user-update/user-update.component';

@NgModule({
    declarations : [
        UserListComponent,
        UserSaveComponent,
        UserUpdateComponent
    ],
    imports : [
        UserRouter,
        FormsModule,
        ComponentModule,
        CommonModule
    ]
})

export class UserModule {}