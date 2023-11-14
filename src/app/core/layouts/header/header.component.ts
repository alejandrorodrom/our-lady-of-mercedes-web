import { Component, OnDestroy, OnInit } from '@angular/core';
import { MODULES_ROUTES } from "../../routes/modules.routes";
import {
  PEDAGOGICAL_INNOVATION_PAGES,
  PEDAGOGICAL_INNOVATION_ROUTES
} from "../../routes/pedagogical-innovation.routes";
import { NavigationEnd, Router } from "@angular/router";
import { filter, Subscription } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  protected readonly MODULES_ROUTES = MODULES_ROUTES;

  isPedagogicalInnovation =  false;

  readonly pedagogicalInnovation: Array<{ name: string; route: string }> = [
    {
      name: 'Presentación',
      route: PEDAGOGICAL_INNOVATION_ROUTES.PRESENTATION
    },
    {
      name: 'Sesiones Filosóficas',
      route: PEDAGOGICAL_INNOVATION_ROUTES.PHILOSOPHICAL_SESSIONS
    },
    {
      name: 'Estrategias Reflexivas',
      route: PEDAGOGICAL_INNOVATION_ROUTES.REFLECTIVE_STRATEGIES
    },
    {
      name: 'Talleres Filosóficos',
      route: PEDAGOGICAL_INNOVATION_ROUTES.PHILOSOPHICAL_WORKSHOPS
    },
    {
      name: 'Actualidad Filosófica',
      route: PEDAGOGICAL_INNOVATION_ROUTES.CURRENT_PHILOSOPHICAL
    }
  ]

  private subscription = new Subscription();

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.listenPedagogicalInnovationRoute();
  }

  listenPedagogicalInnovationRoute(): void {
    this.subscription.add(
      this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd)
        )
        .subscribe(value => {
          this.isPedagogicalInnovation = (value as NavigationEnd)
            .urlAfterRedirects.includes(MODULES_ROUTES.PEDAGOGICAL_INNOVATION)
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected readonly PEDAGOGICAL_INNOVATION_PAGES = PEDAGOGICAL_INNOVATION_PAGES;
  protected readonly PEDAGOGICAL_INNOVATION_ROUTES = PEDAGOGICAL_INNOVATION_ROUTES;
}
