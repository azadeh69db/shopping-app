import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
   {
    path:'',
    component:HomeComponent
   },
   {
     path:'checkout',
    component:CheckoutComponent
   },
   {
     path:'productDetail',
    component:ProductDetailComponent
   }
];
