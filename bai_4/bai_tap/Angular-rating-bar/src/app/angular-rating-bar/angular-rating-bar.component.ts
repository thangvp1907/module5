import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service/service.service";

@Component({
  selector: 'app-angular-rating-bar',
  templateUrl: './angular-rating-bar.component.html',
  styleUrls: ['./angular-rating-bar.component.css']
})
export class AngularRatingBarComponent implements OnInit {

  currentRating: number = 0 ;

  constructor(private service: ServiceService ) { }

  ngOnInit(): void {
  this.currentRating = this.service.getRating();
  }

  onRatingChange(rating: number): void {
    this.currentRating = rating;
    this.service.setRating(rating);
  }

}
