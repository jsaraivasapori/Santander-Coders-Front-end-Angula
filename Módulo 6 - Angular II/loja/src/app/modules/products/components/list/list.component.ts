import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Subject, first, takeUntil } from 'rxjs';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule,MatButtonModule, HttpClientModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit , OnDestroy{
  protected ngUnsubscribe = new Subject()
  products? : Product[] // Lista com elementos do tipo da interface Product 
  apiUrl = "http://localhost:3000/products"
  constructor(private http: HttpClient){}

// Executando somente uma vez quando o componente e iniciado e pos receber todos os dados provenientes de inputs
  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {

    // com pipe(frist()) chama uma vez a API e desescreve, ou seja, encerrra conexão
    //http.get<Product[]> é a tipagem do que estou esperando vir do CRUCRUD

    this.http.get<Product[]>(this.apiUrl).pipe(takeUntil(this.ngUnsubscribe)).subscribe({
      next:(response:Product[]) =>{
        this.products = response
      },
      error: (err) => {console.log(err);
      }
    }) 
    
  }
  // boa pratica implementar isso, pois destroi tudo ao mudar de pagina, desescreve dos observables e protege contra danos de perfomace na aplicação
  ngOnDestroy(): void {
    this.ngUnsubscribe.next(true)
    this.ngUnsubscribe.complete()
  }
}
