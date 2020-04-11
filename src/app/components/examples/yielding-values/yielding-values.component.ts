import { Component, OnInit } from '@angular/core';
import { StepService } from '../../../services/step-service.service';

@Component({
  selector: 'app-yielding-values',
  templateUrl: './yielding-values.component.html',
})
export class YieldingValuesComponent implements OnInit {
  step = 0;
  stepCount = 7;
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
  }

}
