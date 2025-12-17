import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { MainComponent } from '../../shared/main/main.component';
import { HerosliderComponent } from '../../shared/heroslider/heroslider.component';
import { TrendingProducts1Component } from '../../shared/trending-products1/trending-products1.component';
import { TendingProducts2Component } from '../../tending-products2/tending-products2.component';
import { ZoomimgComponent } from '../../shared/zoomimg/zoomimg.component';
import { SpecialProductsComponent } from '../../shared/special-products/special-products.component';
import { RecentStoryComponent } from '../../shared/recent-story/recent-story.component';
import { ServiceboxComponent } from '../../shared/servicebox/servicebox.component';
import { FooterComponent } from '../../shared/footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MainComponent,
    HerosliderComponent,TrendingProducts1Component,
    TendingProducts2Component,ZoomimgComponent ,
    SpecialProductsComponent,RecentStoryComponent
    ,ServiceboxComponent,FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
