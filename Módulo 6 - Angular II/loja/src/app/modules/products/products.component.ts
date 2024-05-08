import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 

import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule,MatCardModule,MatButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: []
})
export class ProductsComponent {
 
}
