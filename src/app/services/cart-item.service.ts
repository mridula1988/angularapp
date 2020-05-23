import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from 'src/app/config/api';
import { Product } from '../models/product';
import { ThrowStmt } from '@angular/compiler';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor(private http: HttpClient) { }

  addProductToCart(product: Product): Observable<any>{
    return this.http.post(cartUrl, { product });
  }

  loadCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];       
        let doesProductExists = false;
        for (let item of result) {          
          for(let i in cartItems) {              
            if (item.product.id == cartItems[i].productId) {
              console.log("found")
              cartItems[i].qty++;
              doesProductExists = true;   
              console.log(cartItems[i]);   
              break;    
            }          
          }  
          if(!doesProductExists) { 
            cartItems.push(new CartItem(item.id, item.product));
          }     
        }
        return cartItems;
      })
    );
  } 
  
}
