import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { IntroComponent } from './components/intro/intro.component';
import { YieldingValuesComponent } from './components/examples/yielding-values/yielding-values.component';
import { IteratingComponent } from './components/examples/iterating/iterating.component';
import { YieldingIterablesComponent } from './components/examples/yielding-iterables/yielding-iterables.component';
import { InternalStateComponent } from './components/examples/internal-state/internal-state.component';
import { ObserversComponent } from './components/examples/observers/observers.component';
import { ThrowReturnComponent } from './components/examples/throw-return/throw-return.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { IterablesComponent } from './components/iterables/iterables.component';


export const routes: Routes = [
  { path: '', component: WelcomeComponent, data: { title: 'Welcome' } },
  { path: 'iterables', component: IterablesComponent, data: { title: 'Iterables' } },
  { path: 'generators', component: IntroComponent, data: { title: 'Generators' } },
  { path: 'examples/1', component: YieldingValuesComponent,  data: { title: 'Yielding values' } },
  { path: 'examples/2', component: IteratingComponent, data: { title: 'Iterating' } },
  { path: 'examples/3', component: YieldingIterablesComponent, data: { title: 'Yielding other iterables' } },
  { path: 'examples/4', component: ThrowReturnComponent, data: { title: 'Throwing and returning' } },
  { path: 'examples/5', component: InternalStateComponent, data: { title: 'Internal state' } },
  { path: 'examples/6', component: ObserversComponent, data: { title: 'Generators as observers' } },
  { path: 'thanks', component: ThanksComponent, data: { title: 'End' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
