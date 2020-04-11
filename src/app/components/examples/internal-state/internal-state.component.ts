import { Component, OnInit } from '@angular/core';
import { StepService } from '../../../services/step-service.service';

@Component({
  selector: 'app-internal-state',
  templateUrl: './internal-state.component.html',
})
export class InternalStateComponent implements OnInit {
  i = 0;
  step = 0;
  stepCount = 19;
  stepper = this.stepService.stepGenerator(this.stepCount);

  constructor(
    private stepService: StepService
  ) { }

  ngOnInit(): void {
    this.stepper.next();
  }

  updateStep(direction: number) {
    const { value: step = 0 } = this.stepper.next(direction);
    this.step = step;

    if (this.step < 8) {
      this.i = 0;
    } else if (this.step < 13) {
      this.i = 1;
    } else if (this.step < 18) {
      this.i = 2;
    } else {
      this.i = 3;
    }
  }
}
