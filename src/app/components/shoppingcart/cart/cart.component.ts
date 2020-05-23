import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/services/messanger.service';
import { Product } from 'src/app/models/product';
import { CartItemService } from 'src/app/services/cart-item.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartTotal = 0;

  constructor(private cartService: CartItemService) {   
  }
  ngOnInit() {    
    this.loadCartItems();          
  }
  loadCartItems() {
    this.cartService.loadCartItems().subscribe((items: CartItem[]) => {     
      this.cartItems = items;
      this.calculateCartTotalAmount();
    });
  }
  calculateCartTotalAmount() {
    this.cartItems.forEach(item => {
      this.cartTotal += (item.price * item.qty);
    })
  }
}
