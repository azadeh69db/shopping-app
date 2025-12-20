import { Component, Input } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import type { Product } from '../../../../models/Product';
@Component({
  selector: 'app-productText',
  standalone: true,
  imports: [MatTabsModule,MatInputModule],
  templateUrl: './productText.component.html',
  styleUrl: './productText.component.css'
})
export class productTextComponent {
  @Input()product?:Product;
}
