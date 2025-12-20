import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

export type CartItem = Product&{
quantity:number;
}
@Injectable({ providedIn: 'root' })

export class CartService {
private items: CartItem[] = [];

  constructor() {}

  // افزودن محصول به سبد خرید
  addToCart(product: Product, quantity: number = 1) {
    const existingItem = this.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ ...product, quantity });
    }
  }

  // حذف محصول از سبد خرید
  removeFromCart(productId: number) {
    this.items = this.items.filter(item => item.id !== productId);
  }

  // گرفتن همه آیتم‌ها
  getCartItems(): CartItem[] {
    return this.items;
  }

  // محاسبه قیمت کل
  getTotalPrice(): number {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // خالی کردن سبد خرید
  clearCart() {
    this.items = [];
}
}