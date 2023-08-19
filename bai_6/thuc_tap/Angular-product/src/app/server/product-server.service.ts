import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServerService {

  private API_URL = 'http://localhost:3000/product';

  constructor(private http: HttpClient) {
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(this.API_URL + '/' + product.id, product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(this.API_URL + '/' + id);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }

  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(this.API_URL, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.API_URL + '/' + id);
  }
}



