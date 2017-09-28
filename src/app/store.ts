import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

export interface Invoice {
    color: string,
    title: string,
    value: string,
    id?: string | number,
    createdAt?: string,
    updatedAt?: string,
    userId?: string
}
export interface Customer {
    id: number,
    name: string,
    address: string,
    phone: string
}
export interface Product {
    id: number,
    name: string,
    price: number
}
export interface InvoiceItems {
    id: number,
    invoice_id: number,
    product_id: number,
    quantity: number
}


export interface State {
    invoices: Array<Invoice>,
    customers: Array<Customer>,
    products: Array<Product>,
    invoiceitems: Array<InvoiceItems>
}

const defaultState = {
    invoices: [],
    customers: [],
    products: [],
    invoiceitems: []
}

const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
    private _store = _store;
    changes = this._store.asObservable().distinctUntilChanged()

    setState(state: State) {
        this._store.next(state);
    }

    getState(): State {
        return this._store.value;
    }

    purge() {
        this._store.next(defaultState);
    }
}