import { Component, Input } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import type { Product } from '../../models/Product';
import { CommonModule,NgIf } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule,
    MatButtonModule, MatMenuModule, RouterLink,CommonModule,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    @Input()product?:Product;
  
[x: string]: any;

}
