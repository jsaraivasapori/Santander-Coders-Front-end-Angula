import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import { Product } from './models/product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { first } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule,MatButtonModule, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: []
})
export class ProductsComponent implements OnInit{
  products? : Product[] // Lista com elementos do tipo da interface Product 
  apiUrl = "https://crudcrud.com/api/9e50cbf0f17740a0b24d096c0c845cf2/products"
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {

    // com pipe(frist()) chama uma vez a API e desescreve, ou seja, encerrra conexão
    //http.get<Product[]> é a tipagem do que estou esperando vir do CRUCRUD

    this.http.get<Product[]>(this.apiUrl).pipe(first()).subscribe({
      next:(response:Product[]) =>{
        this.products = response
      },
      error: (err) => {console.log(err);
      }
    }) 
    
  }
}
