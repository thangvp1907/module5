import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-color-app',
  templateUrl: './angular-color-app.component.html',
  styleUrls: ['./angular-color-app.component.css']
})
export class AngularColorAppComponent implements OnInit {

  color:string

  constructor() { }

  ngOnInit(): void {
  }

  color1 = {
    color: 'red',
    background: 'yellow',
    'font-size': '20px'
  };

}
