import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-newProduct',
  standalone: true,
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './newProduct.component.html',
  styleUrl: './newProduct.component.css'
})
export class newProductComponent {

}
