import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../service/products.service';
import { first } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  imports:[ReactiveFormsModule,MatFormFieldModule, MatInputModule, MatSelectModule,MatButtonModule]
})
export class CreateComponent implements OnInit{
  form! : FormGroup

  constructor(private productsService: ProductsService, private router:Router){}

  ngOnInit(): void {
    this.buildForm()
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

  onSave() : void{
    const product :Product = this.form.getRawValue()
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
}
