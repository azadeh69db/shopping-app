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
// constructor(private route:ActivateRoute){}

 product: Product | undefined;
  quantity: number = 1;
  min: number = 1;
  max: number = 100;

  constructor(
    private route: ActivatedRoute, // ← حالا شناسایی می‌شود
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.productService.getProductById(id).subscribe(res => {
        this.product = res;
      });
    });
  }

  increase() {
    if (this.quantity < this.max) this.quantity++;
  }

  decrease() {
    if (this.quantity > this.min) this.quantity--;
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity);
      alert('محصول به سبد خرید اضافه شد');
    }
  }

}
