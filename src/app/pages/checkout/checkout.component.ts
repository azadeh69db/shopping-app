import { Component } from '@angular/core';
import { BillingComponent } from './components/billing/billing.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [BillingComponent,RouterOutlet
    ,HeaderComponent,FooterComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

}
