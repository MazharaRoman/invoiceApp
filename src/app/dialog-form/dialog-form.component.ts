import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product, Customer, Store } from '../store'

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {

  @Input() data;
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  customers: Array<Customer>;
  products: Array<Product>;
  invoiceForm: FormGroup;
  
  constructor(
    private store: Store,
    private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
     this.store.changes
      .subscribe((storage: any) => {
        this.customers = storage.customers;
        this.products = storage.invoices;
      });
  }

  initForm() {
    this.invoiceForm = this.fb.group({
    customer_id: ['', Validators.required ],
    products: this.fb.array([])
    });
  }

}
