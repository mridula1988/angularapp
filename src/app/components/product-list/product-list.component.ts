import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList : Product[] = [];
  constructor(private productService : ProductService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {  
    this.route.params.subscribe( params => {
      if (params['id']) { 
        this.loadProducts(params['id']);
      }     
    });  
  }

  searchProducts() {
    console.log("asdasd");
  }

  loadProducts(categoryId) {   
    this.productService.getProducts(categoryId).subscribe((products) => {
      console.log(products.length)
      this.productList = products;
    });
  }

}
