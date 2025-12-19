import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatIconModule,MatButtonModule
    ,MatToolbarModule,MatMenuModule,CommonModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class categoryComponent {
 isCatMenuOpen = true; // پیش‌فرض باز

  toggleCatMenu() {
    this.isCatMenuOpen = !this.isCatMenuOpen;
  }

}
