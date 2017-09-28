import { Component, OnInit, ViewChild } from '@angular/core';

import { InvoiceService } from '../shared/invoice.service';
import { Store } from '../store';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  invoices = [];
  customers = [];
  invoice;
  showDialog = false;
  constructor(
    private store: Store,
    private invoiceService: InvoiceService
  ) {

  }


  ngOnInit() {
    this.store.changes
      .subscribe((storage: any) => {
        this.customers = storage.customers;
        this.invoices = storage.invoices;
        this.invoices.map((invoice) => {
          return invoice.customer = this.customers.find(customer => customer.id === invoice.customer_id)
        });
      });
  }
  

  onCreateInvoice(invoice) {
    this.invoiceService.createInvoice(invoice)
      .subscribe();
  }

  onNoteChecked(note) {
    this.invoiceService.deleteInvoice(note)
      .subscribe();
  }

}
