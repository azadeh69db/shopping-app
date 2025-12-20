import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-relatedProduct',
  standalone: true,
  imports: [MatIconModule,MatTabsModule],
  templateUrl: './relatedProduct.component.html',
  styleUrl: './relatedProduct.component.css'
})
export class relatedProductComponent {

}
