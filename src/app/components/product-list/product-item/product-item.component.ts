import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessangerService } from 'src/app/services/messanger.service';
import { CartItemService } from 'src/app/services/cart-item.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem : Product;
  constructor(private msg : MessangerService, private cartItemService: CartItemService) { }

  ngOnInit(): void {
  }
  
  public handleAddToCart() {
    this.cartItemService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMessage(this.productItem.id);      
    })    
  } 
}
