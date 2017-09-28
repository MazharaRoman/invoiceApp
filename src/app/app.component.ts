import { Component, OnInit } from '@angular/core';
import { CustomerService, InvoiceService, ProductService } from './shared';
import { Store } from './store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(
    private store: Store,
    private customerService: CustomerService,
    private productService: ProductService,
    private invoiceService: InvoiceService
  ) {

  }
  ngOnInit() {
    this.customerService.getCustomers()
    .subscribe();
    this.productService.getProducts()
    .subscribe();
    this.invoiceService.getInvoices()
    .subscribe();
   

  }
  
}
