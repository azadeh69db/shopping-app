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
import { count } from 'rxjs';
import { Router } from '@angular/router';
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
// constructor(private route:ActivateRoute){}

 product: Product | undefined;
 
  productId:number|null=null
  constructor(
    private route: ActivatedRoute, // ← حالا شناسایی می‌شود
    private productService: ProductService,
    private cartService: CartService,
    private router:Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.productId=id;
      this.productService.getProductById(id).subscribe(res => {
        this.product = res;
        console.log('product data' , this.product)
      });
    });
    window.scrollTo({top:0,behavior:'smooth'})
  }

 

  addToCart(count:number) {
    if (this.product) {
      this.cartService.addToCart(this.product, count);
      // alert('محصول به سبد خرید اضافه شد');
    }

    console.log(this.cartService.getCartItems());
this.router.navigate(['/cart'])
  }

}
