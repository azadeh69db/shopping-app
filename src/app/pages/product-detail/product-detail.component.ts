import { Component } from '@angular/core';
import { categoryComponent } from './components/category/category.component';
import { RouterLink } from '@angular/router';
import { freeShipingComponent } from './components/freeShiping/freeShiping.component';
import { newProductComponent } from './components/newProduct/newProduct.component';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [categoryComponent,RouterLink
    ,freeShipingComponent,newProductComponent
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

}
