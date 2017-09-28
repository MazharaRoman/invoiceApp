import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, ControlContainer } from '@angular/forms';

import { AppComponent } from './app.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { routes } from './router';
import { ApiService, 
         InvoiceService,
         ProductService,
         CustomerService,
         StoreHelper } from './shared';
import { Store } from './store';
import { DialogFormComponent } from './dialog-form/dialog-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    DialogFormComponent
  ],
  imports: [
    CommonModule,
    HttpModule, 
    BrowserModule,
    ReactiveFormsModule,
    routes
  ],
  providers: [
    FormBuilder,
    ApiService,
    InvoiceService,
    CustomerService,
    ProductService,
    Store,
    StoreHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
