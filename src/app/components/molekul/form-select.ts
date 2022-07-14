import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector : 'form-select',
    template : `<div class="{{formDivClass}}">
                    <app-label labelFor="{{formLabelFor}}" labelValue="{{formLabelValue}}" 
                        labelClass="{{formLabelClass}}" [labelRequired]="formLabelRequired">
                    </app-label>
                    <app-select [(selectNgModel)]="formSelectNgModel" (selectNgModelChange)="formChangeSelect($event)" 
                        selectId="{{formSelectId}}" selectName="{{formSelectName}}" [selectRequired]="formSelectRequired"
                        [optionData]="formOptionData" optionName="{{formOptionName}}">
                    </app-select>
                </div>`
})

export class FormSelectComponent {
    @Input()
    formSelectRequired : boolean = true;

    @Input()
    formLabelRequired : boolean = true;

    @Input()
    formDivClass? : string;

    @Input()
    formLabelValue? : string;

    @Input()
    formLabelFor? : string;

    @Input()
    formLabelClass? : string;

    @Input()
    formSelectNgModel! : any;

    @Input()
    formSelectId! : string;

    @Input()
    formSelectName! : string;

    @Input()
    formOptionData? : any[];

    @Input()
    formOptionName! : any;

    @Output()
    formSelectNgModelChange : EventEmitter<any> = new EventEmitter<any>();

    formChangeSelect(data : any) : void {
        this.formSelectNgModelChange.emit(data);
    }
}