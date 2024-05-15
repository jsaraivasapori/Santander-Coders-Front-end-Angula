import { Routes } from '@angular/router';
import { ProductsComponent } from './modules/products/products.component';
import { AuthComponent } from './modules/auth/auth.component';
import { CreateComponent } from './modules/products/components/create/create.component';
import { ListComponent } from './modules/products/components/list/list.component';
import {LoginComponent} from './modules/auth/components/login/login.component'
import { RegisterComponent } from './modules/auth/components/register/register.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products', 
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },

            {
                path: 'register',
                component: RegisterComponent
            }
        ]
        
    },
    {
        path: 'products',
        component: ProductsComponent,
        children:[
            {
                path:'',
                component: ListComponent
            },
            {
                path: 'create',
                component: CreateComponent
            },
            {
//:id vai ler a rota e quando chamar a rota vai substituir :id pelo id passado na rota
                path: 'edit/:id',
                component: CreateComponent
            }
        ]
    }
     
];
