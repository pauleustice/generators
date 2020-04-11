import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { YieldingValuesComponent } from './components/examples/yielding-values/yielding-values.component';
import { ConsoleComponent } from './components/console/console.component';
import { IteratingComponent } from './components/examples/iterating/iterating.component';
import { YieldingIterablesComponent } from './components/examples/yielding-iterables/yielding-iterables.component';
import { InternalStateComponent } from './components/examples/internal-state/internal-state.component';
import { ObserversComponent } from './components/examples/observers/observers.component';
import { LandingComponent } from './components/landing/landing.component';
import { ThrowReturnComponent } from './components/examples/throw-return/throw-return.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    IntroComponent,
    YieldingValuesComponent,
    ConsoleComponent,
    IteratingComponent,
    YieldingIterablesComponent,
    InternalStateComponent,
    ObserversComponent,
    ThrowReturnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
