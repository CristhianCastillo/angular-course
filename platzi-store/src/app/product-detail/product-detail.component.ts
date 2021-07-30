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
  }

  public async fetchProduct(productId: number): Promise<void> {
    this.product = await this.productService.getProductById(productId).toPromise();
  }
}
