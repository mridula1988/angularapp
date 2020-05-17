import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { FiltersComponent } from './components/shoppingcart/filters/filters.component';
import { ProductListComponent } from './components/shoppingcart/product-list/product-list.component';
import { CartComponent } from './components/shoppingcart/cart/cart.component';
import { CartItemsComponent } from './components/shoppingcart/cart-items/cart-items.component';
import { ProductItemComponent } from './components/shoppingcart/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingcartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemsComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
