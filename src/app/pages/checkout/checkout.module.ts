import { NgModule } from "@angular/core";
import { CheckoutSaveComponent } from './checkout-save/checkout-save.component';
import { CheckoutListComponent } from './checkout-list/checkout-list.component';
import { ExpiredCheckoutListComponent } from './expired-checkout-list/expired-checkout-list.component';
import { CheckoutRouter } from "./checkout.router";
import { ComponentModule } from "../../components/component.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CheckoutUncheckinComponent } from './checkout-uncheckin/checkout-uncheckin.component';

@NgModule({
  declarations: [
    CheckoutSaveComponent,
    CheckoutListComponent,
    ExpiredCheckoutListComponent,
    CheckoutUncheckinComponent
  ],
  imports : [
    CheckoutRouter,
    FormsModule,
    ComponentModule,
    CommonModule
  ]
})

export class CheckoutModule {}