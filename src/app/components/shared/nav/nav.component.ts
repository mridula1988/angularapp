import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MessangerService } from 'src/app/services/messanger.service';
import { Product } from 'src/app/models/product'; 
import { CartItemService } from 'src/app/services/cart-item.service';
import { CartItem } from 'src/app/models/cart-item'; 
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { localStorageService } from '../../localstorage/localstorage';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CategoriesService} from 'src/app/services/categories.service';
import { Categories } from 'src/app/models/categories';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  cartCount:number = 0;
  searchValue:string = '';
  userName: string = '';
  isUserLoggedIn: boolean = false;
  categories: Categories[] = [];

  constructor(private msg : MessangerService,
    private cartItemService : CartItemService,
    private productService : ProductService,
    private router : Router,
    private localStorageService : localStorageService,
    private authService : AuthServiceService,
    private categoriesService : CategoriesService
    ) {
      if(this.authService.isAuthenticated()) {
        this.router.navigate(['landingpage']);
      }
     }

  ngOnInit(): void {    
    this.setUserData() 
    this.loadCartCount();
    this.handleSubscription();  
    this.loadCategories();       
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
      this.cartCount++;     
    });
  }

  SearchProducts() {
    console.log(this.searchValue);   
    this.router.navigate(['product-list'], { queryParams: { name: 'popular' } });
  }
  setUserData() {    
    let userData = JSON.parse(this.localStorageService.getUserData());
    if(typeof userData == 'object') {
      this.isUserLoggedIn = true;
      this.userName = userData.first_name +' '+ userData.last_name;
    }  
  }  
  loadCategories() {
    this.categoriesService.getCategories().subscribe((categories) => {
      return this.categories = categories;
    });
  }
}
