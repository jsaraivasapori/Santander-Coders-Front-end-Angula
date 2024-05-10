import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../service/products.service';
import { first } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  imports:[ReactiveFormsModule,MatFormFieldModule, MatInputModule, MatSelectModule,MatButtonModule]
})
export class CreateComponent implements OnInit{
  form! : FormGroup
  id? : string

  constructor(
    private productsService: ProductsService, 
    private router:Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.buildForm()
    this.id = this.route.snapshot.params['id']

    if(this.id){
      this.getProduct(this.id)
    }
  }

  buildForm() : void{
    this.form = new FormGroup({
      name:new FormControl(null,[Validators.required]) ,
      description:new FormControl(null,[Validators.required]) ,
      price:new FormControl(null,[Validators.required]) ,
      qty:new FormControl(null,[Validators.required]) ,
      image:new FormControl(null,[Validators.required]) ,
    })
  }

  getProduct(id : string) : void{
    this.productsService.getProductById(id)
    .pipe(first())
    .subscribe({
      next: (product) =>{
        this.form.patchValue(product);
        
      },
      error:(err) => {
        console.log(err);
        
      },
    })
    
  }

  onSave() : void{
    const product :Product = this.form.getRawValue()
    

    if(this.id){
      this.updateProduct(product)
      return
    }

    this.createProduct(product)
    
  }


createProduct(product:Product): void{
  this.productsService.saveProducts(product)
  .pipe(first())
  .subscribe({
    complete: () =>{
      //quando finalizar o put, levar o usuario até a rota de products para ver os componetes
      this.router.navigate(['products'])
    },
    error:(err) => {
      console.log(err);
      
    },
  })

}

updateProduct(product:Product): void{
  this.productsService.updateProduct(this.id!, product)
  .pipe(first())
  .subscribe({
    complete: () =>{
      //quando finalizar o put, levar o usuario até a rota de products para ver os componetes
      this.router.navigate(['products'])
    },
    error:(err) => {
      console.log(err);
      
    },
  })

}


}
