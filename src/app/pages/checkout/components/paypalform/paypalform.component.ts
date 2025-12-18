import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
@Component({
  selector: 'app-paypalform',
  standalone: true,
  imports: [MatInputModule,MatRadioModule],
  templateUrl: './paypalform.component.html',
  styleUrl: './paypalform.component.css'
})
export class PaypalformComponent {

}
