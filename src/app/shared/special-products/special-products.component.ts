import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-special-products',
  standalone: true,
  imports: [MatIconModule,MatTabsModule],
  templateUrl: './special-products.component.html',
  styleUrl: './special-products.component.css'
})
export class SpecialProductsComponent {

}
