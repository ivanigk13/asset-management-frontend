import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CheckoutListComponent } from "./checkout-list/checkout-list.component";
import { CheckoutSaveComponent } from "./checkout-save/checkout-save.component";
import { CheckoutUncheckinComponent } from "./checkout-uncheckin/checkout-uncheckin.component";
import { ExpiredCheckoutListComponent } from "./expired-checkout-list/expired-checkout-list.component";

const routes : Routes = [
    {
        path : 'list',
        component : CheckoutListComponent
    },
    {
        path : 'new',
        component : CheckoutSaveComponent
    },
    {
        path : 'expired',
        component : ExpiredCheckoutListComponent
    },
    {
        path : 'uncheckin',
        component : CheckoutUncheckinComponent
    }
]

@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class CheckoutRouter {}