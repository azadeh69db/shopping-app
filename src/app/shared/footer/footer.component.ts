import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatInputModule,MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
