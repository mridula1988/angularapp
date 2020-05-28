import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent} from './components/landingpage/landingpage.component';
import { CartComponent } from './components/shoppingcart/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LoginComponent } from './components/security/login/login.component';
const routes: Routes = [
  { path: '', component: LandingpageComponent }, 
  { path: 'landingpage',  component: LandingpageComponent },
  { path: 'cart',  component: CartComponent },
  { path: 'product-list/:id',  component: ProductListComponent },
  { path: 'login',  component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
