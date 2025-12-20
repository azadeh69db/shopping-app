import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItem, CartService } from '../../../../services/cart.service';
import { NgIf ,NgFor} from '@angular/common';
import { HeaderComponent } from "../../../../shared/header/header.component";
import { FooterComponent } from "../../../../shared/footer/footer.component";
@Component({
  selector: 'app-cart ',
  standalone: true,
  imports: [NgIf, NgFor, HeaderComponent, FooterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class cartComponent  {

  items: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getCartItems();
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
    this.items = this.cartService.getCartItems(); // بروزرسانی لیست
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
  }


}
