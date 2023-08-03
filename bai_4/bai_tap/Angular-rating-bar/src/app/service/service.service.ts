import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private rating: number = 0;


  getRating(): number{
    return this.rating;
  }

  setRating(rating: number) {
    this.rating = rating;
  }

  constructor() { }
}
