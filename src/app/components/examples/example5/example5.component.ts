import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example5',
  templateUrl: './example5.component.html',
  styleUrls: ['./example5.component.scss']
})
export class Example5Component implements OnInit {
  step = 0;

  constructor() { }

  ngOnInit(): void {
  }

  updateStep(event) {
    this.step = Number(event.target.value);
  }

}
