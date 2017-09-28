import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { InvoicesComponent } from './invoices/invoices.component';

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: AppComponent,
        children: [
            { path: '', component: InvoicesComponent}
        ]
    }
])