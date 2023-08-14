import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServerService {
  products: Product[] = [{
    id: 1,
    nameProduct: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    nameProduct: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    nameProduct: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    nameProduct: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    nameProduct: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor() {
  }

  updateProductById(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }

  findById(id: number) {
    return this.products.find(product => product.id === id);
  }

  getAll() {
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }


}
