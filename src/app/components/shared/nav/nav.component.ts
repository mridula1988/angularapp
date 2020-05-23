import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/services/messanger.service';
import { Product } from 'src/app/models/product'; 
import { CartItemService } from 'src/app/services/cart-item.service';
import { CartItem } from 'src/app/models/cart-item'; 
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  cartCount:number = 0;
  searchValue:string = '';
  constructor(private msg : MessangerService,
    private cartItemService : CartItemService,
    private productService : ProductService,
    private router : Router
    ) { }

  ngOnInit(): void {   
    this.handleSubscription();   
  }

  loadCartCount() {   
    this.cartItemService.loadCartItems().subscribe((items: CartItem[]) => {     
      for (let item of items) {
        this.cartCount += item.qty;
      }   
    });
  } 
  handleSubscription() {
    this.msg.getMessage().subscribe((product: Product) => {         
      this.loadCartCount();     
    });
  }

  SearchProducts() {
    console.log(this.searchValue);   
    this.router.navigate(['product-list'], { queryParams: { name: 'popular' } });

  }
}
