import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { Example1Component } from './components/examples/example1/example1.component';
import { ConsoleComponent } from './components/console/console.component';
import { Example2Component } from './components/examples/example2/example2.component';
import { Example3Component } from './components/examples/example3/example3.component';
import { Example4Component } from './components/examples/example4/example4.component';
import { Example5Component } from './components/examples/example5/example5.component';
import { LandingComponent } from './components/landing/landing.component';
import { ThrowReturnComponent } from './components/examples/throw-return/throw-return.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    IntroComponent,
    Example1Component,
    ConsoleComponent,
    Example2Component,
    Example3Component,
    Example4Component,
    Example5Component,
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
