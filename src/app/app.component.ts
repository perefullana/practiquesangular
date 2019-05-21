import { Component, OnInit } from '@angular/core';
import { Calculator } from './Calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public field1: number;
  public field2: number;
  public result: any;
  public calc: Calculator;
  constructor() {
    this.calc = new Calculator();
  }
  sum() {
  this.result = this.calc.sum(this.field1, this.field2);
  }
  substract() {
  this.result = this.calc.substract(this.field1, this.field2);
  }
  multiply() {
  this.result = this.calc.multiply(this.field1, this.field2);
  }
  divide() {
  this.result = this.calc.divide(this.field1, this.field2);
  }
  insultarjulio() {
    this.result = this.calc.insultarjulio('hola');
  }
  ngOnInit(): void {
  }
}
