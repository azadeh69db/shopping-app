import { Component, Input } from '@angular/core';
import { TimerComponent } from '../Timer/Timer.component';
import type { Product } from '../../../../models/Product';
@Component({
  selector: 'app-productBox',
  standalone: true,
  imports: [TimerComponent],
  templateUrl: './productBox.component.html',
  styleUrl: './productBox.component.css'
})
export class productBoxComponent {
  @Input()product?:Product;
[x: string]: any;
count:number = 1;
  min:number = 1;
  max:number = 100;

  increase() {
    if (this.count < this.max) {
      this.count++;
    }
  }

  decrease() {
    if (this.count > this.min) {
      this.count--;
    }
  }
}
