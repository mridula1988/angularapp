import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // to do populate data from api
  products: Product[] = [
     new Product(1,'paracetamol','this the paracetamol description', 120, 'medicine2.png'),
     new Product(2,'paracetamol','this the paracetamol description', 120, 'medicine.jpg'),
     new Product(3,'paracetamol','this the paracetamol description', 120, 'medicine2.png'),
     new Product(4,'paracetamol','this the paracetamol description', 120, 'medicine2.png'),
     new Product(5,'paracetamol','this the paracetamol description', 120, 'medicine2.png'),
     new Product(6,'paracetamol','this the paracetamol description', 120, 'medicine.jpg'),
     new Product(7,'paracetamol','this the paracetamol description', 120, 'medicine2.png'),
     new Product(8,'paracetamol','this the paracetamol description', 120, 'medicine.jpg')
  ]
  constructor() { }

  getProduct(): Product[] {
    return this.products;
  }
}
