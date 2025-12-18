import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testform',
  standalone: true,
  imports: [],
  templateUrl: './testform.component.html',
  styleUrl: './testform.component.css'
})
export class TestformComponent {
 @Input() selectedPayment: string = '';

}
