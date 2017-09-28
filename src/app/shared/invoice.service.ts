import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Invoice } from '../store';
import { StoreHelper } from './store-helper';

@Injectable()
export class InvoiceService {

  path: string = '/invoices'
  constructor(private storeHelper: StoreHelper, private apiService: ApiService) { }

  createInvoice(invoice: Invoice) {
    return this.apiService.post(this.path, invoice)
      .do(savedNote => this.storeHelper.add('invoices', savedNote))
  }

  getInvoices() {
    return this.apiService.get(this.path)
      .do(res => this.storeHelper.update('invoices', res));
  }

  deleteInvoice(note: Invoice) {
    return this.apiService.delete(`${this.path}/${note.id}`)
      .do(res => this.storeHelper.findAndDelete('invoices', res.id));
  }

}
