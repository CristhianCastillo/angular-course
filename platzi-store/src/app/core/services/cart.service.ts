import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  public addCart(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products); // Notificar a quien este suscript que hubo un cambio.
  }
}
