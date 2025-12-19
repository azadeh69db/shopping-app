import { Component } from '@angular/core';
import { categoryComponent } from './components/category/category.component';
import { RouterLink } from '@angular/router';
import { freeShipingComponent } from './components/freeShiping/freeShiping.component';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [categoryComponent,RouterLink
    ,freeShipingComponent
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

}
