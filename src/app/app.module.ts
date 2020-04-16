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
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ThrowReturnComponent } from './components/examples/throw-return/throw-return.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { IterablesComponent } from './components/iterables/iterables.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    IntroComponent,
    YieldingValuesComponent,
    ConsoleComponent,
    IteratingComponent,
    YieldingIterablesComponent,
    InternalStateComponent,
    ObserversComponent,
    ThrowReturnComponent,
    ThanksComponent,
    IterablesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
