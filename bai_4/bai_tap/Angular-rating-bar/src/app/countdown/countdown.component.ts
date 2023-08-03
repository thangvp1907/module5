import { Component, OnInit } from '@angular/core';
import {CountdownService} from "../serviceCountdown/countdown.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  remainingTime: number = 0;

  private countdownSubscription: Subscription;

  constructor(private countdownService: CountdownService) { }

  ngOnInit(): void {
    this.countdownSubscription = this.countdownService.getRemainingTime().subscribe((time) => {
      this.remainingTime = time;
    });
  }

  ngOnDestroy(): void {
    this.countdownSubscription.unsubscribe();
  }

  startTimer(duration: number): void {
    this.countdownService.startCountdown(duration);
  }

  stopTimer(): void {
    this.countdownService.stopCountdown();
  }

}
