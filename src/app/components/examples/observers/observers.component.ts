import { Component, OnInit } from '@angular/core';
import { StepService } from '../../../services/step-service.service';

@Component({
  selector: 'app-observers',
  templateUrl: './observers.component.html',
})
export class ObserversComponent implements OnInit {
  step = 0;
  stepCount = 8;
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
