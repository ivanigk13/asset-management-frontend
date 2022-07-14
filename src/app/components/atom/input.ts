import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";

@Component({
    selector : 'app-input',
    template : `<input type="{{inputType}}" class="form-control" id="{{inputId}}" name="{{inputName}}" 
                    [minlength]="inputMin||null" [maxlength]="inputMax||null" [(ngModel)]="inputNgModel" 
                    (ngModelChange)="changeInput($event)" (change)="change($event)"
                    placeholder="{{inputPlaceholder}}" [required]="inputRequired">`,
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})

export class InputComponent {

    @Input()
    inputType? : string = 'text';

    @Input()
    inputId! : string;

    @Input()
    inputName! : string;

    @Input()
    inputPlaceholder? : string;

    @Input()
    inputMin? : number;

    @Input()
    inputMax? : number;

    @Input()
    inputRequired : boolean = true;

    @Input()
    inputNgModel! : any;

    @Output()
    inputNgModelChange : EventEmitter<any> = new EventEmitter<any>();

    changeInput(data : any) : void {
        this.inputNgModelChange.emit(data);
    }

    @Output()
    InputNgChange : EventEmitter<any> = new EventEmitter<any>();

    change(data : any) : void {
        this.InputNgChange.emit(data);
    }
}