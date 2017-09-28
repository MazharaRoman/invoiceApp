import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Product } from '../store';
import { StoreHelper } from './store-helper';

@Injectable()
export class ProductService {

  path: string = '/products'
  constructor(
      private storeHelper: StoreHelper,
      private apiService: ApiService
    ) { }

  createProducts(products: Product) {
    return this.apiService.post(this.path, products)
      .do(savedNote => this.storeHelper.add('products', savedNote))
  }

  getProducts() {
    return this.apiService.get(this.path)
      .do(res => this.storeHelper.update('products', res));
  }


}
