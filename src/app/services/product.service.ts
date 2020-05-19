import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const productUrl = 'http://localhost:3000/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService { 
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productUrl);
  }
}
