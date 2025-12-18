import { Component } from '@angular/core';
import { BillingComponent } from './components/billing/billing.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { PaypalformComponent } from './components/paypalform/paypalform.component';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [BillingComponent,RouterOutlet
    ,HeaderComponent,FooterComponent,PaypalformComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
selectedPayment:string ='';
}
