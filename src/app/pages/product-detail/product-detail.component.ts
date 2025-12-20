import { Component } from '@angular/core';
import { categoryComponent } from './components/category/category.component';
import { RouterLink } from '@angular/router';
import { freeShipingComponent } from './components/freeShiping/freeShiping.component';
import { newProductComponent } from './components/newProduct/newProduct.component';
import { productBoxComponent } from './components/productBox/productBox.component';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { productTextComponent } from './components/productText/productTextcomponent';
import { relatedProductComponent } from './components/relatedProduct/relatedProduct.component';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [categoryComponent, RouterLink,
    freeShipingComponent, newProductComponent,
    productBoxComponent, HeaderComponent, FooterComponent
  ,productTextComponent,relatedProductComponent ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

}
