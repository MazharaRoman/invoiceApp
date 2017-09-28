import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Customer } from '../store';
import { StoreHelper } from './store-helper';

@Injectable()
export class CustomerService {

  path: string = '/customers'
  constructor(
      private storeHelper: StoreHelper,
      private apiService: ApiService
    ) { }

  createCustomer(customers: Customer) {
    return this.apiService.post(this.path, customers)
      .do(savedNote => this.storeHelper.add('customers', savedNote))
  }

  getCustomers() {
    return this.apiService.get(this.path)
      .do(res => this.storeHelper.update('customers', res));
  }

}
