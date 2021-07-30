import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  public async fetchProducts(): Promise<void> {
    this.products = await this.productService.getAllProducts().toPromise();
  }

  public deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe(
      () => this.fetchProducts(),
      (error) => console.log(error)
    );
  }
}
