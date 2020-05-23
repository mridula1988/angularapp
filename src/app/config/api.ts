import { environment } from 'src/environments/environment';

export const baseUrl = environment.production? 'http://mycart.com/' : 'http://localhost:3000'
export const productUrl = baseUrl + '/products';
export const cartUrl = baseUrl + '/cartItems';
