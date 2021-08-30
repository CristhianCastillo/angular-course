import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../core/services/products/products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        const productId = params['id'];
        console.log(productId);
        this.fetchProduct(productId);
    });
    this.getFile();
  }

  public async fetchProduct(productId: number): Promise<void> {
    this.product = await this.productService.getProductById(productId).toPromise();
  }

  public async getFile(): Promise<void> {
    const content =  await this.productService.getFile().toPromise();
    console.log('Txt Content File: ', content);
  }
}
