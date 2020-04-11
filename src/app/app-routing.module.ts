import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { IntroComponent } from './components/intro/intro.component';
import { YieldingValuesComponent } from './components/examples/yielding-values/yielding-values.component';
import { IteratingComponent } from './components/examples/iterating/iterating.component';
import { YieldingIterablesComponent } from './components/examples/yielding-iterables/yielding-iterables.component';
import { InternalStateComponent } from './components/examples/internal-state/internal-state.component';
import { ObserversComponent } from './components/examples/observers/observers.component';
import { ThrowReturnComponent } from './components/examples/throw-return/throw-return.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'examples/1', component: YieldingValuesComponent },
  { path: 'examples/2', component: IteratingComponent },
  { path: 'examples/3', component: YieldingIterablesComponent },
  { path: 'examples/4', component: ThrowReturnComponent },
  { path: 'examples/5', component: InternalStateComponent },
  { path: 'examples/6', component: ObserversComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
