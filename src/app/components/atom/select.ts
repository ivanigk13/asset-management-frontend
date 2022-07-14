import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";

@Component({
    selector : 'app-select',
    template : `<select [(ngModel)]="selectNgModel" (ngModelChange)="changeSelect($event)" 
                    class="form-select" id="{{selectId}}" name="{{selectName}}" [required]="selectRequired">
                    <option *ngFor="let option of optionData" [value]="option.id">{{option[optionName]}}</option>
                </select>`,
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})

export class SelectComponent {
    @Input()
    selectRequired : boolean = true;

    @Input()
    selectNgModel! : any;

    @Input()
    selectId! : string;

    @Input()
    selectName! : string;

    @Input()
    optionData? : any[];

    @Input()
    optionName! : any;

    @Output()
    selectNgModelChange : EventEmitter<any> = new EventEmitter<any>();

    changeSelect(data : any) : void {
        this.selectNgModelChange.emit(data);
    }
}