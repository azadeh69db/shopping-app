import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-tending-products2',
  standalone: true,
  imports: [MatIconModule,MatTabsModule,RouterModule],
  templateUrl: './tending-products2.component.html',
  styleUrl: './tending-products2.component.css'
})
export class TendingProducts2Component {

}
