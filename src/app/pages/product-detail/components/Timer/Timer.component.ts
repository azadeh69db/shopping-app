import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-Timer ',
  standalone: true,
  imports: [],
  templateUrl: './Timer.component.html',
  styleUrl: './Timer.component.css'
})
export class TimerComponent implements OnInit ,OnDestroy {
  
  targetDate = new Date('2025-12-31T23:59:59');
  intervalId!: number;

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  ngOnInit() {
    this.updateTimer();
    this.intervalId = window.setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  updateTimer() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance <= 0) {
      this.days = this.hours = this.minutes = this.seconds = 0;
      clearInterval(this.intervalId);
      return;
    }

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    this.seconds = Math.floor(
      (distance % (1000 * 60)) / 1000
    );
  }

  format(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }


}
