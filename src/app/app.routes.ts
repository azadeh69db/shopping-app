import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { cartComponent } from './pages/product-detail/components/cart/cart.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
     path:'products/:id',
    component:ProductDetailComponent
   },
    {
     path:'cart',
    component:cartComponent
   },
   {
      path:'**',
      component: NotFoundComponent 
   }
];
