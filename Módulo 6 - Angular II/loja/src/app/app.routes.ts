import { Routes } from '@angular/router';
import { ProductsComponent } from './modules/products/products.component';
import { AuthComponent } from './modules/auth/auth.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products', 
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: AuthComponent,
        
    },
    {
        path: 'products',
        component: ProductsComponent
    }
     
];
