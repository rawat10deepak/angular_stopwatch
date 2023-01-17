import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  minutes = 1;
  seconds = 0;
  intervalTimer;
  isTimerStopped = false;

  constructor() {}

  onStart() {
    this.isTimerStopped = false;
    this.intervalTimer = setInterval(() => {
      if (!this.isTimerStopped) {
        this.seconds++;
        if (this.seconds > 59) {
          this.minutes++;
          this.seconds = 0;
        }
      }
    }, 1000);
  }

  onReset() {
    clearInterval(this.intervalTimer);
    this.minutes = 0;
    this.seconds = 0;
  }

  onStop() {
    clearInterval(this.intervalTimer);
    this.isTimerStopped = true;
  }

  getDoubleDigit(number) {
    return ('0' + number).slice(-2);
  }

  plusFive() {
    let newSec = this.seconds + 5;
    if (newSec < 60) {
      this.seconds += 5;
    } else {
      this.minutes++;
      this.seconds = newSec - 60;
    }
  }

  minusFive() {
    let newSec = this.seconds - 5;
    if (newSec < 0 && this.minutes === 0) {
      this.minutes = 0;
      this.seconds = 0;
    } else if (newSec > 0) {
      this.seconds -= 5;
    } else if (newSec < 0) {
      this.minutes--;
      this.seconds = 60 + newSec;
    } else {
      this.minutes--;
      this.seconds = 60 - newSec;
      console.log(newSec);
    }
  }
}
