import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'platzi-store';
  constructor() { }

  ngOnInit(): void {
  }

  items = ['Nicolas', 'Cristhian'];
  
  power = 10;

  public addName(): void {
    this.items.push('nuevo-item');
  }

  public deleteName(index: number): void {
    this.items.splice(index, 1);
  }

}
