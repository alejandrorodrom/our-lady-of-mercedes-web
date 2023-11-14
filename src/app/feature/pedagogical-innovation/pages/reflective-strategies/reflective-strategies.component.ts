import { Component } from '@angular/core';
import { REFLECTIVE_STRATEGIES_PAGES } from "../../../../core/routes/pedagogical-innovation.routes";

@Component({
  selector: 'app-reflective-strategies',
  templateUrl: './reflective-strategies.component.html',
  styleUrls: ['./reflective-strategies.component.scss']
})
export class ReflectiveStrategiesComponent {
  readonly reflectiveStrategies: Array<{ name: string; route: string }> = [
    {
      name: 'Estrategias filosóficas',
      route: REFLECTIVE_STRATEGIES_PAGES.PHILOSOPHICAL_STRATEGIES
    },
    {
      name: 'Productos elaborados',
      route: REFLECTIVE_STRATEGIES_PAGES.PROCESSED_PRODUCTS
    }
  ]
}
