import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
    { path: 'home', component: LandingPageComponent},
    { path: 'cart', component: CartComponent},
    { path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
