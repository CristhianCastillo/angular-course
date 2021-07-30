import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  public getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.urlApi + '/products');
  }

  public getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(environment.urlApi + '/products/' + id);
  }

  public saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(environment.urlApi + '/products', product);
  }

  public updateProduct(id: string, product: Partial<Product>): Observable<Product> {
    return this.httpClient.put<Product>(environment.urlApi + '/products' + '/' + id, product);
  }

  public deleteProduct(id: string): Observable<Product> {
    return this.httpClient.delete<Product>(environment.urlApi + '/products' + '/' + id);
  }
}
