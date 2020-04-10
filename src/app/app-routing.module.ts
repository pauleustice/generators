import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { IntroComponent } from './components/intro/intro.component';
import { Example1Component } from './components/examples/example1/example1.component';
import { Example2Component } from './components/examples/example2/example2.component';
import { Example3Component } from './components/examples/example3/example3.component';
import { Example4Component } from './components/examples/example4/example4.component';
import { Example5Component } from './components/examples/example5/example5.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'examples/1', component: Example1Component },
  { path: 'examples/2', component: Example2Component },
  { path: 'examples/3', component: Example3Component },
  { path: 'examples/4', component: Example4Component },
  { path: 'examples/5', component: Example5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
