import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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

  ngOnInit(): void {
  }

  public addProductCar($event: Product): void {
    console.log('Add to carrito: ', $event);
  }

}
