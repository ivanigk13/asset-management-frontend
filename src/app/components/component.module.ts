import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ButtonComponent } from "./atom/button";
import { InputComponent } from "./atom/input";
import { LabelComponent } from "./atom/label";
import { SelectComponent } from "./atom/select";
import { TextAreaComponent } from "./atom/textarea";
import { FormInputComponent } from "./molekul/form-input";
import { FormSelectComponent } from "./molekul/form-select";
import { FormTextAreaComponent } from "./molekul/form-textarea";

@NgModule({
    declarations:[
        ButtonComponent,
        LabelComponent,
        InputComponent,
        SelectComponent,
        TextAreaComponent,
        FormInputComponent,
        FormSelectComponent,
        FormTextAreaComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        RouterModule
    ],
    exports:[
        RouterModule,
        ButtonComponent,
        LabelComponent,
        InputComponent,
        SelectComponent,
        TextAreaComponent,
        FormInputComponent,
        FormSelectComponent,
        FormTextAreaComponent
    ]
})

export class ComponentModule {}