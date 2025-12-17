import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-heroslider',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './heroslider.component.html',
  styleUrls: ['./heroslider.component.css']
})
export class HerosliderComponent implements OnInit, OnDestroy {
  slides = [
    {
      title: 'Welcome To Fashion Watch',
      description: 'Men Watch',
      buttonText: 'Shop Now',
      buttonUrl: '#',
      image: 'assets/recent1.jpg'
    },
    {
      title: 'Every Time',
      description: 'Mittnalier',
      buttonText: 'Viac ShopNow',
      buttonUrl: '#',
      image: 'assets/recent2.jpg'
    }
  ];

  currentSlide = 0;
  intervalId?: number;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prev(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goTo(index: number): void {
    this.currentSlide = index;
  }

  startAutoplay(): void {
    this.intervalId = window.setInterval(() => this.next(), 5000);
  }
}

