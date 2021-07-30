import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { FormValidations } from 'src/app/utils/form.validations';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, FormValidations.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  public async createProduct(event: Event): Promise<void> {
    event.preventDefault();
    console.log(this.form.value);
    if (this.form.valid) {
      const product = this.form.value;
      await this.productService.saveProduct(product).toPromise();
      this.router.navigate(['/admin/products']);
    }
  }

  get priveFileds(): AbstractControl {
    return this.form.get('price');
  }
}
