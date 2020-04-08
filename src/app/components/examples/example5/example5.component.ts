import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example5',
  templateUrl: './example5.component.html',
  styleUrls: ['./example5.component.scss']
})
export class Example5Component implements OnInit {
  step = 0;
  stepCount = 4;
  stepper = this.stepGenerator(this.stepCount);

  constructor() { }

  ngOnInit(): void {
    this.stepper.next();
  }

  *stepGenerator(stepCount) {
    let i = 0;

    while (i < stepCount + 1) {
      const input = yield i;

      switch (input) {
        case -1: {
          if (i > 0) {
            i--;
          }
          break;
        }
        case 1: {
          if (i < stepCount) {
            i++;
          }
          break;
        }
      }
    }
  }

  updateStep(direction: number) {
    const { value: step = 0 } = this.stepper.next(direction);
    this.step = step;
  }

}
