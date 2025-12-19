import { Component } from '@angular/core';
import { TimerComponent } from '../Timer/Timer.component';
@Component({
  selector: 'app-productBox',
  standalone: true,
  imports: [TimerComponent],
  templateUrl: './productBox.component.html',
  styleUrl: './productBox.component.css'
})
export class productBoxComponent {
count = 1;
  min = 1;
  max = 100;

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
