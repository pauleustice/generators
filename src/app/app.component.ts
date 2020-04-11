import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  slide: number;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.url.replace('/', '');
        const route = routes.find(r => r.path === url);
        this.slide = routes.indexOf(route);
      }
    });
  }

  get prevSlide() {
    return this.slide > 0 ? routes[this.slide - 1] : null;
  }

  get nextSlide() {
    return this.slide < routes.length ? routes[this.slide + 1] : null;
  }
}
