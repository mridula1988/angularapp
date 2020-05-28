import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { productUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {  
  constructor(private http: HttpClient) { }

  getProducts(categoryId): Observable<Product[]> {    
    let categoryParam = '';   
    if (categoryId > 0) { 
      categoryParam = "categoryId="+categoryId;  
    }  
    let params  = { params: new HttpParams({fromString: categoryParam}) };   
    return this.http.get<Product[]>(productUrl, params);
  }
}
