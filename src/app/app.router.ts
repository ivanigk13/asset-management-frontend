import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavModule } from "./pages/nav.module";
import { NavComponent } from "./pages/nav/nav.component";
import { AuthGuard } from "./guard/auth.guard";

const routes : Routes = [
    {
        path : 'asset',
        component : NavComponent,
        loadChildren : () => import('./pages/asset/asset.module').then(m => m.AssetModule),
        canLoad : [AuthGuard]
    },

    {
        path : 'asset-status',
        component : NavComponent,
        loadChildren : () => import('./pages/asset-status/asset-status.module').then(m => m.AssetStatusModule),
        canLoad : [AuthGuard]
    },

    {
        path : 'asset-type',
        component : NavComponent,
        loadChildren : () => import('./pages/asset-type/asset-type.module').then(m => m.AssetTypeModule),
        canLoad : [AuthGuard]
    },

    {
        path : 'brand',
        component : NavComponent,
        loadChildren : ()=> import('./pages/brand/brand.module').then(m => m.BrandModule),
        canLoad : [AuthGuard]
    },

    {
        path : 'checkin',
        component : NavComponent,
        loadChildren : ()=> import('./pages/checkin/checkin.module').then(m => m.CheckinModule),
        canLoad : [AuthGuard]
    },

    {
        path : 'checkout',
        component : NavComponent,
        loadChildren : ()=> import('./pages/checkout/checkout.module').then(m => m.CheckoutModule),
        canLoad : [AuthGuard]
    },

    {
        path : 'company',
        component : NavComponent,
        loadChildren : ()=> import('./pages/company/company.module').then(m => m.CompanyModule),
        canLoad : [AuthGuard]
    },

    {
        path : 'employee',
        component : NavComponent,
        loadChildren : ()=> import('./pages/employee/employee.module').then(m => m.EmployeeModule),
        canLoad : [AuthGuard]
    },

    {
        path : 'role',
        component : NavComponent,
        loadChildren : () => import('./pages/role/role.module').then(m => m.RoleModule),
        canLoad : [AuthGuard]
    },

    {
        path : 'user',
        component : NavComponent,
        loadChildren : () => import('./pages/user/user.module').then(m => m.UserModule),
        canLoad : [AuthGuard]
    },

    {
        path : 'login',
        loadChildren : () => import('./pages/login.module').then(m => m.LoginModule),
    },

    {
        path : 'home',
        component : NavComponent,
        loadChildren : () => import('./pages/home.module').then(m => m.HomeModule),
        canLoad : [AuthGuard]
    }
    
];

@NgModule({
    imports : [
        RouterModule.forRoot(routes),
        NavModule
    ],
    exports : [
        RouterModule
    ]
})

export class AppRouter {}