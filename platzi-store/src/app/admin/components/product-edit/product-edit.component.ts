import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';
import { FormValidations } from 'src/app/utils/form.validations';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const id = params['id'];
      this.id = id;
      this.fetchProduct(id);
    });
  }

  public async fetchProduct(productId: number): Promise<void> {
    const product = await this.productService.getProductById(productId).toPromise();
    this.buildForm(product);
  }

  private buildForm(product: Product): void {
    this.form = this.formBuilder.group({
      title: [product.title, [Validators.required]],
      price: [product.price, [Validators.required, FormValidations.isPriceValid]],
      image: [''],
      description: [product.description, [Validators.required]],
    });
  }

  public async updateProduct(event: Event): Promise<void> {
    event.preventDefault();
    console.log(this.form.value);
    if (this.form.valid) {
      const product = this.form.value;
      await this.productService.updateProduct(this.id, product).toPromise();
      this.router.navigate(['/admin/products']);
    }
  }

  get priveFileds(): AbstractControl {
    return this.form.get('price');
  }

}
