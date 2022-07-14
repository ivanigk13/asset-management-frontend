import { Component, Input } from "@angular/core";

@Component({
    selector : 'app-label',
    template : '<label for="{{labelFor}}" class="form-label {{labelClass}}">{{labelValue}}<span *ngIf="labelRequired" class="text-danger">*</span></label>'
})

export class LabelComponent {

    @Input()
    labelValue! : string;

    @Input()
    labelFor! : string;

    @Input()
    labelClass? : string;

    @Input()
    labelRequired : boolean = true;
}