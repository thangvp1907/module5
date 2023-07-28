import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstNumber = 0;
  secondNumber = 0;
  resultNumber: any;


  constructor() {
  }

  ngOnInit(): void {
  }

  calculation(option: string): any {
    switch (option) {
      case 'add':
        return this.resultNumber = Number(this.firstNumber) + Number(this.secondNumber);
        break;
      case 'sub':
        return this.resultNumber = Number(this.firstNumber) - Number(this.secondNumber);
        break;
      case 'mul':
        return this.resultNumber = Number(this.firstNumber) * Number(this.secondNumber);
        break;
      case 'div':
        if (this.secondNumber === 0) {
          return this.resultNumber = 'Phép Tính Không chia cho 0 !!!';
        }
        return this.resultNumber = Number(this.firstNumber) / Number(this.secondNumber);
        break;
    }
  }

}
