import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector : 'form-textarea',
    template : `<div class="{{formDivClass}}">
                    <app-label labelFor="{{formLabelFor}}" labelValue="{{formLabelValue}}" 
                        labelClass="{{formLabelClass}}" [labelRequired]="formLabelRequired">
                    </app-label>
                    <app-textarea textareaId="{{formTextareaId}}" textareaName="{{formTextareaName}}"
                        [textareaMin]="formTextareaMin" [textareaCols]="formTextareaCols"
                        [textareaRows]="formTextareaRows" [textareaRequired]="formTextareaRequired"
                        [(textareaNgModel)]="formTextareaNgModel" (textareaNgModelChange)="formChangeTextarea($event)">
                    </app-textarea>
                </div>`
})

export class FormTextAreaComponent {
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
    formTextareaRequired : boolean = true;

    @Input()
    formTextareaNgModel! : any;

    @Input()
    formTextareaId! : string;

    @Input()
    formTextareaName! : string;

    @Input()
    formTextareaCols! : number;

    @Input()
    formTextareaRows! : number;

    @Input()
    formTextareaMin : number = 1;

    @Output()
    formTextareaNgModelChange : EventEmitter<any> = new EventEmitter<any>();

    formChangeTextarea(data : any) : void {
        this.formTextareaNgModelChange.emit(data);
    }
}