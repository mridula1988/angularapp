import { Product } from './product';

export class CartItem {
    id: number;
    productId: number;
    name: string;
    price: number;
    qty: number;
    imageUrl: string;

    constructor (id: number, product: Product, qty = 1 ) {
       // console.log(product);
        this.id = id;
        this.name = product.name;
        this.productId = product.id;
        this.imageUrl = product.imageUrl;
        this.qty = qty;
        this.price = product.price;
    }
}
