import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector : 'form-input',
    template : `<div class="{{formDivClass}}">
                    <app-label labelFor="{{formLabelFor}}" labelValue="{{formLabelValue}}" 
                        labelClass="{{formLabelClass}}" [labelRequired]="formLabelRequired">
                    </app-label>
                    <app-input inputType="{{formInputType}}" inputId="{{formInputId}}" 
                        inputName="{{formInputName}}" [inputMin]="formInputMin" [inputMax]="formInputMax"
                        inputPlaceholder="{{formInputPlaceholder}}" [inputRequired]="formInputRequired"
                        [(inputNgModel)]="formInputNgModel" (inputNgModelChange)="formChangeInput($event)"
                        (InputNgChange)="change($event)">
                    </app-input>
                </div>`
})

export class FormInputComponent {
    @Input()
    formInputRequired : boolean = true;

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
    formInputType? : string = 'text';

    @Input()
    formInputId! : string;

    @Input()
    formInputName! : string;
    
    @Input()
    formInputPlaceholder! : string;

    @Input()
    formInputMin? : number;

    @Input()
    formInputMax? : number;

    @Input()
    formInputNgModel! : any;

    @Output()
    formInputNgModelChange : EventEmitter<any> = new EventEmitter<any>();

    formChangeInput(data : any) : void {
        this.formInputNgModelChange.emit(data);
    }

    @Output()
    formInputNgChange : EventEmitter<any> = new EventEmitter<any>();
    change(data : any) : void {
        this.formInputNgChange.emit(data);
    }
}