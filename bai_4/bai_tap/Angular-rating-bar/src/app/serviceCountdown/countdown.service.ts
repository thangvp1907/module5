import { Injectable } from '@angular/core';
import {BehaviorSubject, interval, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountdownService {


  private countdownSource = new BehaviorSubject<number>(0);


  private readonly countdown$: Observable<number>;

  constructor() {
    this.countdown$ = this.countdownSource.asObservable();
  }

  startCountdown(duration: number): void {
    let timer = duration;
    const interval$ = interval(1000);
    interval$.subscribe(() => {
      if (timer > 0) {
        timer--;
        this.countdownSource.next(timer);
      }
    });
  }

  stopCountdown(): void {
    this.countdownSource.next(0);
  }

  getRemainingTime(): Observable<number> {
    return this.countdown$;
  }
}
