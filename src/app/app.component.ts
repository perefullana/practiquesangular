import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor() {}
  title = 'Joan Joanet';
  public field1: number;
  public field2: number;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
