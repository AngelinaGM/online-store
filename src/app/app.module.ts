import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import {PopupModule} from 'ng2-opd-popup';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CartService } from './cart/cart.service';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { DataStorage } from './shared/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ItemComponent,
    LandingPageComponent,
    HeaderComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // PopupModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    CartService,
    DataStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
