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
      return this.http.get<Product[]>(this.apiUrl)

// com pipe(frist()) chama uma vez a API e desescreve, ou seja, encerrra conexão
    //http.get<Product[]> é a tipagem do que estou esperando vir do CRUCRUD    
    }
   
    saveProducts(productBody : Product): Observable<void[]>{
//observable void pois ao cadstrar a api n retorna nada
      return this.http.post<void[]>(this.apiUrl,productBody)
    
    }
}
