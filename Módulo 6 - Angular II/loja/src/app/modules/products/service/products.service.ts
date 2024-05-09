import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = `${environment.API_URL}/products`

  constructor(private http:HttpClient) {}

    getProducts(): Observable<Product[]>{
      // com pipe(frist()) chama uma vez a API e desescreve, ou seja, encerrra conexão
    //http.get<Product[]> é a tipagem do que estou esperando vir do CRUCRUD

    return this.http.get<Product[]>(this.apiUrl)
    
    }
   
}
