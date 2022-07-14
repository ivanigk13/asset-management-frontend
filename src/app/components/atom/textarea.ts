import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";

@Component({
    selector : 'app-textarea',
    template : `<textarea [(ngModel)]="textareaNgModel" (ngModelChange)="changeTextarea($event)" 
                    class="form-control" id="{{textareaId}}" name="{{textareaName}}" [cols]="textareaCols"
                    [rows]="textareaRows" [minlength]="textareaMin" [required]="textareaRequired">
                </textarea>`,
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})

export class TextAreaComponent {
    @Input()
    textareaRequired : boolean = true;

    @Input()
    textareaNgModel! : any;

    @Input()
    textareaId! : string;

    @Input()
    textareaName! : string;

    @Input()
    textareaCols! : number;

    @Input()
    textareaRows! : number;

    @Input()
    textareaMin : number = 1;

    @Output()
    textareaNgModelChange : EventEmitter<any> = new EventEmitter<any>();

    changeTextarea(data : any) : void {
        this.textareaNgModelChange.emit(data);
    }
}
