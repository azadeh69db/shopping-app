import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-servicebox',
  standalone: true,
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './servicebox.component.html',
  styleUrl: './servicebox.component.css'
})
export class ServiceboxComponent {

}
