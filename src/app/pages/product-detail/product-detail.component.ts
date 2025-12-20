import { Component } from '@angular/core';
import { categoryComponent } from './components/category/category.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { freeShipingComponent } from './components/freeShiping/freeShiping.component';
import { newProductComponent } from './components/newProduct/newProduct.component';
import { productBoxComponent } from './components/productBox/productBox.component';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { productTextComponent } from './components/productText/productTextcomponent';
import { relatedProductComponent } from './components/relatedProduct/relatedProduct.component';
import { CartService } from '../../services/cart.service';
import {  ProductService } from '../../services/product.service';
import type { Product } from '../../models/Product';
import { NgIf,CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [categoryComponent, RouterLink,
    freeShipingComponent, newProductComponent,
    productBoxComponent, HeaderComponent, FooterComponent,
    productTextComponent, relatedProductComponent, NgIf,CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {


}
