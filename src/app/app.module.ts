import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import {CartService} from "./services/cart.service";
import {HttpClientModule} from "@angular/common/http";
import { AddNewCartComponent } from './components/add-new-cart/add-new-cart.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    AddNewCartComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,  FormsModule,
    AppRoutingModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
