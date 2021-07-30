import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products/products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  public addProductCar($event: Product): void {
    console.log('Add to carrito: ', $event);
  }

  public async fetchProducts(): Promise<void> {
    this.products = await this.productsService.getAllProducts().toPromise();
  }

  public async createProduct(): Promise<void> {
    const newProduct: Product = {
      id: '543',
      title: 'New Product',
      price: 100,
      description: 'New Product Description',
      image: 'assets/images/banner-1.jpg'
    }
    const productCreated = await this.productsService.saveProduct(newProduct).toPromise();
    console.log('Producto Creado con Exito: ', productCreated);
    this.fetchProducts();
  }

  public async updateProduct(): Promise<void> {
    const newProduct: Partial<Product> = {
      title: 'New Product Updated',
      price: 10000,
      description: 'New Product Description updated'
    }
    const productUpdated = await this.productsService.updateProduct('543', newProduct).toPromise();
    console.log('Producto Actualizado con Exito: ', productUpdated);
    this.fetchProducts();
  }

  public async deleteProduct(): Promise<void> {
    const productDeleted = await this.productsService.deleteProduct('543').toPromise();
    console.log('Producto Eliminado con Exito: ', productDeleted);
    this.fetchProducts();
  }
}
