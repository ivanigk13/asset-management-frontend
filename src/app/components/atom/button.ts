import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector :'app-button',
    template :'<button (click)="btnClick()" *ngIf="btnNgIf" type="{{btnType}}" id="{{btnId}}" class="btn {{btnClass}}" [routerLink]="btnLink" [disabled]="btnDisable">{{btnLabel}}</button>'
})

export class ButtonComponent{
    @Input()
    btnNgIf? : boolean = true

    @Input()
    btnLabel! : string;

    @Input()
    btnId? : string;

    @Input()
    btnType? : string = 'button';

    @Input()
    btnClass? : string;

    @Input()
    btnLink? : string;

    @Input()
    btnDisable : boolean = false;

    @Output()
    btnClickEvent : EventEmitter<void> = new EventEmitter<void>()

    btnClick() : void {
        this.btnClickEvent.emit();
    }
}