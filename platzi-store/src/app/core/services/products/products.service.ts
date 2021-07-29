import { Injectable } from '@angular/core';
import { Product } from 'src/app/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiste',
      price: 80000,
      description: 'Camiseta para hombre'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 15000,
      description: 'Hoodie para hombre'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 1000,
      description: 'Mug para hombre'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 500,
      description: 'Pin para hombre'
    },
  ];

  constructor() { }

  public getAllProducts(): Product[] {
    return this.products;
  }

  public getProductById(id: string): Product {
    return this.products.find(product => product.id === id);
  }
}
